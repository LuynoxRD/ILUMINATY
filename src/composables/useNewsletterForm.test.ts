import { createApp } from 'vue'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { useNewsletterForm } from './useNewsletterForm'
import type { NewsletterBlock } from '@/types/content'

vi.mock('@/services/forms', () => ({
  subscribeToNewsletter: vi.fn(),
}))

vi.mock('@/lib/formFeedback', () => ({
  normalizeNewsletterBlock: vi.fn(copy => ({
    invalidMessage: 'Email inválido',
    successMessage: '¡Gracias!',
    errorMessage: 'Error al enviar',
    ...copy,
  })),
  resolveSubmissionMessage: vi.fn((_result, successMsg) => successMsg),
}))

import { subscribeToNewsletter } from '@/services/forms'

const subscribeMock = vi.mocked(subscribeToNewsletter)

// Helper: monta el composable dentro de un contexto de componente Vue real
// (necesario para que onUnmounted funcione correctamente)
function withSetup(composable: () => unknown) {
  let result: ReturnType<typeof useNewsletterForm>
  const app = createApp({
    setup() {
      result = composable() as ReturnType<typeof useNewsletterForm>
      return () => {}
    },
  })
  app.mount(document.createElement('div'))
  return [result!, app] as const
}

const copy = {
  invalidMessage: 'Email inválido',
  successMessage: '¡Gracias!',
  errorMessage: 'Error al enviar',
} as unknown as NewsletterBlock

describe('useNewsletterForm', () => {
  beforeEach(() => {
    subscribeMock.mockReset()
  })

  describe('estado inicial', () => {
    it('inicializa con email vacío, status idle y sin mensaje', () => {
      const [form, app] = withSetup(() => useNewsletterForm('test'))
      expect(form.email).toBe('')
      expect(form.submitStatus).toBe('idle')
      expect(form.feedbackMessage).toBe('')
      app.unmount()
    })
  })

  describe('validación de email', () => {
    it('establece status error y mensaje cuando el email es inválido', async () => {
      const [form, app] = withSetup(() => useNewsletterForm('test'))
      form.email = 'no-es-un-email'
      await form.submit(copy)
      expect(form.submitStatus).toBe('error')
      expect(form.feedbackMessage).toBe('Email inválido')
      app.unmount()
    })

    it('no llama a subscribeToNewsletter con email inválido', async () => {
      const [form, app] = withSetup(() => useNewsletterForm('test'))
      form.email = 'invalido'
      await form.submit(copy)
      expect(subscribeMock).not.toHaveBeenCalled()
      app.unmount()
    })
  })

  describe('submit exitoso', () => {
    it('llama subscribeToNewsletter con el email normalizado', async () => {
      subscribeMock.mockResolvedValue(undefined as never)
      const [form, app] = withSetup(() => useNewsletterForm('newsletter'))
      form.email = '  TEST@EJEMPLO.COM  '
      await form.submit(copy)
      await flushPromises()
      expect(subscribeMock).toHaveBeenCalledWith({ email: 'TEST@EJEMPLO.COM', source: 'newsletter' })
      app.unmount()
    })

    it('establece status success y limpia el email', async () => {
      subscribeMock.mockResolvedValue(undefined as never)
      const [form, app] = withSetup(() => useNewsletterForm('test'))
      form.email = 'usuario@ejemplo.com'
      await form.submit(copy)
      await flushPromises()
      expect(form.submitStatus).toBe('success')
      expect(form.email).toBe('')
      app.unmount()
    })

    it('establece el mensaje de éxito', async () => {
      subscribeMock.mockResolvedValue(undefined as never)
      const [form, app] = withSetup(() => useNewsletterForm('test'))
      form.email = 'usuario@ejemplo.com'
      await form.submit(copy)
      await flushPromises()
      expect(form.feedbackMessage).toBe('¡Gracias!')
      app.unmount()
    })
  })

  describe('submit con error de API', () => {
    it('establece status error y mensaje de error', async () => {
      subscribeMock.mockRejectedValue(new Error('network error'))
      const [form, app] = withSetup(() => useNewsletterForm('test'))
      form.email = 'usuario@ejemplo.com'
      await form.submit(copy)
      await flushPromises()
      expect(form.submitStatus).toBe('error')
      expect(form.feedbackMessage).toBe('Error al enviar')
      app.unmount()
    })
  })

  describe('protección contra doble submit', () => {
    it('ignora llamadas a submit mientras status es loading', async () => {
      let resolveSubscribe!: () => void
      subscribeMock.mockImplementation(() => new Promise(r => { resolveSubscribe = r as unknown as () => void }))

      const [form, app] = withSetup(() => useNewsletterForm('test'))
      form.email = 'usuario@ejemplo.com'

      form.submit(copy)
      form.submit(copy)
      form.submit(copy)

      expect(subscribeMock).toHaveBeenCalledTimes(1)
      resolveSubscribe()
      app.unmount()
    })
  })

  describe('clearFeedback — timer', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('limpia el mensaje y resetea status al cumplirse el delay', async () => {
      subscribeMock.mockResolvedValue(undefined as never)
      const [form, app] = withSetup(() => useNewsletterForm('test'))
      form.email = 'usuario@ejemplo.com'
      form.submit(copy)
      await flushPromises()

      expect(form.feedbackMessage).toBe('¡Gracias!')
      vi.advanceTimersByTime(4000)
      expect(form.feedbackMessage).toBe('')
      expect(form.submitStatus).toBe('idle')
      app.unmount()
    })

    it('un segundo clearFeedback cancela el timer anterior (sin doble disparo)', async () => {
      subscribeMock.mockResolvedValue(undefined as never)
      const [form, app] = withSetup(() => useNewsletterForm('test'))
      form.email = 'usuario@ejemplo.com'

      // Primer submit inicia timer de 4 s
      form.submit(copy)
      await flushPromises()
      vi.advanceTimersByTime(2000)

      // Error inicia un nuevo timer de 3 s — debe cancelar el anterior
      form.email = 'bad'
      form.submit(copy)

      // El timer original de 4 s no debe dispararse (ya cancelado)
      vi.advanceTimersByTime(2001)
      expect(form.feedbackMessage).toBe('Email inválido') // no fue borrado por el timer viejo

      app.unmount()
    })

    it('cancela el timer al desmontar el componente (regresión del bug)', async () => {
      const [form, app] = withSetup(() => useNewsletterForm('test'))

      // email inválido → clearFeedback(3000)
      form.email = 'no-valido'
      form.submit(copy)

      expect(form.feedbackMessage).toBe('Email inválido')
      expect(form.submitStatus).toBe('error')

      // Desmontamos ANTES de que el timer dispare
      app.unmount()

      // Avanzamos el tiempo: sin onUnmounted el timer mutaría los refs
      vi.advanceTimersByTime(5000)

      // El timer fue cancelado — los refs no deben haber cambiado
      expect(form.feedbackMessage).toBe('Email inválido')
      expect(form.submitStatus).toBe('error')
    })
  })
})

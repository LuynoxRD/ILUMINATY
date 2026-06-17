import { describe, it, expect } from 'vitest'
import { readPlainText, normalizeNewsletterBlock, resolveSubmissionMessage } from './formFeedback'

describe('readPlainText', () => {
  it('retorna el valor si es string no vacío', () => {
    expect(readPlainText('Hola')).toBe('Hola')
  })

  it('retorna fallback para string vacío', () => {
    expect(readPlainText('', 'default')).toBe('default')
  })

  it('retorna fallback para string de solo espacios', () => {
    expect(readPlainText('   ', 'default')).toBe('default')
  })

  it('retorna fallback para null', () => {
    expect(readPlainText(null, 'default')).toBe('default')
  })

  it('retorna fallback para undefined', () => {
    expect(readPlainText(undefined, 'default')).toBe('default')
  })

  it('retorna fallback para número', () => {
    expect(readPlainText(42, 'default')).toBe('default')
  })

  it('retorna string vacío como fallback por defecto', () => {
    expect(readPlainText(null)).toBe('')
  })
})

describe('normalizeNewsletterBlock', () => {
  it('usa los valores proporcionados cuando son válidos', () => {
    const block = {
      title: 'Mi título',
      buttonLabel: 'Unirse',
    }
    const result = normalizeNewsletterBlock(block)
    expect(result.title).toBe('Mi título')
    expect(result.buttonLabel).toBe('Unirse')
  })

  it('aplica fallbacks para campos faltantes', () => {
    const result = normalizeNewsletterBlock({})
    expect(result.title).toBe('Suscribete')
    expect(result.buttonLabel).toBe('Suscribirse')
    expect(result.inputPlaceholder).toBe('Tu email')
  })

  it('aplica todos los fallbacks con input null', () => {
    const result = normalizeNewsletterBlock(null)
    expect(result.title).toBe('Suscribete')
    expect(result.invalidMessage).toBe('Por favor ingresa un email valido.')
    expect(result.successMessage).toBe('Suscripcion activada correctamente.')
    expect(result.errorMessage).toBe('No pudimos procesar tu solicitud.')
  })

  it('retorna un objeto con todas las claves requeridas', () => {
    const result = normalizeNewsletterBlock({})
    const keys = ['title', 'description', 'inputPlaceholder', 'buttonLabel', 'invalidMessage', 'successMessage', 'errorMessage']
    keys.forEach(key => expect(result).toHaveProperty(key))
  })
})

describe('resolveSubmissionMessage', () => {
  it('retorna el mensaje del resultado si existe', () => {
    const result = resolveSubmissionMessage({ ok: true, message: 'Enviado' }, 'fallback')
    expect(result).toBe('Enviado')
  })

  it('retorna el fallback si el resultado es undefined', () => {
    expect(resolveSubmissionMessage(undefined, 'fallback')).toBe('fallback')
  })

  it('retorna el fallback si el mensaje está vacío', () => {
    expect(resolveSubmissionMessage({ ok: true, message: '' }, 'fallback')).toBe('fallback')
  })
})

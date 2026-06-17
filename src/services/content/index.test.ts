import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { ContentAdapter } from '@/types/content'

const stub = (name: string) => ({ _name: name }) as unknown as ContentAdapter

// Helper: registra los mocks con vi.doMock (no hoisted) y devuelve el módulo fresco.
// Llamar desde dentro de cada test DESPUÉS de vi.resetModules() en beforeEach.
const setup = async (opts: {
  contentSource: string
  isSanityConfigured?: boolean
  createSanity?: () => Promise<ContentAdapter> | ContentAdapter
}) => {
  const localAdapter = stub('local')
  const createSanityMock = vi.fn(opts.createSanity ?? (() => stub('sanity')))

  vi.doMock('@/config/content', () => ({
    contentSource: opts.contentSource,
    isSanityConfigured: opts.isSanityConfigured ?? false,
  }))
  vi.doMock('@/services/content/localAdapter', () => ({
    localContentAdapter: localAdapter,
  }))
  vi.doMock('@/services/content/sanityAdapter', () => ({
    createSanityContentAdapter: createSanityMock,
  }))

  const mod = await import('@/services/content/index')
  return { ...mod, localAdapter, createSanityMock }
}

describe('loadContent', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  describe('source local', () => {
    it('devuelve localContentAdapter directamente', async () => {
      const { loadContent, localAdapter } = await setup({ contentSource: 'local' })
      expect(await loadContent()).toBe(localAdapter)
    })

    it('no llama a createSanityContentAdapter', async () => {
      const { loadContent, createSanityMock } = await setup({ contentSource: 'local' })
      await loadContent()
      expect(createSanityMock).not.toHaveBeenCalled()
    })
  })

  describe('source sanity', () => {
    it('devuelve el adapter de Sanity cuando las credenciales están configuradas', async () => {
      const sanityAdapter = stub('sanity')
      const { loadContent } = await setup({
        contentSource: 'sanity',
        isSanityConfigured: true,
        createSanity: () => sanityAdapter,
      })
      expect(await loadContent()).toBe(sanityAdapter)
    })

    it('lanza error cuando las credenciales están ausentes', async () => {
      const { loadContent } = await setup({ contentSource: 'sanity', isSanityConfigured: false })
      await expect(loadContent()).rejects.toThrow('Sanity credentials are missing')
    })

    it('propaga errores de red de createSanityContentAdapter', async () => {
      const { loadContent } = await setup({
        contentSource: 'sanity',
        isSanityConfigured: true,
        createSanity: () => Promise.reject(new Error('network error')),
      })
      await expect(loadContent()).rejects.toThrow('network error')
    })
  })

  describe('memoización en éxito', () => {
    it('llamadas consecutivas no reinicializan el adapter', async () => {
      const { loadContent, createSanityMock } = await setup({
        contentSource: 'sanity',
        isSanityConfigured: true,
      })
      await loadContent()
      await loadContent()
      expect(createSanityMock).toHaveBeenCalledTimes(1)
    })

    it('llamadas concurrentes comparten la misma promesa', async () => {
      const sanityAdapter = stub('sanity')
      const createSanity = vi.fn(async () => {
        await Promise.resolve()
        return sanityAdapter
      })
      const { loadContent } = await setup({
        contentSource: 'sanity',
        isSanityConfigured: true,
        createSanity,
      })

      const [r1, r2, r3] = await Promise.all([loadContent(), loadContent(), loadContent()])
      expect(r1).toBe(sanityAdapter)
      expect(r2).toBe(sanityAdapter)
      expect(r3).toBe(sanityAdapter)
      expect(createSanity).toHaveBeenCalledTimes(1)
    })

    it('getContent() refleja el adapter resuelto', async () => {
      const sanityAdapter = stub('sanity')
      const { loadContent, getContent } = await setup({
        contentSource: 'sanity',
        isSanityConfigured: true,
        createSanity: () => sanityAdapter,
      })
      await loadContent()
      expect(getContent()).toBe(sanityAdapter)
    })
  })

  describe('reset de contentLoadPromise en fallo (regresión del bug)', () => {
    it('permite reintentar cuando createSanityContentAdapter falla la primera vez', async () => {
      const sanityAdapter = stub('sanity')
      const createSanity = vi.fn()
        .mockRejectedValueOnce(new Error('transient error'))
        .mockResolvedValueOnce(sanityAdapter)

      const { loadContent } = await setup({
        contentSource: 'sanity',
        isSanityConfigured: true,
        createSanity,
      })

      // Primera llamada lanza
      await expect(loadContent()).rejects.toThrow('transient error')

      // Segunda llamada reintenta y tiene éxito (contentLoadPromise fue limpiado)
      const result = await loadContent()
      expect(result).toBe(sanityAdapter)
      expect(createSanity).toHaveBeenCalledTimes(2)
    })

    it('no reutiliza la promesa rechazada en llamadas posteriores al fallo', async () => {
      const createSanity = vi.fn()
        .mockRejectedValueOnce(new Error('first fail'))
        .mockRejectedValueOnce(new Error('second fail'))

      const { loadContent } = await setup({
        contentSource: 'sanity',
        isSanityConfigured: true,
        createSanity,
      })

      await expect(loadContent()).rejects.toThrow('first fail')
      // Sin el fix, esta segunda llamada hubiera relanzado 'first fail'
      // desde la promesa cacheada, y createSanity solo se habría llamado 1 vez.
      await expect(loadContent()).rejects.toThrow('second fail')
      expect(createSanity).toHaveBeenCalledTimes(2)
    })
  })
})

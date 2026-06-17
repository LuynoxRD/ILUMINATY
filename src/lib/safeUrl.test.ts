import { describe, it, expect } from 'vitest'
import { toSafeHref } from './safeUrl'

describe('toSafeHref', () => {
  describe('URLs relativas seguras', () => {
    it('permite paths que empiezan con /', () => {
      expect(toSafeHref('/artistas')).toBe('/artistas')
      expect(toSafeHref('/blog/mi-post')).toBe('/blog/mi-post')
    })

    it('permite anchors que empiezan con #', () => {
      expect(toSafeHref('#contacto')).toBe('#contacto')
    })
  })

  describe('URLs absolutas seguras', () => {
    it('permite URLs http', () => {
      expect(toSafeHref('http://ejemplo.com')).toBe('http://ejemplo.com')
    })

    it('permite URLs https', () => {
      expect(toSafeHref('https://ejemplo.com/ruta')).toBe('https://ejemplo.com/ruta')
    })

    it('permite mailto:', () => {
      expect(toSafeHref('mailto:contacto@iluminaty.com')).toBe('mailto:contacto@iluminaty.com')
    })

    it('permite tel:', () => {
      expect(toSafeHref('tel:+18001234567')).toBe('tel:+18001234567')
    })
  })

  describe('URLs peligrosas bloqueadas', () => {
    it('bloquea javascript:', () => {
      expect(toSafeHref('javascript:alert(1)')).toBeUndefined()
    })

    it('bloquea javascript: con espacios', () => {
      expect(toSafeHref('  javascript:alert(1)')).toBeUndefined()
    })

    it('bloquea data: URLs', () => {
      expect(toSafeHref('data:text/html,<script>alert(1)</script>')).toBeUndefined()
    })

    it('bloquea vbscript:', () => {
      expect(toSafeHref('vbscript:MsgBox(1)')).toBeUndefined()
    })
  })

  describe('valores vacíos y nulos', () => {
    it('retorna undefined para null', () => {
      expect(toSafeHref(null)).toBeUndefined()
    })

    it('retorna undefined para undefined', () => {
      expect(toSafeHref(undefined)).toBeUndefined()
    })

    it('retorna undefined para string vacío', () => {
      expect(toSafeHref('')).toBeUndefined()
    })

    it('retorna undefined para solo espacios', () => {
      expect(toSafeHref('   ')).toBeUndefined()
    })
  })

  describe('URLs malformadas', () => {
    it('retorna undefined para texto sin protocolo ni prefijo seguro', () => {
      expect(toSafeHref('ejemplo.com')).toBeUndefined()
    })
  })
})

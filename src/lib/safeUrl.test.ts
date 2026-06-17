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

    it('bloquea javascript: con espacios al inicio', () => {
      expect(toSafeHref('  javascript:alert(1)')).toBeUndefined()
    })

    it('bloquea data: URLs', () => {
      expect(toSafeHref('data:text/html,<script>alert(1)</script>')).toBeUndefined()
    })

    it('bloquea vbscript:', () => {
      expect(toSafeHref('vbscript:MsgBox(1)')).toBeUndefined()
    })
  })

  describe('Intentos de bypass — javascript:', () => {
    it('bloquea JAVASCRIPT: en mayúsculas', () => {
      expect(toSafeHref('JAVASCRIPT:alert(1)')).toBeUndefined()
    })

    it('bloquea JavaScript: en mixed-case', () => {
      expect(toSafeHref('Javascript:alert(1)')).toBeUndefined()
    })

    it('bloquea jav\\tascript: con tabulador incrustado en el scheme', () => {
      // El parser WHATWG URL elimina HT/LF/CR antes de parsear
      expect(toSafeHref('jav\tascript:alert(1)')).toBeUndefined()
    })

    it('bloquea jav\\nascript: con LF incrustado en el scheme', () => {
      expect(toSafeHref('jav\nascript:alert(1)')).toBeUndefined()
    })

    it('bloquea jav\\rascript: con CR incrustado en el scheme', () => {
      expect(toSafeHref('jav\rascript:alert(1)')).toBeUndefined()
    })

    it('bloquea javascript: con null byte al inicio', () => {
      expect(toSafeHref('\x00javascript:alert(1)')).toBeUndefined()
    })

    it('bloquea javascript%3Aalert(1) — colon URL-encoded', () => {
      expect(toSafeHref('javascript%3Aalert(1)')).toBeUndefined()
    })

    it('bloquea %6aavascript:alert(1) — primera letra URL-encoded', () => {
      expect(toSafeHref('%6aavascript:alert(1)')).toBeUndefined()
    })
  })

  describe('Intentos de bypass — data:', () => {
    it('bloquea DATA: en mayúsculas', () => {
      expect(toSafeHref('DATA:text/html,<h1>xss</h1>')).toBeUndefined()
    })

    it('bloquea data: con payload base64', () => {
      // data:text/html;base64,<base64 de <script>alert(1)</script>>
      expect(toSafeHref('data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==')).toBeUndefined()
    })

    it('bloquea data: SVG con script', () => {
      expect(toSafeHref('data:image/svg+xml,<svg onload=alert(1)>')).toBeUndefined()
    })
  })

  describe('Intentos de bypass — vbscript:', () => {
    it('bloquea VBSCRIPT: en mayúsculas', () => {
      expect(toSafeHref('VBSCRIPT:MsgBox(1)')).toBeUndefined()
    })

    it('bloquea VbScript: en mixed-case', () => {
      expect(toSafeHref('VbScript:MsgBox(1)')).toBeUndefined()
    })
  })

  describe('Intentos de bypass — URLs protocol-relative', () => {
    it('bloquea //evil.com — open redirect via protocol-relative URL', () => {
      expect(toSafeHref('//evil.com')).toBeUndefined()
    })

    it('bloquea //evil.com/path', () => {
      expect(toSafeHref('//evil.com/path')).toBeUndefined()
    })

    it('bloquea ///triple-slash', () => {
      expect(toSafeHref('///triple-slash')).toBeUndefined()
    })

    it('sigue permitiendo paths que empiezan con / (no doble slash)', () => {
      expect(toSafeHref('/artistas')).toBe('/artistas')
      expect(toSafeHref('/blog/mi-post')).toBe('/blog/mi-post')
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

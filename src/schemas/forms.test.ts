import { describe, it, expect } from 'vitest'
import { validateContactFormPayload, validateNewsletterPayload } from './forms'
import type { ContactFormPayload, NewsletterPayload } from '@/types/forms'

const validContact: ContactFormPayload = {
  name: 'Luis García',
  email: 'luis@ejemplo.com',
  subject: 'Colaboración',
  message: 'Me interesa colaborar con el sello.',
  privacy: true,
}

describe('validateContactFormPayload', () => {
  it('valida un payload correcto sin lanzar error', () => {
    expect(() => validateContactFormPayload(validContact)).not.toThrow()
  })

  it('retorna el payload validado', () => {
    const result = validateContactFormPayload(validContact)
    expect(result.name).toBe('Luis García')
    expect(result.email).toBe('luis@ejemplo.com')
  })

  it('hace trim de espacios en los campos', () => {
    const payload = { ...validContact, name: '  Luis  ', email: '  luis@ejemplo.com  ' }
    const result = validateContactFormPayload(payload)
    expect(result.name).toBe('Luis')
    expect(result.email).toBe('luis@ejemplo.com')
  })

  it('lanza error si el email no es válido', () => {
    const payload = { ...validContact, email: 'no-es-email' }
    expect(() => validateContactFormPayload(payload)).toThrow('Invalid contact form payload')
  })

  it('lanza error si el nombre está vacío', () => {
    const payload = { ...validContact, name: '' }
    expect(() => validateContactFormPayload(payload)).toThrow()
  })

  it('lanza error si el mensaje excede 4000 caracteres', () => {
    const payload = { ...validContact, message: 'a'.repeat(4001) }
    expect(() => validateContactFormPayload(payload)).toThrow()
  })

  it('lanza error si privacy es false', () => {
    const payload = { ...validContact, privacy: false }
    expect(() => validateContactFormPayload(payload)).toThrow()
  })

  it('acepta campos opcionales como phone y genre', () => {
    const payload = { ...validContact, phone: '+1 800 000 0000', genre: 'Reggaeton' }
    expect(() => validateContactFormPayload(payload)).not.toThrow()
  })
})

describe('validateNewsletterPayload', () => {
  const validNewsletter: NewsletterPayload = { email: 'fan@ejemplo.com' }

  it('valida un email correcto', () => {
    expect(() => validateNewsletterPayload(validNewsletter)).not.toThrow()
  })

  it('lanza error para email inválido', () => {
    expect(() => validateNewsletterPayload({ email: 'no-es-email' })).toThrow()
  })

  it('acepta source como campo opcional', () => {
    const payload = { email: 'fan@ejemplo.com', source: 'home-newsletter' }
    expect(() => validateNewsletterPayload(payload)).not.toThrow()
  })
})

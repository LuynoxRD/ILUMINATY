import { describe, it, expect } from 'vitest'
import { parseLocalDate } from './date'

describe('parseLocalDate', () => {
  it('retorna un objeto Date válido', () => {
    const result = parseLocalDate('2026-06-15')
    expect(result).toBeInstanceOf(Date)
    expect(isNaN(result.getTime())).toBe(false)
  })

  it('interpreta la fecha en hora local (no UTC)', () => {
    const result = parseLocalDate('2026-06-15')
    // Con T00:00:00 se interpreta como local: el día debe ser 15 en la TZ local
    expect(result.getDate()).toBe(15)
    expect(result.getMonth()).toBe(5) // junio = 5 (0-indexed)
    expect(result.getFullYear()).toBe(2026)
  })

  it('permite comparar fechas correctamente', () => {
    const anterior = parseLocalDate('2026-01-01')
    const posterior = parseLocalDate('2026-12-31')
    expect(anterior.getTime()).toBeLessThan(posterior.getTime())
  })

  it('maneja fechas de inicio de año', () => {
    const result = parseLocalDate('2026-01-01')
    expect(result.getFullYear()).toBe(2026)
    expect(result.getMonth()).toBe(0)
    expect(result.getDate()).toBe(1)
  })

  it('maneja fechas de fin de año', () => {
    const result = parseLocalDate('2025-12-31')
    expect(result.getFullYear()).toBe(2025)
    expect(result.getMonth()).toBe(11)
    expect(result.getDate()).toBe(31)
  })
})

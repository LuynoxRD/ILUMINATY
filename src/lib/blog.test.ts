import { describe, it, expect } from 'vitest'
import { getBlogCategoryColor } from './blog'

describe('getBlogCategoryColor', () => {
  it('retorna el color correcto para noticias', () => {
    expect(getBlogCategoryColor('noticias')).toContain('neon-lime')
  })

  it('retorna el color correcto para análisis (con tilde)', () => {
    expect(getBlogCategoryColor('Análisis')).toContain('neon-violet')
  })

  it('retorna el color correcto para análisis (sin tilde)', () => {
    expect(getBlogCategoryColor('analisis')).toContain('neon-violet')
  })

  it('retorna el color correcto para tutoriales', () => {
    expect(getBlogCategoryColor('tutoriales')).toContain('neon-cyan')
  })

  it('retorna el color correcto para entrevistas', () => {
    expect(getBlogCategoryColor('entrevistas')).toContain('neon-pink')
  })

  it('retorna el color correcto para tendencias', () => {
    expect(getBlogCategoryColor('tendencias')).toContain('neon-orange')
  })

  it('retorna el color correcto para colaboraciones', () => {
    expect(getBlogCategoryColor('colaboraciones')).toContain('neon-violet')
  })

  it('es case-insensitive', () => {
    expect(getBlogCategoryColor('NOTICIAS')).toContain('neon-lime')
    expect(getBlogCategoryColor('Tutoriales')).toContain('neon-cyan')
  })

  it('retorna clase gris para categoría desconocida', () => {
    const result = getBlogCategoryColor('categoria-inexistente')
    expect(result).toContain('bg-gray-200')
    expect(result).toContain('text-gray-700')
  })

  it('retorna clase gris para string vacío', () => {
    expect(getBlogCategoryColor('')).toContain('bg-gray-200')
  })
})

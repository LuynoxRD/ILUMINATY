const normalizeCategoryKey = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

export const getBlogCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    noticias: 'bg-neon-lime/20 text-neon-lime border border-neon-lime/30',
    analisis: 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
    tutoriales: 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30',
    entrevistas: 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30',
    tendencias: 'bg-neon-orange/20 text-neon-orange border border-neon-orange/30',
    colaboraciones: 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
  }

  return colors[normalizeCategoryKey(category)] || 'bg-gray-200 text-gray-700 border border-gray-300'
}

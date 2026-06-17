const rawSiteUrl = import.meta.env.VITE_SITE_URL
if (!rawSiteUrl) {
  if (import.meta.env.DEV) {
    console.warn(
      '[siteConfig] VITE_SITE_URL no definida. Usando http://localhost:5173 como fallback ' +
      'para desarrollo. En producción el build fallará.',
    )
  } else {
    throw new Error(
      'VITE_SITE_URL no está definida. Todos los meta tags SEO (OG, canonical, sitemap) ' +
      'apuntarían a un dominio incorrecto. Agrégala en .env.production o .env.local.',
    )
  }
}

const siteUrl = rawSiteUrl || `http://localhost:5173`

export const siteConfig = {
  name: 'ILUMINATY',
  siteUrl,
  description:
    'Plataforma editorial y comunidad para descubrir artistas urbanos, eventos y tendencias creativas de Nueva York.',
  defaultOgImage: '/data/blog/king-cipher-concreto-puro.webp',
}

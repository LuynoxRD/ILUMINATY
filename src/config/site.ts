const rawSiteUrl = import.meta.env.VITE_SITE_URL as string | undefined
if (!rawSiteUrl) {
  throw new Error(
    'VITE_SITE_URL no está definida. Todos los meta tags SEO (OG, canonical, sitemap) ' +
    'apuntarían a un dominio incorrecto. Agrégala en .env o .env.local',
  )
}

export const siteConfig = {
  name: 'ILUMINATY',
  siteUrl: rawSiteUrl,
  description:
    'Plataforma editorial y comunidad para descubrir artistas urbanos, eventos y tendencias creativas de Nueva York.',
  defaultOgImage: '/data/blog/king-cipher-concreto-puro.webp',
}

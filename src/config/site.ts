export const siteConfig = {
  name: 'ILUMINATY',
  siteUrl: (import.meta.env.VITE_SITE_URL as string | undefined) || 'https://example.com',
  description:
    'Plataforma editorial y comunidad para descubrir artistas urbanos, eventos y tendencias creativas de Nueva York.',
  defaultOgImage: '/data/blog/king-cipher-concreto-puro.webp',
}

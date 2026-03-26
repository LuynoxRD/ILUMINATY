import { useHead } from '@unhead/vue'
import { siteConfig } from '@/config/site'

interface SeoInput {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  jsonLd?: Record<string, unknown> | null
}

const normalizePath = (path = '') => path.replace(/^\/+/, '')

export const resolveSiteUrl = (path = '') =>
  new URL(normalizePath(path), `${siteConfig.siteUrl.replace(/\/$/, '')}/`).toString()

export const serializeJsonLd = (value: Record<string, unknown>) =>
  JSON.stringify(value)
    .replace(/</g, '\\u003C')
    .replace(/>/g, '\\u003E')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')

export const useSeo = ({
  title,
  description,
  path = '',
  image = siteConfig.defaultOgImage,
  type = 'website',
  publishedTime,
  jsonLd,
}: SeoInput) => {
  const absoluteUrl = resolveSiteUrl(path)
  const absoluteImage = image.startsWith('http') ? image : resolveSiteUrl(image)

  const meta = [
    { name: 'description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: siteConfig.name },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: absoluteUrl },
    { property: 'og:image', content: absoluteImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: absoluteImage },
  ]

  if (publishedTime) {
    meta.push({ property: 'article:published_time', content: publishedTime })
  }

  useHead({
    title: `${title} | ${siteConfig.name}`,
    link: [{ rel: 'canonical', href: absoluteUrl }],
    meta,
    script: jsonLd
        ? [
          {
            type: 'application/ld+json',
            innerHTML: serializeJsonLd(jsonLd),
          },
        ]
      : [],
  })
}

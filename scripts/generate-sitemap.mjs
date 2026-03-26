import { readFileSync, writeFileSync } from 'node:fs'
import { loadEnv } from 'vite'

const env = loadEnv('production', process.cwd(), '')
const siteUrl = env.VITE_SITE_URL || 'https://example.com'
const contentSource = env.VITE_CONTENT_SOURCE || 'local'
const sanityConfig = {
  projectId: env.VITE_SANITY_PROJECT_ID || '',
  dataset: env.VITE_SANITY_DATASET || 'production',
  apiVersion: env.VITE_SANITY_API_VERSION || '2025-01-01',
  useCdn: (env.VITE_SANITY_USE_CDN || 'true') !== 'false',
}

const SANITY_SITEMAP_BATCH_SIZE = 500

const getBaseSiteUrl = (value) => {
  const parsed = new URL(value)
  return parsed.toString()
}

const buildSanityQueryUrl = (query, params = {}) => {
  const host = sanityConfig.useCdn ? 'apicdn.sanity.io' : 'api.sanity.io'
  const searchParams = new URLSearchParams({ query })

  for (const [key, value] of Object.entries(params)) {
    searchParams.set(`$${key}`, String(value))
  }

  return `https://${sanityConfig.projectId}.${host}/v${sanityConfig.apiVersion}/data/query/${sanityConfig.dataset}?${searchParams.toString()}`
}

const readLocalPosts = () => {
  const source = readFileSync(new URL('../src/data/blogPosts.ts', import.meta.url), 'utf8')
  const slugMatches = [...source.matchAll(/slug:\s*'([^']+)'/g)].map(match => match[1])
  const dateMatches = [...source.matchAll(/date:\s*'([^']+)'/g)].map(match => match[1])

  return slugMatches.map((slug, index) => ({
    slug,
    date: dateMatches[index] || new Date().toISOString().slice(0, 10),
  }))
}

const readSanityPosts = async () => {
  if (!sanityConfig.projectId || !sanityConfig.dataset) {
    throw new Error('Cannot generate sitemap from Sanity without VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET.')
  }

  const query = `*[_type == "post" && _id > $lastId] | order(_id asc)[0...$batchSize]{ _id, "slug": slug.current, date }`
  const posts = []
  let lastId = ''

  for (;;) {
    const response = await fetch(buildSanityQueryUrl(query, {
      lastId,
      batchSize: SANITY_SITEMAP_BATCH_SIZE,
    }))

    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap posts from Sanity: ${response.status} ${response.statusText}`)
    }

    const json = await response.json()
    const batch = Array.isArray(json.result) ? json.result : []

    if (!batch.length) {
      break
    }

    posts.push(...batch)
    lastId = typeof batch[batch.length - 1]?._id === 'string' ? batch[batch.length - 1]._id : ''

    if (!lastId) {
      break
    }
  }

  return posts
    .filter(post => typeof post?.slug === 'string' && post.slug.trim())
    .map(post => ({
      slug: post.slug.trim(),
      date: typeof post.date === 'string' && post.date.trim()
        ? post.date.trim()
        : new Date().toISOString().slice(0, 10),
    }))
    .sort((left, right) => right.date.localeCompare(left.date))
}

const staticPages = [
  '/',
  '/artistas',
  '/sobre-nosotros',
  '/blog',
  '/eventos',
  '/contacto',
  '/terminos',
  '/privacidad',
  '/cookies',
]

const withBase = (path) => new URL(path.replace(/^\//, ''), `${getBaseSiteUrl(siteUrl).replace(/\/$/, '')}/`).toString()

const buildSitemap = async () => {
  const posts = contentSource === 'sanity' ? await readSanityPosts() : readLocalPosts()
  const urls = [
    ...staticPages.map((path) => ({
      loc: withBase(path),
      lastmod: new Date().toISOString().slice(0, 10),
      priority: path === '/' ? '1.0' : '0.8',
    })),
    ...posts.map((post) => ({
      loc: withBase(`/blog/${post.slug}`),
      lastmod: post.date,
      priority: '0.7',
    })),
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

  const robots = `User-agent: *
Allow: /

Sitemap: ${withBase('/sitemap.xml')}
`

  writeFileSync(new URL('../public/sitemap.xml', import.meta.url), sitemap)
  writeFileSync(new URL('../public/robots.txt', import.meta.url), robots)
}

await buildSitemap()

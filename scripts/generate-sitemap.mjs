import { readFileSync, writeFileSync } from 'node:fs'

const siteUrl = process.env.VITE_SITE_URL || 'https://luynoxrd.github.io/ILUMINATY'
const source = readFileSync(new URL('../src/data/blogPosts.ts', import.meta.url), 'utf8')

const slugMatches = [...source.matchAll(/slug:\s*'([^']+)'/g)].map(match => match[1])
const dateMatches = [...source.matchAll(/date:\s*'([^']+)'/g)].map(match => match[1])

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

const withBase = (path) => new URL(path.replace(/^\//, ''), `${siteUrl.replace(/\/$/, '')}/`).toString()

const urls = [
  ...staticPages.map((path) => ({
    loc: withBase(path),
    lastmod: new Date().toISOString().slice(0, 10),
    priority: path === '/' ? '1.0' : '0.8',
  })),
  ...slugMatches.map((slug, index) => ({
    loc: withBase(`/blog/${slug}`),
    lastmod: dateMatches[index] || new Date().toISOString().slice(0, 10),
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

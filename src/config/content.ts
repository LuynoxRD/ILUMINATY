import type { ContentSource } from '@/types/content'

const rawContentSource = import.meta.env.VITE_CONTENT_SOURCE

export const contentSource: ContentSource =
  rawContentSource === 'sanity'
  || rawContentSource === 'contentful'
  || rawContentSource === 'sheets'
  || rawContentSource === 'api'
    ? rawContentSource
    : 'local'

export const supportedContentSources: ContentSource[] = ['local', 'sanity', 'contentful', 'sheets', 'api']

export const sanityConfig = {
  projectId: (import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined) || '',
  dataset: (import.meta.env.VITE_SANITY_DATASET as string | undefined) || 'production',
  apiVersion: (import.meta.env.VITE_SANITY_API_VERSION as string | undefined) || '2025-01-01',
  useCdn: ((import.meta.env.VITE_SANITY_USE_CDN as string | undefined) || 'true') !== 'false',
  token: (import.meta.env.VITE_SANITY_TOKEN as string | undefined) || '',
}

export const isSanityConfigured = Boolean(sanityConfig.projectId && sanityConfig.dataset)

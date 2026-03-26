import { contentSource, isSanityConfigured } from '@/config/content'
import { localContentAdapter } from '@/services/content/localAdapter'
import { createSanityContentAdapter } from '@/services/content/sanityAdapter'
import type { ContentAdapter } from '@/types/content'

const notImplemented = (source: string): never => {
  throw new Error(
    `Content source "${source}" is not implemented yet. Set VITE_CONTENT_SOURCE=local or add the corresponding adapter.`,
  )
}

let contentAdapter: ContentAdapter = localContentAdapter

const resolveRemoteContentAdapter = async (): Promise<ContentAdapter> => {
  switch (contentSource) {
    case 'sanity':
      if (!isSanityConfigured) {
        throw new Error(
          'VITE_CONTENT_SOURCE is set to "sanity" but Sanity credentials are missing. Check .env.example.',
        )
      }
      return createSanityContentAdapter()
    case 'local':
      return localContentAdapter
    case 'contentful':
    case 'sheets':
    case 'api':
      return notImplemented(contentSource)
    default:
      return localContentAdapter
  }
}

export const getContent = () => contentAdapter

export const loadContent = async () => {
  if (contentSource === 'local') {
    contentAdapter = localContentAdapter
    return contentAdapter
  }

  contentAdapter = await resolveRemoteContentAdapter()
  return contentAdapter
}

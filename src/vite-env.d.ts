/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string | undefined
  readonly VITE_CONTENT_SOURCE: string | undefined
  readonly VITE_SANITY_PROJECT_ID: string | undefined
  readonly VITE_SANITY_DATASET: string | undefined
  readonly VITE_SANITY_API_VERSION: string | undefined
  readonly VITE_SANITY_USE_CDN: string | undefined
  readonly VITE_FORM_PROVIDER: string | undefined
  readonly VITE_NEWSLETTER_PROVIDER: string | undefined
  readonly VITE_FORM_ENDPOINT: string | undefined
  readonly VITE_NEWSLETTER_ENDPOINT: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

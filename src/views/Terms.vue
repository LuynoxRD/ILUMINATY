<template>
  <LegalLayout :page="termsPage" />
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useContent } from '@/composables/useContent'
import { siteConfig } from '@/config/site'
import { resolveSiteUrl } from '@/lib/seo'
import LegalLayout from '@/components/LegalLayout.vue'

const { termsPage } = useContent()

useHead({
  title: `Términos y Condiciones | ${siteConfig.name}`,
  link: [{ rel: 'canonical', href: resolveSiteUrl('terminos') }],
  meta: [
    { name: 'description', content: termsPage.heroDescription },
    { property: 'og:title', content: `Términos y Condiciones | ${siteConfig.name}` },
    { property: 'og:description', content: termsPage.heroDescription },
    { property: 'og:url', content: resolveSiteUrl('terminos') },
    { property: 'og:image', content: resolveSiteUrl(siteConfig.defaultOgImage) },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

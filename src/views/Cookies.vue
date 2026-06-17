<template>
  <LegalLayout :page="cookiesPage" />
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useContent } from '@/composables/useContent'
import { siteConfig } from '@/config/site'
import { resolveSiteUrl } from '@/lib/seo'
import LegalLayout from '@/components/LegalLayout.vue'

const { cookiesPage } = useContent()

useHead({
  title: `Politica de Cookies | ${siteConfig.name}`,
  link: [{ rel: 'canonical', href: resolveSiteUrl('cookies') }],
  meta: [
    { name: 'description', content: cookiesPage.heroDescription },
    { property: 'og:title', content: `Politica de Cookies | ${siteConfig.name}` },
    { property: 'og:description', content: cookiesPage.heroDescription },
    { property: 'og:url', content: resolveSiteUrl('cookies') },
    { property: 'og:image', content: resolveSiteUrl(siteConfig.defaultOgImage) },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<template>
  <LegalLayout :page="privacyPage" />
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useContent } from '@/composables/useContent'
import { siteConfig } from '@/config/site'
import { resolveSiteUrl } from '@/lib/seo'
import LegalLayout from '@/components/LegalLayout.vue'

const { privacyPage } = useContent()

useHead({
  title: `Política de Privacidad | ${siteConfig.name}`,
  link: [{ rel: 'canonical', href: resolveSiteUrl('privacidad') }],
  meta: [
    { name: 'description', content: privacyPage.heroDescription },
    { property: 'og:title', content: `Política de Privacidad | ${siteConfig.name}` },
    { property: 'og:description', content: privacyPage.heroDescription },
    { property: 'og:url', content: resolveSiteUrl('privacidad') },
    { property: 'og:image', content: resolveSiteUrl(siteConfig.defaultOgImage) },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

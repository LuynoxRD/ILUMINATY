<template>
  <div class="bg-white">
    <section class="relative overflow-hidden bg-gradient-dark py-16">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute left-0 top-0 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-lime/20 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RouterLink to="/blog" class="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-neon-lime">
          <span aria-hidden="true">&larr;</span>
          <span>{{ blogPage.post.backLabel }}</span>
        </RouterLink>

        <div v-if="post" class="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <h1 class="max-w-4xl text-4xl font-bold text-gray-900 md:text-5xl">{{ post.title }}</h1>
            <p class="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">{{ post.excerpt }}</p>

            <div class="mt-8 space-y-4">
              <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                <span>{{ post.author }}</span>
                <span class="hidden sm:inline">&bull;</span>
                <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                <span class="hidden sm:inline">&bull;</span>
                <span>{{ post.readTime }} min lectura</span>
              </div>

              <div class="flex flex-wrap gap-3">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold" :class="getBlogCategoryColor(post.category)">
                  {{ post.category }}
                </span>
                <span
                  v-for="tag in displayTags"
                  :key="tag"
                  class="inline-flex rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <div class="lg:flex lg:items-end lg:justify-end">
            <div class="w-full text-center lg:text-right">
              <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">{{ blogPage.post.shareLabel }}</p>
              <SocialLinks size="lg" class="w-full justify-center lg:justify-end" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="post" class="pb-20 pt-10">
      <div class="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-8">
        <article class="min-w-0">
          <div class="overflow-hidden rounded-[2rem] shadow-lg">
            <img :src="post.image" :alt="post.imageAlt" class="h-[28rem] w-full object-cover">
          </div>

          <div class="mt-14 space-y-6">
            <template v-for="(block, index) in post.blocks" :key="`${block.type}-${index}`">
              <section v-if="block.type === 'heading'" :id="getHeadingId(block.text)" class="scroll-mt-28 pt-8 first:pt-0">
                <h2 v-if="block.style !== 'h3'" class="text-3xl font-bold text-gray-900">{{ block.text }}</h2>
                <h3 v-else class="text-2xl font-bold text-gray-900">{{ block.text }}</h3>
              </section>

              <p v-else-if="block.type === 'paragraph'" class="text-lg leading-8 text-gray-700">
                {{ block.text }}
              </p>

              <ul v-else-if="block.type === 'bullet-list'" class="space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <li
                  v-for="bullet in block.items"
                  :key="bullet"
                  class="flex gap-3 text-base leading-7 text-gray-700"
                >
                  <span class="mt-1 text-neon-lime">&bull;</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>

              <figure v-else-if="block.type === 'image'" class="overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50">
                <img :src="block.src" :alt="block.alt" class="h-auto w-full object-cover">
                <figcaption v-if="block.caption" class="px-6 py-4 text-sm text-gray-500">{{ block.caption }}</figcaption>
              </figure>

              <blockquote v-else-if="block.type === 'quote'" class="rounded-[2rem] border border-neon-lime/20 bg-neon-lime/5 p-8">
                <p class="text-xl leading-8 text-gray-800">{{ block.text }}</p>
                <footer v-if="block.citation" class="mt-4 text-sm font-semibold text-neon-lime">{{ block.citation }}</footer>
              </blockquote>

              <div v-else-if="block.type === 'embed'" class="rounded-[2rem] border border-gray-200 bg-gray-50 p-6">
                <a v-if="getSafeHref(block.url)" :href="getSafeHref(block.url)" target="_blank" rel="noreferrer" class="text-sm font-semibold text-neon-lime transition-colors hover:text-neon-cyan">
                  {{ block.title || block.url }}
                </a>
                <span v-else class="text-sm font-semibold text-gray-500">{{ block.title || block.url }}</span>
              </div>
            </template>
          </div>

          <section class="mt-16 rounded-[2rem] border border-gray-200 bg-gray-50 p-8">
            <div class="flex items-start gap-4">
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-neon-lime/15 text-neon-lime">
                <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 20h4l10-10a2.1 2.1 0 0 0-4-4L4 16v4Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="m12.5 6.5 5 5" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neon-lime">{{ blogPage.post.authorLabel }}</p>
                <h2 class="mt-2 text-2xl font-bold text-gray-900">{{ post.author }}</h2>
                <p class="mt-4 text-base leading-7 text-gray-700">{{ post.authorBio }}</p>
              </div>
            </div>
          </section>
        </article>

        <aside class="lg:sticky lg:top-28 lg:self-start">
          <div class="space-y-6">
            <section class="rounded-[2rem] border border-gray-200 bg-gray-50 p-6">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neon-lime">{{ blogPage.post.tocLabel }}</p>
              <nav class="mt-5">
                <ul class="space-y-3 border-l border-gray-200 pl-4">
                  <li v-for="section in tocSections" :key="section">
                    <a :href="`#${getHeadingId(section)}`" class="block text-sm leading-6 text-gray-600 transition-colors hover:text-neon-lime">
                      {{ section }}
                    </a>
                  </li>
                </ul>
              </nav>
            </section>

            <section class="theme-surface-card rounded-[2rem] border p-6">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neon-lime">{{ blogPage.post.newsletterEyebrow }}</p>
              <h2 class="mt-3 text-2xl font-bold text-gray-900">{{ blogPage.post.newsletterTitle }}</h2>
              <p class="mt-4 text-sm leading-6 text-gray-600">{{ blogPage.post.newsletterDescription }}</p>
              <form class="mt-6 space-y-3" @submit.prevent="newsletterForm.submit(newsletterCopy)">
                <input
                  v-model="newsletterForm.email"
                  type="email"
                  :placeholder="newsletterCopy.inputPlaceholder"
                  class="theme-newsletter-input w-full rounded-2xl border px-4 py-3 outline-none transition-colors focus:border-neon-lime"
                >
                <button type="submit" class="btn-primary w-full rounded-xl px-8" :disabled="newsletterForm.submitStatus === 'loading'">
                  {{ newsletterForm.submitStatus === 'loading' ? 'Enviando...' : newsletterCopy.buttonLabel }}
                </button>
              </form>
              <p v-if="newsletterForm.feedbackMessage" class="mt-4 text-sm" :class="newsletterForm.submitStatus === 'success' ? 'text-neon-lime' : 'text-red-400'">
                {{ newsletterForm.feedbackMessage }}
              </p>
            </section>
          </div>
        </aside>
      </div>
    </section>

    <section v-if="post" class="pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8 flex items-end justify-between gap-6">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neon-lime">{{ blogPage.post.relatedEyebrow }}</p>
            <h2 class="mt-3 text-3xl font-bold text-gray-900">{{ blogPage.post.relatedTitle }}</h2>
          </div>
          <RouterLink to="/blog" class="text-sm font-semibold text-gray-600 transition-colors hover:text-neon-lime">
            {{ blogPage.post.relatedLinkLabel }}
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <RouterLink
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.slug"
            :to="`/blog/${relatedPost.slug}`"
            class="block"
          >
            <article class="theme-surface-card flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div class="relative h-56 overflow-hidden bg-gray-200">
                <img :src="relatedPost.image" :alt="relatedPost.imageAlt" class="h-full w-full object-cover transition-transform duration-500 hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-transparent to-transparent"></div>
              </div>
              <div class="flex flex-1 flex-col p-6">
                <span class="inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold" :class="getBlogCategoryColor(relatedPost.category)">
                  {{ relatedPost.category }}
                </span>
                <h3 class="mt-4 text-xl font-bold text-gray-900">{{ relatedPost.title }}</h3>
                <p class="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{{ relatedPost.excerpt }}</p>
                <div class="mt-5 border-t border-gray-200 pt-4 text-xs text-gray-500">
                  {{ formatDate(relatedPost.date) }} &middot; {{ relatedPost.readTime }} min
                </div>
              </div>
            </article>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useHead } from '@unhead/vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import SocialLinks from '@/components/SocialLinks.vue'
import { useContent } from '@/composables/useContent'
import { useNewsletterForm } from '@/composables/useNewsletterForm'
import { siteConfig } from '@/config/site'
import { getBlogCategoryColor } from '@/lib/blog'
import { parseLocalDate } from '@/lib/date'
import { normalizeNewsletterBlock } from '@/lib/formFeedback'
import { toSafeHref } from '@/lib/safeUrl'
import { resolveSiteUrl, serializeJsonLd } from '@/lib/seo'

const props = defineProps<{
  initialSlug?: string
}>()

const { blogPage, getBlogPostById, getBlogPostBySlug, sortedBlogPosts } = useContent()
const newsletterForm = useNewsletterForm('blog-post-newsletter')
const newsletterCopy = computed(() => normalizeNewsletterBlock(blogPage.newsletterSection))
const route = useRoute()
const router = useRouter()

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const currentSlug = computed(() =>
  String(route.params.slug || props.initialSlug || route.path.split('/').filter(Boolean).pop() || ''),
)

const post = computed(() => getBlogPostBySlug(currentSlug.value) || getBlogPostById(currentSlug.value))

watchEffect(() => {
  if (!post.value) {
    router.replace('/blog')
  }
})

const relatedPosts = computed(() =>
  sortedBlogPosts
    .filter(candidate => candidate.slug !== post.value?.slug)
    .sort((left, right) => Number(right.category === post.value?.category) - Number(left.category === post.value?.category))
    .slice(0, 3),
)

const displayTags = computed(() => post.value?.tags ?? [])
const tocSections = computed(() =>
  post.value?.blocks
    .filter(block => block.type === 'heading')
    .map(block => block.text)
    || [],
)
const getHeadingId = (heading: string) => slugify(heading)
const getSafeHref = (value: string) => toSafeHref(value)

const formatDate = (date: string) =>
  parseLocalDate(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

useHead(() => {
  if (!post.value) {
    return {
      title: `Blog | ${siteConfig.name}`,
    }
  }

  const canonicalPath = `blog/${post.value.slug}`
  const canonicalUrl = resolveSiteUrl(canonicalPath)
  const imageUrl = resolveSiteUrl(post.value.image)
  const publishedIso = parseLocalDate(post.value.date).toISOString()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.value.title,
    description: post.value.metaDescription,
    image: [imageUrl],
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: {
      '@type': 'Person',
      name: post.value.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: resolveSiteUrl('favicon.svg'),
      },
    },
    mainEntityOfPage: canonicalUrl,
  }

  return {
    title: `${post.value.title} | ${siteConfig.name}`,
    link: [{ rel: 'canonical', href: canonicalUrl }],
    meta: [
      { name: 'description', content: post.value.metaDescription },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: siteConfig.name },
      { property: 'og:title', content: post.value.title },
      { property: 'og:description', content: post.value.metaDescription },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: imageUrl },
      { property: 'article:published_time', content: publishedIso },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: post.value.title },
      { name: 'twitter:description', content: post.value.metaDescription },
      { name: 'twitter:image', content: imageUrl },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: serializeJsonLd(schema),
      },
    ],
  }
})
</script>

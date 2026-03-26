<template>
  <div class="bg-white">
    <section class="relative overflow-hidden bg-gradient-dark py-16">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute left-0 top-0 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-lime/20 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <RouterLink to="/blog" class="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-neon-lime">
          <span>←</span>
          <span>Volver al blog</span>
        </RouterLink>

        <div v-if="post" class="mt-8">
          <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold" :class="getCategoryColor(post.category)">
            {{ post.category }}
          </span>
          <h1 class="mt-6 max-w-4xl text-4xl font-bold text-gray-900 md:text-5xl">
            {{ post.title }}
          </h1>
          <p class="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            {{ post.excerpt }}
          </p>
          <div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <span>{{ post.author }}</span>
            <span class="hidden sm:inline">•</span>
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span class="hidden sm:inline">•</span>
            <span>{{ post.readTime }} min lectura</span>
          </div>
        </div>
      </div>
    </section>

    <section v-if="post" class="py-10">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <img
          :src="post.image"
          :alt="post.imageAlt"
          class="h-[28rem] w-full rounded-[2rem] object-cover shadow-lg"
        >
      </div>
    </section>

    <section v-if="post" class="pb-20 pt-6">
      <div class="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
        <article class="min-w-0">
          <div class="space-y-14">
            <section
              v-for="section in post.sections"
              :id="getHeadingId(section.title)"
              :key="section.title"
              class="scroll-mt-28"
            >
              <h2 class="text-3xl font-bold text-gray-900">
                {{ section.title }}
              </h2>
              <div class="mt-6 space-y-6">
                <p
                  v-for="paragraph in section.paragraphs"
                  :key="paragraph"
                  class="text-lg leading-8 text-gray-700"
                >
                  {{ paragraph }}
                </p>
                <ul v-if="section.bullets?.length" class="space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <li
                    v-for="bullet in section.bullets"
                    :key="bullet"
                    class="flex gap-3 text-base leading-7 text-gray-700"
                  >
                    <span class="mt-1 text-neon-lime">•</span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <section class="mt-16 rounded-[2rem] border border-gray-200 bg-gray-50 p-8">
            <div class="flex items-start gap-4">
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-neon-lime/15 text-2xl">
                ✍️
              </div>
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neon-lime">Autor</p>
                <h2 class="mt-2 text-2xl font-bold text-gray-900">{{ post.author }}</h2>
                <p class="mt-4 text-base leading-7 text-gray-700">
                  {{ post.authorBio }}
                </p>
              </div>
            </div>
          </section>

          <section class="mt-16">
            <div class="mb-8 flex items-end justify-between gap-6">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neon-lime">Sigue leyendo</p>
                <h2 class="mt-3 text-3xl font-bold text-gray-900">Entradas relacionadas</h2>
              </div>
              <RouterLink to="/blog" class="text-sm font-semibold text-gray-600 transition-colors hover:text-neon-lime">
                Ver todo el blog
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
                  <div class="relative h-48 overflow-hidden bg-gray-200">
                    <img :src="relatedPost.image" :alt="relatedPost.imageAlt" class="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-transparent to-transparent"></div>
                  </div>
                  <div class="flex flex-1 flex-col p-6">
                    <span class="inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold" :class="getCategoryColor(relatedPost.category)">
                      {{ relatedPost.category }}
                    </span>
                    <h3 class="mt-4 text-xl font-bold text-gray-900">
                      {{ relatedPost.title }}
                    </h3>
                    <p class="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                      {{ relatedPost.excerpt }}
                    </p>
                    <div class="mt-5 border-t border-gray-200 pt-4 text-xs text-gray-500">
                      {{ formatDate(relatedPost.date) }} · {{ relatedPost.readTime }} min
                    </div>
                  </div>
                </article>
              </RouterLink>
            </div>
          </section>
        </article>

        <aside class="lg:sticky lg:top-28 lg:self-start">
          <div class="space-y-6">
            <section class="rounded-[2rem] border border-gray-200 bg-gray-50 p-6">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neon-lime">Tabla de contenido</p>
              <nav class="mt-5">
                <ul class="space-y-3">
                  <li v-for="section in post.sections" :key="section.title">
                    <a
                      :href="`#${getHeadingId(section.title)}`"
                      class="block text-sm leading-6 text-gray-600 transition-colors hover:text-neon-lime"
                    >
                      {{ section.title }}
                    </a>
                  </li>
                </ul>
              </nav>
            </section>

            <section class="theme-surface-card rounded-[2rem] border p-6">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neon-lime">Sigue la escena</p>
              <h2 class="mt-3 text-2xl font-bold text-gray-900">Comparte y conecta con ILUMINATY</h2>
              <p class="mt-4 text-sm leading-6 text-gray-600">
                Sigue nuestras publicaciones en redes para descubrir artistas, eventos y nuevas entradas del blog.
              </p>
              <div class="mt-6">
                <SocialLinks />
              </div>
            </section>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import SocialLinks from '@/components/SocialLinks.vue'
import { siteConfig } from '@/config/site'
import { getBlogPostById, getBlogPostBySlug, sortedBlogPosts } from '@/data/blogPosts'
import { resolveSiteUrl } from '@/lib/seo'

const props = defineProps<{
  initialSlug?: string
}>()

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
  String(
    route.params.slug
    || props.initialSlug
    || route.path.split('/').filter(Boolean).pop()
    || '',
  ),
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

const getHeadingId = (heading: string) => slugify(heading)

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Noticias: 'bg-neon-lime/20 text-neon-lime border border-neon-lime/30',
    Análisis: 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
    Tutoriales: 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30',
    Entrevistas: 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30',
    Tendencias: 'bg-neon-orange/20 text-neon-orange border border-neon-orange/30',
    Colaboraciones: 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
  }

  return colors[category] || 'bg-gray-200 text-gray-700'
}

useHead(() => {
  if (!post.value) {
    return {
      title: `Blog | ${siteConfig.name}`,
    }
  }

  const canonicalPath = `blog/${post.value.slug}`
  const canonicalUrl = resolveSiteUrl(canonicalPath)
  const imageUrl = resolveSiteUrl(post.value.image)
  const publishedIso = new Date(post.value.date).toISOString()
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
        innerHTML: JSON.stringify(schema),
      },
    ],
  }
})
</script>

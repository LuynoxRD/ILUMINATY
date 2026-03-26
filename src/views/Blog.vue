<template>
  <div class="bg-white">
    <section class="relative overflow-hidden bg-gradient-dark py-20">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute left-0 top-0 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-lime/20 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{{ blogPage.heroTitle }}</h1>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">{{ blogPage.heroDescription }}</p>
      </div>
    </section>

    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RouterLink v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`" class="block">
            <article class="theme-surface-card flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div class="relative h-52 overflow-hidden bg-gray-200">
                <img :src="post.image" :alt="post.imageAlt" class="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent"></div>
              </div>

              <div class="flex flex-1 flex-col p-6">
                <div class="mb-3">
                  <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold" :class="getBlogCategoryColor(post.category)">
                    {{ post.category }}
                  </span>
                </div>

                <h2 class="mb-3 line-clamp-2 text-2xl font-bold text-gray-900 transition-colors hover:text-neon-lime">
                  {{ post.title }}
                </h2>

                <p class="mb-5 flex-1 text-sm leading-relaxed text-gray-600">{{ post.excerpt }}</p>

                <div class="flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-gray-500">
                  <span>{{ post.author }}</span>
                  <span>{{ formatDate(post.date) }}</span>
                </div>
                <div class="mt-2 text-xs text-gray-500">{{ post.readTime }} min lectura</div>
              </div>
            </article>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="mb-4 text-3xl font-bold text-gray-900">{{ newsletterCopy.title }}</h2>
        <p class="mx-auto mb-8 max-w-2xl text-gray-600">{{ newsletterCopy.description }}</p>
        <form class="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row" @submit.prevent="newsletterForm.submit(newsletterCopy)">
          <input
            v-model="newsletterForm.email"
            type="email"
            :placeholder="newsletterCopy.inputPlaceholder"
            class="theme-newsletter-input flex-1 rounded-2xl border px-4 py-3 outline-none transition-colors focus:border-neon-lime"
          >
          <button class="btn-primary whitespace-nowrap rounded-xl px-8" :disabled="newsletterForm.submitStatus === 'loading'">
            {{ newsletterForm.submitStatus === 'loading' ? 'Enviando...' : newsletterCopy.buttonLabel }}
          </button>
        </form>
        <p v-if="newsletterForm.feedbackMessage" class="mt-4 text-sm" :class="newsletterForm.submitStatus === 'success' ? 'text-neon-lime' : 'text-red-400'">
          {{ newsletterForm.feedbackMessage }}
        </p>
        <div class="mt-8">
          <SocialLinks justify="center" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { RouterLink } from 'vue-router'
import SocialLinks from '@/components/SocialLinks.vue'
import { useContent } from '@/composables/useContent'
import { useNewsletterForm } from '@/composables/useNewsletterForm'
import { siteConfig } from '@/config/site'
import { getBlogCategoryColor } from '@/lib/blog'
import { normalizeNewsletterBlock } from '@/lib/formFeedback'
import { resolveSiteUrl } from '@/lib/seo'

const { blogPage, sortedBlogPosts } = useContent()
const newsletterForm = useNewsletterForm('blog-newsletter')
const posts = sortedBlogPosts
const newsletterCopy = normalizeNewsletterBlock(blogPage.newsletterSection)

useHead({
  title: `Blog | ${siteConfig.name}`,
  link: [{ rel: 'canonical', href: resolveSiteUrl('blog') }],
  meta: [
    {
      name: 'description',
      content: 'Historias, tendencias y analisis del arte urbano de Nueva York publicadas en el blog editorial de ILUMINATY.',
    },
    {
      property: 'og:title',
      content: `Blog | ${siteConfig.name}`,
    },
    {
      property: 'og:description',
      content: 'Historias, tendencias y analisis del arte urbano de Nueva York publicadas en el blog editorial de ILUMINATY.',
    },
    {
      property: 'og:url',
      content: resolveSiteUrl('blog'),
    },
    {
      property: 'og:image',
      content: resolveSiteUrl(siteConfig.defaultOgImage),
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
})

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
</script>

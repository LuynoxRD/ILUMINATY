<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import AppDownloadCta from '@/components/AppDownloadCta.vue'
import ArtistPopup from '@/components/ArtistPopup.vue'
import ArtistsShowcase from '@/components/ArtistsShowcase.vue'
import FollowersMarquee from '@/components/FollowersMarquee.vue'
import Hero from '@/components/Hero.vue'
import { useContent } from '@/composables/useContent'
import { useNewsletterForm } from '@/composables/useNewsletterForm'
import { getBlogCategoryColor } from '@/lib/blog'
import { parseLocalDate } from '@/lib/date'
import { normalizeNewsletterBlock } from '@/lib/formFeedback'
import type { ArtistDirectoryEntry } from '@/types/content'

const { artistDirectoryEntries, featuredArtists, homePage, sortedBlogPosts, uiAssets } = useContent()
const featuredPosts = computed(() => sortedBlogPosts.slice(0, 3))
const newsletterForm = useNewsletterForm('home-newsletter')
const newsletterCopy = computed(() => normalizeNewsletterBlock(homePage.newsletterSection))
const selectedFeaturedArtist = ref<ArtistDirectoryEntry | null>(null)

const formatDate = (date: string) =>
  parseLocalDate(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

const openFeaturedArtist = (artistId: string) => {
  selectedFeaturedArtist.value = artistDirectoryEntries.find(artist => artist.id === artistId) || null
}

const closeFeaturedArtist = () => {
  selectedFeaturedArtist.value = null
}
</script>

<template>
  <div class="relative overflow-x-clip bg-gray-50 text-neutral-900">
    <div class="absolute left-10 top-20 -z-10 h-72 w-72 animate-float rounded-full bg-neon-violet/20 mix-blend-color-screen blur-3xl"></div>
    <div class="absolute bottom-20 right-10 -z-10 h-72 w-72 animate-float rounded-full bg-neon-lime/20 mix-blend-color-screen blur-3xl" style="animation-delay: 1s;"></div>
    <div class="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-neon-cyan/10 mix-blend-screen blur-3xl" style="animation: float 4s ease-in-out infinite;"></div>

    <Hero />

    <div class="h-1 bg-gradient-to-r from-transparent via-neon-lime to-transparent opacity-100"></div>

    <section class="overflow-hidden bg-gray-50 py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl">{{ homePage.labelsSection.title }}</h2>
        <p class="mb-12 text-center text-base text-gray-600 md:mb-16 md:text-lg">{{ homePage.labelsSection.description }}</p>
        <div class="relative">
          <div class="theme-fade-left-soft pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 md:hidden"></div>
          <div class="theme-fade-right-soft pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 md:hidden"></div>

          <div class="no-scrollbar flex items-center justify-start gap-6 overflow-x-auto pb-4 md:justify-center md:gap-10 md:pb-0 lg:gap-16" style="scroll-behavior: smooth; -webkit-overflow-scrolling: touch;">
            <div v-for="label in uiAssets.labelLogos" :key="label.id" class="theme-logo-wrapper flex-shrink-0">
              <img :src="label.src" :alt="label.name" class="theme-logo h-10 max-w-[120px] w-auto object-contain sm:h-12 sm:max-w-[150px] md:h-16 lg:h-20" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-24">
      <div class="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-4xl font-bold text-gray-900">{{ homePage.featuredArtistsSection.title }}</h2>
        <p class="mx-auto mt-4 max-w-2xl text-center text-base text-gray-600">
          {{ homePage.featuredArtistsSection.description }}
        </p>
      </div>
      <ArtistsShowcase :items="featuredArtists" @view="openFeaturedArtist" />
      <ArtistPopup
        :show="Boolean(selectedFeaturedArtist)"
        :artist="selectedFeaturedArtist"
        @close="closeFeaturedArtist"
      />
    </section>

    <section class="relative overflow-hidden bg-gray-50 py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div class="flex justify-center">
            <div class="relative flex h-[320px] w-[320px] items-center justify-center overflow-hidden sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]">
              <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_15s_linear_infinite]">
                <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.2"></path>
                <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#gradient-outer)" stroke-linecap="round" stroke-width="2"></path>
                <defs>
                  <linearGradient id="gradient-outer" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06b6d4"></stop>
                    <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite_reverse]">
                <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.2"></path>
                <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#gradient-inner)" stroke-linecap="round" stroke-width="2"></path>
                <defs>
                  <linearGradient id="gradient-inner" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06b6d4"></stop>
                    <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <div class="theme-highlight-card relative z-10 h-auto w-64 rounded-2xl p-6 shadow-xl">
                <h3 class="mb-2 text-xl font-bold">{{ homePage.highlightCard.title }}</h3>
                <p class="text-sm">{{ homePage.highlightCard.description }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
            <h2 class="text-4xl font-bold text-gray-900">{{ homePage.communitySection.title }}</h2>
            <p class="text-lg text-gray-600">{{ homePage.communitySection.description }}</p>
            <ul class="w-full max-w-md space-y-3 text-left">
              <li v-for="benefit in homePage.communitySection.benefits" :key="benefit" class="flex items-start gap-3">
                <span class="text-xl font-bold text-neon-lime">✓</span>
                <span class="text-gray-700">{{ benefit }}</span>
              </li>
            </ul>
            <RouterLink :to="homePage.communitySection.cta.href" class="theme-highlight-button mt-8 inline-block self-center rounded-lg px-8 py-3 font-semibold transition-colors lg:self-start">
              {{ homePage.communitySection.cta.label }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50">
      <FollowersMarquee />
    </section>

    <AppDownloadCta />

    <section id="faqs" aria-labelledby="faqs-title" class="border-t border-gray-200 bg-gray-50 py-20 sm:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl lg:mx-0">
          <h2 id="faqs-title" class="text-3xl font-medium tracking-tight text-gray-900">{{ homePage.faqSection.title }}</h2>
          <p class="mt-2 text-lg text-gray-600">
            {{ homePage.faqSection.description }}
            <RouterLink :to="homePage.faqSection.contactLink.href" class="theme-link-accent hover:underline">{{ homePage.faqSection.contactLink.label }}</RouterLink>.
          </p>
        </div>
        <ul role="list" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <li v-for="columnIndex in 3" :key="columnIndex">
            <ul role="list" class="space-y-10">
              <li v-for="faq in homePage.faqSection.items.filter((_, index) => index % 3 === columnIndex - 1)" :key="faq.question">
                <h3 class="text-lg/6 font-semibold text-gray-900">{{ faq.question }}</h3>
                <p class="mt-4 text-sm text-gray-700">{{ faq.answer }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-gray-50 py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neon-lime">{{ homePage.featuredBlogSection.eyebrow }}</p>
            <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">{{ homePage.featuredBlogSection.title }}</h2>
            <p class="mt-4 text-lg text-gray-600">{{ homePage.featuredBlogSection.description }}</p>
          </div>
          <RouterLink to="/blog" class="inline-flex w-fit rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-neon-lime hover:text-neon-lime">
            {{ homePage.featuredBlogSection.ctaLabel }}
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RouterLink v-for="post in featuredPosts" :key="post.id" :to="`/blog/${post.slug}`" class="group block">
            <article class="theme-surface-card flex h-full flex-col overflow-hidden rounded-2xl border text-gray-900 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
              <div class="relative h-56 overflow-hidden bg-gray-200">
                <img :src="post.image" :alt="post.title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent"></div>
              </div>
              <div class="flex flex-1 flex-col p-6">
                <div class="mb-4">
                  <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold" :class="getBlogCategoryColor(post.category)">
                    {{ post.category }}
                  </span>
                </div>
                <h3 class="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-neon-lime">{{ post.title }}</h3>
                <p class="mb-5 flex-1 text-sm leading-relaxed text-gray-600">{{ post.excerpt }}</p>
                <div class="border-t border-gray-200 pt-4 text-xs text-gray-500">
                  <div class="flex items-center justify-between gap-3">
                    <span>{{ post.author }}</span>
                    <span>{{ formatDate(post.date) }}</span>
                  </div>
                  <p class="mt-2">{{ post.readTime }} min lectura</p>
                </div>
              </div>
            </article>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{{ newsletterCopy.title }}</h2>
        <p class="mx-auto mb-8 max-w-2xl text-base text-gray-600 md:text-lg">{{ newsletterCopy.description }}</p>
        <form class="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row" @submit.prevent="newsletterForm.submit(newsletterCopy)">
          <input
            v-model="newsletterForm.email"
            type="email"
            :placeholder="newsletterCopy.inputPlaceholder"
            class="theme-newsletter-input w-full flex-1 rounded-2xl border px-4 py-3 outline-none transition-colors focus:border-neon-lime"
          >
          <button type="submit" class="btn-primary whitespace-nowrap rounded-xl px-8" :disabled="newsletterForm.submitStatus === 'loading'">
            {{ newsletterForm.submitStatus === 'loading' ? 'Enviando...' : newsletterCopy.buttonLabel }}
          </button>
        </form>
        <p v-if="newsletterForm.feedbackMessage" class="mt-4 text-sm" :class="newsletterForm.submitStatus === 'success' ? 'text-neon-lime' : 'text-red-400'">
          {{ newsletterForm.feedbackMessage }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

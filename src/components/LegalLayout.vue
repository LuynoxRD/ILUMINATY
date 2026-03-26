<template>
  <div class="bg-white">
    <section class="relative overflow-hidden bg-gradient-dark py-16 md:py-20">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute top-0 right-0 h-72 w-72 rounded-full bg-neon-violet/20 blur-3xl md:h-96 md:w-96"></div>
        <div class="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-neon-lime/20 blur-3xl md:h-96 md:w-96"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">{{ page.heroTitle }}</h1>
        <p class="mx-auto max-w-2xl px-4 text-base text-gray-600 md:text-lg">
          {{ page.heroDescription }}
        </p>
      </div>
    </section>

    <section class="py-12 md:py-20">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="space-y-10 md:space-y-12">
          <section v-for="section in page.sections" :key="section.title" class="space-y-4">
            <h2 class="text-xl font-bold text-gray-900 md:text-2xl">{{ section.title }}</h2>

            <p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-sm text-gray-600 md:text-base md:leading-8">
              {{ paragraph }}
            </p>

            <ul v-if="section.bullets?.length" class="ml-4 list-disc space-y-2 text-sm text-gray-600 md:text-base">
              <li v-for="bullet in section.bullets" :key="bullet">
                {{ bullet }}
              </li>
            </ul>

            <div v-if="section.cards?.length" class="space-y-4 md:space-y-6">
              <article
                v-for="card in section.cards"
                :key="card.title"
                class="rounded-lg border p-4 md:p-6"
                :class="card.accentClass || 'border-gray-200 bg-gray-50'"
              >
                <h3 class="mb-2 text-base font-bold text-gray-900 md:text-lg">{{ card.title }}</h3>
                <p class="text-sm text-gray-600 md:text-base">{{ card.description }}</p>
                <ul v-if="card.bullets?.length" class="ml-4 mt-3 list-disc space-y-1 text-sm text-gray-600 md:text-base">
                  <li v-for="bullet in card.bullets" :key="bullet">
                    {{ bullet }}
                  </li>
                </ul>
              </article>
            </div>

            <div v-if="section.links?.length" class="flex flex-wrap gap-3 pt-1">
              <RouterLink
                v-for="link in section.links"
                :key="link.href"
                :to="link.href"
                class="inline-flex rounded-full border border-neon-lime/30 bg-neon-lime/10 px-4 py-2 text-sm font-semibold text-neon-lime transition-colors hover:border-neon-lime hover:bg-neon-lime/15"
              >
                {{ link.label }}
              </RouterLink>
            </div>
          </section>

          <section v-if="page.contactCard" class="rounded-2xl bg-gray-50 p-4 md:p-6">
            <h2 class="text-xl font-bold text-gray-900 md:text-2xl">{{ page.contactCard.title }}</h2>
            <p class="mt-3 text-sm text-gray-600 md:text-base">{{ page.contactCard.description }}</p>
            <div class="mt-4 space-y-2">
              <p v-for="detail in page.contactCard.details" :key="detail.label" class="text-sm text-gray-700 md:text-base">
                <strong>{{ detail.label }}:</strong> {{ detail.value }}
              </p>
            </div>
          </section>

          <div class="border-t border-gray-200 pt-6 md:pt-8">
            <p class="text-center text-xs text-gray-500 md:text-sm">{{ page.footerNote }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-dark py-16 md:py-20">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="mb-4 text-2xl font-bold text-gray-500 md:text-3xl">{{ page.ctaTitle }}</h2>
        <p class="mb-6 text-sm text-gray-400 md:mb-8 md:text-base">
          {{ page.ctaDescription }}
        </p>
        <RouterLink :to="page.ctaLink.href" class="btn-primary inline-block text-sm md:text-base">
          {{ page.ctaLink.label }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { LegalPageContent } from '@/types/content'

defineProps<{
  page: LegalPageContent
}>()
</script>

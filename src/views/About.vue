<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-dark py-20">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-neon-lime/20 blur-3xl"></div>
        <div class="absolute right-0 top-0 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="mb-4 text-center">{{ aboutPage.heroTitle }}</h1>
        <p class="mx-auto max-w-3xl text-center text-lg text-gray-600">
          {{ aboutPage.heroDescription }}
        </p>
      </div>
    </section>

    <SectionTitle
      :subtitle="aboutPage.missionSection.subtitle"
      :title="aboutPage.missionSection.title"
      :description="aboutPage.missionSection.description"
    >
      <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900">{{ aboutPage.missionSection.heading }}</h2>
          <p class="mb-6 leading-relaxed text-gray-600">
            {{ aboutPage.missionSection.body }}
          </p>
          <ul class="space-y-3 text-gray-700">
            <li v-for="bullet in aboutPage.missionSection.bullets" :key="bullet" class="flex items-start gap-3">
              <span class="mt-1 flex-shrink-0 text-neon-lime">⚡</span>
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </div>
        <div class="glass overflow-hidden rounded-xl">
          <img :src="aboutContent.missionImage" alt="Comunidad ILUMINATY reunida en Nueva York" class="h-full w-full object-cover">
        </div>
      </div>
    </SectionTitle>

    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-neon-lime">{{ aboutPage.valuesSection.eyebrow }}</span>
          <h2 class="mt-4">{{ aboutPage.valuesSection.title }}</h2>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="value in aboutPage.valuesSection.items" :key="value.title" class="glass card-hover rounded-xl p-8 text-center">
            <div class="mb-4 text-4xl">{{ value.icon }}</div>
            <h3 class="mb-3 text-xl font-bold">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionTitle
      :subtitle="aboutPage.teamSection.subtitle"
      :title="aboutPage.teamSection.title"
      :description="aboutPage.teamSection.description"
    >
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="member in aboutContent.team" :key="member.id" class="glass card-hover overflow-hidden rounded-xl text-center">
          <div class="h-48 overflow-hidden bg-gradient-dark">
            <img :src="member.image" :alt="member.name" class="h-full w-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="mb-1 text-xl font-bold text-gray-900">{{ member.name }}</h3>
            <p class="mb-3 text-sm" :class="member.accentClass">{{ member.role }}</p>
            <p class="mb-4 text-gray-600">{{ member.bio }}</p>
            <div class="flex justify-center gap-2">
              <a :href="member.email" class="glass-hover flex h-10 w-10 items-center justify-center rounded text-lg transition-colors" :class="member.accentClass" title="Email">📧</a>
              <a :href="member.secondaryLink" target="_blank" rel="noopener" class="glass-hover flex h-10 w-10 items-center justify-center rounded text-lg transition-colors" :class="member.accentClass" :title="member.secondaryLabel">🔗</a>
            </div>
          </div>
        </div>
      </div>
    </SectionTitle>

    <section class="relative overflow-hidden py-20">
      <div class="absolute inset-0 -z-10 bg-gradient-neon opacity-5"></div>
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="glass rounded-2xl p-12 md:p-16">
          <h2 class="mb-8 text-center">{{ aboutPage.manifestoSection.title }}</h2>
          <div class="space-y-6 leading-relaxed text-gray-700">
            <p v-for="entry in aboutPage.manifestoSection.entries" :key="entry.accentLabel">
              <span class="font-bold" :class="entry.accentClass">{{ entry.accentLabel }}</span>
              {{ ` ${entry.body}` }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import { useContent } from '@/composables/useContent'

const { aboutContent, aboutPage } = useContent()
</script>

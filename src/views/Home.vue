<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import Hero from '@/components/Hero.vue'
import ArtistsShowcase from '@/components/ArtistsShowcase.vue'
import FollowersMarquee from '@/components/FollowersMarquee.vue'
import AppDownloadCta from '@/components/AppDownloadCta.vue'
import { uiAssets } from '@/data/assets'
import { featuredArtists } from '@/data/artists'
import { sortedBlogPosts } from '@/data/blogPosts'

interface FaqItem {
  question: string
  answer: string
}

const faqs = ref<FaqItem[]>([
  {
    question: 'Como se que la comunidad es segura?',
    answer: 'Moderamos perfiles, revisamos solicitudes y mantenemos controles basicos para cuidar la comunidad.',
  },
  {
    question: 'Donde esta basada ILUMINATY?',
    answer: 'La plataforma se enfoca en Nueva York y en la escena urbana que une artistas, fans y promotores.',
  },
  {
    question: 'Como protegen mis datos?',
    answer: 'Aplicamos buenas practicas de manejo de informacion y evitamos exponer datos innecesarios.',
  },
  {
    question: 'Es ILUMINATY una red social?',
    answer: 'Es una plataforma para descubrir artistas, conectar creadores y dar visibilidad a proyectos urbanos.',
  },
  {
    question: 'Como me uno a la comunidad?',
    answer: 'Puedes solicitar acceso desde el CTA final y completar el formulario con tus datos y tu proyecto.',
  },
  {
    question: 'Puedo invitar amigos?',
    answer: 'Si. Puedes compartir la plataforma con otros artistas, colaboradores o promotores de tu red.',
  },
  {
    question: 'Cual es el limite de edad?',
    answer: 'Debes ser mayor de 18 anos para registrarte y solicitar acceso a la comunidad.',
  },
  {
    question: 'Puedo eliminar mi cuenta?',
    answer: 'Si. Puedes solicitar la eliminacion de tu cuenta y de tus datos cuando lo necesites.',
  },
  {
    question: 'ILUMINATY es gratis?',
    answer: 'Si. El acceso base puede solicitarse sin costo y luego se evalua segun el perfil del proyecto.',
  },
])

const featuredPosts = computed(() => sortedBlogPosts.slice(0, 3))

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Noticias: 'bg-neon-lime/20 text-neon-lime border border-neon-lime/30',
    'Análisis': 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
    Tutoriales: 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30',
    Entrevistas: 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30',
    Tendencias: 'bg-neon-orange/20 text-neon-orange border border-neon-orange/30',
    Colaboraciones: 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30',
  }

  return colors[category] || 'bg-gray-200 text-gray-700'
}

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
</script>

<template>
  <div class="bg-gray-50 text-neutral-900 relative overflow-x-clip">
    <div class="absolute top-20 left-10 w-72 h-72 bg-neon-violet/20 rounded-full mix-blend-color-screen blur-3xl -z-10 animate-float"></div>
    <div class="absolute bottom-20 right-10 w-72 h-72 bg-neon-lime/20 rounded-full mix-blend-color-screen blur-3xl -z-10 animate-float" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full mix-blend-screen blur-3xl -z-10" style="animation: float 4s ease-in-out infinite;"></div>

    <Hero />

    <div class="h-1 bg-gradient-to-r from-transparent via-neon-lime to-transparent opacity-3000"></div>

    <section class="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6">El futuro del arte urbano esta aqui</h2>
        <p class="text-center text-gray-600 text-base md:text-lg mb-12 md:mb-16">Trabajamos con los mejores sellos discograficos</p>
        <div class="relative">
          <div class="theme-fade-left-soft absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none md:hidden"></div>
          <div class="theme-fade-right-soft absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none md:hidden"></div>

          <div class="no-scrollbar flex overflow-x-auto gap-6 md:gap-10 lg:gap-16 items-center justify-start md:justify-center pb-4 md:pb-0" style="scroll-behavior: smooth; -webkit-overflow-scrolling: touch;">
            <div
              v-for="label in uiAssets.labelLogos"
              :key="label.id"
              class="theme-logo-wrapper flex-shrink-0"
            >
              <img :src="label.src" :alt="label.name" class="theme-logo h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain max-w-[120px] sm:max-w-[150px]" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 class="text-4xl font-bold text-gray-900 text-center">Artistas Destacados</h2>
      </div>
      <ArtistsShowcase :items="featuredArtists" />
    </section>

    <section class="py-24 relative overflow-hidden bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex justify-center">
            <div class="relative w-[500px] h-[500px] flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_15s_linear_infinite]">
                <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.2"></path>
                <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#gradient-outer)" stroke-width="2" stroke-linecap="round"></path>
                <defs>
                  <linearGradient id="gradient-outer" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06b6d4"></stop>
                    <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite_reverse]">
                <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.2"></path>
                <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#gradient-inner)" stroke-width="2" stroke-linecap="round"></path>
                <defs>
                  <linearGradient id="gradient-inner" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06b6d4"></stop>
                    <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <div class="theme-highlight-card relative z-10 w-64 h-auto p-6 rounded-2xl shadow-xl">
                <h3 class="text-xl font-bold mb-2">500+ Artistas</h3>
                <p class="text-sm">Conectados y creando arte urbano de clase mundial</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-gray-900">Una Comunidad que Crece</h2>
            <p class="text-lg text-gray-600">
              ILUMINATY es mas que una plataforma. Es un movimiento de artistas urbanos, productores y creadores que comparten una vision: democratizar el arte sin limites.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="text-neon-lime text-xl font-bold">✓</span>
                <span class="text-gray-700">Acceso a oportunidades de booking y colaboraciones</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-neon-lime text-xl font-bold">✓</span>
                <span class="text-gray-700">Herramientas para gestionar tu carrera artistica</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-neon-lime text-xl font-bold">✓</span>
                <span class="text-gray-700">Eventos exclusivos y mentorias de expertos</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-neon-lime text-xl font-bold">✓</span>
                <span class="text-gray-700">Visibilidad global para tu arte</span>
              </li>
            </ul>
            <RouterLink to="/contacto" class="theme-highlight-button inline-block mt-8 px-8 py-3 font-semibold rounded-lg transition-colors">
              Solicitar Acceso
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
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 id="faqs-title" class="text-3xl font-medium tracking-tight text-gray-900">Preguntas frecuentes</h2>
          <p class="mt-2 text-lg text-gray-600">
            Si tienes alguna otra pregunta,
            <RouterLink to="/contacto" class="theme-link-accent hover:underline">no dudes en escribirnos</RouterLink>.
          </p>
        </div>
        <ul role="list" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <li v-for="columnIndex in 3" :key="columnIndex">
            <ul role="list" class="space-y-10">
              <li
                v-for="faq in faqs.filter((_, index) => index % 3 === columnIndex - 1)"
                :key="faq.question"
              >
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
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neon-lime">Blog destacado</p>
            <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">Tres entradas para leer lo que mueve la escena urbana</h2>
            <p class="mt-4 text-lg text-gray-600">
              Historias, análisis y colaboraciones para que el visitante entienda que ILUMINATY también tiene profundidad editorial.
            </p>
          </div>
          <RouterLink to="/blog" class="inline-flex w-fit rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-neon-lime hover:text-neon-lime">
            Ver todo el blog
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RouterLink
            v-for="post in featuredPosts"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="group block"
          >
            <article class="theme-surface-card flex h-full flex-col overflow-hidden rounded-2xl border text-gray-900 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
              <div class="relative h-56 overflow-hidden bg-gray-200">
                <img :src="post.image" :alt="post.title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent"></div>
              </div>
              <div class="flex flex-1 flex-col p-6">
                <div class="mb-4">
                  <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold" :class="getCategoryColor(post.category)">
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
        <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Suscríbete al Blog</h2>
        <p class="mx-auto mb-8 max-w-2xl text-base text-gray-600 md:text-lg">
          Recibe las últimas historias, análisis y tendencias del arte urbano directamente en tu inbox.
        </p>
        <form class="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row" @submit.prevent>
          <input
            type="email"
            placeholder="Tu email"
            class="theme-newsletter-input w-full flex-1 rounded-2xl border px-4 py-3 outline-none transition-colors focus:border-neon-lime"
          >
          <button type="submit" class="btn-primary whitespace-nowrap rounded-xl px-8">
            Suscribirse
          </button>
        </form>
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

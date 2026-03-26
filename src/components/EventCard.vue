<template>
  <div ref="cardElement" class="group glass card-hover flex flex-col overflow-hidden rounded-xl md:flex-row">
    <div class="relative h-48 overflow-hidden md:h-auto md:w-1/3">
      <img :src="image" :alt="title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-bg to-dark-bg/30 md:from-transparent"></div>
    </div>

    <div class="flex flex-col justify-between p-6 md:w-2/3">
      <div>
        <div class="mb-3 flex flex-wrap gap-2">
          <span class="rounded-full border border-neon-violet/30 bg-neon-violet/20 px-3 py-1 text-xs font-semibold text-neon-violet">
            {{ venue }}
          </span>
          <span
            :class="[
              'rounded-full px-3 py-1 text-xs font-semibold',
              isSoldOut
                ? 'border border-red-500/30 bg-red-500/20 text-red-400'
                : 'border border-neon-lime/30 bg-neon-lime/20 text-neon-lime',
            ]"
          >
            {{ isSoldOut ? soldOutLabel : availableLabel }}
          </span>
        </div>

        <h3 class="mb-2 text-2xl font-bold transition-colors group-hover:text-neon-lime">{{ title }}</h3>
        <p class="mb-4 text-gray-600">{{ description }}</p>

        <div class="mb-4 flex flex-col gap-2 text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <svg viewBox="0 0 24 24" class="h-4 w-4 text-neon-lime" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 2v3m8-3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
            </svg>
            <span>{{ formatDate(date) }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg viewBox="0 0 24 24" class="h-4 w-4 text-neon-cyan" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2" />
            </svg>
            <span>{{ time }} | {{ doorsOpenPrefix }} {{ doorsOpen }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg viewBox="0 0 24 24" class="h-4 w-4 text-neon-violet" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M16.5 7.5c0-1.9-1.8-3.5-4.5-3.5S7.5 5.1 7.5 7c0 2 1.7 3 4.5 3s4.5 1 4.5 3c0 1.9-1.8 3.5-4.5 3.5S7.5 14.9 7.5 13" />
            </svg>
            <span>{{ price }}</span>
          </div>
        </div>

        <div class="mb-4">
          <p class="mb-2 text-xs text-gray-500">{{ artistsLabel }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="artist in artists" :key="artist" class="rounded bg-white/5 px-2 py-1 text-xs text-neon-lime">
              {{ artist }}
            </span>
          </div>
        </div>
      </div>

      <a
        v-if="!isSoldOut && ticketUrl"
        :href="ticketUrl"
        target="_blank"
        rel="noreferrer"
        class="btn-primary w-full text-center md:w-auto"
      >
        {{ buyTicketsLabel }}
      </a>
      <button
        v-else
        :class="[
          'btn-primary w-full md:w-auto',
          (isSoldOut || !ticketUrl) && 'cursor-not-allowed opacity-50',
        ]"
        :disabled="isSoldOut || !ticketUrl"
      >
        {{ actionLabel }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  title: string
  description: string
  date: string
  time: string
  doorsOpen: string
  venue: string
  price: string
  image: string
  artists: string[]
  isSoldOut?: boolean
  ticketUrl?: string
  artistsLabel?: string
  availableLabel?: string
  soldOutLabel?: string
  buyTicketsLabel?: string
  comingSoonLabel?: string
  doorsOpenPrefix?: string
}

const props = withDefaults(defineProps<Props>(), {
  artistsLabel: 'Artistas:',
  availableLabel: 'DISPONIBLE',
  soldOutLabel: 'SOLD OUT',
  buyTicketsLabel: 'Comprar Tickets',
  comingSoonLabel: 'Proximamente',
  doorsOpenPrefix: 'Puertas abren a las',
})

const cardElement = ref<HTMLElement>()

const actionLabel = computed(() =>
  props.isSoldOut ? props.soldOutLabel : (props.ticketUrl ? props.buyTicketsLabel : props.comingSoonLabel),
)

const formatDate = (dateStr: string) =>
  new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateStr))

onMounted(() => {
  if (cardElement.value) {
    gsap.fromTo(
      cardElement.value,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: cardElement.value,
          start: 'top bottom-=100px',
          toggleActions: 'play none none none',
          once: true,
        },
      },
    )
  }
})
</script>

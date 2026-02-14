<template>
  <div 
    ref="cardElement"
    class="group glass rounded-xl overflow-hidden card-hover flex flex-col md:flex-row"
  >
    <!-- Image -->
    <div class="h-48 md:h-auto md:w-1/3 overflow-hidden relative">
      <img 
        :src="image" 
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-dark-bg md:from-transparent to-dark-bg/30"></div>
    </div>

    <!-- Content -->
    <div class="p-6 md:w-2/3 flex flex-col justify-between">
      <div>
        <div class="flex flex-wrap gap-2 mb-3">
          <span class="px-3 py-1 rounded-full bg-neon-violet/20 text-neon-violet border border-neon-violet/30 text-xs font-semibold">
            {{ venue }}
          </span>
          <span 
            :class="[
              'px-3 py-1 rounded-full text-xs font-semibold',
              isSoldOut 
                ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                : 'bg-neon-lime/20 text-neon-lime border border-neon-lime/30'
            ]"
          >
            {{ isSoldOut ? 'SOLD OUT' : 'DISPONIBLE' }}
          </span>
        </div>

        <h3 class="text-2xl font-bold mb-2 group-hover:text-neon-lime transition-colors">{{ title }}</h3>
        <p class="text-gray-600 mb-4">{{ description }}</p>

        <!-- Date & Time -->
        <div class="flex flex-col gap-2 text-sm text-gray-600 mb-4">
          <div class="flex items-center gap-2">
            <span>📅</span>
            <span>{{ formatDate(date) }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>🕐</span>
            <span>{{ time }} | Puertas abren a las {{ doorsOpen }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>💰</span>
            <span>{{ price }}</span>
          </div>
        </div>

        <!-- Lineup -->
        <div class="mb-4">
          <p class="text-xs text-gray-500 mb-2">Artistas:</p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="artist in artists" 
              :key="artist"
              class="px-2 py-1 rounded bg-white/5 text-xs text-neon-lime"
            >
              {{ artist }}
            </span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <button 
        :class="[
          'w-full md:w-auto btn-primary',
          isSoldOut && 'opacity-50 cursor-not-allowed'
        ]"
        :disabled="isSoldOut"
      >
        {{ isSoldOut ? 'SOLD OUT' : 'Comprar Tickets' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
}

defineProps<Props>()

const cardElement = ref<HTMLElement>()

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

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
      }
    )
  }
})
</script>

<template>
  <div 
    ref="cardElement"
    class="group relative overflow-hidden rounded-xl glass card-hover"
  >
    <!-- Image Container -->
    <div class="relative h-64 overflow-hidden bg-dark-tertiary">
      <img 
        :src="image" 
        :alt="name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 group-hover:text-neon-lime transition-colors line-clamp-1">{{ name }}</h3>
      <p class="text-neon-violet font-semibold text-sm mb-3">{{ genre }}</p>
      <p class="text-gray-600 text-sm line-clamp-2 mb-4">{{ bio }}</p>

      <!-- Tags -->
      <div class="flex gap-2 flex-wrap mb-4">
        <span 
          v-for="tag in neighborhoods" 
          :key="tag"
          class="px-3 py-1 text-xs rounded-full bg-neon-lime/10 text-neon-lime border border-neon-lime/30"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Action Button -->
      <button 
        class="w-full btn-secondary py-2 text-sm"
        @click="$emit('view')"
      >
        Ver Perfil
      </button>
    </div>

    <!-- Floating Badge -->
    <div class="absolute top-4 right-4 w-12 h-12 rounded-full glass flex items-center justify-center font-bold text-lg">
      {{ badge }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  name: string
  genre: string
  bio: string
  image: string
  neighborhoods: string[]
  badge: string
}

defineProps<Props>()
defineEmits<{ view: [] }>()

const cardElement = ref<HTMLElement>()

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

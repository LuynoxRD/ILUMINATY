<template>
  <section class="relative overflow-hidden pt-12 md:pt-24 pb-16">
    

    <!-- Content Grid Layout -->
    <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Text Content (Left Column) -->
        <div class="text-center lg:text-left">
          <!-- Eyebrow -->
          <div ref="eyebrow" class="mb-6">
            <span class="inline-block px-4 py-2 rounded-full glass text-neon-lime font-semibold text-sm">
              ⚡ El futuro del arte urbano está aquí
            </span>
          </div>

          <!-- Main Title -->
          <h1 ref="titleElement" class="mb-6 leading-tight text-3xl md:text-4xl">
            <span class="neon-text">Descubre</span> el talento <br>
            <span class="text-gray-900">más revolucionario de NYC</span>
          </h1>

          <!-- Subtitle -->
          <p ref="subtitleElement" class="text-lg text-gray-600 mb-8">
            La plataforma definitiva para conectar con artistas urbanos, raperos, productores y creadores visuales de Nueva York. Exploración sin límites.
          </p>

          <!-- CTA Buttons -->
          <div ref="buttonsElement" class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <RouterLink to="/artistas" class="btn-primary">
              Explorar Artistas
            </RouterLink>
            <RouterLink to="/eventos" class="btn-secondary">
              Ver Eventos
            </RouterLink>
          </div>

          <!-- Stats -->
          <div ref="statsElement" class="grid grid-cols-3 gap-4 md:gap-6 border-t border-gray-300 pt-8">
            <div>
              <div class="text-3xl md:text-4xl font-bold neon-text mb-2">500+</div>
              <p class="text-gray-500 text-xs md:text-sm">Artistas</p>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-bold neon-text mb-2">1.2M</div>
              <p class="text-gray-500 text-xs md:text-sm">Seguidores</p>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-bold neon-text mb-2">85+</div>
              <p class="text-gray-500 text-xs md:text-sm">Eventos/Año</p>
            </div>
          </div>
        </div>

        <!-- Animation & Phone (Right Column) -->
        <div class="relative w-full h-[650px] flex items-center justify-center pointer-events-none overflow-visible [mask-image:linear-gradient(to_bottom,white_0%,white_80%,transparent_100%)]">
          <div class="absolute inset-0 flex items-center justify-center -z-10">
            <div class="relative w-full h-full flex items-center justify-center z-0">
              <svg viewBox="0 0 1026 1026" fill="none" class="absolute w-[800px] h-[800px] animate-[spin_15s_linear_infinite]">
                <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.8"></path>
                <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#grad-outer)" stroke-width="3" stroke-linecap="round"></path>
                <defs><linearGradient id="grad-outer" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#06b6d4"></stop><stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop></linearGradient></defs>
              </svg>
              <svg viewBox="0 0 1026 1026" fill="none" class="absolute w-[800px] h-[800px] animate-[spin_20s_linear_infinite_reverse]">
                <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.8"></path>
                <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#grad-inner)" stroke-width="3" stroke-linecap="round"></path>
                <defs><linearGradient id="grad-inner" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse"><stop stop-color="#06b6d4"></stop><stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop></linearGradient></defs>
              </svg>
              <svg viewBox="0 0 1026 1026" fill="none" class="absolute w-[600px] h-[600px] scale-75 animate-[spin_35s_linear_infinite_reverse]">
                <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="1"></path>
                <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#grad-third)" stroke-width="2" stroke-linecap="round"></path>
                <defs><linearGradient id="grad-third" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#06b6d4"></stop><stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop></linearGradient></defs>
              </svg>
            </div>
          </div>
          <div class="relative z-10 w-[366px] h-[729px] pointer-events-auto [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] mt-16 lg:mt-20">
            <div class="w-full h-full border-[16px] border-[#F2F2F2] bg-[#F2F2F2] rounded-[3.5rem] relative overflow-hidden shadow-2xl">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-20"></div>
              <div class="absolute top-2 right-6 w-12 h-3 bg-white/20 rounded-full z-20"></div>
              <img 
                src="https://i.postimg.cc/Yqt0hqsw/Ilumitany.png" 
                alt="App Preview" 
                class="w-full h-full object-cover object-top" 
              />
              <div class="absolute left-0 right-0 bottom-0 h-40 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_60%,transparent_100%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mt-24 md:mt-32">
      <svg class="w-6 h-6 text-neon-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const eyebrow = ref<HTMLElement>()
const titleElement = ref<HTMLElement>()
const subtitleElement = ref<HTMLElement>()
const buttonsElement = ref<HTMLElement>()
const statsElement = ref<HTMLElement>()

onMounted(() => {
  const tl = gsap.timeline()

  if (eyebrow.value) {
    tl.fromTo(
      eyebrow.value,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0
    )
  }

  if (titleElement.value) {
    tl.fromTo(
      titleElement.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.2
    )
  }

  if (subtitleElement.value) {
    tl.fromTo(
      subtitleElement.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.4
    )
  }

  if (buttonsElement.value) {
    tl.fromTo(
      buttonsElement.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.6
    )
  }

  if (statsElement.value) {
    tl.fromTo(
      statsElement.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.8
    )
  }
})
</script>

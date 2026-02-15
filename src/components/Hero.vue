<template>
  <section class="relative overflow-hidden pt-12 md:pt-40 pb-8">
    <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Text Content (Left Column) -->
        <div class="text-center lg:text-left flex flex-col items-center lg:items-start">
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
          <div ref="buttonsElement" class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <RouterLink to="/artistas" class="btn-primary">
              Explorar Artistas
            </RouterLink>
            <RouterLink to="/eventos" class="btn-secondary">
              Ver Eventos
            </RouterLink>
          </div>

          <!-- Stats -->
          <div ref="statsElement" class="grid grid-cols-3 gap-4 md:gap-6 border-t border-gray-300 pt-8 w-full max-w-md">
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
        <div class="relative w-full h-[650px] flex items-center justify-center overflow-visible">
          <!-- SVG Circles Animation -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative w-full h-full flex items-center justify-center">
              <!-- Outer Circle -->
              <svg viewBox="0 0 1026 1026" fill="none" class="absolute w-[800px] h-[800px] animate-[spin_15s_linear_infinite]">
                <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.8"></path>
                <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#grad-outer)" stroke-width="3" stroke-linecap="round"></path>
                <defs><linearGradient id="grad-outer" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#06b6d4"></stop><stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop></linearGradient></defs>
              </svg>
              
              <!-- Middle Circle -->
              <svg viewBox="0 0 1026 1026" fill="none" class="absolute w-[800px] h-[800px] animate-[spin_20s_linear_infinite_reverse]">
                <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.8"></path>
                <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#grad-inner)" stroke-width="3" stroke-linecap="round"></path>
                <defs><linearGradient id="grad-inner" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse"><stop stop-color="#06b6d4"></stop><stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop></linearGradient></defs>
              </svg>
    
            </div>
          </div>

<!-- Phone Mockup -->
<div class="relative z-10 w-[366px] h-[729px] mt-16 lg:mt-20 [mask-image:linear-gradient(to_bottom,black_20%,transparent_70%)]">
  <div class="w-full h-full border-[16px] border-[#F2F2F2] bg-[#F2F2F2] rounded-[3.5rem] relative overflow-hidden shadow-2xl">
    <!-- Notch -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-20"></div>
    
    <!-- Status Bar Elements -->
    <div class="absolute top-2 right-6 w-12 h-3 bg-white/20 rounded-full z-20"></div>
    
    <!-- Phone Screen Image -->
    <img 
      src="https://i.postimg.cc/Yqt0hqsw/Ilumitany.png" 
      alt="App Preview" 
      class="w-full h-full object-cover object-top" 
    />
  </div>
</div>
         
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'

const titleElement = ref<HTMLElement>()
const subtitleElement = ref<HTMLElement>()
const buttonsElement = ref<HTMLElement>()
const statsElement = ref<HTMLElement>()

onMounted(() => {
  const tl = gsap.timeline()

  if (titleElement.value) {
    tl.fromTo(
      titleElement.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      0
    )
  }

  if (subtitleElement.value) {
    tl.fromTo(
      subtitleElement.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.2
    )
  }

  if (buttonsElement.value) {
    tl.fromTo(
      buttonsElement.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.4
    )
  }

  if (statsElement.value) {
    tl.fromTo(
      statsElement.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.6
    )
  }
})
</script>


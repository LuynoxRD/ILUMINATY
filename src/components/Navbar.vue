<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
      'glass border-b border-gray-300'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 group">
          <div class="text-3xl font-bold animate-glow">⚡</div>
          <span class="text-xl font-display font-bold neon-text">ILUMINATY</span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <RouterLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="font-medium hover:text-neon-lime transition-colors"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide">
        <div v-show="mobileMenuOpen" class="md:hidden border-t border-gray-300 bg-white">
          <div class="flex flex-col items-start px-4 py-4 space-y-4">
            <RouterLink 
              v-for="link in navLinks" 
              :key="link.path"
              :to="link.path"
              class="block px-4 py-2 text-lg rounded-lg hover:bg-black/10 transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isVisible = ref(true)
const mobileMenuOpen = ref(false)
let lastScrollY = 0

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/artistas', label: 'Artistas' },
  { path: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { path: '/blog', label: 'Blog' },
  { path: '/eventos', label: 'Eventos' },
  { path: '/contacto', label: 'Contacto' },
]

const handleScroll = () => {
  const currentScroll = window.scrollY

  if (currentScroll <= 0) {
    isVisible.value = true
  } else if (currentScroll > lastScrollY) {
    // Scrolling down
    isVisible.value = false
  } else {
    // Scrolling up
    isVisible.value = true
  }

  lastScrollY = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  overflow: hidden;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 300px;
}
</style>

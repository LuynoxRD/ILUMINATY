<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
      'glass border-b border-gray-300',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <RouterLink to="/" class="group flex items-center gap-2">
          <LogoMark class-name="h-7 w-7 text-[#f90000] transition-transform duration-300 group-hover:scale-110" />
          <span class="text-xl font-display font-bold neon-text">ILUMINATY</span>
        </RouterLink>

        <div class="hidden items-center gap-8 md:flex">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="font-medium transition-colors hover:text-neon-lime"
          >
            {{ link.label }}
          </RouterLink>
          <ThemeSelector />
        </div>

        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="rounded-lg p-2 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
          </svg>
        </button>
      </div>

      <transition name="slide">
        <div v-show="mobileMenuOpen" class="border-t border-gray-300 bg-white md:hidden">
          <div class="flex flex-col items-start space-y-4 px-4 py-4">
            <ThemeSelector />
            <RouterLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="block rounded-lg px-4 py-2 text-lg transition-colors hover:bg-black/10"
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
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import LogoMark from './LogoMark.vue'
import ThemeSelector from './ThemeSelector.vue'

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

  if (currentScroll <= 0)
    isVisible.value = true
  else if (currentScroll > lastScrollY)
    isVisible.value = false
  else
    isVisible.value = true

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

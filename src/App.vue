<template>
  <div class="min-h-screen transition-colors duration-300">
    <Navbar />
    <main class="pt-20">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useSyncTheme } from './composables/useTheme'

useSyncTheme()

const CSP = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https://cdn.sanity.io; connect-src 'self' https://*.api.sanity.io https://*.apicdn.sanity.io; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'"

useHead({
  htmlAttrs: {
    lang: 'es',
  },
  meta: [
    { 'http-equiv': 'Content-Security-Policy', content: CSP },
  ],
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

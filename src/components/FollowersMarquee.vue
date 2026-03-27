<script setup lang="ts">
import { computed, ref } from 'vue'
import { useContent } from '@/composables/useContent'
import { toSafeHref } from '@/lib/safeUrl'

const { followerTestimonials, socialProfiles } = useContent()

const rowOne = followerTestimonials
const rowTwo = [...followerTestimonials].reverse()
const instagramUrl = toSafeHref(socialProfiles.instagram)
const stopScroll = ref(false)
const marqueeDuration = computed(() => '34s')
const touchStartX = ref(0)
const touchStartY = ref(0)
const touchHolding = ref(false)
const touchMoveThreshold = 12

const pauseScroll = () => {
  stopScroll.value = true
}

const resumeScroll = () => {
  stopScroll.value = false
}

const isCoarsePointer = () => {
  if (typeof window === 'undefined')
    return false

  return window.matchMedia('(hover: none), (pointer: coarse)').matches
}

const handleTouchStart = (event: TouchEvent) => {
  if (!isCoarsePointer())
    return

  if ((event.target as HTMLElement | null)?.closest('a, button, input, select, textarea, label'))
    return

  const touch = event.touches[0]

  if (!touch)
    return

  touchStartX.value = touch.clientX
  touchStartY.value = touch.clientY
  touchHolding.value = true
  pauseScroll()
}

const handleTouchMove = (event: TouchEvent) => {
  if (!touchHolding.value)
    return

  const touch = event.touches[0]

  if (!touch)
    return

  const deltaX = Math.abs(touch.clientX - touchStartX.value)
  const deltaY = Math.abs(touch.clientY - touchStartY.value)

  if (deltaX > touchMoveThreshold || deltaY > touchMoveThreshold) {
    touchHolding.value = false
    resumeScroll()
  }
}

const handleTouchEnd = () => {
  touchHolding.value = false
  resumeScroll()
}
</script>

<template>
  <section class="py-24 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <h2 class="text-4xl font-bold text-gray-900 text-center">Lo que dicen nuestros seguidores</h2>
      <p class="mt-4 text-center text-gray-600 text-lg">Comentarios reales sobre la app, Instagram y la comunidad ILUMINATY.</p>
    </div>

    <div
      class="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
      @focusin="pauseScroll"
      @focusout="resumeScroll"
      @touchstart.passive="handleTouchStart"
      @touchmove.passive="handleTouchMove"
      @touchend="handleTouchEnd"
      @touchcancel="handleTouchEnd"
    >
      <div class="theme-fade-left-soft absolute left-0 top-0 h-full w-8 sm:w-10 md:w-12 lg:w-14 xl:w-20 z-10 pointer-events-none"></div>
      <div class="marquee-inner flex w-max transform-gpu pt-10 pb-5" :style="{ animationDuration: marqueeDuration, animationPlayState: stopScroll ? 'paused' : 'running' }">
        <div v-for="(card, index) in rowOne" :key="`${card.handle}-${card.date}-${index}`" class="theme-surface-card p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 border">
          <div class="flex gap-2">
            <img class="size-11 rounded-full object-cover" :src="card.image" :alt="card.name">
            <div class="flex flex-col">
              <div class="flex items-center gap-1">
                <p class="font-medium text-gray-900">{{ card.name }}</p>
                <svg class="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                </svg>
              </div>
              <span class="text-xs text-slate-500">{{ card.handle }}</span>
            </div>
          </div>
          <p class="text-sm py-4 text-gray-800">{{ card.message }}</p>
          <div class="flex items-center justify-between text-slate-500 text-xs">
            <div class="flex items-center gap-1">
              <span>Publicado en</span>
              <a v-if="instagramUrl" :href="instagramUrl" target="_blank" rel="noreferrer" class="hover:text-pink-500">Instagram</a>
              <span v-else>Instagram</span>
            </div>
            <p>{{ card.date }}</p>
          </div>
        </div>
        <div v-for="(card, index) in rowOne" :key="`${card.handle}-${card.date}-clone-${index}`" aria-hidden="true" class="theme-surface-card p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 border">
          <div class="flex gap-2">
            <img class="size-11 rounded-full object-cover" :src="card.image" alt="">
            <div class="flex flex-col">
              <div class="flex items-center gap-1">
                <p class="font-medium text-gray-900">{{ card.name }}</p>
                <svg class="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                </svg>
              </div>
              <span class="text-xs text-slate-500">{{ card.handle }}</span>
            </div>
          </div>
          <p class="text-sm py-4 text-gray-800">{{ card.message }}</p>
          <div class="flex items-center justify-between text-slate-500 text-xs">
            <div class="flex items-center gap-1">
              <span>Publicado en</span>
              <span>Instagram</span>
            </div>
            <p>{{ card.date }}</p>
          </div>
        </div>
      </div>
      <div class="theme-fade-right-soft absolute right-0 top-0 h-full w-8 sm:w-10 md:w-12 lg:w-14 xl:w-40 z-10 pointer-events-none"></div>
    </div>

    <div
      class="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
      @focusin="pauseScroll"
      @focusout="resumeScroll"
      @touchstart.passive="handleTouchStart"
      @touchmove.passive="handleTouchMove"
      @touchend="handleTouchEnd"
      @touchcancel="handleTouchEnd"
    >
      <div class="theme-fade-left-soft absolute left-0 top-0 h-full w-8 sm:w-10 md:w-12 lg:w-14 xl:w-20 z-10 pointer-events-none"></div>
      <div class="marquee-inner marquee-reverse flex w-max transform-gpu pt-5 pb-10" :style="{ animationDuration: marqueeDuration, animationPlayState: stopScroll ? 'paused' : 'running' }">
        <div v-for="(card, index) in rowTwo" :key="`${card.handle}-${card.date}-reverse-${index}`" class="theme-surface-card p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 border">
          <div class="flex gap-2">
            <img class="size-11 rounded-full object-cover" :src="card.image" :alt="card.name">
            <div class="flex flex-col">
              <div class="flex items-center gap-1">
                <p class="font-medium text-gray-900">{{ card.name }}</p>
                <svg class="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                </svg>
              </div>
              <span class="text-xs text-slate-500">{{ card.handle }}</span>
            </div>
          </div>
          <p class="text-sm py-4 text-gray-800">{{ card.message }}</p>
          <div class="flex items-center justify-between text-slate-500 text-xs">
            <div class="flex items-center gap-1">
              <span>Publicado en</span>
              <a v-if="instagramUrl" :href="instagramUrl" target="_blank" rel="noreferrer" class="hover:text-pink-500">Instagram</a>
              <span v-else>Instagram</span>
            </div>
            <p>{{ card.date }}</p>
          </div>
        </div>
        <div v-for="(card, index) in rowTwo" :key="`${card.handle}-${card.date}-reverse-clone-${index}`" aria-hidden="true" class="theme-surface-card p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 border">
          <div class="flex gap-2">
            <img class="size-11 rounded-full object-cover" :src="card.image" alt="">
            <div class="flex flex-col">
              <div class="flex items-center gap-1">
                <p class="font-medium text-gray-900">{{ card.name }}</p>
                <svg class="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                </svg>
              </div>
              <span class="text-xs text-slate-500">{{ card.handle }}</span>
            </div>
          </div>
          <p class="text-sm py-4 text-gray-800">{{ card.message }}</p>
          <div class="flex items-center justify-between text-slate-500 text-xs">
            <div class="flex items-center gap-1">
              <span>Publicado en</span>
              <span>Instagram</span>
            </div>
            <p>{{ card.date }}</p>
          </div>
        </div>
      </div>
      <div class="theme-fade-right-soft absolute right-0 top-0 h-full w-8 sm:w-10 md:w-12 lg:w-14 xl:w-40 z-10 pointer-events-none"></div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marqueeScroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

.marquee-inner {
  animation: marqueeScroll 34s linear infinite;
}

.marquee-reverse {
  animation-direction: reverse;
}

@media (prefers-reduced-motion: reduce) {
  .marquee-inner {
    animation: none;
  }
}
</style>

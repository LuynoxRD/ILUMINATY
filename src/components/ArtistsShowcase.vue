<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useContent } from '@/composables/useContent'

interface ArtistItem {
  id: string
  name: string
  genre: string
  image: string
}

const props = defineProps<{
  items: ArtistItem[]
}>()
const emit = defineEmits<{ view: [artistId: string] }>()
const { artistsPage } = useContent()

const marqueeInnerRef = ref<HTMLElement | null>(null)
const touchStartX = ref(0)
const touchStartY = ref(0)
const touchHolding = ref(false)
const touchMoveThreshold = 12

interface MarqueeTween {
  pause(): MarqueeTween
  resume(): MarqueeTween
  kill(): MarqueeTween
}

let marqueeTween: MarqueeTween | null = null

const pauseScroll = () => marqueeTween?.pause()
const resumeScroll = () => marqueeTween?.resume()

const isCoarsePointer = () => {
  if (typeof window === 'undefined')
    return false
  return window.matchMedia('(hover: none), (pointer: coarse)').matches
}

const handleTouchStart = (event: TouchEvent) => {
  if (!isCoarsePointer())
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

onMounted(async () => {
  const el = marqueeInnerRef.value
  if (!el)
    return
  const { default: gsap } = await import('gsap')
  if (!marqueeInnerRef.value)
    return
  const totalWidth = el.scrollWidth / 2
  marqueeTween = gsap.fromTo(
    el,
    { x: 0 },
    {
      x: -totalWidth,
      duration: Math.max(props.items.length, 1) * 4.2,
      ease: 'none',
      repeat: -1,
    },
  ) as unknown as MarqueeTween
})

onUnmounted(() => {
  marqueeTween?.kill()
  marqueeTween = null
})
</script>

<template>
  <div
    class="overflow-hidden w-full relative max-w-6xl mx-auto"
    @mouseenter="pauseScroll"
    @mouseleave="resumeScroll"
    @focusin="pauseScroll"
    @focusout="resumeScroll"
    @touchstart.passive="handleTouchStart"
    @touchmove.passive="handleTouchMove"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
  >
    <div class="theme-fade-left-soft absolute left-0 top-0 h-full w-8 sm:w-10 md:w-12 lg:w-14 xl:w-20 z-10 pointer-events-none" />
    <div
      ref="marqueeInnerRef"
      class="flex w-fit"
    >
      <div class="flex">
        <button
          v-for="artist in items"
          :key="artist.id"
          type="button"
          :aria-label="`Ver perfil de ${artist.name}`"
          aria-haspopup="dialog"
          class="group relative mx-4 h-[20rem] w-56 shrink-0 overflow-hidden bg-transparent p-0 text-left transition-transform duration-300 ease-out hover:scale-[0.98]"
          @click="emit('view', artist.id)"
        >
          <img :src="artist.image" :alt="artist.name" loading="lazy" class="w-full h-full object-cover" />
          <div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 w-full h-full bg-black/50">
            <div class="text-center">
              <p class="text-white text-lg font-semibold">{{ artist.name }}</p>
              <p class="text-white/80 text-sm mt-2">{{ artist.genre }}</p>
              <p class="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-neon-lime">{{ artistsPage.actions.viewProfileLabel }}</p>
            </div>
          </div>
        </button>
      </div>
      <div class="flex" aria-hidden="true">
        <button
          v-for="artist in items"
          :key="`dup-${artist.id}`"
          type="button"
          tabindex="-1"
          class="group relative mx-4 h-[20rem] w-56 shrink-0 overflow-hidden bg-transparent p-0 text-left transition-transform duration-300 ease-out hover:scale-[0.98]"
          @click="emit('view', artist.id)"
        >
          <img :src="artist.image" :alt="artist.name" loading="lazy" class="w-full h-full object-cover" />
          <div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 w-full h-full bg-black/50">
            <div class="text-center">
              <p class="text-white text-lg font-semibold">{{ artist.name }}</p>
              <p class="text-white/80 text-sm mt-2">{{ artist.genre }}</p>
              <p class="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-neon-lime">{{ artistsPage.actions.viewProfileLabel }}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
    <div class="theme-fade-right-soft absolute right-0 top-0 h-full w-8 sm:w-10 md:w-12 lg:w-14 xl:w-40 z-10 pointer-events-none" />
  </div>
</template>

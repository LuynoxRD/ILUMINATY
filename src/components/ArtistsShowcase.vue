<script setup lang="ts">
import { computed, ref } from 'vue'
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

const stopScroll = ref(false)
const repeatedItems = computed(() => [...props.items, ...props.items])
const duration = computed(() => `${Math.max(props.items.length, 1) * 4200}ms`)
</script>

<template>
  <div
    class="overflow-hidden w-full relative max-w-6xl mx-auto"
    @mouseenter="stopScroll = true"
    @mouseleave="stopScroll = false"
  >
    <div class="theme-fade-left-soft absolute left-0 top-0 h-full w-20 z-10 pointer-events-none" />
    <div
      class="marquee-inner flex w-fit"
      :style="{ animationPlayState: stopScroll ? 'paused' : 'running', animationDuration: duration }"
    >
      <div class="flex">
        <button
          v-for="(artist, index) in repeatedItems"
          :key="`${artist.id}-${index}`"
          type="button"
          class="group relative mx-4 h-[20rem] w-56 overflow-hidden bg-transparent p-0 text-left transition-all duration-300 hover:scale-90"
          @click="emit('view', artist.id)"
        >
          <img :src="artist.image" :alt="artist.name" class="w-full h-full object-cover" />
          <div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/30">
            <div class="text-center">
              <p class="text-white text-lg font-semibold">{{ artist.name }}</p>
              <p class="text-white/80 text-sm mt-2">{{ artist.genre }}</p>
              <p class="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-neon-lime">{{ artistsPage.actions.viewProfileLabel }}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
    <div class="theme-fade-right-soft absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none" />
  </div>
</template>

<style scoped>
.marquee-inner {
  animation-name: marqueeScroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes marqueeScroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>

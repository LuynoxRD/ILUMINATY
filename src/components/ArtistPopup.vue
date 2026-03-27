<template>
  <Teleport to="body">
    <Transition name="artist-popup">
      <div
        v-if="show && artist"
        class="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-black/70 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6 md:px-6 lg:py-8"
        @click.self="emit('close')"
      >
        <div class="relative flex w-full max-w-md flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl max-h-[calc(100dvh-2rem)] dark:border-white/10 dark:bg-zinc-950 sm:max-h-[calc(100dvh-3rem)]">
          <button
            type="button"
            class="absolute right-4 top-4 z-10 rounded-full border border-white/70 bg-white/90 p-2 text-gray-500 shadow-sm ring-1 ring-black/5 transition-colors hover:text-gray-900 dark:border-white/20 dark:bg-zinc-950/90 dark:text-zinc-400 dark:ring-white/10 dark:hover:text-white"
            aria-label="Cerrar perfil del artista"
            @click="emit('close')"
          >
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <div class="artist-popup-hero relative h-36 shrink-0 overflow-hidden bg-gray-200">
            <img :src="artist.image" :alt="artist.name" class="h-full w-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
          </div>

          <div class="artist-popup-avatar pointer-events-none absolute left-1/2 top-36 z-[1] -translate-x-1/2 -translate-y-1/2">
            <img :src="artist.image" :alt="artist.name" class="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl dark:border-zinc-950">
          </div>

          <div class="artist-popup-scroll relative flex-1 min-h-0 overflow-y-auto px-6 pb-6 pt-16">

            <div class="text-center">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neon-lime">{{ artist.genre }}</p>
              <h2 class="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{{ artist.name }}</h2>
              <p class="mt-2 text-sm text-gray-500 dark:text-zinc-400">{{ artist.locationLabel }}</p>
            </div>

            <p class="mt-6 text-center text-sm leading-7 text-gray-700 dark:text-zinc-300">
              {{ artist.bio }}
            </p>

            <div v-if="artist.neighborhoods.length" class="mt-6 flex flex-wrap justify-center gap-2">
              <span
                v-for="area in artist.neighborhoods"
                :key="area"
                class="rounded-full border border-neon-lime/30 bg-neon-lime/10 px-3 py-1 text-xs font-semibold text-neon-lime"
              >
                {{ area }}
              </span>
            </div>

            <div v-for="section in linkSections" :key="section.title" class="mt-8">
              <div class="mb-3 flex items-center gap-3">
                <div class="h-px flex-1 bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10"></div>
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-zinc-400">
                  {{ section.title }}
                </p>
                <div class="h-px flex-1 bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10"></div>
              </div>

              <div class="grid gap-3">
                <a
                  v-for="link in section.items"
                  :key="`${section.title}-${link.label}`"
                  :href="link.href"
                  target="_blank"
                  rel="noreferrer"
                  class="group flex items-center justify-between rounded-2xl border border-black/5 bg-zinc-50/85 px-4 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-neon-lime/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:bg-white/[0.07]"
                >
                  <span class="flex items-center gap-3">
                    <span
                      class="artist-link-icon flex h-11 w-11 items-center justify-center rounded-full border border-white/90 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                      :style="{ backgroundColor: link.brandColor, color: '#ffffff' }"
                      v-html="link.iconSvg"
                    />

                    <span class="text-left">
                      <span class="block">{{ link.label }}</span>
                      <span class="block text-xs font-medium text-zinc-500 dark:text-zinc-400">{{ link.meta }}</span>
                    </span>
                  </span>

                  <svg viewBox="0 0 24 24" class="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-zinc-500" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { useContent } from '@/composables/useContent'
import { toSafeHref } from '@/lib/safeUrl'
import type { ArtistDirectoryEntry } from '@/types/content'

const props = defineProps<{
  show: boolean
  artist: ArtistDirectoryEntry | null
}>()

const emit = defineEmits<{ close: [] }>()
const { artistsPage } = useContent()
let lockedScrollY = 0

interface PopupLink {
  label: string
  href: string
  iconSvg: string
  brandColor: string
  meta: string
}

const spotifySvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
  </svg>
`

const youtubeSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
  </svg>
`

const appleMusicSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="m10.995 0 .573.001q.241 0 .483.007c.35.01.705.03 1.051.093.352.063.68.166.999.329a3.36 3.36 0 0 1 1.47 1.468c.162.32.265.648.328 1 .063.347.084.7.093 1.051q.007.241.007.483l.001.573v5.99l-.001.573q0 .241-.008.483c-.01.35-.03.704-.092 1.05a3.5 3.5 0 0 1-.33 1 3.36 3.36 0 0 1-1.468 1.468 3.5 3.5 0 0 1-1 .33 7 7 0 0 1-1.05.092q-.241.007-.483.008l-.573.001h-5.99l-.573-.001q-.241 0-.483-.008a7 7 0 0 1-1.052-.092 3.6 3.6 0 0 1-.998-.33 3.36 3.36 0 0 1-1.47-1.468 3.6 3.6 0 0 1-.328-1 7 7 0 0 1-.093-1.05Q.002 11.81 0 11.568V5.005l.001-.573q0-.241.007-.483c.01-.35.03-.704.093-1.05a3.6 3.6 0 0 1 .329-1A3.36 3.36 0 0 1 1.9.431 3.5 3.5 0 0 1 2.896.1 7 7 0 0 1 3.95.008Q4.19.002 4.432 0h.573zm-.107 2.518-4.756.959H6.13a.66.66 0 0 0-.296.133.5.5 0 0 0-.16.31c-.004.027-.01.08-.01.16v5.952c0 .14-.012.275-.106.39-.095.115-.21.15-.347.177l-.31.063c-.393.08-.65.133-.881.223a1.4 1.4 0 0 0-.519.333 1.25 1.25 0 0 0-.332.995c.031.297.166.582.395.792.156.142.35.25.578.296.236.047.49.031.858-.043.196-.04.38-.102.555-.205a1.4 1.4 0 0 0 .438-.405 1.5 1.5 0 0 0 .233-.55c.042-.202.052-.386.052-.588V6.347c0-.276.08-.35.302-.404.024-.005 3.954-.797 4.138-.833.257-.049.378.025.378.294v3.524c0 .14-.001.28-.096.396-.094.115-.211.15-.348.178l-.31.062c-.393.08-.649.133-.88.223a1.4 1.4 0 0 0-.52.334 1.26 1.26 0 0 0-.34.994c.03.297.174.582.404.792a1.2 1.2 0 0 0 .577.294c.237.048.49.03.858-.044.197-.04.381-.098.556-.202a1.4 1.4 0 0 0 .438-.405q.173-.252.233-.549a2.7 2.7 0 0 0 .044-.589V2.865c0-.273-.143-.443-.4-.42-.04.003-.383.064-.424.073" />
  </svg>
`

const soundCloudSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2" />
    <path fill-rule="evenodd" d="M9 3v10H8V3z" />
    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z" />
  </svg>
`

const instagramSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
`

const tikTokSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
  </svg>
`

const xSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
`

const createLink = (
  label: string,
  url: string | undefined,
  iconSvg: string,
  brandColor: string,
  meta: string,
): PopupLink | null => {
  const href = toSafeHref(url)

  if (!href)
    return null

  return { label, href, iconSvg, brandColor, meta }
}

const musicLinks = computed(() => {
  if (!props.artist)
    return []

  return [
    createLink('Spotify', props.artist.links.spotify, spotifySvg, '#1ED760', artistsPage.popup.spotifyMeta),
    createLink('YouTube', props.artist.links.youtube, youtubeSvg, '#FF0033', artistsPage.popup.youtubeMeta),
    createLink('Apple Music', props.artist.links.appleMusic, appleMusicSvg, '#FA243C', artistsPage.popup.appleMusicMeta),
    createLink('SoundCloud', props.artist.links.soundcloud, soundCloudSvg, '#FF5500', artistsPage.popup.soundcloudMeta),
  ].filter((link): link is PopupLink => Boolean(link))
})

const socialLinks = computed(() => {
  if (!props.artist)
    return []

  return [
    createLink('Instagram', props.artist.links.instagram, instagramSvg, '#E4405F', artistsPage.popup.instagramMeta),
    createLink('TikTok', props.artist.links.tiktok, tikTokSvg, '#111111', artistsPage.popup.tiktokMeta),
    createLink('X', props.artist.links.x, xSvg, '#111111', artistsPage.popup.xMeta),
  ].filter((link): link is PopupLink => Boolean(link))
})

const linkSections = computed(() =>
  [
    { title: artistsPage.popup.musicTitle, items: musicLinks.value },
    { title: artistsPage.popup.socialTitle, items: socialLinks.value },
  ].filter(section => section.items.length),
)

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.show)
    emit('close')
}

const lockBodyScroll = () => {
  if (typeof document === 'undefined' || typeof window === 'undefined')
    return

  lockedScrollY = window.scrollY
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.top = `-${lockedScrollY}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
  document.body.style.width = '100%'
}

const unlockBodyScroll = () => {
  if (typeof document === 'undefined' || typeof window === 'undefined')
    return

  const offsetTop = Number.parseInt(document.body.style.top || '0', 10)

  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.width = ''
  window.scrollTo({ top: Math.abs(offsetTop), left: 0, behavior: 'auto' })
}

watch(
  () => props.show,
  (visible) => {
    if (visible)
      lockBodyScroll()
    else
      unlockBodyScroll()
  },
  { immediate: true },
)

onMounted(() => {
  if (typeof window !== 'undefined')
    window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  unlockBodyScroll()

  if (typeof window !== 'undefined')
    window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.artist-popup-enter-active,
.artist-popup-leave-active {
  transition: opacity 0.22s ease;
}

.artist-popup-enter-from,
.artist-popup-leave-to {
  opacity: 0;
}

.artist-popup-scroll {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;
}

@media (max-height: 760px) {
  .artist-popup-hero {
    height: 7.5rem;
  }

  .artist-popup-avatar {
    top: 7.5rem;
  }

  .artist-popup-avatar img {
    width: 5.5rem;
    height: 5.5rem;
  }

  .artist-popup-scroll {
    padding-top: 4.75rem;
    padding-bottom: 1.25rem;
  }
}

.artist-link-icon :deep(svg) {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  fill: currentColor;
}

.artist-link-icon :deep(path) {
  fill: currentColor;
}
</style>

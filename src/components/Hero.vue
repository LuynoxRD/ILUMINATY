<template>
  <section class="relative overflow-hidden pb-8 pt-12 md:pt-40">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 ref="titleElement" class="mb-6 text-3xl leading-tight md:text-4xl">
            <span class="neon-text">{{ homePage.hero.highlightedWord }}</span><br>
            <span class="text-gray-900">{{ homePage.hero.titleRemainder }}</span>
          </h1>

          <p ref="subtitleElement" class="mb-8 text-lg text-gray-600">
            {{ homePage.hero.description }}
          </p>

          <div ref="buttonsElement" class="mb-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <RouterLink :to="homePage.hero.primaryCta.href" class="btn-primary">
              {{ homePage.hero.primaryCta.label }}
            </RouterLink>
            <RouterLink :to="homePage.hero.secondaryCta.href" class="btn-secondary">
              {{ homePage.hero.secondaryCta.label }}
            </RouterLink>
          </div>

          <div ref="statsElement" class="grid w-full max-w-md grid-cols-3 gap-4 border-t border-gray-300 pt-8 md:gap-6">
            <div v-for="(stat, index) in homePage.hero.stats" :key="stat.label">
              <div class="neon-text mb-2 text-3xl font-bold md:text-4xl">
                {{ formatStat(statValues[index] || 0, stat.format, stat.suffix) }}
              </div>
              <p class="text-xs text-gray-500 md:text-sm">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="relative flex min-h-[520px] w-full items-center justify-center overflow-visible sm:min-h-[650px] lg:min-h-[760px]">
          <div class="pointer-events-none absolute left-1/2 top-4 h-[680px] w-[680px] -translate-x-[38%] stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_22%,transparent_78%)] sm:top-10 sm:h-[860px] sm:w-[860px] sm:-translate-x-1/2 lg:-top-12 lg:ml-12 lg:h-[1026px] lg:w-[1026px] lg:-translate-x-1/2 xl:-top-8 xl:ml-0">
            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_15s_linear_infinite]">
              <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.7"></path>
              <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#hero-grad-outer)" stroke-linecap="round" stroke-width="3"></path>
              <defs>
                <linearGradient id="hero-grad-outer" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#06b6d4"></stop>
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite_reverse]">
              <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.7"></path>
              <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#hero-grad-inner)" stroke-linecap="round" stroke-width="3"></path>
              <defs>
                <linearGradient id="hero-grad-inner" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#06b6d4"></stop>
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="-mx-4 h-[448px] w-full px-9 [mask-image:linear-gradient(to_bottom,white_46%,transparent_86%)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
            <div class="relative mx-auto aspect-[366/729] max-w-[300px] sm:max-w-[366px]">
              <div class="absolute inset-y-[calc(1/729*100%)] left-[calc(7/366*100%)] right-[calc(5/366*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
              <div class="theme-hero-phone-screen absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] h-[calc(686/729*100%)] w-[calc(318/366*100%)] overflow-hidden">
                <img
                  :src="uiAssets.appPreview"
                  alt="App Preview"
                  class="absolute inset-x-0 -top-[38px] h-[calc(100%+38px)] w-full object-cover object-top"
                >
                <div class="theme-hero-phone-overlay pointer-events-none absolute inset-0 hidden dark:block"></div>
              </div>
              <svg viewBox="0 0 366 729" aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full fill-gray-100">
                <path fill="#F2F2F2" fill-rule="evenodd" clip-rule="evenodd" d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"></path>
                <rect x="154" y="29" width="56" height="5" rx="2.5" fill="#D4D4D4"></rect>
              </svg>
            </div>
          </div>

          <div class="theme-hero-scene-fade pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[62%]"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'
import { useContent } from '@/composables/useContent'

const { homePage, uiAssets } = useContent()

const titleElement = ref<HTMLElement>()
const subtitleElement = ref<HTMLElement>()
const buttonsElement = ref<HTMLElement>()
const statsElement = ref<HTMLElement>()

const statValues = ref([0, 0, 0])
const counterTweens: gsap.core.Tween[] = []

const formatStat = (value: number, format = 'plain', suffix = '') => {
  if (format === 'millions') {
    return `${(value / 1_000_000).toFixed(1).replace('.0', '')}M`
  }

  return `${value}${suffix}`
}

const animateCounters = () => {
  homePage.hero.stats.forEach((stat, index) => {
    const target = { value: 0 }
    counterTweens.push(
      gsap.to(target, {
        value: stat.value,
        duration: index === 1 ? 2.1 : 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          statValues.value[index] = Math.round(target.value)
        },
      }),
    )
  })
}

onMounted(() => {
  const tl = gsap.timeline()

  if (titleElement.value) {
    tl.fromTo(titleElement.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0)
  }

  if (subtitleElement.value) {
    tl.fromTo(subtitleElement.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
  }

  if (buttonsElement.value) {
    tl.fromTo(buttonsElement.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
  }

  if (statsElement.value) {
    tl.fromTo(
      statsElement.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, onStart: animateCounters },
      0.6,
    )
  }
})

onUnmounted(() => {
  counterTweens.forEach(tween => tween.kill())
})
</script>

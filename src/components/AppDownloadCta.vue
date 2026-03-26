<template>
  <section class="relative overflow-hidden bg-gray-50 py-20">
    <div class="absolute inset-0 bg-gradient-neon opacity-5"></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex flex-col items-center justify-between gap-y-12 lg:min-h-[640px] lg:flex-row lg:pt-12">
        <div class="flex h-full items-center justify-center lg:max-w-xl">
          <div>
            <h3 class="text-center text-3xl font-semibold text-gray-900 lg:text-left lg:text-5xl">
              {{ homePage.appCta.title }}
            </h3>
            <p class="my-5 text-center text-lg text-gray-600 md:text-xl lg:my-8 lg:text-left">
              {{ homePage.appCta.description }}
            </p>
            <div class="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a :href="homePage.appCta.iosButton.href" class="theme-store-button flex min-w-[185px] items-center justify-center gap-3 rounded-2xl border px-5 py-3">
                <svg viewBox="0 0 24 24" class="theme-store-icon h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
                  <path d="M16.7 12.8c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.6-1.6-3.1-1.6-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.4 1 8.4.7 1 1.5 2.1 2.6 2 .9 0 1.3-.6 2.5-.6 1.1 0 1.5.6 2.5.6 1 0 1.7-1 2.4-2 .8-1.1 1.1-2.2 1.1-2.3 0 0-2.1-.8-2.1-3.4Zm-2.1-6.1c.6-.7 1.1-1.7 1-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-1 2.6 1 .1 2-.5 2.6-1.2Z"></path>
                </svg>
                <span class="theme-store-copy text-sm font-semibold">{{ homePage.appCta.iosButton.label }}</span>
              </a>

              <a :href="homePage.appCta.androidButton.href" class="theme-store-button flex min-w-[185px] items-center justify-center gap-3 rounded-2xl border px-5 py-3">
                <svg viewBox="0 0 24 24" class="theme-store-icon h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
                  <path d="M17.6 9.5H6.4v8.4c0 .6.5 1.1 1.1 1.1h.8V22h1.7v-3h4V22h1.7v-3h.8c.6 0 1.1-.5 1.1-1.1V9.5ZM8.2 6.5l-.9-1.6.7-.4.9 1.6c.8-.4 1.7-.6 2.6-.6.9 0 1.8.2 2.6.6l.9-1.6.7.4-.9 1.6c1.6.9 2.7 2.4 2.9 4.2H5.3c.2-1.8 1.3-3.3 2.9-4.2Zm1.5 1.8a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Zm4.6 0a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM4.7 10.1c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9s.9-.4.9-.9V11c0-.5-.4-.9-.9-.9Zm14.6 0c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9s.9-.4.9-.9V11c0-.5-.4-.9-.9-.9Z"></path>
                </svg>
                <span class="theme-store-copy text-sm font-semibold">{{ homePage.appCta.androidButton.label }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="mx-auto h-[360px] w-full object-cover object-top sm:w-[400px] lg:h-[640px] lg:w-full lg:max-w-xl lg:object-contain">
          <div class="relative flex h-full w-full items-center justify-center overflow-hidden">
            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_15s_linear_infinite]">
              <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.22"></path>
              <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#app-gradient-outer)" stroke-linecap="round" stroke-width="2"></path>
              <defs>
                <linearGradient id="app-gradient-outer" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#06b6d4"></stop>
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite_reverse]">
              <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.22"></path>
              <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#app-gradient-inner)" stroke-linecap="round" stroke-width="2"></path>
              <defs>
                <linearGradient id="app-gradient-inner" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#06b6d4"></stop>
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>

            <img
              :src="uiAssets.appPreview"
              alt="Mobile phone mockup"
              class="relative z-10 h-full w-full object-contain transition-transform duration-500 hover:scale-105"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContent } from '@/composables/useContent'

const { homePage, uiAssets } = useContent()
</script>

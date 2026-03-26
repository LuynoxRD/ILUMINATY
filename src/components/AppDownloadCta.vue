<template>
  <section class="relative py-20 bg-gray-50 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-neon opacity-5"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative flex flex-col items-center justify-between gap-y-12 lg:min-h-[640px] lg:flex-row lg:pt-12">
        <div class="flex h-full items-center justify-center lg:max-w-xl">
          <div>
            <h3 class="text-center text-3xl font-semibold text-gray-900 lg:text-left lg:text-5xl">
              Descarga la app y sigue el pulso de la escena urbana
            </h3>
            <p class="my-5 text-center text-lg text-gray-600 md:text-xl lg:my-8 lg:text-left">
              Descubre artistas, revisa eventos y conecta con la comunidad ILUMINATY desde tu telefono.
            </p>
            <div class="grid gap-2 md:flex md:justify-center lg:justify-start">
              <button class="theme-store-button h-11 px-5 rounded-md border transition-transform hover:scale-[1.01]">
                Download for iOS
              </button>
              <button class="theme-store-button h-11 px-5 rounded-md border transition-transform hover:scale-[1.01]">
                Download for Android
              </button>
            </div>
          </div>
        </div>

        <div class="mx-auto h-[360px] w-full object-cover object-top sm:w-[400px] lg:h-[640px] lg:w-full lg:max-w-xl lg:object-contain">
          <div class="relative h-full w-full flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_15s_linear_infinite]">
              <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.22"></path>
              <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#app-gradient-outer)" stroke-width="2" stroke-linecap="round"></path>
              <defs>
                <linearGradient id="app-gradient-outer" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#06b6d4"></stop>
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite_reverse]">
              <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.22"></path>
              <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#app-gradient-inner)" stroke-width="2" stroke-linecap="round"></path>
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
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { uiAssets } from '@/data/assets'
</script>

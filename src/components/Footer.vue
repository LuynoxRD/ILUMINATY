<template>
  <footer class="border-t border-gray-300 bg-dark-secondary/50 backdrop-blur-xl">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="mb-8">
        <div class="mb-8 md:mb-0 md:grid md:grid-cols-4 md:gap-8">
          <div class="mb-8 md:mb-0">
            <h3 class="neon-text mb-4 flex items-center gap-2 text-2xl font-bold">
              <LogoMark class-name="h-6 w-6 text-[#f90000]" />
              <span>{{ siteSettings.brandName }}</span>
            </h3>
            <p class="text-base leading-7 text-gray-600">{{ siteSettings.footerDescription }}</p>
          </div>

          <div v-for="group in siteSettings.footerLinkGroups" :key="group.title" class="hidden md:block">
            <h4 class="mb-4 text-lg font-semibold">{{ group.title }}</h4>
            <ul class="space-y-3 text-base text-gray-600">
              <li v-for="link in group.links" :key="link.href">
                <RouterLink :to="link.href" class="transition-colors hover:text-neon-lime">{{ link.label }}</RouterLink>
              </li>
            </ul>
          </div>

          <div class="hidden md:block">
            <h4 class="mb-4 text-lg font-semibold">{{ siteSettings.footerFollowLabel }}</h4>
            <SocialLinks />
          </div>
        </div>

        <div class="mb-8 grid grid-cols-2 gap-8 md:hidden">
          <div v-for="group in siteSettings.footerLinkGroups" :key="group.title">
            <h4 class="mb-4 text-lg font-semibold">{{ group.title }}</h4>
            <ul class="space-y-3 text-base text-gray-600">
              <li v-for="link in group.links" :key="link.href">
                <RouterLink :to="link.href" class="transition-colors hover:text-neon-lime">{{ link.label }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="md:hidden">
          <h4 class="mb-4 text-lg font-semibold">{{ siteSettings.footerFollowLabel }}</h4>
          <SocialLinks />
        </div>
      </div>

      <div class="border-t border-gray-300 pt-8">
        <div class="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>{{ siteSettings.footerCopyright }}</p>
          <div class="flex flex-col items-center gap-3 md:items-end">
            <a
              v-if="repoHref"
              :href="repoHref"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-full border border-neon-lime/30 bg-neon-lime/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neon-lime transition-colors hover:border-neon-lime hover:bg-neon-lime/15"
            >
              <svg viewBox="0 0 16 16" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              {{ siteSettings.footerRepositoryLink?.label }}
            </a>

            <p class="flex flex-wrap items-center justify-center gap-1 md:justify-end">
              {{ siteSettings.footerCreditPrefix }}
              <LogoMark class-name="h-4 w-4 text-[#f90000]" />
              <a v-if="creditHref" :href="creditHref" target="_blank" rel="noopener" class="hover:text-neon-lime">
                {{ siteSettings.footerCreditName }}
              </a>
              <span v-else>{{ siteSettings.footerCreditName }}</span>
              <span>{{ siteSettings.footerCreditConnector }}</span>
              <a v-if="technologyHref" :href="technologyHref" target="_blank" rel="noopener" class="hover:text-neon-lime">
                {{ siteSettings.footerTechnologyName }}
              </a>
              <span v-else>{{ siteSettings.footerTechnologyName }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useContent } from '@/composables/useContent'
import { toSafeHref } from '@/lib/safeUrl'
import LogoMark from './LogoMark.vue'
import SocialLinks from './SocialLinks.vue'

const { siteSettings } = useContent()
const creditHref = computed(() => toSafeHref(siteSettings.footerCreditHref))
const technologyHref = computed(() => toSafeHref(siteSettings.footerTechnologyHref))
const repoHref = computed(() => toSafeHref(siteSettings.footerRepositoryLink?.href))
</script>

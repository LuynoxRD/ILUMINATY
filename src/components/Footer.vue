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
          <p class="flex items-center gap-1">
            {{ siteSettings.footerCreditPrefix }}
            <LogoMark class-name="h-4 w-4 text-[#f90000]" />
            <a v-if="siteSettings.footerCreditHref" :href="siteSettings.footerCreditHref" target="_blank" rel="noopener" class="hover:text-neon-lime">
              {{ siteSettings.footerCreditName }}
            </a>
            <span v-else>{{ siteSettings.footerCreditName }}</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useContent } from '@/composables/useContent'
import LogoMark from './LogoMark.vue'
import SocialLinks from './SocialLinks.vue'

const { siteSettings } = useContent()
</script>

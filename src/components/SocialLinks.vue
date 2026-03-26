<script setup lang="ts">
import { useContent } from '@/composables/useContent'

const { socialProfiles } = useContent()

withDefaults(
  defineProps<{
    size?: 'md' | 'lg'
    justify?: 'start' | 'center' | 'end'
  }>(),
  {
    size: 'md',
    justify: 'start',
  },
)
</script>

<template>
  <div
    class="flex gap-4"
    :class="{
      'justify-start': justify === 'start',
      'justify-center': justify === 'center',
      'justify-end': justify === 'end',
    }"
  >
    <a
      :href="socialProfiles.instagram"
      target="_blank"
      rel="noopener"
      :class="['social-icon-brand social-icon-instagram', size === 'lg' ? 'social-icon-large' : '']"
      aria-label="Instagram"
    >
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect>
        <circle cx="12" cy="12" r="4.2"></circle>
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"></circle>
      </svg>
    </a>
    <a
      :href="socialProfiles.x"
      target="_blank"
      rel="noopener"
      :class="['social-icon-brand social-icon-neutral', size === 'lg' ? 'social-icon-large' : '']"
      aria-label="X"
    >
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M18.9 3H21l-6.53 7.47L22 21h-5.9l-4.63-6.05L6.2 21H4.1l6.98-7.98L2 3h6.05l4.19 5.52L18.9 3Zm-1.03 16.24h1.64L7.16 4.67H5.4l12.47 14.57Z"></path>
      </svg>
    </a>
    <a
      :href="socialProfiles.youtube"
      target="_blank"
      rel="noopener"
      :class="['social-icon-brand social-icon-youtube', size === 'lg' ? 'social-icon-large' : '']"
      aria-label="YouTube"
    >
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.39.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.89.58 9.39.58 9.39.58s7.5 0 9.39-.58a3 3 0 0 0 2.11-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.4 3.7-6.4 3.7Z"></path>
      </svg>
    </a>
    <a
      :href="socialProfiles.tiktok"
      target="_blank"
      rel="noopener"
      :class="['social-icon-brand social-icon-neutral', size === 'lg' ? 'social-icon-large' : '']"
      aria-label="TikTok"
    >
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M16.55 3c.18 1.5 1.03 2.96 2.28 3.9 1.02.77 2.22 1.13 3.4 1.16v3.27a9.27 9.27 0 0 1-3.9-.92v5.7c0 3.96-3.17 7.14-7.1 7.14A7.12 7.12 0 0 1 4.1 16.1a7.11 7.11 0 0 1 8.4-6.99v3.38a3.77 3.77 0 0 0-1.26-.22 3.8 3.8 0 0 0 0 7.6c2.07 0 3.75-1.7 3.75-3.79V3h1.56Z"></path>
      </svg>
    </a>
  </div>
</template>

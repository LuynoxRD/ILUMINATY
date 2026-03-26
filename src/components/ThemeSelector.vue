<template>
  <div
    ref="dropdownRef"
    class="theme-dropdown"
  >
    <button
      type="button"
      class="theme-trigger"
      @click.stop="isOpen = !isOpen"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
    >
      <span class="theme-trigger-icon" :class="`theme-trigger-icon-${iconMode}`" />
      <span>{{ currentLabel }}</span>
      <svg class="h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': isOpen }" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z" clip-rule="evenodd" />
      </svg>
    </button>

    <div v-show="isOpen" class="theme-menu" role="menu">
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        class="theme-menu-item"
        :class="{ 'theme-menu-item-active': mode === option.value }"
        role="menuitemradio"
        :aria-checked="mode === option.value"
        @click="selectMode(option.value)"
      >
        <span class="theme-trigger-icon" :class="`theme-trigger-icon-${option.icon}`" />
        <span>{{ option.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { mode, appliedMode } = useTheme()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const options = [
  { value: 'light', label: 'Light', icon: 'light' },
  { value: 'dark', label: 'Dark', icon: 'dark' },
  { value: 'auto', label: 'System', icon: 'system' },
] as const

const currentLabel = computed(() => options.find((option) => option.value === mode.value)?.label ?? 'System')
const iconMode = computed(() => {
  if (mode.value === 'auto')
    return 'system'

  return appliedMode.value
})

const selectMode = (value: 'light' | 'dark' | 'auto') => {
  mode.value = value
  isOpen.value = false
}

const handlePointerDown = (event: MouseEvent) => {
  if (!dropdownRef.value?.contains(event.target as Node))
    isOpen.value = false
}

onMounted(() => {
  window.addEventListener('mousedown', handlePointerDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousedown', handlePointerDown)
})
</script>

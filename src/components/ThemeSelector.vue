<template>
  <div
    ref="dropdownRef"
    class="theme-dropdown"
  >
    <button
      ref="triggerRef"
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

    <div
      ref="menuRef"
      v-show="isOpen"
      class="theme-menu"
      :style="menuStyle"
      role="menu"
    >
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
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { mode, appliedMode } = useTheme()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLButtonElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const menuShift = ref(0)

const options = [
  { value: 'light', label: 'Light', icon: 'light' },
  { value: 'dark', label: 'Dark', icon: 'dark' },
  { value: 'system', label: 'System', icon: 'system' },
] as const

const currentLabel = computed(() => options.find((option) => option.value === mode.value)?.label ?? 'System')
const iconMode = computed(() => {
  if (mode.value === 'system')
    return 'system'

  return appliedMode.value
})
const menuStyle = computed(() => ({
  '--theme-menu-shift': `${menuShift.value}px`,
}))

const selectMode = (value: 'light' | 'dark' | 'system') => {
  mode.value = value
  isOpen.value = false
}

const handlePointerDown = (event: MouseEvent) => {
  if (!dropdownRef.value?.contains(event.target as Node))
    isOpen.value = false
}

const updateMenuPosition = () => {
  if (!isOpen.value || !triggerRef.value || !menuRef.value)
    return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const menuRect = menuRef.value.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const gutter = viewportWidth < 640 ? 12 : 16
  const centeredLeft = triggerRect.left + (triggerRect.width / 2) - (menuRect.width / 2)
  const maxLeft = Math.max(gutter, viewportWidth - gutter - menuRect.width)
  const clampedLeft = Math.min(Math.max(centeredLeft, gutter), maxLeft)

  menuShift.value = clampedLeft - centeredLeft
}

const handleViewportChange = () => {
  updateMenuPosition()
}

watch(isOpen, async (open) => {
  if (!open) {
    menuShift.value = 0
    return
  }

  await nextTick()
  updateMenuPosition()
})

onMounted(() => {
  window.addEventListener('mousedown', handlePointerDown)
  window.addEventListener('resize', handleViewportChange)
  window.visualViewport?.addEventListener('resize', handleViewportChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousedown', handlePointerDown)
  window.removeEventListener('resize', handleViewportChange)
  window.visualViewport?.removeEventListener('resize', handleViewportChange)
})
</script>

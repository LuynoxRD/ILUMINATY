import { computed, watchEffect } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'

type ThemeMode = 'light' | 'dark' | 'system'

const storageKey = 'iluminaty-theme'

const normalizeMode = (value: string | null | undefined): ThemeMode => {
  if (value === 'light' || value === 'dark' || value === 'system')
    return value

  if (value === 'auto')
    return 'system'

  return 'system'
}

const storedMode = useStorage<string>(storageKey, 'system')
const preferredDark = usePreferredDark()

const mode = computed<ThemeMode>({
  get: () => normalizeMode(storedMode.value),
  set: (value) => {
    storedMode.value = value
  },
})

const systemMode = computed<'light' | 'dark'>(() => (preferredDark.value ? 'dark' : 'light'))
const appliedMode = computed<'light' | 'dark'>(() => (mode.value === 'system' ? systemMode.value : mode.value))

export function useTheme() {
  return {
    mode,
    appliedMode,
    systemMode,
  }
}

export function useSyncTheme() {
  watchEffect(() => {
    if (typeof document === 'undefined')
      return

    const root = document.documentElement

    root.classList.remove('light', 'dark')
    root.classList.add(appliedMode.value)
    root.setAttribute('data-theme', appliedMode.value)
    root.setAttribute('data-theme-preference', mode.value)
  })
}

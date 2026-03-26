import { computed, watchEffect } from 'vue'
import { useColorMode } from '@vueuse/core'

type ThemeMode = 'light' | 'dark' | 'auto'

const colorMode = useColorMode({
  selector: 'html',
  attribute: 'data-theme',
  initialValue: 'auto',
  storageKey: 'iluminaty-theme',
})

const mode = computed<ThemeMode>({
  get: () => colorMode.store.value as ThemeMode,
  set: (value) => {
    colorMode.store.value = value
  },
})

const appliedMode = computed<'light' | 'dark'>(() =>
  mode.value === 'auto'
    ? colorMode.system.value
    : (colorMode.state.value as 'light' | 'dark')
)

watchEffect(() => {
  if (typeof document === 'undefined')
    return

  const root = document.documentElement

  root.classList.remove('light', 'dark')
  root.classList.add(appliedMode.value)
  root.setAttribute('data-theme', mode.value)
})

export function useTheme() {
  return {
    mode,
    appliedMode,
    systemMode: colorMode.system,
  }
}

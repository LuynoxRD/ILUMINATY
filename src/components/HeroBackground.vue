<template>
  <canvas ref="canvas" class="block h-full w-full"></canvas>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface CanvasPoint {
  x: number
  baseY: number
  color: string
  phase: number
}

const canvas = ref<HTMLCanvasElement | null>(null)
const rows = 18
const cols = 36
const points: CanvasPoint[] = []
let context: CanvasRenderingContext2D | null = null
let frameId: number | null = null
let width = 0
let height = 0

const readPalette = () => {
  if (typeof window === 'undefined')
    return ['#06b6d4']

  const styles = window.getComputedStyle(document.documentElement)

  return [
    styles.getPropertyValue('--hero-bg-dot-1').trim(),
    styles.getPropertyValue('--hero-bg-dot-2').trim(),
    styles.getPropertyValue('--hero-bg-dot-3').trim(),
    styles.getPropertyValue('--hero-bg-dot-4').trim(),
    styles.getPropertyValue('--hero-bg-dot-5').trim(),
    styles.getPropertyValue('--hero-bg-dot-6').trim(),
  ].filter(Boolean)
}

const rebuildScene = () => {
  const element = canvas.value

  if (!element || !context)
    return

  const dpr = window.devicePixelRatio || 1
  width = element.offsetWidth
  height = element.offsetHeight
  element.width = width * dpr
  element.height = height * dpr
  context.setTransform(dpr, 0, 0, dpr, 0, 0)

  const palette = readPalette()
  const marginX = width * 0.08
  const marginY = height * 0.12
  const gridW = width - marginX * 2
  const gridH = height - marginY * 2

  points.length = 0

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      points.push({
        x: marginX + (x / (cols - 1)) * gridW + (Math.random() - 0.5) * 2,
        baseY: marginY + (y / (rows - 1)) * gridH,
        color: palette[Math.floor(Math.random() * palette.length)] || '#06b6d4',
        phase: Math.random() * Math.PI * 2,
      })
    }
  }
}

const animate = (time: number) => {
  if (!context)
    return

  context.clearRect(0, 0, width, height)

  for (const point of points) {
    const offset = Math.sin(time / 900 + point.phase) * 8
    context.beginPath()
    context.arc(point.x, point.baseY + offset, 2.2, 0, Math.PI * 2)
    context.fillStyle = point.color
    context.globalAlpha = 0.7
    context.fill()
  }

  context.globalAlpha = 1
  frameId = window.requestAnimationFrame(animate)
}

const handleResize = () => {
  rebuildScene()
}

onMounted(() => {
  context = canvas.value?.getContext('2d') || null

  if (!context)
    return

  rebuildScene()
  frameId = window.requestAnimationFrame(animate)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (frameId !== null)
    window.cancelAnimationFrame(frameId)

  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
canvas {
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
</style>

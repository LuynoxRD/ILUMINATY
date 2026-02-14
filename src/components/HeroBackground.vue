<template>
  <canvas ref="canvas" class="w-full h-full block"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)

function randomColor() {
  // Paleta sutil: azul, violeta, naranja, amarillo
  const palette = [
    '#3B82F6', // azul
    '#6366F1', // violeta
    '#F59E42', // naranja
    '#FACC15', // amarillo
    '#A5B4FC', // azul claro
    '#C7D2FE', // violeta claro
  ]
  return palette[Math.floor(Math.random() * palette.length)]
}

onMounted(() => {
  const c = canvas.value
  const ctx = c.getContext('2d')
  const dpr = window.devicePixelRatio || 1
  const width = c.offsetWidth
  const height = c.offsetHeight
  c.width = width * dpr
  c.height = height * dpr
  ctx.scale(dpr, dpr)

  // Configuración de puntos
  const points = []
  const rows = 18
  const cols = 36
  const marginX = width * 0.08
  const marginY = height * 0.12
  const gridW = width - marginX * 2
  const gridH = height - marginY * 2
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      points.push({
        x: marginX + (x / (cols - 1)) * gridW + (Math.random() - 0.5) * 2,
        y: marginY + (y / (rows - 1)) * gridH + (Math.random() - 0.5) * 2,
        baseY: marginY + (y / (rows - 1)) * gridH,
        color: randomColor(),
        phase: Math.random() * Math.PI * 2,
      })
    }
  }

  function animate(t) {
    ctx.clearRect(0, 0, width, height)
    for (const p of points) {
      // Animación sutil tipo "wave"
      const offset = Math.sin(t / 900 + p.phase) * 8
      ctx.beginPath()
      ctx.arc(p.x, p.baseY + offset, 2.2, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = 0.7
      ctx.fill()
      ctx.globalAlpha = 1
    }
    requestAnimationFrame(animate)
  }
  animate(0)
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

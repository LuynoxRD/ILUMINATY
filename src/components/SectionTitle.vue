<template>
  <section class="py-12 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Title -->
      <div class="mb-12 text-center">
        <span class="text-neon-lime font-semibold text-sm uppercase tracking-widest">{{ subtitle }}</span>
        <h2 class="mt-4 mb-4">{{ title }}</h2>
        <p v-if="description" class="text-gray-600 max-w-2xl mx-auto text-lg">{{ description }}</p>
      </div>

      <!-- Content Slot -->
      <div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  description?: string
}

defineProps<Props>()
</script>

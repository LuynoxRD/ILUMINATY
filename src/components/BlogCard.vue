<template>
  <article class="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-md">
    <img v-if="cover" :src="cover" :alt="title" class="w-full h-40 object-cover" />
    <div class="flex-1 flex flex-col p-5">
      <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{{ title }}</h3>
      <p class="text-gray-700 text-base mb-4 line-clamp-3">{{ excerpt }}</p>
      <div class="mt-auto flex items-center gap-2 text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <span>{{ author }}</span>
        <span>·</span>
        <span>{{ new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' }) }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  excerpt: String,
  author: String,
  date: String,
  cover: String,
})
</script>

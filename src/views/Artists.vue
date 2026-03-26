<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-dark py-20">
      <div class="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-neon-lime/10 blur-3xl"></div>
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4">Directorio de Artistas</h1>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">
          Explora los perfiles de 500+ artistas urbanos de Nueva York. Filtra por género, barrio y descubre tu próximo favorito.
        </p>
      </div>
    </section>

    <section class="theme-filter-shell z-40 border-b border-gray-300 backdrop-blur-xl md:sticky md:top-20">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label class="mb-2 block text-sm font-semibold">Género</label>
            <select
              v-model="selectedGenre"
              class="theme-filter-control w-full rounded-lg border px-4 py-2 outline-none transition-colors focus:border-neon-lime focus:ring-2 focus:ring-neon-lime/20"
            >
              <option value="">Todos los géneros</option>
              <option value="hip-hop">Hip-Hop / Rap</option>
              <option value="electronic">Electrónico</option>
              <option value="visual">Arte Visual</option>
              <option value="r-b">R&B / Soul</option>
              <option value="reggaeton">Reggaeton</option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold">Barrio</label>
            <select v-model="selectedNeighborhood" class="theme-filter-control w-full">
              <option value="">Todos los barrios</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Queens">Queens</option>
              <option value="Bronx">Bronx</option>
              <option value="Harlem">Harlem</option>
              <option value="Williamsburg">Williamsburg</option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold">Buscar</label>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Nombre del artista..."
              class="theme-filter-control w-full"
            >
          </div>
        </div>
      </div>
    </section>

    <SectionTitle subtitle="Comunidad Urbana" :title="`${filteredArtists.length} Artistas Encontrados`">
      <div v-if="filteredArtists.length > 0" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ArtistCard
          v-for="artist in filteredArtists"
          :key="artist.id"
          :name="artist.name"
          :genre="artist.genre"
          :bio="artist.bio"
          :image="artist.image"
          :neighborhoods="artist.neighborhoods"
          :badge="artist.badge"
          @view="selectArtist(artist.id)"
        />
      </div>

      <div v-else class="py-20 text-center">
        <div class="mb-4 text-6xl">🔍</div>
        <h2 class="mb-2 text-2xl font-bold text-gray-900">No se encontraron artistas</h2>
        <p class="text-gray-600">
          Intenta cambiar los filtros para ver más resultados.
        </p>
      </div>
    </SectionTitle>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ArtistCard from '@/components/ArtistCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { artistDirectoryEntries } from '@/data/artists'

const selectedGenre = ref('')
const selectedNeighborhood = ref('')
const searchQuery = ref('')

const filteredArtists = computed(() =>
  artistDirectoryEntries.filter((artist) => {
    const matchesGenre = !selectedGenre.value || artist.genre.toLowerCase().includes(selectedGenre.value)
    const matchesNeighborhood = !selectedNeighborhood.value || artist.neighborhoods.includes(selectedNeighborhood.value)
    const matchesSearch = !searchQuery.value || artist.name.toLowerCase().includes(searchQuery.value.toLowerCase())

    return matchesGenre && matchesNeighborhood && matchesSearch
  }),
)

const selectArtist = (_artistId: string) => {}
</script>

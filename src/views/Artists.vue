<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-dark py-20">
      <div class="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-neon-lime/10 blur-3xl"></div>
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4">{{ artistsPage.heroTitle }}</h1>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">
          {{ artistsPage.heroDescription }}
        </p>
      </div>
    </section>

    <section class="theme-filter-shell z-40 border-b border-gray-300 backdrop-blur-xl md:sticky md:top-20">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label class="mb-2 block text-sm font-semibold">{{ artistsPage.filters.genreLabel }}</label>
            <select
              v-model="selectedGenre"
              class="theme-filter-control w-full rounded-lg border px-4 py-2 outline-none transition-colors focus:border-neon-lime focus:ring-2 focus:ring-neon-lime/20"
            >
              <option value="">{{ artistsPage.filters.allGenresLabel }}</option>
              <option v-for="option in artistsPage.genreOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold">{{ artistsPage.filters.neighborhoodLabel }}</label>
            <select v-model="selectedNeighborhood" class="theme-filter-control w-full">
              <option value="">{{ artistsPage.filters.allNeighborhoodsLabel }}</option>
              <option v-for="option in artistsPage.neighborhoodOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold">{{ artistsPage.filters.searchLabel }}</label>
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="artistsPage.filters.searchPlaceholder"
              class="theme-filter-control w-full"
            >
          </div>
        </div>
      </div>
    </section>

    <SectionTitle :subtitle="artistsPage.resultsSection.subtitle" :title="`${filteredArtists.length} ${artistsPage.resultsSection.countSuffix}`">
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
          @view="openArtist(artist.id)"
        />
      </div>

      <div v-else class="py-20 text-center">
        <div class="mb-4 text-6xl">{{ artistsPage.emptyState.icon }}</div>
        <h2 class="mb-2 text-2xl font-bold text-gray-900">{{ artistsPage.emptyState.title }}</h2>
        <p class="text-gray-600">
          {{ artistsPage.emptyState.description }}
        </p>
      </div>
    </SectionTitle>

    <ArtistPopup :show="Boolean(selectedArtist)" :artist="selectedArtist" @close="closeArtist" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ArtistCard from '@/components/ArtistCard.vue'
import ArtistPopup from '@/components/ArtistPopup.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { useContent } from '@/composables/useContent'

const { artistDirectoryEntries, artistsPage } = useContent()
const route = useRoute()
const router = useRouter()

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

const selectedArtist = computed(() => {
  const rawArtistId = route.query.artist
  const artistId = Array.isArray(rawArtistId) ? rawArtistId[0] : rawArtistId

  if (!artistId)
    return null

  return artistDirectoryEntries.find(artist => artist.id === artistId) || null
})

const openArtist = (artistId: string) => {
  router.replace({
    query: {
      ...route.query,
      artist: artistId,
    },
  })
}

const closeArtist = () => {
  const { artist: _artist, ...restQuery } = route.query

  router.replace({
    query: restQuery,
  })
}

watch(
  () => route.query.artist,
  (artistId) => {
    if (!artistId)
      return

    const normalizedArtistId = Array.isArray(artistId) ? artistId[0] : artistId
    const exists = artistDirectoryEntries.some(artist => artist.id === normalizedArtistId)

    if (!exists)
      closeArtist()
  },
  { immediate: true },
)
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-20 bg-gradient-dark relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-neon-lime/10 rounded-full blur-3xl -z-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="mb-4">Directorio de Artistas</h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Explora los perfiles de 500+ artistas urbanos de Nueva York. Filtra por género, barrio y descubre tu próximo favorito.
        </p>
      </div>
    </section>

    <!-- Filters -->
    <section class="sticky top-20 z-40 bg-dark-bg/80 backdrop-blur-xl border-b border-gray-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Genre Filter -->
          <div>
            <label class="block text-sm font-semibold mb-2">Género</label>
            <select 
              v-model="selectedGenre"
              class="w-full"
            >
              <option value="">Todos los géneros</option>
              <option value="hip-hop">Hip-Hop / Rap</option>
              <option value="electronic">Electrónico</option>
              <option value="visual">Arte Visual</option>
              <option value="r-b">R&B / Soul</option>
              <option value="reggaeton">Reggaeton</option>
            </select>
          </div>

          <!-- Neighborhood Filter -->
          <div>
            <label class="block text-sm font-semibold mb-2">Barrio</label>
            <select 
              v-model="selectedNeighborhood"
              class="w-full"
            >
              <option value="">Todos los barrios</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Queens">Queens</option>
              <option value="Bronx">Bronx</option>
              <option value="Harlem">Harlem</option>
              <option value="Williamsburg">Williamsburg</option>
            </select>
          </div>

          <!-- Search -->
          <div>
            <label class="block text-sm font-semibold mb-2">Buscar</label>
            <input 
              v-model="searchQuery"
              type="text"
              placeholder="Nombre del artista..."
              class="w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Artists Grid -->
    <SectionTitle
      subtitle="Comunidad Urbana"
      :title="`${filteredArtists.length} Artistas Encontrados`"
    >
      <div v-if="filteredArtists.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <div v-else class="text-center py-20">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="mb-2">No se encontraron artistas</h3>
        <p class="text-gray-600">
          Intenta cambiar los filtros para ver más resultados.
        </p>
      </div>
    </SectionTitle>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ArtistCard from '@/components/ArtistCard.vue'

interface Artist {
  id: string
  name: string
  genre: string
  bio: string
  image: string
  neighborhoods: string[]
  badge: string
}

const selectedGenre = ref('')
const selectedNeighborhood = ref('')
const searchQuery = ref('')

const allArtists = ref<Artist[]>([
  {
    id: '1',
    name: 'King Cipher',
    genre: 'Hip-Hop / Rap',
    bio: 'Rapero veterano de Harlem. Sus líricas crudas sobre la realidad urbana lo han convertido en una leyenda del East Side.',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/06165055/nicki-minaj1.jpg',
    neighborhoods: ['Harlem', 'East Side'],
    badge: '🎤',
  },
  {
    id: '2',
    name: 'Luna Vibe Collective',
    genre: 'Electronic',
    bio: 'Colectivo de Brooklyn especializado en beats experimentales. Perfecto para sesiones nocturnas.',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/31121301/Cappadonna.jpg',
    neighborhoods: ['Brooklyn', 'Williamsburg'],
    badge: '🎧',
  },
  {
    id: '3',
    name: 'Spray Angel',
    genre: 'Visual',
    bio: 'Artista visual de Queens. Sus murales han decorado las paredes más icónicas del bajo Manhattan.',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/31121202/Mase.jpg',
    neighborhoods: ['Queens', 'Manhattan'],
    badge: '🎨',
  },
  {
    id: '4',
    name: 'Soul Maya',
    genre: 'R&B / Soul',
    bio: 'Cantante y productora del Bronx. Su voz cautivadora fusiona soul clásico con producción moderna.',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/31121053/DJ-Premier-1536x1180.jpg',
    neighborhoods: ['Bronx', 'Manhattan'],
    badge: '🎵',
  },
  {
    id: '5',
    name: 'DJ Remix Master',
    genre: 'Hip-Hop / Rap',
    bio: 'Productor de Manhattan especializado en beats de hip-hop. Ha trabajado con artistas de fama internacional.',
    image: 'https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/07/06164918/50-cent-biggest-beefs-getty-jordan-darville.jpg',
    neighborhoods: ['Manhattan'],
    badge: '🎚️',
  },
  {
    id: '6',
    name: 'Street Poet Alex',
    genre: 'Hip-Hop / Rap',
    bio: 'Poeta de performativo de Brooklyn. Sus palabras despiertan conciencias en cada esquina de la ciudad.',
    image: 'https://www.lacuarta.com/resizer/v2/LIFDI7QRDRHHFE5YQCFGTMJDZU.jpg?auth=5a57bfa2a1cd5b2188a24d1a882f9269fcb97c1191aa25621c669f2f0a5fef41&focal=772%2C336&width=800&height=420&quality=70',
    neighborhoods: ['Brooklyn', 'Queens'],
    badge: '📝',
  },
  {
    id: '7',
    name: 'Visual Nexus',
    genre: 'Visual',
    bio: 'Colectivo de artistas visuales del Williamsburg. Crean instalaciones inmersivas que trasforman espacios.',
    image: 'https://www.lacuarta.com/resizer/v2/3UJ6QDRPT5DZJN77XCOD2CFLAU.jpg?auth=5b37cee387ad3b6b605854c581168f3049848dd677402e404b505d04c6bfb7c9&smart=true&width=800&height=450&quality=70',
    neighborhoods: ['Williamsburg', 'Brooklyn'],
    badge: '✨',
  },
  {
    id: '8',
    name: 'Reggaeton Fuego',
    genre: 'Reggaeton',
    bio: 'Productor y DJ del Harlem. Mezcla reggaeton clásico con innovación sonora contemporánea.',
    image: 'https://gritaradio.com/wp-content/uploads/2021/04/75477DC5-B74F-40A6-86BA-3121D9751AE3.jpeg',
    neighborhoods: ['Harlem', 'Manhattan'],
    badge: '🔥',
  },
  {
    id: '9',
    name: 'Techno Prophet',
    genre: 'Electronic',
    bio: 'Productor de música electrónica del East Village. Sus tracks hipnóticos dominan las pistas de baile más underground.',
    image: 'https://los40.com/resizer/v2/UBW6FN2GFRJHBHTTOD477ZOGMM.jpg?auth=2def4e0ffb5d3267b6c144c13e396671b0cc8b87ba275a47e949c7c337a6b7a5&quality=70&width=1200&height=544&smart=true',
    neighborhoods: ['Manhattan', 'Brooklyn'],
    badge: '🎛️',
  },
])

const filteredArtists = computed(() => {
  return allArtists.value.filter(artist => {
    const matchesGenre = !selectedGenre.value || artist.genre.includes(selectedGenre.value)
    const matchesNeighborhood = !selectedNeighborhood.value || artist.neighborhoods.includes(selectedNeighborhood.value)
    const matchesSearch = !searchQuery.value || artist.name.toLowerCase().includes(searchQuery.value.toLowerCase())

    return matchesGenre && matchesNeighborhood && matchesSearch
  })
})

const selectArtist = (artistId: string) => {
  console.log(`Ver perfil del artista: ${artistId}`)
}
</script>

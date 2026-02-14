<template>
  <div>
    <!-- Page Header -->
    <section class="py-20 bg-gradient-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-40 -z-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-neon-lime/20 rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="mb-4">Calendario de Eventos</h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Descubre los shows, festivales y experiencias urbanas más esperadas de Nueva York.
        </p>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="bg-dark-secondary/50 border-y border-gray-300 py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div class="text-3xl font-bold neon-text mb-1">{{ allEvents.length }}</div>
            <p class="text-gray-600 text-sm">Eventos Totales</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-neon-lime mb-1">{{ upcomingCount }}</div>
            <p class="text-gray-600 text-sm">Próximos</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-neon-violet mb-1">{{ soldOutCount }}</div>
            <p class="text-gray-600 text-sm">Sold Out</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-neon-cyan mb-1">{{ availableCount }}</div>
            <p class="text-gray-600 text-sm">Disponibles</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters -->
    <section class="sticky top-20 z-40 bg-dark-bg/80 backdrop-blur-xl border-b border-gray-300 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-4">
          <select 
            v-model="selectedMonth"
            class="flex-1"
          >
            <option value="">Todos los meses</option>
            <option value="02">Febrero 2026</option>
            <option value="03">Marzo 2026</option>
            <option value="04">Abril 2026</option>
            <option value="05">Mayo 2026</option>
          </select>

          <select 
            v-model="selectedVenue"
            class="flex-1"
          >
            <option value="">Todos los lugares</option>
            <option value="Bowery Ballroom">Bowery Ballroom</option>
            <option value="Prospect Park">Prospect Park</option>
            <option value="Terminal 5">Terminal 5</option>
            <option value="Music Hall of Williamsburg">Music Hall of Williamsburg</option>
            <option value="Hammerstein Ballroom">Hammerstein Ballroom</option>
          </select>

          <label class="flex items-center gap-2 px-4 py-3 rounded-lg glass cursor-pointer">
            <input 
              v-model="showAvailableOnly"
              type="checkbox"
              class="w-4 h-4"
            />
            <span class="text-sm">Solo disponibles</span>
          </label>
        </div>
      </div>
    </section>

    <!-- Events Timeline -->
    <SectionTitle
      subtitle="Experiencias Urbanas"
      :title="`${filteredEvents.length} Eventos Encontrados`"
    >
      <div v-if="filteredEvents.length > 0" class="space-y-4">
        <EventCard
          v-for="event in filteredEvents"
          :key="event.id"
          :title="event.title"
          :description="event.description"
          :date="event.date"
          :time="event.time"
          :doors-open="event.doorsOpen"
          :venue="event.venue"
          :price="event.price"
          :image="event.image"
          :artists="event.artists"
          :is-sold-out="event.isSoldOut"
        />
      </div>

      <div v-else class="text-center py-20">
        <div class="text-6xl mb-4">📅</div>
        <h3 class="mb-2">No hay eventos disponibles</h3>
        <p class="text-gray-600">Intenta cambiar los filtros.</p>
      </div>
    </SectionTitle>

    <!-- How to Get Tickets -->
    <section class="py-20 bg-dark-secondary/50 border-y border-gray-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center mb-12">Cómo Conseguir Tickets</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-5xl mb-4">1️⃣</div>
            <h4 class="font-bold mb-3">Busca tu Evento</h4>
            <p class="text-gray-600">Explora nuestro calendario y encuentra el show que quieres ver.</p>
          </div>
          <div class="text-center">
            <div class="text-5xl mb-4">2️⃣</div>
            <h4 class="font-bold mb-3">Selecciona Entradas</h4>
            <p class="text-gray-600">Elige cantidad y tipo de entrada (general, VIP, etc).</p>
          </div>
          <div class="text-center">
            <div class="text-5xl mb-4">3️⃣</div>
            <h4 class="font-bold mb-3">Completa Compra</h4>
            <p class="text-gray-600">Pago seguro y recibe tu ticket en email instantáneamente.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-neon opacity-5 -z-10"></div>
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="glass rounded-2xl p-12 text-center">
          <h3 class="mb-4">Notificaciones de Eventos</h3>
          <p class="text-gray-600 mb-6">Sé el primero en conocer nuevos eventos y dropeos de tickets.</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <input 
              v-model="notificationEmail"
              type="email"
              placeholder="tu@email.com"
              class="flex-1"
            />
            <button 
              @click="subscribeNotifications"
              class="btn-primary"
            >
              Alertas
            </button>
          </div>
          <p v-if="notificationMessage" class="text-neon-lime text-sm mt-4">{{ notificationMessage }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import EventCard from '@/components/EventCard.vue'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  doorsOpen: string
  venue: string
  price: string
  image: string
  artists: string[]
  isSoldOut: boolean
}

const selectedMonth = ref('')
const selectedVenue = ref('')
const showAvailableOnly = ref(false)
const notificationEmail = ref('')
const notificationMessage = ref('')

const allEvents = ref<Event[]>([
  {
    id: '1',
    title: 'ILUMINATY Sessions: King Cipher Live',
    description: 'Concierto íntimo en el corazón de Manhattan. King Cipher interpretará clásicos y adelantos de "Concreto Puro".',
    date: '2026-02-28',
    time: '21:00',
    doorsOpen: '20:30',
    venue: 'Bowery Ballroom',
    price: '$45 - $75',
    image: 'https://source.unsplash.com/random/800x600/?concert,stage,lights',
    artists: ['King Cipher', 'DJ Remix'],
    isSoldOut: false,
  },
  {
    id: '2',
    title: 'Brooklyn Neon Festival 2026',
    description: 'Festival de 2 días con 40+ artistas. El evento más importante del año reúne lo mejor de la escena urbana.',
    date: '2026-03-15',
    time: '18:00',
    doorsOpen: '17:30',
    venue: 'Prospect Park',
    price: '$85 - $150',
    image: 'https://source.unsplash.com/random/800x600/?festival,neon,night',
    artists: ['Luna Vibe Collective', 'Spray Angel', 'King Cipher', '+37 más'],
    isSoldOut: true,
  },
  {
    id: '3',
    title: 'Soul Maya - Album Release Show',
    description: 'Soul Maya presenta "Midnight Whispers" en vivo. El lanzamiento más esperado del trimestre con banda en vivo.',
    date: '2026-03-22',
    time: '20:00',
    doorsOpen: '19:15',
    venue: 'Terminal 5',
    price: '$40 - $85',
    image: 'https://source.unsplash.com/random/800x600/?singer,concert,stage',
    artists: ['Soul Maya', 'Strings Arranged by NYC Philharmonic'],
    isSoldOut: false,
  },
  {
    id: '4',
    title: 'Luna Vibe Collective - Midnight Sessions',
    description: 'Experiencia inmersiva audiovisual. Beatmakers y visualistas crean en vivo en una sessión de 6 horas.',
    date: '2026-03-08',
    time: '22:00',
    doorsOpen: '21:30',
    venue: 'Music Hall of Williamsburg',
    price: '$35 - $60',
    image: 'https://source.unsplash.com/random/800x600/?electronic,music,visual',
    artists: ['Luna Vibe Collective'],
    isSoldOut: false,
  },
  {
    id: '5',
    title: 'Spray Angel - Street Art Workshop + Gallery',
    description: 'Taller interactivo con la artista visual estrella. Aprende técnicas de graffiti y exposición de obra final.',
    date: '2026-02-22',
    time: '14:00',
    doorsOpen: '13:45',
    venue: 'Hammerstein Ballroom',
    price: '$25 - $50',
    image: 'https://source.unsplash.com/random/800x600/?graffiti,workshop,art',
    artists: ['Spray Angel'],
    isSoldOut: false,
  },
  {
    id: '6',
    title: 'East Village Cypher Battles 2026',
    description: 'Competencia de Free Style y producción en vivo. Los mejores MC y productores de NYC compiten.',
    date: '2026-04-05',
    time: '18:00',
    doorsOpen: '17:00',
    venue: 'Bowery Ballroom',
    price: 'Free - $15',
    image: 'https://source.unsplash.com/random/800x600/?battle,hiphop,cypher',
    artists: ['Street Poets Network'],
    isSoldOut: False,
  },
  {
    id: '7',
    title: 'Reggaeton Fuego - Album Release Party',
    description: 'Fiesta de lanzamiento con DJ set de 4 horas. Baile, drinks y vibes puertorriqueñas en pura esencia.',
    date: '2026-04-12',
    time: '22:00',
    doorsOpen: '21:30',
    venue: 'Music Hall of Williamsburg',
    price: '$30 - $70',
    image: 'https://source.unsplash.com/random/800x600/?reggaeton,party,dance',
    artists: ['Reggaeton Fuego', 'DJ Mambo'],
    isSoldOut: false,
  },
  {
    id: '8',
    title: 'NYC Underground Producers Symposium',
    description: 'Conferencia + Panels + Networking. Aprende directamente de productores ganadores de Grammys.',
    date: '2026-04-20',
    time: '09:00',
    doorsOpen: '08:30',
    venue: 'Hammerstein Ballroom',
    price: '$99 - $199',
    image: 'https://source.unsplash.com/random/800x600/?conference,music,learning',
    artists: ['Industry Leaders'],
    isSoldOut: false,
  },
  {
    id: '9',
    title: 'Techno Prophet - All Night Set',
    description: 'El productor electrónico lleva un DJ set de 8 horas. Un viaje hipnótico desde el atardecer.',
    date: '2026-05-03',
    time: '20:00',
    doorsOpen: '19:30',
    venue: 'Terminal 5',
    price: '$40 - $85',
    image: 'https://source.unsplash.com/random/800x600/?techno,dj,rave',
    artists: ['Techno Prophet'],
    isSoldOut: false,
  },
])

const filteredEvents = computed(() => {
  return allEvents.value.filter(event => {
    const eventMonth = event.date.substring(5, 7)
    const matchesMonth = !selectedMonth.value || eventMonth === selectedMonth.value
    const matchesVenue = !selectedVenue.value || event.venue === selectedVenue.value
    const matchesAvailability = !showAvailableOnly.value || !event.isSoldOut

    return matchesMonth && matchesVenue && matchesAvailability
  })
})

const upcomingCount = computed(() => allEvents.value.length)
const soldOutCount = computed(() => allEvents.value.filter(e => e.isSoldOut).length)
const availableCount = computed(() => allEvents.value.filter(e => !e.isSoldOut).length)

const subscribeNotifications = () => {
  if (!notificationEmail.value || !notificationEmail.value.includes('@')) {
    notificationMessage.value = '❌ Por favor ingresa un email válido'
    setTimeout(() => {
      notificationMessage.value = ''
    }, 3000)
    return
  }
  notificationMessage.value = '✅ ¡Alertas activadas! Recibirás notificaciones de nuevos eventos.'
  notificationEmail.value = ''
  setTimeout(() => {
    notificationMessage.value = ''
  }, 4000)
}
</script>

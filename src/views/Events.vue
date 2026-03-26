<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-dark py-20">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute left-0 top-0 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-lime/20 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4">Calendario de Eventos</h1>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">
          Descubre los shows, festivales y experiencias urbanas más esperadas de Nueva York.
        </p>
      </div>
    </section>

    <section class="border-y border-gray-300 bg-dark-secondary/50 py-6">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <div class="mb-1 text-3xl font-bold neon-text">{{ eventEntries.length }}</div>
            <p class="text-sm text-gray-600">Eventos Totales</p>
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-neon-lime">{{ upcomingCount }}</div>
            <p class="text-sm text-gray-600">Próximos</p>
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-neon-violet">{{ soldOutCount }}</div>
            <p class="text-sm text-gray-600">Sold Out</p>
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-neon-cyan">{{ availableCount }}</div>
            <p class="text-sm text-gray-600">Disponibles</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sticky top-20 z-40 border-b border-gray-300 bg-dark-bg/80 py-4 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-4 md:flex-row">
          <select v-model="selectedMonth" class="flex-1">
            <option value="">Todos los meses</option>
            <option value="02">Febrero 2026</option>
            <option value="03">Marzo 2026</option>
            <option value="04">Abril 2026</option>
            <option value="05">Mayo 2026</option>
          </select>

          <select v-model="selectedVenue" class="flex-1">
            <option value="">Todos los lugares</option>
            <option value="Bowery Ballroom">Bowery Ballroom</option>
            <option value="Prospect Park">Prospect Park</option>
            <option value="Terminal 5">Terminal 5</option>
            <option value="Music Hall of Williamsburg">Music Hall of Williamsburg</option>
            <option value="Hammerstein Ballroom">Hammerstein Ballroom</option>
          </select>

          <label class="glass flex cursor-pointer items-center gap-2 rounded-lg px-4 py-3">
            <input v-model="showAvailableOnly" type="checkbox" class="h-4 w-4">
            <span class="text-sm">Solo disponibles</span>
          </label>
        </div>
      </div>
    </section>

    <SectionTitle subtitle="Experiencias Urbanas" :title="`${filteredEvents.length} Eventos Encontrados`">
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

      <div v-else class="py-20 text-center">
        <div class="mb-4 text-6xl">📅</div>
        <h2 class="mb-2 text-2xl font-bold text-gray-900">No hay eventos disponibles</h2>
        <p class="text-gray-600">Intenta cambiar los filtros.</p>
      </div>
    </SectionTitle>

    <section class="border-y border-gray-300 bg-dark-secondary/50 py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="mb-12 text-center">Cómo Conseguir Tickets</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="mb-4 text-5xl">1️⃣</div>
            <h3 class="mb-3 text-xl font-bold">Busca tu Evento</h3>
            <p class="text-gray-600">Explora nuestro calendario y encuentra el show que quieres ver.</p>
          </div>
          <div class="text-center">
            <div class="mb-4 text-5xl">2️⃣</div>
            <h3 class="mb-3 text-xl font-bold">Selecciona Entradas</h3>
            <p class="text-gray-600">Elige cantidad y tipo de entrada general, VIP o acceso anticipado.</p>
          </div>
          <div class="text-center">
            <div class="mb-4 text-5xl">3️⃣</div>
            <h3 class="mb-3 text-xl font-bold">Completa Compra</h3>
            <p class="text-gray-600">Pago seguro y ticket digital directo en tu correo.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden py-20">
      <div class="absolute inset-0 -z-10 bg-gradient-neon opacity-5"></div>
      <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div class="glass rounded-2xl p-12 text-center">
          <h2 class="mb-4 text-3xl font-bold">Notificaciones de Eventos</h2>
          <p class="mb-6 text-gray-600">Sé el primero en conocer nuevos eventos y dropeos de tickets.</p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <input
              v-model="notificationEmail"
              type="email"
              placeholder="tu@email.com"
              class="flex-1"
            >
            <button @click="subscribeNotifications" class="btn-primary">
              Alertas
            </button>
          </div>
          <p v-if="notificationMessage" class="mt-4 text-sm text-neon-lime">{{ notificationMessage }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import EventCard from '@/components/EventCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { eventEntries } from '@/data/events'

const selectedMonth = ref('')
const selectedVenue = ref('')
const showAvailableOnly = ref(false)
const notificationEmail = ref('')
const notificationMessage = ref('')

const filteredEvents = computed(() =>
  eventEntries.filter((event) => {
    const eventMonth = event.date.substring(5, 7)
    const matchesMonth = !selectedMonth.value || eventMonth === selectedMonth.value
    const matchesVenue = !selectedVenue.value || event.venue === selectedVenue.value
    const matchesAvailability = !showAvailableOnly.value || !event.isSoldOut

    return matchesMonth && matchesVenue && matchesAvailability
  }),
)

const upcomingCount = computed(() => eventEntries.length)
const soldOutCount = computed(() => eventEntries.filter(event => event.isSoldOut).length)
const availableCount = computed(() => eventEntries.filter(event => !event.isSoldOut).length)

const subscribeNotifications = () => {
  if (!notificationEmail.value || !notificationEmail.value.includes('@')) {
    notificationMessage.value = '❌ Por favor ingresa un email válido'
    setTimeout(() => {
      notificationMessage.value = ''
    }, 3000)
    return
  }

  notificationMessage.value = '✅ Alertas activadas. Recibirás notificaciones de nuevos eventos.'
  notificationEmail.value = ''
  setTimeout(() => {
    notificationMessage.value = ''
  }, 4000)
}
</script>

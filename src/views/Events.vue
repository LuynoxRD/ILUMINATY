<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-dark py-20">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute left-0 top-0 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-lime/20 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4">{{ eventsPage.heroTitle }}</h1>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">{{ eventsPage.heroDescription }}</p>
      </div>
    </section>

    <section class="border-y border-gray-300 bg-dark-secondary/50 py-6">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <div class="neon-text mb-1 text-3xl font-bold">{{ eventEntries.length }}</div>
            <p class="text-sm text-gray-600">{{ eventsPage.statsLabels.total }}</p>
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-neon-lime">{{ upcomingCount }}</div>
            <p class="text-sm text-gray-600">{{ eventsPage.statsLabels.upcoming }}</p>
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-neon-violet">{{ soldOutCount }}</div>
            <p class="text-sm text-gray-600">{{ eventsPage.statsLabels.soldOut }}</p>
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-neon-cyan">{{ availableCount }}</div>
            <p class="text-sm text-gray-600">{{ eventsPage.statsLabels.available }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-gray-300 bg-dark-bg/80 py-4 backdrop-blur-xl md:sticky md:top-20 md:z-40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-4 md:flex-row">
          <select v-model="selectedMonth" class="flex-1">
            <option value="">{{ eventsPage.filters.allMonthsLabel }}</option>
            <option v-for="month in monthOptions" :key="month.value" :value="month.value">
              {{ month.label }}
            </option>
          </select>

          <select v-model="selectedVenue" class="flex-1">
            <option value="">{{ eventsPage.filters.allVenuesLabel }}</option>
            <option v-for="venue in venueOptions" :key="venue" :value="venue">
              {{ venue }}
            </option>
          </select>

          <label class="glass flex cursor-pointer items-center gap-2 rounded-lg px-4 py-3">
            <input v-model="showAvailableOnly" type="checkbox" class="h-4 w-4">
            <span class="text-sm">{{ eventsPage.filters.availableOnlyLabel }}</span>
          </label>
        </div>
      </div>
    </section>

    <SectionTitle :subtitle="eventsPage.resultsSubtitle" :title="`${filteredEvents.length} ${eventsPage.resultsTitleSuffix}`">
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
          :is-sold-out="isEventSoldOut(event)"
          :ticket-url="event.ticketUrl"
          :artists-label="eventsPage.cardLabels.artists"
          :available-label="eventsPage.cardLabels.available"
          :sold-out-label="eventsPage.cardLabels.soldOut"
          :buy-tickets-label="eventsPage.cardLabels.buyTickets"
          :coming-soon-label="eventsPage.cardLabels.comingSoon"
          :doors-open-prefix="eventsPage.cardLabels.doorsOpenPrefix"
        />
      </div>

      <div v-else class="py-20 text-center">
        <div class="mb-4 text-6xl">{{ eventsPage.emptyState.icon }}</div>
        <h2 class="mb-2 text-2xl font-bold text-gray-900">{{ eventsPage.emptyState.title }}</h2>
        <p class="text-gray-600">{{ eventsPage.emptyState.description }}</p>
      </div>
    </SectionTitle>

    <section class="border-y border-gray-300 bg-dark-secondary/50 py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="mb-12 text-center">{{ eventsPage.purchaseStepsTitle }}</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div v-for="step in eventsPage.purchaseSteps" :key="step.title" class="text-center">
            <div class="mb-4 text-5xl">{{ step.icon }}</div>
            <h3 class="mb-3 text-xl font-bold">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden py-20">
      <div class="absolute inset-0 -z-10 bg-gradient-neon opacity-5"></div>
      <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div class="glass rounded-2xl p-12 text-center">
          <h2 class="mb-4 text-3xl font-bold">{{ notificationCopy.title }}</h2>
          <p class="mb-6 text-gray-600">{{ notificationCopy.description }}</p>
          <form class="flex flex-col gap-4 sm:flex-row" @submit.prevent="newsletterForm.submit(notificationCopy)">
            <input v-model="newsletterForm.email" type="email" :placeholder="notificationCopy.inputPlaceholder" class="flex-1">
            <button class="btn-primary" :disabled="newsletterForm.submitStatus === 'loading'">
              {{ newsletterForm.submitStatus === 'loading' ? 'Enviando...' : notificationCopy.buttonLabel }}
            </button>
          </form>
          <p v-if="newsletterForm.feedbackMessage" class="mt-4 text-sm" :class="newsletterForm.submitStatus === 'success' ? 'text-neon-lime' : 'text-red-400'">
            {{ newsletterForm.feedbackMessage }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import EventCard from '@/components/EventCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { useContent } from '@/composables/useContent'
import { parseLocalDate } from '@/lib/date'
import { useNewsletterForm } from '@/composables/useNewsletterForm'
import { normalizeNewsletterBlock } from '@/lib/formFeedback'

const { eventEntries, eventsPage } = useContent()
const newsletterForm = useNewsletterForm('events-alerts')
const notificationCopy = computed(() => normalizeNewsletterBlock(eventsPage.notificationSection))

const selectedMonth = ref('')
const selectedVenue = ref('')
const showAvailableOnly = ref(false)
const now = new Date()
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

const isEventSoldOut = (event: (typeof eventEntries)[number]) => Boolean(event.isSoldOut)
const isEventAvailable = (event: (typeof eventEntries)[number]) =>
  Boolean(event.ticketUrl) && !isEventSoldOut(event)

const monthFormatter = new Intl.DateTimeFormat('es-ES', {
  month: 'long',
  year: 'numeric',
})

const monthOptions = computed(() =>
  [...new Set(eventEntries.map(event => event.date.slice(0, 7)))]
    .sort()
    .map(value => ({
      value,
      label: monthFormatter.format(new Date(`${value}-01T00:00:00`)),
    })),
)

const venueOptions = computed(() =>
  [...new Set(eventEntries.map(event => event.venue))].sort((left, right) => left.localeCompare(right)),
)

const filteredEvents = computed(() =>
  eventEntries.filter((event) => {
    const matchesMonth = !selectedMonth.value || event.date.slice(0, 7) === selectedMonth.value
    const matchesVenue = !selectedVenue.value || event.venue === selectedVenue.value
    const matchesAvailability = !showAvailableOnly.value || isEventAvailable(event)

    return matchesMonth && matchesVenue && matchesAvailability
  }),
)

const upcomingCount = computed(() =>
  eventEntries.filter(event => parseLocalDate(event.date).getTime() >= today.getTime()).length,
)
const soldOutCount = computed(() => eventEntries.filter(isEventSoldOut).length)
const availableCount = computed(() => eventEntries.filter(isEventAvailable).length)
</script>

<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-dark py-20">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute right-0 top-0 h-96 w-96 rounded-full bg-neon-cyan/20 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4">Contacto &amp; Booking</h1>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">
          ¿Preguntas? ¿Booking? ¿Colaboraciones? Estamos aquí para escucharte.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div class="lg:col-span-1">
            <h3 class="mb-8">Información de Contacto</h3>

            <div class="mb-8">
              <h4 class="mb-2 font-semibold text-neon-lime">📧 Email</h4>
              <a href="mailto:info@iluminaty.nyc" class="text-gray-600 transition-colors hover:text-neon-lime">
                info@iluminaty.nyc
              </a>
              <p class="mt-2 text-sm text-gray-500">Respuesta en 24 horas hábiles</p>
            </div>

            <div class="mb-8">
              <h4 class="mb-2 font-semibold text-neon-violet">🎤 Booking &amp; Partnership</h4>
              <a href="mailto:booking@iluminaty.nyc" class="text-gray-600 transition-colors hover:text-neon-violet">
                booking@iluminaty.nyc
              </a>
              <p class="mt-2 text-sm text-gray-500">Colaboraciones, eventos y features</p>
            </div>

            <div class="mb-8">
              <h4 class="mb-2 font-semibold text-neon-cyan">🆘 Soporte Técnico</h4>
              <a href="mailto:support@iluminaty.nyc" class="text-gray-600 transition-colors hover:text-neon-cyan">
                support@iluminaty.nyc
              </a>
              <p class="mt-2 text-sm text-gray-500">Problemas con la plataforma</p>
            </div>

            <div>
              <h4 class="mb-2 font-semibold text-neon-lime">📍 Oficina</h4>
              <p class="text-gray-600">
                325 Lafayette Street<br>
                New York, NY 10012<br>
                USA
              </p>
              <p class="mt-2 text-sm text-gray-500">Abierto: Lunes - Viernes, 10am-6pm EST</p>
            </div>

            <div class="mt-12 border-t border-gray-300 pt-8">
              <h4 class="mb-4 font-semibold">Síguenos en Redes</h4>
              <SocialLinks size="lg" />
            </div>
          </div>

          <div class="lg:col-span-2">
            <form class="glass rounded-2xl p-8 md:p-12" @submit.prevent="submitForm">
              <h3 class="mb-8">Envía un Mensaje</h3>

              <div class="mb-6">
                <label for="name" class="mb-2 block text-sm font-semibold">Nombre Completo *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  :class="{ 'border-red-500': errors.name }"
                  @input="validateField('name')"
                >
                <p v-if="errors.name" class="mt-1 text-xs text-red-400">{{ errors.name }}</p>
              </div>

              <div class="mb-6">
                <label for="email" class="mb-2 block text-sm font-semibold">Email *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  :class="{ 'border-red-500': errors.email }"
                  @input="validateField('email')"
                >
                <p v-if="errors.email" class="mt-1 text-xs text-red-400">{{ errors.email }}</p>
              </div>

              <div class="mb-6">
                <label for="subject" class="mb-2 block text-sm font-semibold">Asunto</label>
                <select id="subject" v-model="form.subject" class="w-full">
                  <option value="">Selecciona un tema...</option>
                  <option value="booking">Booking / Partnership</option>
                  <option value="artist">Registro como Artista</option>
                  <option value="technical">Soporte Técnico</option>
                  <option value="feedback">Feedback y Sugerencias</option>
                  <option value="press">Prensa / Media</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div class="mb-6">
                <label for="phone" class="mb-2 block text-sm font-semibold">Teléfono (Opcional)</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  :class="{ 'border-red-500': errors.phone }"
                  @input="validateField('phone')"
                >
                <p v-if="errors.phone" class="mt-1 text-xs text-red-400">{{ errors.phone }}</p>
              </div>

              <div v-if="form.subject === 'artist'" class="mb-6">
                <label for="artistName" class="mb-2 block text-sm font-semibold">Nombre Artístico</label>
                <input
                  id="artistName"
                  v-model="form.artistName"
                  type="text"
                  placeholder="Tu nombre artístico..."
                >
              </div>

              <div v-if="form.subject === 'artist'" class="mb-6">
                <label for="genre" class="mb-2 block text-sm font-semibold">Género/Disciplina</label>
                <select id="genre" v-model="form.genre" class="w-full">
                  <option value="">Selecciona un género...</option>
                  <option value="hip-hop">Hip-Hop / Rap</option>
                  <option value="electronic">Electrónico</option>
                  <option value="r-b">R&amp;B / Soul</option>
                  <option value="reggaeton">Reggaeton</option>
                  <option value="visual">Arte Visual / Graffiti</option>
                  <option value="production">Producción Musical</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div class="mb-6">
                <label for="message" class="mb-2 block text-sm font-semibold">Mensaje *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  placeholder="Cuéntanos más sobre ti o tu propuesta..."
                  :class="{ 'border-red-500': errors.message }"
                  @input="validateField('message')"
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-xs text-red-400">{{ errors.message }}</p>
                <p class="mt-2 text-xs text-gray-500">{{ form.message.length }}/1000 caracteres</p>
              </div>

              <div class="mb-6">
                <label class="flex cursor-pointer items-start gap-3">
                  <input
                    v-model="form.privacy"
                    type="checkbox"
                    required
                    class="mt-1 h-4 w-4"
                  >
                  <span class="text-sm text-gray-600">
                    He leído y acepto los <RouterLink to="/terminos" class="text-neon-lime hover:underline">Términos y Condiciones</RouterLink> y la <RouterLink to="/privacidad" class="text-neon-lime hover:underline">Política de Privacidad</RouterLink>. Deseo recibir comunicaciones de ILUMINATY *
                  </span>
                </label>
              </div>

              <div v-if="submitStatus === 'loading'" class="mb-6 rounded-lg border border-neon-lime/30 bg-neon-lime/10 p-4 text-neon-lime">
                ⏳ Enviando tu mensaje...
              </div>
              <div v-if="submitStatus === 'success'" class="mb-6 rounded-lg border border-neon-lime/30 bg-neon-lime/10 p-4 text-neon-lime">
                ✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.
              </div>
              <div v-if="submitStatus === 'error'" class="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                ❌ Error al enviar. Intenta de nuevo o escribe directamente a info@iluminaty.nyc
              </div>

              <button
                type="submit"
                :disabled="submitStatus === 'loading'"
                class="btn-primary w-full py-3 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {{ submitStatus === 'loading' ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-gray-300 bg-dark-secondary/50 py-20">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 class="mb-12 text-center">Preguntas Frecuentes</h2>

        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="glass overflow-hidden rounded-xl"
          >
            <button
              class="w-full p-6 text-left transition-colors hover:bg-white/5"
              @click="toggleFaq(index)"
            >
              <div class="flex items-center justify-between">
                <h4 class="font-semibold">{{ faq.question }}</h4>
                <span :class="{ 'rotate-180': expandedFaq === index }" class="transition-transform">▼</span>
              </div>
            </button>
            <transition name="faq">
              <div v-show="expandedFaq === index" class="border-t border-gray-300 px-6 pb-6 text-gray-600">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import DOMPurify from 'dompurify'
import SocialLinks from '@/components/SocialLinks.vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  phone: string
  artistName: string
  genre: string
  message: string
  privacy: boolean
}

interface ValidationErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  phone: '',
  artistName: '',
  genre: '',
  message: '',
  privacy: false,
})

const errors = ref<ValidationErrors>({})
const submitStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const expandedFaq = ref<number | null>(null)

const faqs = [
  {
    question: '¿Cómo me registro como artista?',
    answer: 'Rellena el formulario de contacto seleccionando "Registro como Artista" como asunto. Nos pondremos en contacto en 24-48 horas. Necesitamos información sobre tu género musical, barrio y portfolio de trabajo.',
  },
  {
    question: '¿Cuál es el proceso de booking?',
    answer: 'Contáctanos en booking@iluminaty.nyc con detalles de tu propuesta (fechas, lugar, presupuesto). Nuestro equipo de eventos evaluará y responderá en 3-5 días hábiles.',
  },
  {
    question: '¿Es gratis unirse a ILUMINATY?',
    answer: 'Sí, el registro es completamente gratuito. Los artistas no pagan comisión por ventas de tickets de eventos que promovemos. Ganas el 100% de tus ingresos.',
  },
  {
    question: '¿Qué barrios de NYC cubren?',
    answer: 'Cubrimos los 5 condados: Manhattan, Brooklyn, Queens, Bronx y Staten Island. Tenemos especial enfoque en comunidades de East Side, Harlem, Williamsburg y Jamaica Queens.',
  },
  {
    question: '¿Cómo protegen mis derechos de autor?',
    answer: 'Toda la música y contenido visual sube bajo licencia del artista. ILUMINATY no reclama derechos sobre tu trabajo. Te ofrecemos herramientas para registrar copyright.',
  },
  {
    question: '¿Hay membership premium?',
    answer: 'Actualmente ofrecemos cuenta gratuita para todos. Estamos desarrollando tiers premium con estadísticas, marketing avanzado y herramientas de colaboración.',
  },
]

const validateField = (field: keyof ContactForm) => {
  errors.value = {}

  if (field === 'name' && form.value.name.length < 2) {
    errors.value.name = 'El nombre debe tener al menos 2 caracteres'
  }

  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      errors.value.email = 'Por favor ingresa un email válido'
    }
  }

  if (field === 'phone' && form.value.phone) {
    const phoneRegex = /^[\d\s\-+()]+$/
    if (!phoneRegex.test(form.value.phone) || form.value.phone.length < 10) {
      errors.value.phone = 'Por favor ingresa un teléfono válido'
    }
  }

  if (field === 'message') {
    if (form.value.message.length < 10) {
      errors.value.message = 'El mensaje debe tener al menos 10 caracteres'
    }
    if (form.value.message.length > 1000) {
      form.value.message = form.value.message.substring(0, 1000)
    }
  }
}

const submitForm = async () => {
  validateField('name')
  validateField('email')
  validateField('phone')
  validateField('message')

  if (Object.keys(errors.value).length > 0) {
    return
  }

  submitStatus.value = 'loading'

  try {
    await new Promise(resolve => setTimeout(resolve, 2000))

    const sanitizedForm = {
      ...form.value,
      name: DOMPurify.sanitize(form.value.name),
      email: DOMPurify.sanitize(form.value.email),
      message: DOMPurify.sanitize(form.value.message),
      artistName: DOMPurify.sanitize(form.value.artistName),
      phone: DOMPurify.sanitize(form.value.phone),
    }

    console.log('Formulario sanitizado enviado:', sanitizedForm)

    submitStatus.value = 'success'
    form.value = {
      name: '',
      email: '',
      subject: '',
      phone: '',
      artistName: '',
      genre: '',
      message: '',
      privacy: false,
    }

    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 5000)
  }
  catch (error) {
    submitStatus.value = 'error'
    console.error('Error:', error)
  }
}

const toggleFaq = (index: number) => {
  expandedFaq.value = expandedFaq.value === index ? null : index
}
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: max-height 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  overflow: hidden;
}

.faq-enter-to,
.faq-leave-from {
  max-height: 500px;
}
</style>

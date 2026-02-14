<template>
  <div>
    <!-- Page Header -->
    <section class="py-20 bg-gradient-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-40 -z-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="mb-4">Contacto & Booking</h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          ¿Preguntas? ¿Booking? ¿Colaboraciones? Estamos aquí para escucharte.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-1">
            <h3 class="mb-8">Información de Contacto</h3>

            <!-- Email -->
            <div class="mb-8">
              <h4 class="font-semibold text-neon-lime mb-2">📧 Email</h4>
              <a href="mailto:info@iluminaty.nyc" class="text-gray-600 hover:text-neon-lime transition-colors">
                info@iluminaty.nyc
              </a>
              <p class="text-gray-500 text-sm mt-2">Respuesta en 24 horas hábiles</p>
            </div>

            <!-- Booking -->
            <div class="mb-8">
              <h4 class="font-semibold text-neon-violet mb-2">🎤 Booking & Partnership</h4>
              <a href="mailto:booking@iluminaty.nyc" class="text-gray-600 hover:text-neon-violet transition-colors">
                booking@iluminaty.nyc
              </a>
              <p class="text-gray-500 text-sm mt-2">Colaboraciones, eventos y features</p>
            </div>

            <!-- Support -->
            <div class="mb-8">
              <h4 class="font-semibold text-neon-cyan mb-2">🆘 Soporte Técnico</h4>
              <a href="mailto:support@iluminaty.nyc" class="text-gray-600 hover:text-neon-cyan transition-colors">
                support@iluminaty.nyc
              </a>
              <p class="text-gray-500 text-sm mt-2">Problemas con la plataforma</p>
            </div>

            <!-- Location -->
            <div>
              <h4 class="font-semibold text-neon-lime mb-2">📍 Oficina</h4>
              <p class="text-gray-600">
                325 Lafayette Street<br/>
                New York, NY 10012<br/>
                USA
              </p>
              <p class="text-gray-500 text-sm mt-2">Abierto: Lunes - Viernes, 10am-6pm EST</p>
            </div>

            <!-- Social -->
            <div class="mt-12 pt-8 border-t border-gray-300">
              <h4 class="font-semibold mb-4">Síguenos en Redes</h4>
              <div class="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener" class="w-12 h-12 rounded-lg glass-hover flex items-center justify-center hover:text-neon-lime transition-colors" aria-label="Instagram">
                  <span class="text-2xl">📸</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener" class="w-12 h-12 rounded-lg glass-hover flex items-center justify-center hover:text-neon-violet transition-colors" aria-label="Twitter">
                  <span class="text-2xl">𝕏</span>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener" class="w-12 h-12 rounded-lg glass-hover flex items-center justify-center hover:text-neon-cyan transition-colors" aria-label="TikTok">
                  <span class="text-2xl">🎵</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener" class="w-12 h-12 rounded-lg glass-hover flex items-center justify-center hover:text-neon-lime transition-colors" aria-label="YouTube">
                  <span class="text-2xl">▶️</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <form @submit.prevent="submitForm" class="glass rounded-2xl p-8 md:p-12">
              <h3 class="mb-8">Envía un Mensaje</h3>

              <!-- Name -->
              <div class="mb-6">
                <label for="name" class="block text-sm font-semibold mb-2">Nombre Completo *</label>
                <input 
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  @input="validateField('name')"
                  :class="{ 'border-red-500': errors.name }"
                />
                <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
              </div>

              <!-- Email -->
              <div class="mb-6">
                <label for="email" class="block text-sm font-semibold mb-2">Email *</label>
                <input 
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  @input="validateField('email')"
                  :class="{ 'border-red-500': errors.email }"
                />
                <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
              </div>

              <!-- Subject -->
              <div class="mb-6">
                <label for="subject" class="block text-sm font-semibold mb-2">Asunto</label>
                <select 
                  id="subject"
                  v-model="form.subject"
                  class="w-full"
                >
                  <option value="">Selecciona un tema...</option>
                  <option value="booking">Booking / Partnership</option>
                  <option value="artist">Registro como Artista</option>
                  <option value="technical">Soporte Técnico</option>
                  <option value="feedback">Feedback y Sugerencias</option>
                  <option value="press">Prensa / Media</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <!-- Phone (Optional) -->
              <div class="mb-6">
                <label for="phone" class="block text-sm font-semibold mb-2">Teléfono (Opcional)</label>
                <input 
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  @input="validateField('phone')"
                  :class="{ 'border-red-500': errors.phone }"
                />
                <p v-if="errors.phone" class="text-red-400 text-xs mt-1">{{ errors.phone }}</p>
              </div>

              <!-- Artist Info (Conditional) -->
              <div v-if="form.subject === 'artist'" class="mb-6">
                <label for="artistName" class="block text-sm font-semibold mb-2">Nombre Artístico</label>
                <input 
                  id="artistName"
                  v-model="form.artistName"
                  type="text"
                  placeholder="Tu nombre artístico..."
                />
              </div>

              <!-- Genre (Conditional) -->
              <div v-if="form.subject === 'artist'" class="mb-6">
                <label for="genre" class="block text-sm font-semibold mb-2">Género/Disciplina</label>
                <select 
                  id="genre"
                  v-model="form.genre"
                  class="w-full"
                >
                  <option value="">Selecciona un género...</option>
                  <option value="hip-hop">Hip-Hop / Rap</option>
                  <option value="electronic">Electrónico</option>
                  <option value="r-b">R&B / Soul</option>
                  <option value="reggaeton">Reggaeton</option>
                  <option value="visual">Arte Visual / Graffiti</option>
                  <option value="production">Producción Musical</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <!-- Message -->
              <div class="mb-6">
                <label for="message" class="block text-sm font-semibold mb-2">Mensaje *</label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  placeholder="Cuéntanos más sobre ti o tu propuesta..."
                  @input="validateField('message')"
                  :class="{ 'border-red-500': errors.message }"
                ></textarea>
                <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
                <p class="text-gray-500 text-xs mt-2">{{ form.message.length }}/1000 caracteres</p>
              </div>

              <!-- Privacy -->
              <div class="mb-6">
                <label class="flex items-start gap-3 cursor-pointer">
                  <input 
                    v-model="form.privacy"
                    type="checkbox"
                    required
                    class="w-4 h-4 mt-1"
                  />
                  <span class="text-gray-600 text-sm">
                    Acepto la política de privacidad y deseo recibir comunicaciones de ILUMINATY *
                  </span>
                </label>
              </div>

              <!-- Status Messages -->
              <div v-if="submitStatus === 'loading'" class="mb-6 p-4 rounded-lg bg-neon-lime/10 text-neon-lime border border-neon-lime/30">
                ⏳ Enviando tu mensaje...
              </div>
              <div v-if="submitStatus === 'success'" class="mb-6 p-4 rounded-lg bg-neon-lime/10 text-neon-lime border border-neon-lime/30">
                ✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.
              </div>
              <div v-if="submitStatus === 'error'" class="mb-6 p-4 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30">
                ❌ Error al enviar. Intenta de nuevo o escribe directamente a info@iluminaty.nyc
              </div>

              <!-- Submit Button -->
              <button 
                type="submit"
                :disabled="submitStatus === 'loading'"
                class="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ submitStatus === 'loading' ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-dark-secondary/50 border-y border-gray-300">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center mb-12">Preguntas Frecuentes</h2>

        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs"
            :key="index"
            class="glass rounded-xl overflow-hidden"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <h4 class="font-semibold text-left">{{ faq.question }}</h4>
              <span :class="{ 'rotate-180': expandedFaq === index }" class="transition-transform">
                ▼
              </span>
            </button>
            <transition name="faq">
              <div v-show="expandedFaq === index" class="px-6 pb-6 text-gray-600 border-t border-gray-300">
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
import { ref, computed } from 'vue'
import DOMPurify from 'dompurify'

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

  if (field === 'name') {
    if (form.value.name.length < 2) {
      errors.value.name = 'El nombre debe tener al menos 2 caracteres'
    }
  }

  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      errors.value.email = 'Por favor ingresa un email válido'
    }
  }

  if (field === 'phone' && form.value.phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
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
  // Validate all fields
  validateField('name')
  validateField('email')
  validateField('phone')
  validateField('message')

  if (Object.keys(errors.value).length > 0) {
    return
  }

  submitStatus.value = 'loading'

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Sanitize form data to prevent XSS
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

    // Reset form
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

    // Clear success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 5000)
  } catch (error) {
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

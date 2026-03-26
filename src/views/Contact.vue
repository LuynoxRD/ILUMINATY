<template>
  <div>
    <section class="relative overflow-hidden bg-gradient-dark py-20">
      <div class="absolute inset-0 -z-10 opacity-40">
        <div class="absolute right-0 top-0 h-96 w-96 rounded-full bg-neon-cyan/20 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 class="mb-4">{{ contactPage.heroTitle }}</h1>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">{{ contactPage.heroDescription }}</p>
      </div>
    </section>

    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div class="lg:col-span-1">
            <h3 class="mb-8">{{ contactPage.infoTitle }}</h3>

            <div v-for="method in safeMethods" :key="method.title" class="mb-8">
              <h4 class="mb-2 font-semibold" :class="method.accentClass">{{ method.icon }} {{ method.title }}</h4>
              <a v-if="method.safeHref" :href="method.safeHref" class="text-gray-600 transition-colors hover:text-neon-lime">
                {{ method.value }}
              </a>
              <span v-else class="text-gray-600">{{ method.value }}</span>
              <p class="mt-2 text-sm text-gray-500">{{ method.description }}</p>
            </div>

            <div>
              <h4 class="mb-2 font-semibold text-neon-lime">{{ contactPage.office.title }}</h4>
              <p class="text-gray-600">
                <template v-for="line in contactPage.office.lines" :key="line">
                  {{ line }}<br>
                </template>
              </p>
              <p class="mt-2 text-sm text-gray-500">{{ contactPage.office.hours }}</p>
            </div>

            <div class="mt-12 border-t border-gray-300 pt-8">
              <h4 class="mb-4 font-semibold">{{ contactPage.socialTitle }}</h4>
              <SocialLinks size="lg" />
            </div>
          </div>

          <div class="lg:col-span-2">
            <form class="glass rounded-2xl p-8 md:p-12" @submit.prevent="submitForm">
              <h3 class="mb-8">{{ contactPage.formTitle }}</h3>

              <div class="mb-6">
                <label for="name" class="mb-2 block text-sm font-semibold">{{ contactPage.form.nameLabel }}</label>
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
                <label for="email" class="mb-2 block text-sm font-semibold">{{ contactPage.form.emailLabel }}</label>
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
                <label for="subject" class="mb-2 block text-sm font-semibold">{{ contactPage.form.subjectLabel }}</label>
                <select
                  id="subject"
                  v-model="form.subject"
                  class="w-full"
                  :class="{ 'border-red-500': errors.subject }"
                  @change="validateField('subject')"
                >
                  <option value="">{{ contactPage.form.subjectPlaceholder }}</option>
                  <option v-for="option in contactPage.form.subjectOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
                <p v-if="errors.subject" class="mt-1 text-xs text-red-400">{{ errors.subject }}</p>
              </div>

              <div class="mb-6">
                <label for="phone" class="mb-2 block text-sm font-semibold">{{ contactPage.form.phoneLabel }}</label>
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
                <label for="artistName" class="mb-2 block text-sm font-semibold">{{ contactPage.form.artistNameLabel }}</label>
                <input id="artistName" v-model="form.artistName" type="text" :placeholder="contactPage.form.artistNamePlaceholder">
              </div>

              <div v-if="form.subject === 'artist'" class="mb-6">
                <label for="genre" class="mb-2 block text-sm font-semibold">{{ contactPage.form.genreLabel }}</label>
                <select id="genre" v-model="form.genre" class="w-full">
                  <option value="">{{ contactPage.form.genrePlaceholder }}</option>
                  <option v-for="option in contactPage.form.genreOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <div class="mb-6">
                <label for="message" class="mb-2 block text-sm font-semibold">{{ contactPage.form.messageLabel }}</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  :placeholder="contactPage.form.messagePlaceholder"
                  :class="{ 'border-red-500': errors.message }"
                  @input="validateField('message')"
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-xs text-red-400">{{ errors.message }}</p>
                <p class="mt-2 text-xs text-gray-500">{{ form.message.length }}/{{ contactPage.form.messageLimit }} caracteres</p>
              </div>

              <div class="mb-6">
                <label class="flex cursor-pointer items-start gap-3">
                  <input v-model="form.privacy" type="checkbox" required class="mt-1 h-4 w-4">
                  <span class="text-sm text-gray-600">
                    {{ contactPage.form.privacyPrefix }}
                    <RouterLink to="/terminos" class="text-neon-lime hover:underline">{{ contactPage.form.termsLabel }}</RouterLink>
                    y la
                    <RouterLink to="/privacidad" class="text-neon-lime hover:underline">{{ contactPage.form.privacyLabel }}</RouterLink>.
                    {{ contactPage.form.privacySuffix }}
                  </span>
                </label>
              </div>

              <div v-if="submitStatus === 'loading'" class="mb-6 rounded-lg border border-neon-lime/30 bg-neon-lime/10 p-4 text-neon-lime">
                {{ readPlainText(contactPage.form.loadingMessage, 'Enviando tu mensaje...') }}
              </div>
              <div v-if="submitStatus === 'success'" class="mb-6 rounded-lg border border-neon-lime/30 bg-neon-lime/10 p-4 text-neon-lime">
                {{ feedbackMessage }}
              </div>
              <div v-if="submitStatus === 'error'" class="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                {{ feedbackMessage }}
              </div>

              <button type="submit" :disabled="submitStatus === 'loading'" class="btn-primary w-full py-3 disabled:cursor-not-allowed disabled:opacity-50">
                {{ submitStatus === 'loading' ? contactPage.form.submitLoadingLabel : contactPage.form.submitLabel }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-gray-300 bg-dark-secondary/50 py-20">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 class="mb-12 text-center">{{ contactPage.faqTitle }}</h2>

        <div class="space-y-4">
          <div v-for="(faq, index) in contactPage.faqs" :key="faq.question" class="glass overflow-hidden rounded-xl">
            <button class="w-full p-6 text-left transition-colors hover:bg-white/5" @click="toggleFaq(index)">
              <div class="flex items-center justify-between">
                <h4 class="font-semibold">{{ faq.question }}</h4>
                <span class="transition-transform" :class="{ 'rotate-180': expandedFaq === index }">▼</span>
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
import DOMPurify from 'dompurify'
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import SocialLinks from '@/components/SocialLinks.vue'
import { useContent } from '@/composables/useContent'
import { readPlainText, resolveSubmissionMessage } from '@/lib/formFeedback'
import { toSafeHref } from '@/lib/safeUrl'
import { submitContactForm } from '@/services/forms'

interface ContactFormState {
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
  subject?: string
  phone?: string
  message?: string
}

const { contactPage } = useContent()

const createInitialForm = (): ContactFormState => ({
  name: '',
  email: '',
  subject: '',
  phone: '',
  artistName: '',
  genre: '',
  message: '',
  privacy: false,
})

const form = ref<ContactFormState>(createInitialForm())
const errors = ref<ValidationErrors>({})
const submitStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const feedbackMessage = ref('')
const expandedFaq = ref<number | null>(null)
const safeMethods = computed(() =>
  contactPage.methods.map(method => ({
    ...method,
    safeHref: toSafeHref(method.href),
  })),
)

const validateField = (field: keyof ContactFormState) => {
  delete errors.value[field as keyof ValidationErrors]

  if (field === 'name' && form.value.name.trim().length < 2) {
    errors.value.name = 'El nombre debe tener al menos 2 caracteres'
  }

  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      errors.value.email = 'Por favor ingresa un email valido'
    }
  }

  if (field === 'subject' && !form.value.subject.trim()) {
    errors.value.subject = 'Selecciona un asunto'
  }

  if (field === 'phone' && form.value.phone) {
    const phoneRegex = /^[\d\s\-+()]+$/
    if (!phoneRegex.test(form.value.phone) || form.value.phone.length < 10) {
      errors.value.phone = 'Por favor ingresa un telefono valido'
    }
  }

  if (field === 'message') {
    if (form.value.message.length < 10) {
      errors.value.message = 'El mensaje debe tener al menos 10 caracteres'
    }
    if (form.value.message.length > contactPage.form.messageLimit) {
      form.value.message = form.value.message.substring(0, contactPage.form.messageLimit)
    }
  }
}

const submitForm = async () => {
  if (submitStatus.value === 'loading')
    return

  errors.value = {}
  validateField('name')
  validateField('email')
  validateField('subject')
  validateField('phone')
  validateField('message')

  if (Object.keys(errors.value).length > 0) {
    return
  }

  submitStatus.value = 'loading'
  feedbackMessage.value = ''

  try {
    const result = await submitContactForm({
      name: DOMPurify.sanitize(form.value.name.trim()),
      email: DOMPurify.sanitize(form.value.email.trim()),
      subject: DOMPurify.sanitize(form.value.subject.trim()),
      phone: DOMPurify.sanitize(form.value.phone.trim()),
      artistName: DOMPurify.sanitize(form.value.artistName.trim()),
      genre: DOMPurify.sanitize(form.value.genre.trim()),
      message: DOMPurify.sanitize(form.value.message.trim()),
      privacy: form.value.privacy,
    })

    submitStatus.value = 'success'
    feedbackMessage.value = resolveSubmissionMessage(
      result,
      readPlainText(contactPage.form.successMessage, 'Mensaje enviado correctamente.'),
    )
    form.value = createInitialForm()

    window.setTimeout(() => {
      submitStatus.value = 'idle'
      feedbackMessage.value = ''
    }, 5000)
  }
  catch {
    submitStatus.value = 'error'
    feedbackMessage.value = readPlainText(
      contactPage.form.errorMessage,
      'No pudimos enviar tu mensaje. Intenta de nuevo.',
    )
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

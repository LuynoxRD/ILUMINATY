import { reactive, ref } from 'vue'
import { normalizeNewsletterBlock, resolveSubmissionMessage } from '@/lib/formFeedback'
import { subscribeToNewsletter } from '@/services/forms'
import type { NewsletterBlock } from '@/types/content'

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const useNewsletterForm = (source: string) => {
  const email = ref('')
  const submitStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
  const feedbackMessage = ref('')

  const clearFeedback = (delay = 4000) => {
    window.setTimeout(() => {
      feedbackMessage.value = ''
      if (submitStatus.value !== 'loading') {
        submitStatus.value = 'idle'
      }
    }, delay)
  }

  const submit = async (copy: NewsletterBlock) => {
    const normalizedCopy = normalizeNewsletterBlock(copy)
    const sanitizedEmail = email.value.trim()

    if (!isValidEmail(sanitizedEmail)) {
      submitStatus.value = 'error'
      feedbackMessage.value = normalizedCopy.invalidMessage
      clearFeedback(3000)
      return
    }

    submitStatus.value = 'loading'
    feedbackMessage.value = ''

    try {
      const result = await subscribeToNewsletter({
        email: sanitizedEmail,
        source,
      })
      submitStatus.value = 'success'
      feedbackMessage.value = resolveSubmissionMessage(result, normalizedCopy.successMessage)
      email.value = ''
      clearFeedback()
    }
    catch {
      submitStatus.value = 'error'
      feedbackMessage.value = normalizedCopy.errorMessage
      clearFeedback()
    }
  }

  return reactive({
    email,
    submitStatus,
    feedbackMessage,
    submit,
  })
}

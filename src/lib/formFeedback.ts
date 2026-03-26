import type { NewsletterBlock } from '@/types/content'
import type { FormSubmissionResult } from '@/types/forms'

export const readPlainText = (value: unknown, fallback = '') =>
  typeof value === 'string' && value.trim() ? value : fallback

export const normalizeNewsletterBlock = (value: unknown): NewsletterBlock => {
  const block = (value && typeof value === 'object') ? value as Partial<NewsletterBlock> : {}

  return {
    title: readPlainText(block.title, 'Suscribete'),
    description: readPlainText(block.description, 'Recibe nuevas actualizaciones directamente en tu inbox.'),
    inputPlaceholder: readPlainText(block.inputPlaceholder, 'Tu email'),
    buttonLabel: readPlainText(block.buttonLabel, 'Suscribirse'),
    invalidMessage: readPlainText(block.invalidMessage, 'Por favor ingresa un email valido.'),
    successMessage: readPlainText(block.successMessage, 'Suscripcion activada correctamente.'),
    errorMessage: readPlainText(block.errorMessage, 'No pudimos procesar tu solicitud.'),
  }
}

export const resolveSubmissionMessage = (
  result: FormSubmissionResult | undefined,
  fallback: string,
) => readPlainText(result?.message, fallback)

import type { FormProvider } from '@/types/forms'

const rawFormProvider = import.meta.env.VITE_FORM_PROVIDER
const rawNewsletterProvider = import.meta.env.VITE_NEWSLETTER_PROVIDER

const resolveProvider = (value: string | undefined): FormProvider =>
  value === 'webhook'
  || value === 'custom'
    ? value
    : 'mock'

export const formProvider = resolveProvider(rawFormProvider)
export const newsletterProvider = resolveProvider(rawNewsletterProvider)

export const formConfig = {
  endpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || '',
  newsletterEndpoint: (import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined) || '',
}

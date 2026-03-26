import type { FormProvider } from '@/types/forms'

const rawFormProvider = import.meta.env.VITE_FORM_PROVIDER
const rawNewsletterProvider = import.meta.env.VITE_NEWSLETTER_PROVIDER

const parseNumber = (value: string | undefined) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined
}

const parseCsv = (value: string | undefined) =>
  (value || '')
    .split(',')
    .map(entry => entry.trim())
    .filter(Boolean)

const resolveMailchimpServerPrefix = (
  explicitPrefix: string | undefined,
  apiKey: string | undefined,
) => {
  if (explicitPrefix?.trim()) {
    return explicitPrefix.trim()
  }

  const suffix = apiKey?.split('-').pop()?.trim()
  return suffix && suffix !== apiKey ? suffix : ''
}

const resolveProvider = (value: string | undefined): FormProvider =>
  value === 'webhook'
  || value === 'brevo'
  || value === 'mailchimp'
  || value === 'custom'
    ? value
    : 'mock'

export const formProvider = resolveProvider(rawFormProvider)
export const newsletterProvider = resolveProvider(rawNewsletterProvider)

export const formConfig = {
  endpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || '',
  newsletterEndpoint: (import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined) || '',
  brevo: {
    apiKey: (import.meta.env.VITE_BREVO_API_KEY as string | undefined) || '',
    newsletterListId: parseNumber(import.meta.env.VITE_BREVO_NEWSLETTER_LIST_ID as string | undefined),
    contactListId: parseNumber(import.meta.env.VITE_BREVO_CONTACT_LIST_ID as string | undefined),
    senderEmail: (import.meta.env.VITE_BREVO_SENDER_EMAIL as string | undefined) || '',
    senderName: (import.meta.env.VITE_BREVO_SENDER_NAME as string | undefined) || '',
    contactRecipientEmail: (import.meta.env.VITE_BREVO_CONTACT_TO_EMAIL as string | undefined) || '',
    contactRecipientName: (import.meta.env.VITE_BREVO_CONTACT_TO_NAME as string | undefined) || '',
  },
  mailchimp: {
    apiKey: (import.meta.env.VITE_MAILCHIMP_API_KEY as string | undefined) || '',
    audienceId: (import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID as string | undefined) || '',
    serverPrefix: resolveMailchimpServerPrefix(
      import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX as string | undefined,
      import.meta.env.VITE_MAILCHIMP_API_KEY as string | undefined,
    ),
    newsletterTags: parseCsv(import.meta.env.VITE_MAILCHIMP_NEWSLETTER_TAGS as string | undefined),
    contactTags: parseCsv(import.meta.env.VITE_MAILCHIMP_CONTACT_TAGS as string | undefined),
    newsletterStatus: ((import.meta.env.VITE_MAILCHIMP_NEWSLETTER_STATUS as string | undefined) || 'subscribed').trim(),
  },
}

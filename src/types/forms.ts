export type FormProvider = 'mock' | 'webhook' | 'custom'

export interface ContactFormPayload {
  name: string
  email: string
  subject: string
  phone?: string
  artistName?: string
  genre?: string
  message: string
  privacy: boolean
}

export interface NewsletterPayload {
  email: string
  source?: string
}

export interface FormSubmissionResult {
  ok: boolean
  message: string
}

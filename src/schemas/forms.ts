import { z } from 'zod'
import type { ContactFormPayload, NewsletterPayload } from '@/types/forms'

const nonEmptyString = z.string().trim().min(1)

export const contactFormPayloadSchema = z.object({
  name: nonEmptyString,
  email: z.string().trim().email(),
  subject: nonEmptyString,
  phone: z.string().trim().optional(),
  artistName: z.string().trim().optional(),
  genre: z.string().trim().optional(),
  message: z.string().trim().min(1).max(4000),
  privacy: z.literal(true),
})

export const newsletterPayloadSchema = z.object({
  email: z.string().trim().email(),
  source: z.string().trim().optional(),
})

const formatIssues = (issues: { path: PropertyKey[]; message: string }[]) =>
  issues.map(issue => `${issue.path.join('.') || 'root'}: ${issue.message}`).join('; ')

export const validateContactFormPayload = (payload: ContactFormPayload): ContactFormPayload => {
  const result = contactFormPayloadSchema.safeParse(payload)

  if (!result.success) {
    throw new Error(`Invalid contact form payload: ${formatIssues(result.error.issues)}`)
  }

  return result.data as ContactFormPayload
}

export const validateNewsletterPayload = (payload: NewsletterPayload): NewsletterPayload => {
  const result = newsletterPayloadSchema.safeParse(payload)

  if (!result.success) {
    throw new Error(`Invalid newsletter payload: ${formatIssues(result.error.issues)}`)
  }

  return result.data as NewsletterPayload
}

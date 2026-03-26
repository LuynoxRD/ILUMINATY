import { formConfig, formProvider, newsletterProvider } from '@/config/forms'
import { validateContactFormPayload, validateNewsletterPayload } from '@/schemas/forms'
import type { ContactFormPayload, FormSubmissionResult, NewsletterPayload } from '@/types/forms'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const getMessageFromRecord = (value: Record<string, unknown>, seen: Set<unknown>): string | undefined => {
  const candidateKeys = ['message', 'detail', 'error', 'title', 'statusText']

  for (const key of candidateKeys) {
    const resolved = extractProviderMessage(value[key], undefined, seen)
    if (resolved)
      return resolved
  }

  return undefined
}

const extractProviderMessage = (
  value: unknown,
  fallback?: string,
  seen = new Set<unknown>(),
): string | undefined => {
  if (typeof value === 'string' && value.trim())
    return value

  if (Array.isArray(value)) {
    for (const item of value) {
      const resolved = extractProviderMessage(item, undefined, seen)
      if (resolved)
        return resolved
    }
  }

  if (value && typeof value === 'object' && !seen.has(value)) {
    seen.add(value)
    return getMessageFromRecord(value as Record<string, unknown>, seen)
  }

  return fallback
}

const readResponseBody = async (response: Response) => {
  const contentType = response.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    return response.json().catch(() => undefined)
  }

  return response.text().catch(() => '')
}

const parseProviderResponse = async (
  response: Response,
  fallbackSuccessMessage: string,
  fallbackErrorMessage: string,
): Promise<FormSubmissionResult> => {
  const body = await readResponseBody(response)
  const parsedMessage = extractProviderMessage(body)

  if (!response.ok) {
    throw new Error(parsedMessage || fallbackErrorMessage)
  }

  return {
    ok: true,
    message: parsedMessage || fallbackSuccessMessage,
  }
}

const submitMock = async (_payload: unknown): Promise<FormSubmissionResult> => {
  await delay(500)
  return {
    ok: true,
    message: 'Mock submission completed successfully.',
  }
}

const submitWebhook = async (endpoint: string, payload: unknown): Promise<FormSubmissionResult> => {
  if (!endpoint) {
    throw new Error('Missing endpoint for webhook submission.')
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return parseProviderResponse(
    response,
    'Webhook submission completed successfully.',
    `Webhook submission failed with status ${response.status}.`,
  )
}

const unsupportedProvider = (provider: string): never => {
  throw new Error(
    `Form provider "${provider}" is not available in the client build. Use mock, webhook or custom with a server-side bridge.`,
  )
}

export const submitContactForm = async (payload: ContactFormPayload): Promise<FormSubmissionResult> => {
  const validatedPayload = validateContactFormPayload(payload)

  switch (formProvider) {
    case 'mock':
      return submitMock(validatedPayload)
    case 'webhook':
    case 'custom':
      return submitWebhook(formConfig.endpoint, validatedPayload)
    default:
      return unsupportedProvider(formProvider)
  }
}

export const subscribeToNewsletter = async (payload: NewsletterPayload): Promise<FormSubmissionResult> => {
  const validatedPayload = validateNewsletterPayload(payload)

  switch (newsletterProvider) {
    case 'mock':
      return submitMock(validatedPayload)
    case 'webhook':
    case 'custom':
      return submitWebhook(formConfig.newsletterEndpoint || formConfig.endpoint, validatedPayload)
    default:
      return unsupportedProvider(newsletterProvider)
  }
}

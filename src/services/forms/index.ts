import { formConfig, formProvider, newsletterProvider } from '@/config/forms'
import { validateContactFormPayload, validateNewsletterPayload } from '@/schemas/forms'
import type { ContactFormPayload, FormSubmissionResult, NewsletterPayload } from '@/types/forms'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const BREVO_API_BASE_URL = 'https://api.brevo.com/v3'

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

const assertConfigured = (condition: unknown, message: string) => {
  if (!condition) {
    throw new Error(message)
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

const splitName = (value: string) => {
  const [firstName = '', ...rest] = value.trim().split(/\s+/)

  return {
    firstName,
    lastName: rest.join(' '),
  }
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const createBrevoHeaders = () => {
  assertConfigured(
    formConfig.brevo.apiKey,
    'Brevo provider requires VITE_BREVO_API_KEY.',
  )

  return {
    'Content-Type': 'application/json',
    'api-key': formConfig.brevo.apiKey,
  }
}

const submitBrevoContactUpsert = async (
  email: string,
  attributes: Record<string, string>,
  listId?: number,
) => {
  const payload: Record<string, unknown> = {
    email,
    updateEnabled: true,
    attributes,
  }

  if (listId) {
    payload.listIds = [listId]
  }

  const response = await fetch(`${BREVO_API_BASE_URL}/contacts`, {
    method: 'POST',
    headers: createBrevoHeaders(),
    body: JSON.stringify(payload),
  })

  return parseProviderResponse(
    response,
    'Contact stored in Brevo successfully.',
    `Brevo contact upsert failed with status ${response.status}.`,
  )
}

const submitBrevoEmail = async (
  payload: ContactFormPayload,
  subject: string,
  htmlContent: string,
  textContent: string,
) => {
  assertConfigured(
    formConfig.brevo.senderEmail && formConfig.brevo.contactRecipientEmail,
    'Brevo contact delivery requires VITE_BREVO_SENDER_EMAIL and VITE_BREVO_CONTACT_TO_EMAIL.',
  )

  const response = await fetch(`${BREVO_API_BASE_URL}/smtp/email`, {
    method: 'POST',
    headers: createBrevoHeaders(),
    body: JSON.stringify({
      sender: {
        email: formConfig.brevo.senderEmail,
        name: formConfig.brevo.senderName || 'ILUMINATY',
      },
      to: [
        {
          email: formConfig.brevo.contactRecipientEmail,
          name: formConfig.brevo.contactRecipientName || 'Inbox',
        },
      ],
      replyTo: {
        email: payload.email,
        name: payload.name,
      },
      subject,
      htmlContent,
      textContent,
    }),
  })

  return parseProviderResponse(
    response,
    'Brevo email dispatched successfully.',
    `Brevo email send failed with status ${response.status}.`,
  )
}

const buildContactHtml = (payload: ContactFormPayload) => {
  const rows = [
    ['Nombre', payload.name],
    ['Email', payload.email],
    ['Asunto', payload.subject],
    ['Telefono', payload.phone || 'No proporcionado'],
    ['Nombre artistico', payload.artistName || 'No proporcionado'],
    ['Genero', payload.genre || 'No proporcionado'],
    ['Privacidad aceptada', payload.privacy ? 'Si' : 'No'],
    ['Origen', 'website-contact-form'],
  ]

  const rowsHtml = rows
    .map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:600;border:1px solid #e5e7eb;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`)
    .join('')

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;">
      <h2 style="margin-bottom:16px;">Nuevo mensaje de contacto</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:20px;">${rowsHtml}</table>
      <h3 style="margin-bottom:8px;">Mensaje</h3>
      <div style="padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;white-space:pre-wrap;">${escapeHtml(payload.message)}</div>
    </div>
  `
}

const buildContactText = (payload: ContactFormPayload) => [
  'Nuevo mensaje de contacto',
  `Nombre: ${payload.name}`,
  `Email: ${payload.email}`,
  `Asunto: ${payload.subject}`,
  `Telefono: ${payload.phone || 'No proporcionado'}`,
  `Nombre artistico: ${payload.artistName || 'No proporcionado'}`,
  `Genero: ${payload.genre || 'No proporcionado'}`,
  `Privacidad aceptada: ${payload.privacy ? 'Si' : 'No'}`,
  '',
  'Mensaje:',
  payload.message,
].join('\n')

const submitBrevoContactForm = async (payload: ContactFormPayload): Promise<FormSubmissionResult> => {
  const { firstName, lastName } = splitName(payload.name)

  await submitBrevoContactUpsert(
    payload.email,
    {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
    },
    formConfig.brevo.contactListId,
  )

  if (!formConfig.brevo.senderEmail || !formConfig.brevo.contactRecipientEmail) {
    return {
      ok: true,
      message: 'Contacto guardado en Brevo correctamente.',
    }
  }

  return submitBrevoEmail(
    payload,
    `Nuevo contacto: ${payload.subject || 'Consulta general'}`,
    buildContactHtml(payload),
    buildContactText(payload),
  )
}

const submitBrevoNewsletter = async (payload: NewsletterPayload): Promise<FormSubmissionResult> => {
  assertConfigured(
    formConfig.brevo.newsletterListId,
    'Brevo newsletter requires VITE_BREVO_NEWSLETTER_LIST_ID.',
  )

  return submitBrevoContactUpsert(
    payload.email,
    {},
    formConfig.brevo.newsletterListId,
  )
}

const createBasicAuthHeader = (username: string, password: string) => {
  const credentials = `${username}:${password}`
  return `Basic ${btoa(credentials)}`
}

const createMailchimpHeaders = () => {
  assertConfigured(
    formConfig.mailchimp.apiKey && formConfig.mailchimp.serverPrefix && formConfig.mailchimp.audienceId,
    'Mailchimp provider requires VITE_MAILCHIMP_API_KEY, VITE_MAILCHIMP_SERVER_PREFIX and VITE_MAILCHIMP_AUDIENCE_ID.',
  )

  return {
    'Content-Type': 'application/json',
    Authorization: createBasicAuthHeader('anystring', formConfig.mailchimp.apiKey),
  }
}

const createMailchimpBaseUrl = () =>
  `https://${formConfig.mailchimp.serverPrefix}.api.mailchimp.com/3.0`

const rotateLeft = (value: number, shift: number) => (value << shift) | (value >>> (32 - shift))

const addUnsigned = (left: number, right: number) => {
  const leftX8 = left & 0x80000000
  const rightX8 = right & 0x80000000
  const leftX4 = left & 0x40000000
  const rightX4 = right & 0x40000000
  const result = (left & 0x3fffffff) + (right & 0x3fffffff)

  if (leftX4 & rightX4)
    return result ^ 0x80000000 ^ leftX8 ^ rightX8
  if (leftX4 | rightX4) {
    if (result & 0x40000000)
      return result ^ 0xc0000000 ^ leftX8 ^ rightX8
    return result ^ 0x40000000 ^ leftX8 ^ rightX8
  }

  return result ^ leftX8 ^ rightX8
}

const md5F = (x: number, y: number, z: number) => (x & y) | (~x & z)
const md5G = (x: number, y: number, z: number) => (x & z) | (y & ~z)
const md5H = (x: number, y: number, z: number) => x ^ y ^ z
const md5I = (x: number, y: number, z: number) => y ^ (x | ~z)

const md5Step = (
  fn: (x: number, y: number, z: number) => number,
  a: number,
  b: number,
  c: number,
  d: number,
  x: number,
  s: number,
  ac: number,
) => addUnsigned(rotateLeft(addUnsigned(addUnsigned(a, fn(b, c, d)), addUnsigned(x, ac)), s), b)

const convertToWordArray = (value: string) => {
  const messageLength = value.length
  const numberOfWordsTempOne = messageLength + 8
  const numberOfWordsTempTwo = (numberOfWordsTempOne - (numberOfWordsTempOne % 64)) / 64
  const numberOfWords = (numberOfWordsTempTwo + 1) * 16
  const wordArray = Array.from<number>({ length: numberOfWords }).fill(0)

  let byteCount = 0
  while (byteCount < messageLength) {
    const wordCount = (byteCount - (byteCount % 4)) / 4
    const bytePosition = (byteCount % 4) * 8
    wordArray[wordCount] |= value.charCodeAt(byteCount) << bytePosition
    byteCount += 1
  }

  const wordCount = (byteCount - (byteCount % 4)) / 4
  const bytePosition = (byteCount % 4) * 8
  wordArray[wordCount] |= 0x80 << bytePosition
  wordArray[numberOfWords - 2] = messageLength << 3
  wordArray[numberOfWords - 1] = messageLength >>> 29

  return wordArray
}

const wordToHex = (value: number) => {
  let output = ''

  for (let count = 0; count <= 3; count += 1) {
    const byte = (value >>> (count * 8)) & 255
    output += `0${byte.toString(16)}`.slice(-2)
  }

  return output
}

const utf8Encode = (value: string) => unescape(encodeURIComponent(value))

const md5 = (value: string) => {
  const message = convertToWordArray(utf8Encode(value))
  let a = 0x67452301
  let b = 0xefcdab89
  let c = 0x98badcfe
  let d = 0x10325476

  for (let index = 0; index < message.length; index += 16) {
    const originalA = a
    const originalB = b
    const originalC = c
    const originalD = d

    a = md5Step(md5F, a, b, c, d, message[index + 0], 7, 0xd76aa478)
    d = md5Step(md5F, d, a, b, c, message[index + 1], 12, 0xe8c7b756)
    c = md5Step(md5F, c, d, a, b, message[index + 2], 17, 0x242070db)
    b = md5Step(md5F, b, c, d, a, message[index + 3], 22, 0xc1bdceee)
    a = md5Step(md5F, a, b, c, d, message[index + 4], 7, 0xf57c0faf)
    d = md5Step(md5F, d, a, b, c, message[index + 5], 12, 0x4787c62a)
    c = md5Step(md5F, c, d, a, b, message[index + 6], 17, 0xa8304613)
    b = md5Step(md5F, b, c, d, a, message[index + 7], 22, 0xfd469501)
    a = md5Step(md5F, a, b, c, d, message[index + 8], 7, 0x698098d8)
    d = md5Step(md5F, d, a, b, c, message[index + 9], 12, 0x8b44f7af)
    c = md5Step(md5F, c, d, a, b, message[index + 10], 17, 0xffff5bb1)
    b = md5Step(md5F, b, c, d, a, message[index + 11], 22, 0x895cd7be)
    a = md5Step(md5F, a, b, c, d, message[index + 12], 7, 0x6b901122)
    d = md5Step(md5F, d, a, b, c, message[index + 13], 12, 0xfd987193)
    c = md5Step(md5F, c, d, a, b, message[index + 14], 17, 0xa679438e)
    b = md5Step(md5F, b, c, d, a, message[index + 15], 22, 0x49b40821)

    a = md5Step(md5G, a, b, c, d, message[index + 1], 5, 0xf61e2562)
    d = md5Step(md5G, d, a, b, c, message[index + 6], 9, 0xc040b340)
    c = md5Step(md5G, c, d, a, b, message[index + 11], 14, 0x265e5a51)
    b = md5Step(md5G, b, c, d, a, message[index + 0], 20, 0xe9b6c7aa)
    a = md5Step(md5G, a, b, c, d, message[index + 5], 5, 0xd62f105d)
    d = md5Step(md5G, d, a, b, c, message[index + 10], 9, 0x02441453)
    c = md5Step(md5G, c, d, a, b, message[index + 15], 14, 0xd8a1e681)
    b = md5Step(md5G, b, c, d, a, message[index + 4], 20, 0xe7d3fbc8)
    a = md5Step(md5G, a, b, c, d, message[index + 9], 5, 0x21e1cde6)
    d = md5Step(md5G, d, a, b, c, message[index + 14], 9, 0xc33707d6)
    c = md5Step(md5G, c, d, a, b, message[index + 3], 14, 0xf4d50d87)
    b = md5Step(md5G, b, c, d, a, message[index + 8], 20, 0x455a14ed)
    a = md5Step(md5G, a, b, c, d, message[index + 13], 5, 0xa9e3e905)
    d = md5Step(md5G, d, a, b, c, message[index + 2], 9, 0xfcefa3f8)
    c = md5Step(md5G, c, d, a, b, message[index + 7], 14, 0x676f02d9)
    b = md5Step(md5G, b, c, d, a, message[index + 12], 20, 0x8d2a4c8a)

    a = md5Step(md5H, a, b, c, d, message[index + 5], 4, 0xfffa3942)
    d = md5Step(md5H, d, a, b, c, message[index + 8], 11, 0x8771f681)
    c = md5Step(md5H, c, d, a, b, message[index + 11], 16, 0x6d9d6122)
    b = md5Step(md5H, b, c, d, a, message[index + 14], 23, 0xfde5380c)
    a = md5Step(md5H, a, b, c, d, message[index + 1], 4, 0xa4beea44)
    d = md5Step(md5H, d, a, b, c, message[index + 4], 11, 0x4bdecfa9)
    c = md5Step(md5H, c, d, a, b, message[index + 7], 16, 0xf6bb4b60)
    b = md5Step(md5H, b, c, d, a, message[index + 10], 23, 0xbebfbc70)
    a = md5Step(md5H, a, b, c, d, message[index + 13], 4, 0x289b7ec6)
    d = md5Step(md5H, d, a, b, c, message[index + 0], 11, 0xeaa127fa)
    c = md5Step(md5H, c, d, a, b, message[index + 3], 16, 0xd4ef3085)
    b = md5Step(md5H, b, c, d, a, message[index + 6], 23, 0x04881d05)
    a = md5Step(md5H, a, b, c, d, message[index + 9], 4, 0xd9d4d039)
    d = md5Step(md5H, d, a, b, c, message[index + 12], 11, 0xe6db99e5)
    c = md5Step(md5H, c, d, a, b, message[index + 15], 16, 0x1fa27cf8)
    b = md5Step(md5H, b, c, d, a, message[index + 2], 23, 0xc4ac5665)

    a = md5Step(md5I, a, b, c, d, message[index + 0], 6, 0xf4292244)
    d = md5Step(md5I, d, a, b, c, message[index + 7], 10, 0x432aff97)
    c = md5Step(md5I, c, d, a, b, message[index + 14], 15, 0xab9423a7)
    b = md5Step(md5I, b, c, d, a, message[index + 5], 21, 0xfc93a039)
    a = md5Step(md5I, a, b, c, d, message[index + 12], 6, 0x655b59c3)
    d = md5Step(md5I, d, a, b, c, message[index + 3], 10, 0x8f0ccc92)
    c = md5Step(md5I, c, d, a, b, message[index + 10], 15, 0xffeff47d)
    b = md5Step(md5I, b, c, d, a, message[index + 1], 21, 0x85845dd1)
    a = md5Step(md5I, a, b, c, d, message[index + 8], 6, 0x6fa87e4f)
    d = md5Step(md5I, d, a, b, c, message[index + 15], 10, 0xfe2ce6e0)
    c = md5Step(md5I, c, d, a, b, message[index + 6], 15, 0xa3014314)
    b = md5Step(md5I, b, c, d, a, message[index + 13], 21, 0x4e0811a1)
    a = md5Step(md5I, a, b, c, d, message[index + 4], 6, 0xf7537e82)
    d = md5Step(md5I, d, a, b, c, message[index + 11], 10, 0xbd3af235)
    c = md5Step(md5I, c, d, a, b, message[index + 2], 15, 0x2ad7d2bb)
    b = md5Step(md5I, b, c, d, a, message[index + 9], 21, 0xeb86d391)

    a = addUnsigned(a, originalA)
    b = addUnsigned(b, originalB)
    c = addUnsigned(c, originalC)
    d = addUnsigned(d, originalD)
  }

  return `${wordToHex(a)}${wordToHex(b)}${wordToHex(c)}${wordToHex(d)}`
}

const getMailchimpSubscriberHash = (email: string) => md5(email.trim().toLowerCase())

const upsertMailchimpMember = async (
  payload: NewsletterPayload | ContactFormPayload,
  mergeFields: Record<string, string>,
  tags: string[],
) => {
  const isContactPayload = 'name' in payload
  const email = payload.email.trim().toLowerCase()
  const subscriberHash = getMailchimpSubscriberHash(email)
  const response = await fetch(
    `${createMailchimpBaseUrl()}/lists/${formConfig.mailchimp.audienceId}/members/${subscriberHash}`,
    {
      method: 'PUT',
      headers: createMailchimpHeaders(),
      body: JSON.stringify({
        email_address: email,
        status_if_new: formConfig.mailchimp.newsletterStatus || 'subscribed',
        status: formConfig.mailchimp.newsletterStatus || 'subscribed',
        merge_fields: mergeFields,
        tags,
        language: 'es',
        vip: false,
      }),
    },
  )

  return parseProviderResponse(
    response,
    isContactPayload ? 'Contact stored in Mailchimp successfully.' : 'Mailchimp subscription created successfully.',
    `Mailchimp member upsert failed with status ${response.status}.`,
  )
}

const addMailchimpNote = async (email: string, note: string) => {
  const subscriberHash = getMailchimpSubscriberHash(email)
  const response = await fetch(
    `${createMailchimpBaseUrl()}/lists/${formConfig.mailchimp.audienceId}/members/${subscriberHash}/notes`,
    {
      method: 'POST',
      headers: createMailchimpHeaders(),
      body: JSON.stringify({
        note,
      }),
    },
  )

  return parseProviderResponse(
    response,
    'Mailchimp note created successfully.',
    `Mailchimp note creation failed with status ${response.status}.`,
  )
}

const submitMailchimpNewsletter = async (payload: NewsletterPayload): Promise<FormSubmissionResult> =>
  upsertMailchimpMember(
    payload,
    {},
    [...formConfig.mailchimp.newsletterTags, payload.source || 'website-newsletter'],
  )

const submitMailchimpContactForm = async (payload: ContactFormPayload): Promise<FormSubmissionResult> => {
  const { firstName, lastName } = splitName(payload.name)

  await upsertMailchimpMember(
    payload,
    {
      FNAME: firstName,
      LNAME: lastName,
    },
    [...formConfig.mailchimp.contactTags, 'website-contact-form'],
  )

  const note = [
    `Asunto: ${payload.subject}`,
    `Email: ${payload.email}`,
    `Telefono: ${payload.phone || 'No proporcionado'}`,
    `Nombre artistico: ${payload.artistName || 'No proporcionado'}`,
    `Genero: ${payload.genre || 'No proporcionado'}`,
    `Privacidad aceptada: ${payload.privacy ? 'Si' : 'No'}`,
    '',
    payload.message,
  ].join('\n')

  return addMailchimpNote(payload.email, note)
}

const unsupportedProvider = (provider: string): never => {
  throw new Error(
    `Form provider "${provider}" is not implemented yet. Use mock/webhook/custom for now or add the adapter.`,
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
    case 'brevo':
      return submitBrevoContactForm(validatedPayload)
    case 'mailchimp':
      return submitMailchimpContactForm(validatedPayload)
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
    case 'brevo':
      return submitBrevoNewsletter(validatedPayload)
    case 'mailchimp':
      return submitMailchimpNewsletter(validatedPayload)
    default:
      return unsupportedProvider(newsletterProvider)
  }
}

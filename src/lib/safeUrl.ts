const SAFE_ABSOLUTE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])

const hasSafeRelativePrefix = (value: string) =>
  value.startsWith('/')
  || value.startsWith('#')

export const toSafeHref = (value: string | null | undefined): string | undefined => {
  const normalized = value?.trim()

  if (!normalized)
    return undefined

  if (hasSafeRelativePrefix(normalized))
    return normalized

  try {
    const parsed = new URL(normalized)
    return SAFE_ABSOLUTE_PROTOCOLS.has(parsed.protocol) ? normalized : undefined
  }
  catch {
    return undefined
  }
}

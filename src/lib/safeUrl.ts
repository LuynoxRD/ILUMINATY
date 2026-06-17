const SAFE_ABSOLUTE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])

// Rejects obvious dangerous schemes before URL parsing (case-insensitive, post-trim).
// The WHATWG URL parser is the second line of defense for obfuscated variants
// (e.g. tab/LF/CR embedded inside the scheme name).
const DANGEROUS_SCHEME_RE = /^(?:javascript|data|vbscript):/i

// Requires a true relative path (single leading /) or a fragment (#).
// Explicitly excludes protocol-relative URLs (//host) which are an open-redirect vector.
const hasSafeRelativePrefix = (value: string) =>
  (value.startsWith('/') && !value.startsWith('//'))
  || value.startsWith('#')

export const toSafeHref = (value: string | null | undefined): string | undefined => {
  const normalized = value?.trim()

  if (!normalized)
    return undefined

  if (DANGEROUS_SCHEME_RE.test(normalized))
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

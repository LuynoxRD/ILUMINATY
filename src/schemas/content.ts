import { z } from 'zod'
import type { ContentSnapshot } from '@/types/content'

const nonEmptyString = z.string().trim().min(1)

const navigationLinkSchema = z.object({
  label: nonEmptyString,
  href: nonEmptyString,
})

const newsletterBlockSchema = z.object({
  title: nonEmptyString,
  description: nonEmptyString,
  inputPlaceholder: nonEmptyString,
  buttonLabel: nonEmptyString,
  invalidMessage: nonEmptyString,
  successMessage: nonEmptyString,
  errorMessage: nonEmptyString,
})

const faqItemSchema = z.object({
  question: nonEmptyString,
  answer: nonEmptyString,
})

const uiAssetsSchema = z.object({
  appPreview: nonEmptyString,
  labelLogos: z.array(z.object({
    id: nonEmptyString,
    name: nonEmptyString,
    src: nonEmptyString,
  })),
})

const imageAssetsSchema = z.object({
  blog: z.record(z.string(), nonEmptyString),
  homeArtists: z.record(z.string(), nonEmptyString),
  artistDirectory: z.record(z.string(), nonEmptyString),
  about: z.record(z.string(), nonEmptyString),
  followers: z.record(z.string(), nonEmptyString),
  events: z.record(z.string(), nonEmptyString),
})

const socialProfilesSchema = z.object({
  instagram: nonEmptyString,
  facebook: nonEmptyString,
  youtube: nonEmptyString,
  tiktok: nonEmptyString,
  github: nonEmptyString,
})

const siteSettingsSchema = z.object({
  brandName: nonEmptyString,
  footerDescription: nonEmptyString,
  footerLinkGroups: z.array(z.object({
    title: nonEmptyString,
    links: z.array(navigationLinkSchema),
  })),
  footerFollowLabel: nonEmptyString,
  footerCopyright: nonEmptyString,
  footerCreditPrefix: nonEmptyString,
  footerCreditName: nonEmptyString,
  footerCreditHref: z.string().trim().optional(),
  footerCreditConnector: nonEmptyString,
  footerTechnologyName: nonEmptyString,
  footerTechnologyHref: z.string().trim().optional(),
  footerRepositoryLink: navigationLinkSchema.optional(),
  socialProfiles: socialProfilesSchema,
})

const homePageSchema = z.object({
  hero: z.object({
    highlightedWord: nonEmptyString,
    titleRemainder: nonEmptyString,
    description: nonEmptyString,
    primaryCta: navigationLinkSchema,
    secondaryCta: navigationLinkSchema,
    stats: z.array(z.object({
      label: nonEmptyString,
      value: z.number().finite().nonnegative(),
      format: z.enum(['plain', 'millions']).optional(),
      suffix: z.string().optional(),
    })).min(1),
  }),
  labelsSection: z.object({
    title: nonEmptyString,
    description: nonEmptyString,
  }),
  highlightCard: z.object({
    title: nonEmptyString,
    description: nonEmptyString,
  }),
  featuredArtistsSection: z.object({
    title: nonEmptyString,
    description: nonEmptyString,
  }),
  communitySection: z.object({
    title: nonEmptyString,
    description: nonEmptyString,
    benefits: z.array(nonEmptyString).min(1),
    cta: navigationLinkSchema,
  }),
  faqSection: z.object({
    title: nonEmptyString,
    description: nonEmptyString,
    contactLink: navigationLinkSchema,
    items: z.array(faqItemSchema).min(1),
  }),
  featuredBlogSection: z.object({
    eyebrow: nonEmptyString,
    title: nonEmptyString,
    description: nonEmptyString,
    ctaLabel: nonEmptyString,
  }),
  newsletterSection: newsletterBlockSchema,
  appCta: z.object({
    title: nonEmptyString,
    description: nonEmptyString,
    iosButton: navigationLinkSchema,
    androidButton: navigationLinkSchema,
  }),
})

const aboutPageSchema = z.object({
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  missionSection: z.object({
    subtitle: nonEmptyString,
    title: nonEmptyString,
    description: nonEmptyString,
    heading: nonEmptyString,
    body: nonEmptyString,
    bullets: z.array(nonEmptyString).min(1),
  }),
  valuesSection: z.object({
    eyebrow: nonEmptyString,
    title: nonEmptyString,
    items: z.array(z.object({
      icon: nonEmptyString,
      title: nonEmptyString,
      description: nonEmptyString,
    })).min(1),
  }),
  teamSection: z.object({
    subtitle: nonEmptyString,
    title: nonEmptyString,
    description: nonEmptyString,
  }),
  manifestoSection: z.object({
    title: nonEmptyString,
    entries: z.array(z.object({
      accentLabel: nonEmptyString,
      accentClass: nonEmptyString,
      body: nonEmptyString,
    })).min(1),
  }),
})

const contactPageSchema = z.object({
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  infoTitle: nonEmptyString,
  socialTitle: nonEmptyString,
  formTitle: nonEmptyString,
  methods: z.array(z.object({
    title: nonEmptyString,
    value: nonEmptyString,
    href: z.string().trim().optional(),
    description: nonEmptyString,
    accentClass: nonEmptyString,
    icon: nonEmptyString,
  })).min(1),
  office: z.object({
    title: nonEmptyString,
    lines: z.array(nonEmptyString).min(1),
    hours: nonEmptyString,
  }),
  form: z.object({
    nameLabel: nonEmptyString,
    emailLabel: nonEmptyString,
    subjectLabel: nonEmptyString,
    subjectPlaceholder: nonEmptyString,
    subjectOptions: z.array(z.object({
      label: nonEmptyString,
      value: nonEmptyString,
    })).min(1),
    phoneLabel: nonEmptyString,
    artistNameLabel: nonEmptyString,
    artistNamePlaceholder: nonEmptyString,
    genreLabel: nonEmptyString,
    genrePlaceholder: nonEmptyString,
    genreOptions: z.array(z.object({
      label: nonEmptyString,
      value: nonEmptyString,
    })).min(1),
    messageLabel: nonEmptyString,
    messagePlaceholder: nonEmptyString,
    messageLimit: z.number().int().positive(),
    privacyPrefix: nonEmptyString,
    termsLabel: nonEmptyString,
    privacyLabel: nonEmptyString,
    privacySuffix: nonEmptyString,
    loadingMessage: nonEmptyString,
    successMessage: nonEmptyString,
    errorMessage: nonEmptyString,
    submitLabel: nonEmptyString,
    submitLoadingLabel: nonEmptyString,
  }),
  faqTitle: nonEmptyString,
  faqs: z.array(faqItemSchema).min(1),
})

const contentCardSchema = z.object({
  title: nonEmptyString,
  description: nonEmptyString,
  bullets: z.array(nonEmptyString).optional(),
  accentClass: z.string().trim().optional(),
})

const contentSectionSchema = z.object({
  title: nonEmptyString,
  paragraphs: z.array(nonEmptyString),
  bullets: z.array(nonEmptyString).optional(),
  cards: z.array(contentCardSchema).optional(),
  links: z.array(navigationLinkSchema).optional(),
})

const legalPageSchema = z.object({
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  sections: z.array(contentSectionSchema).min(1),
  contactCard: z.object({
    title: nonEmptyString,
    description: nonEmptyString,
    details: z.array(z.object({
      label: nonEmptyString,
      value: nonEmptyString,
    })).min(1),
  }).optional(),
  footerNote: nonEmptyString,
  ctaTitle: nonEmptyString,
  ctaDescription: nonEmptyString,
  ctaLink: navigationLinkSchema,
})

const artistsPageSchema = z.object({
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  filters: z.object({
    genreLabel: nonEmptyString,
    allGenresLabel: nonEmptyString,
    neighborhoodLabel: nonEmptyString,
    allNeighborhoodsLabel: nonEmptyString,
    searchLabel: nonEmptyString,
    searchPlaceholder: nonEmptyString,
  }),
  genreOptions: z.array(z.object({
    label: nonEmptyString,
    value: nonEmptyString,
  })).min(1),
  neighborhoodOptions: z.array(nonEmptyString).min(1),
  resultsSection: z.object({
    subtitle: nonEmptyString,
    countSuffix: nonEmptyString,
  }),
  actions: z.object({
    viewProfileLabel: nonEmptyString,
  }),
  popup: z.object({
    musicTitle: nonEmptyString,
    socialTitle: nonEmptyString,
    spotifyMeta: nonEmptyString,
    youtubeMeta: nonEmptyString,
    appleMusicMeta: nonEmptyString,
    soundcloudMeta: nonEmptyString,
    instagramMeta: nonEmptyString,
    tiktokMeta: nonEmptyString,
    xMeta: nonEmptyString,
  }),
  emptyState: z.object({
    icon: nonEmptyString,
    title: nonEmptyString,
    description: nonEmptyString,
  }),
})

const eventsPageSchema = z.object({
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  statsLabels: z.object({
    total: nonEmptyString,
    upcoming: nonEmptyString,
    soldOut: nonEmptyString,
    available: nonEmptyString,
  }),
  filters: z.object({
    allMonthsLabel: nonEmptyString,
    allVenuesLabel: nonEmptyString,
    availableOnlyLabel: nonEmptyString,
  }),
  resultsSubtitle: nonEmptyString,
  resultsTitleSuffix: nonEmptyString,
  emptyState: z.object({
    icon: nonEmptyString,
    title: nonEmptyString,
    description: nonEmptyString,
  }),
  purchaseStepsTitle: nonEmptyString,
  purchaseSteps: z.array(z.object({
    icon: nonEmptyString,
    title: nonEmptyString,
    description: nonEmptyString,
  })).min(1),
  notificationSection: newsletterBlockSchema,
  cardLabels: z.object({
    artists: nonEmptyString,
    available: nonEmptyString,
    soldOut: nonEmptyString,
    buyTickets: nonEmptyString,
    comingSoon: nonEmptyString,
    doorsOpenPrefix: nonEmptyString,
  }),
})

const blogPageSchema = z.object({
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  newsletterSection: newsletterBlockSchema,
  post: z.object({
    backLabel: nonEmptyString,
    shareLabel: nonEmptyString,
    authorLabel: nonEmptyString,
    tocLabel: nonEmptyString,
    relatedEyebrow: nonEmptyString,
    relatedTitle: nonEmptyString,
    relatedLinkLabel: nonEmptyString,
    newsletterEyebrow: nonEmptyString,
    newsletterTitle: nonEmptyString,
    newsletterDescription: nonEmptyString,
  }),
})

const aboutContentSchema = z.object({
  missionImage: nonEmptyString,
  team: z.array(z.object({
    id: nonEmptyString,
    name: nonEmptyString,
    role: nonEmptyString,
    bio: nonEmptyString,
    image: nonEmptyString,
    accentClass: nonEmptyString,
    email: z.string(),
    secondaryLink: z.string(),
    secondaryLabel: nonEmptyString,
  })).min(1),
})

const featuredArtistSchema = z.object({
  id: nonEmptyString,
  name: nonEmptyString,
  genre: nonEmptyString,
  image: nonEmptyString,
})

const artistLinksSchema = z.object({
  spotify: z.string().trim().url().optional(),
  youtube: z.string().trim().url().optional(),
  appleMusic: z.string().trim().url().optional(),
  instagram: z.string().trim().url().optional(),
  tiktok: z.string().trim().url().optional(),
  x: z.string().trim().url().optional(),
  soundcloud: z.string().trim().url().optional(),
})

const artistDirectoryEntrySchema = featuredArtistSchema.extend({
  bio: nonEmptyString,
  locationLabel: nonEmptyString,
  neighborhoods: z.array(nonEmptyString),
  badge: nonEmptyString,
  links: artistLinksSchema,
})

const followerCardSchema = z.object({
  image: nonEmptyString,
  name: nonEmptyString,
  handle: nonEmptyString,
  date: nonEmptyString,
  message: nonEmptyString,
})

const blogContentBlockSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('heading'),
    style: z.enum(['h2', 'h3']).optional(),
    text: nonEmptyString,
  }),
  z.object({
    type: z.literal('paragraph'),
    text: nonEmptyString,
  }),
  z.object({
    type: z.literal('bullet-list'),
    items: z.array(nonEmptyString).min(1),
  }),
  z.object({
    type: z.literal('quote'),
    text: nonEmptyString,
    citation: z.string().trim().optional(),
  }),
  z.object({
    type: z.literal('image'),
    src: nonEmptyString,
    alt: nonEmptyString,
    caption: z.string().trim().optional(),
  }),
  z.object({
    type: z.literal('embed'),
    url: z.string().trim().url(),
    title: z.string().trim().optional(),
  }),
])

const blogPostSchema = z.object({
  id: nonEmptyString,
  slug: nonEmptyString,
  title: nonEmptyString,
  excerpt: nonEmptyString,
  metaDescription: nonEmptyString,
  category: z.enum(['Noticias', 'Análisis', 'Tutoriales', 'Entrevistas', 'Tendencias', 'Colaboraciones']),
  date: nonEmptyString,
  author: nonEmptyString,
  authorBio: nonEmptyString,
  image: nonEmptyString,
  imageAlt: nonEmptyString,
  readTime: z.number().int().positive(),
  tags: z.array(nonEmptyString).optional(),
  blocks: z.array(blogContentBlockSchema).min(1),
})

const eventEntrySchema = z.object({
  id: nonEmptyString,
  title: nonEmptyString,
  description: nonEmptyString,
  date: nonEmptyString,
  time: nonEmptyString,
  doorsOpen: nonEmptyString,
  venue: nonEmptyString,
  price: nonEmptyString,
  image: nonEmptyString,
  artists: z.array(nonEmptyString).min(1),
  isSoldOut: z.boolean(),
  ticketUrl: z.string().url().optional(),
})

export const contentSnapshotSchema = z.object({
  uiAssets: uiAssetsSchema,
  imageAssets: imageAssetsSchema,
  siteSettings: siteSettingsSchema,
  homePage: homePageSchema,
  aboutPage: aboutPageSchema,
  artistsPage: artistsPageSchema,
  contactPage: contactPageSchema,
  eventsPage: eventsPageSchema,
  blogPage: blogPageSchema,
  termsPage: legalPageSchema,
  privacyPage: legalPageSchema,
  cookiesPage: legalPageSchema,
  aboutContent: aboutContentSchema,
  featuredArtists: z.array(featuredArtistSchema).min(1),
  artistDirectoryEntries: z.array(artistDirectoryEntrySchema).min(1),
  followerTestimonials: z.array(followerCardSchema).min(1),
  socialProfiles: socialProfilesSchema,
  blogPosts: z.array(blogPostSchema).min(1),
  sortedBlogPosts: z.array(blogPostSchema).min(1),
  blogPostPaths: z.array(nonEmptyString),
  eventEntries: z.array(eventEntrySchema).min(1),
})

const formatIssues = (issues: { path: PropertyKey[]; message: string }[]) =>
  issues.map(issue => `${issue.path.join('.') || 'root'}: ${issue.message}`).join('; ')

export const validateContentSnapshot = (snapshot: ContentSnapshot): ContentSnapshot => {
  const result = contentSnapshotSchema.safeParse(snapshot)

  if (!result.success) {
    throw new Error(`Invalid content snapshot: ${formatIssues(result.error.issues)}`)
  }

  return result.data as ContentSnapshot
}

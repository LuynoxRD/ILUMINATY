export type ContentSource = 'local' | 'sanity' | 'contentful' | 'sheets' | 'api'

export interface LabelLogo {
  id: string
  name: string
  src: string
}

export interface UiAssets {
  appPreview: string
  labelLogos: LabelLogo[]
}

export interface ImageAssetGroup {
  [key: string]: string
}

export interface ImageAssets {
  blog: ImageAssetGroup
  homeArtists: ImageAssetGroup
  artistDirectory: ImageAssetGroup
  about: ImageAssetGroup
  followers: ImageAssetGroup
  events: ImageAssetGroup
}

export interface FeaturedArtist {
  id: string
  name: string
  genre: string
  image: string
}

export interface ArtistLinks {
  spotify?: string
  youtube?: string
  appleMusic?: string
  instagram?: string
  tiktok?: string
  x?: string
  soundcloud?: string
}

export interface ArtistDirectoryEntry extends FeaturedArtist {
  bio: string
  locationLabel: string
  neighborhoods: string[]
  badge: string
  links: ArtistLinks
}

export interface AboutTeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  accentClass: string
  email: string
  secondaryLink: string
  secondaryLabel: string
}

export interface AboutContent {
  missionImage: string
  team: AboutTeamMember[]
}

export interface FollowerCard {
  image: string
  name: string
  handle: string
  date: string
  message: string
}

export interface SocialProfiles {
  instagram: string
  facebook: string
  youtube: string
  tiktok: string
  github: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface FooterLinkGroup {
  title: string
  links: NavigationLink[]
}

export interface SiteSettings {
  brandName: string
  footerDescription: string
  footerLinkGroups: FooterLinkGroup[]
  footerFollowLabel: string
  footerCopyright: string
  footerCreditPrefix: string
  footerCreditName: string
  footerCreditHref?: string
  footerCreditConnector: string
  footerTechnologyName: string
  footerTechnologyHref?: string
  footerRepositoryLink?: NavigationLink
  socialProfiles: SocialProfiles
}

export interface FaqItem {
  question: string
  answer: string
}

export interface NewsletterBlock {
  title: string
  description: string
  inputPlaceholder: string
  buttonLabel: string
  invalidMessage: string
  successMessage: string
  errorMessage: string
}

export interface HomeHeroStat {
  label: string
  value: number
  format?: 'plain' | 'millions'
  suffix?: string
}

export interface HomePageContent {
  hero: {
    highlightedWord: string
    titleRemainder: string
    description: string
    primaryCta: NavigationLink
    secondaryCta: NavigationLink
    stats: HomeHeroStat[]
  }
  labelsSection: {
    title: string
    description: string
  }
  highlightCard: {
    title: string
    description: string
  }
  featuredArtistsSection: {
    title: string
    description: string
  }
  communitySection: {
    title: string
    description: string
    benefits: string[]
    cta: NavigationLink
  }
  faqSection: {
    title: string
    description: string
    contactLink: NavigationLink
    items: FaqItem[]
  }
  featuredBlogSection: {
    eyebrow: string
    title: string
    description: string
    ctaLabel: string
  }
  newsletterSection: NewsletterBlock
  appCta: {
    title: string
    description: string
    iosButton: NavigationLink
    androidButton: NavigationLink
  }
}

export interface AboutValueItem {
  icon: string
  title: string
  description: string
}

export interface ManifestoEntry {
  accentLabel: string
  accentClass: string
  body: string
}

export interface AboutPageContent {
  heroTitle: string
  heroDescription: string
  missionSection: {
    subtitle: string
    title: string
    description: string
    heading: string
    body: string
    bullets: string[]
  }
  valuesSection: {
    eyebrow: string
    title: string
    items: AboutValueItem[]
  }
  teamSection: {
    subtitle: string
    title: string
    description: string
  }
  manifestoSection: {
    title: string
    entries: ManifestoEntry[]
  }
}

export interface SelectOption {
  label: string
  value: string
}

export interface ContactMethod {
  title: string
  value: string
  href?: string
  description: string
  accentClass: string
  icon: string
}

export interface ContactPageContent {
  heroTitle: string
  heroDescription: string
  infoTitle: string
  socialTitle: string
  formTitle: string
  methods: ContactMethod[]
  office: {
    title: string
    lines: string[]
    hours: string
  }
  form: {
    nameLabel: string
    emailLabel: string
    subjectLabel: string
    subjectPlaceholder: string
    subjectOptions: SelectOption[]
    phoneLabel: string
    artistNameLabel: string
    artistNamePlaceholder: string
    genreLabel: string
    genrePlaceholder: string
    genreOptions: SelectOption[]
    messageLabel: string
    messagePlaceholder: string
    messageLimit: number
    privacyPrefix: string
    termsLabel: string
    privacyLabel: string
    privacySuffix: string
    loadingMessage: string
    successMessage: string
    errorMessage: string
    submitLabel: string
    submitLoadingLabel: string
  }
  faqTitle: string
  faqs: FaqItem[]
}

export interface ContentCard {
  title: string
  description: string
  bullets?: string[]
  accentClass?: string
}

export interface ContentSection {
  title: string
  paragraphs: string[]
  bullets?: string[]
  cards?: ContentCard[]
  links?: NavigationLink[]
}

export interface LegalContactDetail {
  label: string
  value: string
}

export interface LegalPageContent {
  heroTitle: string
  heroDescription: string
  sections: ContentSection[]
  contactCard?: {
    title: string
    description: string
    details: LegalContactDetail[]
  }
  footerNote: string
  ctaTitle: string
  ctaDescription: string
  ctaLink: NavigationLink
}

export interface ArtistsPageContent {
  heroTitle: string
  heroDescription: string
  filters: {
    genreLabel: string
    allGenresLabel: string
    neighborhoodLabel: string
    allNeighborhoodsLabel: string
    searchLabel: string
    searchPlaceholder: string
  }
  genreOptions: SelectOption[]
  neighborhoodOptions: string[]
  resultsSection: {
    subtitle: string
    countSuffix: string
  }
  actions: {
    viewProfileLabel: string
  }
  popup: {
    musicTitle: string
    socialTitle: string
    spotifyMeta: string
    youtubeMeta: string
    appleMusicMeta: string
    soundcloudMeta: string
    instagramMeta: string
    tiktokMeta: string
    xMeta: string
  }
  emptyState: {
    icon: string
    title: string
    description: string
  }
}

export interface EventStep {
  icon: string
  title: string
  description: string
}

export interface EventsPageContent {
  heroTitle: string
  heroDescription: string
  statsLabels: {
    total: string
    upcoming: string
    soldOut: string
    available: string
  }
  filters: {
    allMonthsLabel: string
    allVenuesLabel: string
    availableOnlyLabel: string
  }
  resultsSubtitle: string
  resultsTitleSuffix: string
  emptyState: {
    icon: string
    title: string
    description: string
  }
  purchaseStepsTitle: string
  purchaseSteps: EventStep[]
  notificationSection: NewsletterBlock
  cardLabels: {
    artists: string
    available: string
    soldOut: string
    buyTickets: string
    comingSoon: string
    doorsOpenPrefix: string
  }
}

export interface BlogPageContent {
  heroTitle: string
  heroDescription: string
  newsletterSection: NewsletterBlock
  post: {
    backLabel: string
    shareLabel: string
    authorLabel: string
    tocLabel: string
    relatedEyebrow: string
    relatedTitle: string
    relatedLinkLabel: string
    newsletterEyebrow: string
    newsletterTitle: string
    newsletterDescription: string
  }
}

export type BlogCategory =
  | 'Noticias'
  | 'Análisis'
  | 'Tutoriales'
  | 'Entrevistas'
  | 'Tendencias'
  | 'Colaboraciones'

export interface BlogSection {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type BlogContentBlock =
  | {
    type: 'heading'
    style?: 'h2' | 'h3'
    text: string
  }
  | {
    type: 'paragraph'
    text: string
  }
  | {
    type: 'bullet-list'
    items: string[]
  }
  | {
    type: 'quote'
    text: string
    citation?: string
  }
  | {
    type: 'image'
    src: string
    alt: string
    caption?: string
  }
  | {
    type: 'embed'
    url: string
    title?: string
  }

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  metaDescription: string
  category: BlogCategory
  date: string
  author: string
  authorBio: string
  image: string
  imageAlt: string
  readTime: number
  tags?: string[]
  blocks: BlogContentBlock[]
}

export interface EventEntry {
  id: string
  title: string
  description: string
  date: string
  time: string
  doorsOpen: string
  venue: string
  price: string
  image: string
  artists: string[]
  isSoldOut: boolean
  ticketUrl?: string
}

export interface ContentSnapshot {
  uiAssets: UiAssets
  imageAssets: ImageAssets
  siteSettings: SiteSettings
  homePage: HomePageContent
  aboutPage: AboutPageContent
  artistsPage: ArtistsPageContent
  contactPage: ContactPageContent
  eventsPage: EventsPageContent
  blogPage: BlogPageContent
  termsPage: LegalPageContent
  privacyPage: LegalPageContent
  cookiesPage: LegalPageContent
  aboutContent: AboutContent
  featuredArtists: FeaturedArtist[]
  artistDirectoryEntries: ArtistDirectoryEntry[]
  followerTestimonials: FollowerCard[]
  socialProfiles: SocialProfiles
  blogPosts: BlogPost[]
  sortedBlogPosts: BlogPost[]
  blogPostPaths: string[]
  eventEntries: EventEntry[]
}

export interface ContentAdapter extends ContentSnapshot {
  getBlogPostBySlug: (slug: string) => BlogPost | undefined
  getBlogPostById: (id: string) => BlogPost | undefined
}

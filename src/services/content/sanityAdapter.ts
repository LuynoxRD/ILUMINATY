import { sanityConfig } from '@/config/content'
import { parseLocalDate } from '@/lib/date'
import { validateContentSnapshot } from '@/schemas/content'
import { localContentAdapter } from '@/services/content/localAdapter'
import type {
  AboutContent,
  AboutPageContent,
  ArtistDirectoryEntry,
  ArtistsPageContent,
  BlogContentBlock,
  BlogPageContent,
  BlogPost,
  ContactPageContent,
  ContentCard,
  ContentSection,
  ContentAdapter,
  EventEntry,
  EventsPageContent,
  FeaturedArtist,
  FollowerCard,
  HomePageContent,
  LegalPageContent,
  SiteSettings,
  UiAssets,
} from '@/types/content'

interface SanityAssetRef {
  url?: string
}

interface SanitySiteSettings extends Partial<SiteSettings> {}
interface SanityHomePage extends Partial<HomePageContent> {
  appPreview?: SanityAssetRef
}
interface SanityAboutPage extends Partial<AboutPageContent> {
  missionImage?: SanityAssetRef
}
interface SanityContactPage extends Partial<ContactPageContent> {}
interface SanityEventsPage extends Partial<EventsPageContent> {}
interface SanityBlogPage extends Partial<BlogPageContent> {}
interface SanityArtistsPage extends Partial<ArtistsPageContent> {}
interface SanityLegalPage extends Partial<LegalPageContent> {}

interface SanityArtist {
  id?: string
  _id?: string
  name?: string
  genre?: string
  bio?: string
  locationLabel?: string
  image?: SanityAssetRef
  homeImage?: SanityAssetRef
  neighborhoods?: string[]
  badge?: string
  featured?: boolean
  links?: {
    spotify?: string
    youtube?: string
    appleMusic?: string
    instagram?: string
    tiktok?: string
    x?: string
    soundcloud?: string
  }
}

interface SanityPostBlock {
  _type?: string
  style?: string
  text?: string
  items?: string[]
  citation?: string
  image?: SanityAssetRef
  alt?: string
  caption?: string
  url?: string
  title?: string
}

interface SanityPost {
  id?: string
  _id?: string
  slug?: string
  title?: string
  excerpt?: string
  metaDescription?: string
  category?: string
  date?: string
  author?: string
  authorBio?: string
  image?: SanityAssetRef
  imageAlt?: string
  readTime?: number
  tags?: string[]
  contentBlocks?: SanityPostBlock[]
}

interface SanityEvent {
  id?: string
  _id?: string
  title?: string
  description?: string
  date?: string
  time?: string
  doorsOpen?: string
  venue?: string
  price?: string
  image?: SanityAssetRef
  artists?: string[]
  isSoldOut?: boolean
  ticketUrl?: string
}

interface SanityTestimonial {
  image?: SanityAssetRef
  name?: string
  handle?: string
  date?: string
  message?: string
}

interface SanityBrandLogo {
  id?: string
  _id?: string
  name?: string
  image?: SanityAssetRef
}

interface SanityTeamMember {
  id?: string
  _id?: string
  name?: string
  role?: string
  bio?: string
  image?: SanityAssetRef
  accentClass?: string
  email?: string
  secondaryLink?: string
  secondaryLabel?: string
}

interface SanityPayload {
  siteSettings?: SanitySiteSettings
  homePage?: SanityHomePage
  aboutPage?: SanityAboutPage
  artistsPage?: SanityArtistsPage
  contactPage?: SanityContactPage
  eventsPage?: SanityEventsPage
  blogPage?: SanityBlogPage
  termsPage?: SanityLegalPage
  privacyPage?: SanityLegalPage
  cookiesPage?: SanityLegalPage
  brandLogos?: SanityBrandLogo[]
  artists?: SanityArtist[]
  testimonials?: SanityTestimonial[]
  teamMembers?: SanityTeamMember[]
  posts?: SanityPost[]
  events?: SanityEvent[]
}

const SANITY_BATCH_SIZE = 500

const sanityQuery = `
{
  "siteSettings": *[_type == "siteSettings"][0]{
    brandName,
    footerDescription,
    footerFollowLabel,
    footerCopyright,
    footerCreditPrefix,
    footerCreditName,
    footerCreditHref,
    footerCreditConnector,
    footerTechnologyName,
    footerTechnologyHref,
    footerRepositoryLink{label, href},
    socialProfiles,
    footerLinkGroups[]{title, links[]{label, href}}
  },
  "homePage": *[_type == "homePage"][0]{
    hero{highlightedWord, titleRemainder, description, primaryCta{label, href}, secondaryCta{label, href}, stats[]{label, value, format, suffix}},
    labelsSection{title, description},
    highlightCard{title, description},
    communitySection{title, description, benefits, cta{label, href}},
    faqSection{title, description, contactLink{label, href}, items[]{question, answer}},
    featuredBlogSection{eyebrow, title, description, ctaLabel},
    newsletterSection{title, description, inputPlaceholder, buttonLabel, invalidMessage, successMessage, errorMessage},
    appCta{title, description, iosButton{label, href}, androidButton{label, href}},
    "appPreview": appPreview.asset->{url}
  },
  "aboutPage": *[_type == "aboutPage"][0]{
    heroTitle,
    heroDescription,
    missionSection{subtitle, title, description, heading, body, bullets},
    valuesSection{eyebrow, title, items[]{icon, title, description}},
    teamSection{subtitle, title, description},
    manifestoSection{title, entries[]{accentLabel, accentClass, body}},
    "missionImage": missionImage.asset->{url}
  },
  "artistsPage": *[_type == "artistsPage"][0]{
    heroTitle,
    heroDescription,
    filters{genreLabel, allGenresLabel, neighborhoodLabel, allNeighborhoodsLabel, searchLabel, searchPlaceholder},
    genreOptions[]{label, value},
    neighborhoodOptions,
    resultsSection{subtitle, countSuffix},
    actions{viewProfileLabel},
    popup{musicTitle, socialTitle, spotifyMeta, youtubeMeta, appleMusicMeta, soundcloudMeta, instagramMeta, tiktokMeta, xMeta},
    emptyState{icon, title, description}
  },
  "contactPage": *[_type == "contactPage"][0]{
    heroTitle,
    heroDescription,
    infoTitle,
    socialTitle,
    formTitle,
    methods[]{title, value, href, description, accentClass, icon},
    office{title, lines, hours},
    form{
      nameLabel, emailLabel, subjectLabel, subjectPlaceholder,
      subjectOptions[]{label, value},
      phoneLabel, artistNameLabel, artistNamePlaceholder,
      genreLabel, genrePlaceholder, genreOptions[]{label, value},
      messageLabel, messagePlaceholder, messageLimit,
      privacyPrefix, termsLabel, privacyLabel, privacySuffix,
      loadingMessage, successMessage, errorMessage, submitLabel, submitLoadingLabel
    },
    faqTitle,
    faqs[]{question, answer}
  },
  "eventsPage": *[_type == "eventsPage"][0]{
    heroTitle,
    heroDescription,
    statsLabels{total, upcoming, soldOut, available},
    filters{allMonthsLabel, allVenuesLabel, availableOnlyLabel},
    resultsSubtitle,
    resultsTitleSuffix,
    emptyState{icon, title, description},
    purchaseStepsTitle,
    purchaseSteps[]{icon, title, description},
    notificationSection{title, description, inputPlaceholder, buttonLabel, invalidMessage, successMessage, errorMessage},
    cardLabels{artists, available, soldOut, buyTickets, comingSoon, doorsOpenPrefix}
  },
  "blogPage": *[_type == "blogPage"][0]{
    heroTitle,
    heroDescription,
    newsletterSection{title, description, inputPlaceholder, buttonLabel, invalidMessage, successMessage, errorMessage},
    post{backLabel, shareLabel, authorLabel, tocLabel, relatedEyebrow, relatedTitle, relatedLinkLabel, newsletterEyebrow, newsletterTitle, newsletterDescription}
  },
  "termsPage": *[_type == "termsPage"][0]{
    heroTitle,
    heroDescription,
    sections[]{title, paragraphs, bullets, cards[]{title, description, bullets, accentClass}, links[]{label, href}},
    contactCard{title, description, details[]{label, value}},
    footerNote,
    ctaTitle,
    ctaDescription,
    ctaLink{label, href}
  },
  "privacyPage": *[_type == "privacyPage"][0]{
    heroTitle,
    heroDescription,
    sections[]{title, paragraphs, bullets, cards[]{title, description, bullets, accentClass}, links[]{label, href}},
    contactCard{title, description, details[]{label, value}},
    footerNote,
    ctaTitle,
    ctaDescription,
    ctaLink{label, href}
  },
  "cookiesPage": *[_type == "cookiesPage"][0]{
    heroTitle,
    heroDescription,
    sections[]{title, paragraphs, bullets, cards[]{title, description, bullets, accentClass}, links[]{label, href}},
    contactCard{title, description, details[]{label, value}},
    footerNote,
    ctaTitle,
    ctaDescription,
    ctaLink{label, href}
  },
  "brandLogos": *[_type == "brandLogo"] | order(order asc, name asc){_id, name, "image": image.asset->{url}},
  "artists": *[_type == "artist"] | order(name asc){_id, name, genre, bio, locationLabel, neighborhoods, badge, featured, links{spotify, youtube, appleMusic, instagram, tiktok, x, soundcloud}, "image": image.asset->{url}, "homeImage": homeImage.asset->{url}},
  "testimonials": *[_type == "testimonial"] | order(order asc, date desc){name, handle, date, message, "image": image.asset->{url}},
  "teamMembers": *[_type == "teamMember"] | order(order asc, name asc){_id, name, role, bio, accentClass, email, secondaryLink, secondaryLabel, "image": image.asset->{url}}
}
`

const sanityPostsBatchQuery = `
*[_type == "post" && _id > $lastId] | order(_id asc)[0...$batchSize]{
  _id,
  title,
  excerpt,
  metaDescription,
  category,
  date,
  author,
  authorBio,
  imageAlt,
  readTime,
  tags,
  "slug": slug.current,
  "image": coverImage.asset->{url},
  contentBlocks[]{
    _type,
    style,
    text,
    items,
    citation,
    alt,
    caption,
    url,
    title,
    "image": image.asset->{url}
  }
}
`

const sanityEventsBatchQuery = `
*[_type == "event" && _id > $lastId] | order(_id asc)[0...$batchSize]{
  _id,
  title,
  description,
  date,
  time,
  doorsOpen,
  venue,
  price,
  artists,
  isSoldOut,
  ticketUrl,
  "image": image.asset->{url}
}
`

const resolveUrl = (asset?: SanityAssetRef, fallback?: string) => asset?.url || fallback || ''
const textOrEmpty = (value: unknown) => typeof value === 'string' ? value : ''
const pick = (value: unknown, fallback: string) => {
  const normalized = textOrEmpty(value).trim()
  return normalized || fallback
}

const mapSanityBlocks = (post: SanityPost): BlogContentBlock[] => {
  const blocks: BlogContentBlock[] = []

  for (const block of post.contentBlocks || []) {
    switch (block._type) {
      case 'heading':
        if (block.text) {
          blocks.push({
            type: 'heading',
            style: block.style === 'h3' ? 'h3' : 'h2',
            text: block.text,
          })
        }
        break
      case 'paragraph':
        if (block.text) {
          blocks.push({
            type: 'paragraph',
            text: block.text,
          })
        }
        break
      case 'bulletList':
        if (block.items?.length) {
          blocks.push({
            type: 'bullet-list',
            items: block.items.filter(Boolean),
          })
        }
        break
      case 'quote':
        if (block.text) {
          blocks.push({
            type: 'quote',
            text: block.text,
            citation: textOrEmpty(block.citation) || undefined,
          })
        }
        break
      case 'imageBlock': {
        const src = resolveUrl(block.image)
        const alt = textOrEmpty(block.alt)

        if (src && alt) {
          blocks.push({
            type: 'image',
            src,
            alt,
            caption: textOrEmpty(block.caption) || undefined,
          })
        }
        break
      }
      case 'embed':
        if (textOrEmpty(block.url)) {
          blocks.push({
            type: 'embed',
            url: textOrEmpty(block.url),
            title: textOrEmpty(block.title) || undefined,
          })
        }
        break
      default:
        break
    }
  }

  return blocks
}

const createSanityUrl = (query: string, params: Record<string, string | number> = {}) => {
  const host = sanityConfig.useCdn ? 'apicdn.sanity.io' : 'api.sanity.io'
  const searchParams = new URLSearchParams({
    query,
  })

  for (const [key, value] of Object.entries(params)) {
    searchParams.set(`$${key}`, String(value))
  }

  return `https://${sanityConfig.projectId}.${host}/v${sanityConfig.apiVersion}/data/query/${sanityConfig.dataset}?${searchParams.toString()}`
}

const fetchSanityResult = async <T>(query: string, params: Record<string, string | number> = {}): Promise<T> => {
  const response = await fetch(createSanityUrl(query, params))

  if (!response.ok) {
    throw new Error(`Failed to fetch Sanity content: ${response.status} ${response.statusText}`)
  }

  const json = await response.json() as { result?: T }

  if (json.result === undefined) {
    throw new Error('Sanity response did not include a result payload.')
  }

  return json.result
}

const fetchSanityCollectionInBatches = async <T extends { _id?: string }>(query: string): Promise<T[]> => {
  const collection: T[] = []
  let lastId = ''

  for (;;) {
    const batch = await fetchSanityResult<T[]>(query, {
      lastId,
      batchSize: SANITY_BATCH_SIZE,
    })

    if (!batch.length)
      break

    collection.push(...batch)
    lastId = batch[batch.length - 1]?._id || ''

    if (!lastId)
      break
  }

  return collection
}

const mapUiAssets = (payload: SanityPayload): UiAssets => ({
  appPreview: resolveUrl(payload.homePage?.appPreview, localContentAdapter.uiAssets.appPreview),
  labelLogos:
    payload.brandLogos?.map(logo => ({
      id: logo.id || logo._id || logo.name || crypto.randomUUID(),
      name: logo.name || 'Brand logo',
      src: resolveUrl(logo.image),
    })).filter(logo => Boolean(logo.src))
    || localContentAdapter.uiAssets.labelLogos,
})

const mapSiteSettings = (payload: SanityPayload): SiteSettings => {
  const fallback = localContentAdapter.siteSettings

  return {
    brandName: pick(payload.siteSettings?.brandName, fallback.brandName),
    footerDescription: pick(payload.siteSettings?.footerDescription, fallback.footerDescription),
    footerLinkGroups:
      payload.siteSettings?.footerLinkGroups?.map(group => ({
        title: group.title || '',
        links:
          group.links?.map(link => ({
            label: link.label || '',
            href: link.href || '',
          })).filter(link => Boolean(link.label && link.href))
          || [],
      })).filter(group => Boolean(group.title && group.links.length))
      || fallback.footerLinkGroups,
    footerFollowLabel: pick(payload.siteSettings?.footerFollowLabel, fallback.footerFollowLabel),
    footerCopyright: pick(payload.siteSettings?.footerCopyright, fallback.footerCopyright),
    footerCreditPrefix: pick(payload.siteSettings?.footerCreditPrefix, fallback.footerCreditPrefix),
    footerCreditName: pick(payload.siteSettings?.footerCreditName, fallback.footerCreditName),
    footerCreditHref: payload.siteSettings?.footerCreditHref || fallback.footerCreditHref,
    footerCreditConnector: pick(payload.siteSettings?.footerCreditConnector, fallback.footerCreditConnector),
    footerTechnologyName: pick(payload.siteSettings?.footerTechnologyName, fallback.footerTechnologyName),
    footerTechnologyHref: payload.siteSettings?.footerTechnologyHref || fallback.footerTechnologyHref,
    footerRepositoryLink:
      payload.siteSettings?.footerRepositoryLink?.label && payload.siteSettings?.footerRepositoryLink?.href
        ? {
            label: payload.siteSettings.footerRepositoryLink.label,
            href: payload.siteSettings.footerRepositoryLink.href,
          }
        : fallback.footerRepositoryLink,
    socialProfiles: {
      instagram: payload.siteSettings?.socialProfiles?.instagram || fallback.socialProfiles.instagram,
      facebook: payload.siteSettings?.socialProfiles?.facebook || fallback.socialProfiles.facebook,
      youtube: payload.siteSettings?.socialProfiles?.youtube || fallback.socialProfiles.youtube,
      tiktok: payload.siteSettings?.socialProfiles?.tiktok || fallback.socialProfiles.tiktok,
      github: payload.siteSettings?.socialProfiles?.github || fallback.socialProfiles.github,
    },
  }
}

const mapHomePage = (payload: SanityPayload): HomePageContent => {
  const fallback = localContentAdapter.homePage

  return {
    hero: {
      highlightedWord: pick(payload.homePage?.hero?.highlightedWord, fallback.hero.highlightedWord),
      titleRemainder: pick(payload.homePage?.hero?.titleRemainder, fallback.hero.titleRemainder),
      description: pick(payload.homePage?.hero?.description, fallback.hero.description),
      primaryCta: {
        label: pick(payload.homePage?.hero?.primaryCta?.label, fallback.hero.primaryCta.label),
        href: pick(payload.homePage?.hero?.primaryCta?.href, fallback.hero.primaryCta.href),
      },
      secondaryCta: {
        label: pick(payload.homePage?.hero?.secondaryCta?.label, fallback.hero.secondaryCta.label),
        href: pick(payload.homePage?.hero?.secondaryCta?.href, fallback.hero.secondaryCta.href),
      },
      stats:
        payload.homePage?.hero?.stats?.map(stat => ({
          label: stat.label || '',
          value: typeof stat.value === 'number' ? stat.value : 0,
          format: stat.format || 'plain',
          suffix: stat.suffix || '',
        })).filter(stat => Boolean(stat.label))
        || fallback.hero.stats,
    },
    labelsSection: {
      title: pick(payload.homePage?.labelsSection?.title, fallback.labelsSection.title),
      description: pick(payload.homePage?.labelsSection?.description, fallback.labelsSection.description),
    },
    highlightCard: {
      title: pick(payload.homePage?.highlightCard?.title, fallback.highlightCard.title),
      description: pick(payload.homePage?.highlightCard?.description, fallback.highlightCard.description),
    },
    featuredArtistsSection: {
      title: pick(payload.homePage?.featuredArtistsSection?.title, fallback.featuredArtistsSection.title),
      description: pick(payload.homePage?.featuredArtistsSection?.description, fallback.featuredArtistsSection.description),
    },
    communitySection: {
      title: pick(payload.homePage?.communitySection?.title, fallback.communitySection.title),
      description: pick(payload.homePage?.communitySection?.description, fallback.communitySection.description),
      benefits: payload.homePage?.communitySection?.benefits?.filter(Boolean) || fallback.communitySection.benefits,
      cta: {
        label: pick(payload.homePage?.communitySection?.cta?.label, fallback.communitySection.cta.label),
        href: pick(payload.homePage?.communitySection?.cta?.href, fallback.communitySection.cta.href),
      },
    },
    faqSection: {
      title: pick(payload.homePage?.faqSection?.title, fallback.faqSection.title),
      description: pick(payload.homePage?.faqSection?.description, fallback.faqSection.description),
      contactLink: {
        label: pick(payload.homePage?.faqSection?.contactLink?.label, fallback.faqSection.contactLink.label),
        href: pick(payload.homePage?.faqSection?.contactLink?.href, fallback.faqSection.contactLink.href),
      },
      items:
        payload.homePage?.faqSection?.items?.map(item => ({
          question: item.question || '',
          answer: item.answer || '',
        })).filter(item => Boolean(item.question && item.answer))
        || fallback.faqSection.items,
    },
    featuredBlogSection: {
      eyebrow: pick(payload.homePage?.featuredBlogSection?.eyebrow, fallback.featuredBlogSection.eyebrow),
      title: pick(payload.homePage?.featuredBlogSection?.title, fallback.featuredBlogSection.title),
      description: pick(payload.homePage?.featuredBlogSection?.description, fallback.featuredBlogSection.description),
      ctaLabel: pick(payload.homePage?.featuredBlogSection?.ctaLabel, fallback.featuredBlogSection.ctaLabel),
    },
    newsletterSection: {
      title: pick(payload.homePage?.newsletterSection?.title, fallback.newsletterSection.title),
      description: pick(payload.homePage?.newsletterSection?.description, fallback.newsletterSection.description),
      inputPlaceholder: pick(payload.homePage?.newsletterSection?.inputPlaceholder, fallback.newsletterSection.inputPlaceholder),
      buttonLabel: pick(payload.homePage?.newsletterSection?.buttonLabel, fallback.newsletterSection.buttonLabel),
      invalidMessage: pick(payload.homePage?.newsletterSection?.invalidMessage, fallback.newsletterSection.invalidMessage),
      successMessage: pick(payload.homePage?.newsletterSection?.successMessage, fallback.newsletterSection.successMessage),
      errorMessage: pick(payload.homePage?.newsletterSection?.errorMessage, fallback.newsletterSection.errorMessage),
    },
    appCta: {
      title: pick(payload.homePage?.appCta?.title, fallback.appCta.title),
      description: pick(payload.homePage?.appCta?.description, fallback.appCta.description),
      iosButton: {
        label: pick(payload.homePage?.appCta?.iosButton?.label, fallback.appCta.iosButton.label),
        href: pick(payload.homePage?.appCta?.iosButton?.href, fallback.appCta.iosButton.href),
      },
      androidButton: {
        label: pick(payload.homePage?.appCta?.androidButton?.label, fallback.appCta.androidButton.label),
        href: pick(payload.homePage?.appCta?.androidButton?.href, fallback.appCta.androidButton.href),
      },
    },
  }
}

const mapArtistsPage = (payload: SanityPayload): ArtistsPageContent => {
  const fallback = localContentAdapter.artistsPage

  return {
    heroTitle: pick(payload.artistsPage?.heroTitle, fallback.heroTitle),
    heroDescription: pick(payload.artistsPage?.heroDescription, fallback.heroDescription),
    filters: {
      genreLabel: pick(payload.artistsPage?.filters?.genreLabel, fallback.filters.genreLabel),
      allGenresLabel: pick(payload.artistsPage?.filters?.allGenresLabel, fallback.filters.allGenresLabel),
      neighborhoodLabel: pick(payload.artistsPage?.filters?.neighborhoodLabel, fallback.filters.neighborhoodLabel),
      allNeighborhoodsLabel: pick(payload.artistsPage?.filters?.allNeighborhoodsLabel, fallback.filters.allNeighborhoodsLabel),
      searchLabel: pick(payload.artistsPage?.filters?.searchLabel, fallback.filters.searchLabel),
      searchPlaceholder: pick(payload.artistsPage?.filters?.searchPlaceholder, fallback.filters.searchPlaceholder),
    },
    genreOptions:
      payload.artistsPage?.genreOptions?.map(option => ({
        label: option.label || '',
        value: option.value || '',
      })).filter(option => Boolean(option.label && option.value))
      || fallback.genreOptions,
    neighborhoodOptions: payload.artistsPage?.neighborhoodOptions?.filter(Boolean) || fallback.neighborhoodOptions,
    resultsSection: {
      subtitle: pick(payload.artistsPage?.resultsSection?.subtitle, fallback.resultsSection.subtitle),
      countSuffix: pick(payload.artistsPage?.resultsSection?.countSuffix, fallback.resultsSection.countSuffix),
    },
    actions: {
      viewProfileLabel: pick(payload.artistsPage?.actions?.viewProfileLabel, fallback.actions.viewProfileLabel),
    },
    popup: {
      musicTitle: pick(payload.artistsPage?.popup?.musicTitle, fallback.popup.musicTitle),
      socialTitle: pick(payload.artistsPage?.popup?.socialTitle, fallback.popup.socialTitle),
      spotifyMeta: pick(payload.artistsPage?.popup?.spotifyMeta, fallback.popup.spotifyMeta),
      youtubeMeta: pick(payload.artistsPage?.popup?.youtubeMeta, fallback.popup.youtubeMeta),
      appleMusicMeta: pick(payload.artistsPage?.popup?.appleMusicMeta, fallback.popup.appleMusicMeta),
      soundcloudMeta: pick(payload.artistsPage?.popup?.soundcloudMeta, fallback.popup.soundcloudMeta),
      instagramMeta: pick(payload.artistsPage?.popup?.instagramMeta, fallback.popup.instagramMeta),
      tiktokMeta: pick(payload.artistsPage?.popup?.tiktokMeta, fallback.popup.tiktokMeta),
      xMeta: pick(payload.artistsPage?.popup?.xMeta, fallback.popup.xMeta),
    },
    emptyState: {
      icon: pick(payload.artistsPage?.emptyState?.icon, fallback.emptyState.icon),
      title: pick(payload.artistsPage?.emptyState?.title, fallback.emptyState.title),
      description: pick(payload.artistsPage?.emptyState?.description, fallback.emptyState.description),
    },
  }
}

const mapAboutPage = (payload: SanityPayload): AboutPageContent => {
  const fallback = localContentAdapter.aboutPage

  return {
    heroTitle: pick(payload.aboutPage?.heroTitle, fallback.heroTitle),
    heroDescription: pick(payload.aboutPage?.heroDescription, fallback.heroDescription),
    missionSection: {
      subtitle: pick(payload.aboutPage?.missionSection?.subtitle, fallback.missionSection.subtitle),
      title: pick(payload.aboutPage?.missionSection?.title, fallback.missionSection.title),
      description: pick(payload.aboutPage?.missionSection?.description, fallback.missionSection.description),
      heading: pick(payload.aboutPage?.missionSection?.heading, fallback.missionSection.heading),
      body: pick(payload.aboutPage?.missionSection?.body, fallback.missionSection.body),
      bullets: payload.aboutPage?.missionSection?.bullets?.filter(Boolean) || fallback.missionSection.bullets,
    },
    valuesSection: {
      eyebrow: pick(payload.aboutPage?.valuesSection?.eyebrow, fallback.valuesSection.eyebrow),
      title: pick(payload.aboutPage?.valuesSection?.title, fallback.valuesSection.title),
      items:
        payload.aboutPage?.valuesSection?.items?.map(item => ({
          icon: item.icon || '',
          title: item.title || '',
          description: item.description || '',
        })).filter(item => Boolean(item.title && item.description))
        || fallback.valuesSection.items,
    },
    teamSection: {
      subtitle: pick(payload.aboutPage?.teamSection?.subtitle, fallback.teamSection.subtitle),
      title: pick(payload.aboutPage?.teamSection?.title, fallback.teamSection.title),
      description: pick(payload.aboutPage?.teamSection?.description, fallback.teamSection.description),
    },
    manifestoSection: {
      title: pick(payload.aboutPage?.manifestoSection?.title, fallback.manifestoSection.title),
      entries:
        payload.aboutPage?.manifestoSection?.entries?.map(entry => ({
          accentLabel: entry.accentLabel || '',
          accentClass: entry.accentClass || 'text-neon-lime',
          body: entry.body || '',
        })).filter(entry => Boolean(entry.accentLabel && entry.body))
        || fallback.manifestoSection.entries,
    },
  }
}

const mapContactPage = (payload: SanityPayload): ContactPageContent => {
  const fallback = localContentAdapter.contactPage

  return {
    heroTitle: pick(payload.contactPage?.heroTitle, fallback.heroTitle),
    heroDescription: pick(payload.contactPage?.heroDescription, fallback.heroDescription),
    infoTitle: pick(payload.contactPage?.infoTitle, fallback.infoTitle),
    socialTitle: pick(payload.contactPage?.socialTitle, fallback.socialTitle),
    formTitle: pick(payload.contactPage?.formTitle, fallback.formTitle),
    methods:
      payload.contactPage?.methods?.map(method => ({
        title: method.title || '',
        value: method.value || '',
        href: method.href,
        description: method.description || '',
        accentClass: method.accentClass || 'text-neon-lime',
        icon: method.icon || '',
      })).filter(method => Boolean(method.title && method.value))
      || fallback.methods,
    office: {
      title: pick(payload.contactPage?.office?.title, fallback.office.title),
      lines: payload.contactPage?.office?.lines?.filter(Boolean) || fallback.office.lines,
      hours: pick(payload.contactPage?.office?.hours, fallback.office.hours),
    },
    form: {
      nameLabel: pick(payload.contactPage?.form?.nameLabel, fallback.form.nameLabel),
      emailLabel: pick(payload.contactPage?.form?.emailLabel, fallback.form.emailLabel),
      subjectLabel: pick(payload.contactPage?.form?.subjectLabel, fallback.form.subjectLabel),
      subjectPlaceholder: pick(payload.contactPage?.form?.subjectPlaceholder, fallback.form.subjectPlaceholder),
      subjectOptions:
        payload.contactPage?.form?.subjectOptions?.map(option => ({
          label: option.label || '',
          value: option.value || '',
        })).filter(option => Boolean(option.label))
        || fallback.form.subjectOptions,
      phoneLabel: pick(payload.contactPage?.form?.phoneLabel, fallback.form.phoneLabel),
      artistNameLabel: pick(payload.contactPage?.form?.artistNameLabel, fallback.form.artistNameLabel),
      artistNamePlaceholder: pick(payload.contactPage?.form?.artistNamePlaceholder, fallback.form.artistNamePlaceholder),
      genreLabel: pick(payload.contactPage?.form?.genreLabel, fallback.form.genreLabel),
      genrePlaceholder: pick(payload.contactPage?.form?.genrePlaceholder, fallback.form.genrePlaceholder),
      genreOptions:
        payload.contactPage?.form?.genreOptions?.map(option => ({
          label: option.label || '',
          value: option.value || '',
        })).filter(option => Boolean(option.label))
        || fallback.form.genreOptions,
      messageLabel: pick(payload.contactPage?.form?.messageLabel, fallback.form.messageLabel),
      messagePlaceholder: pick(payload.contactPage?.form?.messagePlaceholder, fallback.form.messagePlaceholder),
      messageLimit: payload.contactPage?.form?.messageLimit || fallback.form.messageLimit,
      privacyPrefix: pick(payload.contactPage?.form?.privacyPrefix, fallback.form.privacyPrefix),
      termsLabel: pick(payload.contactPage?.form?.termsLabel, fallback.form.termsLabel),
      privacyLabel: pick(payload.contactPage?.form?.privacyLabel, fallback.form.privacyLabel),
      privacySuffix: pick(payload.contactPage?.form?.privacySuffix, fallback.form.privacySuffix),
      loadingMessage: pick(payload.contactPage?.form?.loadingMessage, fallback.form.loadingMessage),
      successMessage: pick(payload.contactPage?.form?.successMessage, fallback.form.successMessage),
      errorMessage: pick(payload.contactPage?.form?.errorMessage, fallback.form.errorMessage),
      submitLabel: pick(payload.contactPage?.form?.submitLabel, fallback.form.submitLabel),
      submitLoadingLabel: pick(payload.contactPage?.form?.submitLoadingLabel, fallback.form.submitLoadingLabel),
    },
    faqTitle: pick(payload.contactPage?.faqTitle, fallback.faqTitle),
    faqs:
      payload.contactPage?.faqs?.map(item => ({
        question: item.question || '',
        answer: item.answer || '',
      })).filter(item => Boolean(item.question && item.answer))
      || fallback.faqs,
  }
}

const mapEventsPage = (payload: SanityPayload): EventsPageContent => {
  const fallback = localContentAdapter.eventsPage

  return {
    heroTitle: pick(payload.eventsPage?.heroTitle, fallback.heroTitle),
    heroDescription: pick(payload.eventsPage?.heroDescription, fallback.heroDescription),
    statsLabels: {
      total: pick(payload.eventsPage?.statsLabels?.total, fallback.statsLabels.total),
      upcoming: pick(payload.eventsPage?.statsLabels?.upcoming, fallback.statsLabels.upcoming),
      soldOut: pick(payload.eventsPage?.statsLabels?.soldOut, fallback.statsLabels.soldOut),
      available: pick(payload.eventsPage?.statsLabels?.available, fallback.statsLabels.available),
    },
    filters: {
      allMonthsLabel: pick(payload.eventsPage?.filters?.allMonthsLabel, fallback.filters.allMonthsLabel),
      allVenuesLabel: pick(payload.eventsPage?.filters?.allVenuesLabel, fallback.filters.allVenuesLabel),
      availableOnlyLabel: pick(payload.eventsPage?.filters?.availableOnlyLabel, fallback.filters.availableOnlyLabel),
    },
    resultsSubtitle: pick(payload.eventsPage?.resultsSubtitle, fallback.resultsSubtitle),
    resultsTitleSuffix: pick(payload.eventsPage?.resultsTitleSuffix, fallback.resultsTitleSuffix),
    emptyState: {
      icon: pick(payload.eventsPage?.emptyState?.icon, fallback.emptyState.icon),
      title: pick(payload.eventsPage?.emptyState?.title, fallback.emptyState.title),
      description: pick(payload.eventsPage?.emptyState?.description, fallback.emptyState.description),
    },
    purchaseStepsTitle: pick(payload.eventsPage?.purchaseStepsTitle, fallback.purchaseStepsTitle),
    purchaseSteps:
      payload.eventsPage?.purchaseSteps?.map(step => ({
        icon: step.icon || '',
        title: step.title || '',
        description: step.description || '',
      })).filter(step => Boolean(step.title && step.description))
      || fallback.purchaseSteps,
    notificationSection: {
      title: pick(payload.eventsPage?.notificationSection?.title, fallback.notificationSection.title),
      description: pick(payload.eventsPage?.notificationSection?.description, fallback.notificationSection.description),
      inputPlaceholder: pick(payload.eventsPage?.notificationSection?.inputPlaceholder, fallback.notificationSection.inputPlaceholder),
      buttonLabel: pick(payload.eventsPage?.notificationSection?.buttonLabel, fallback.notificationSection.buttonLabel),
      invalidMessage: pick(payload.eventsPage?.notificationSection?.invalidMessage, fallback.notificationSection.invalidMessage),
      successMessage: pick(payload.eventsPage?.notificationSection?.successMessage, fallback.notificationSection.successMessage),
      errorMessage: pick(payload.eventsPage?.notificationSection?.errorMessage, fallback.notificationSection.errorMessage),
    },
    cardLabels: {
      artists: pick(payload.eventsPage?.cardLabels?.artists, fallback.cardLabels.artists),
      available: pick(payload.eventsPage?.cardLabels?.available, fallback.cardLabels.available),
      soldOut: pick(payload.eventsPage?.cardLabels?.soldOut, fallback.cardLabels.soldOut),
      buyTickets: pick(payload.eventsPage?.cardLabels?.buyTickets, fallback.cardLabels.buyTickets),
      comingSoon: pick(payload.eventsPage?.cardLabels?.comingSoon, fallback.cardLabels.comingSoon),
      doorsOpenPrefix: pick(payload.eventsPage?.cardLabels?.doorsOpenPrefix, fallback.cardLabels.doorsOpenPrefix),
    },
  }
}

const mapBlogPage = (payload: SanityPayload): BlogPageContent => {
  const fallback = localContentAdapter.blogPage

  return {
    heroTitle: pick(payload.blogPage?.heroTitle, fallback.heroTitle),
    heroDescription: pick(payload.blogPage?.heroDescription, fallback.heroDescription),
    newsletterSection: {
      title: pick(payload.blogPage?.newsletterSection?.title, fallback.newsletterSection.title),
      description: pick(payload.blogPage?.newsletterSection?.description, fallback.newsletterSection.description),
      inputPlaceholder: pick(payload.blogPage?.newsletterSection?.inputPlaceholder, fallback.newsletterSection.inputPlaceholder),
      buttonLabel: pick(payload.blogPage?.newsletterSection?.buttonLabel, fallback.newsletterSection.buttonLabel),
      invalidMessage: pick(payload.blogPage?.newsletterSection?.invalidMessage, fallback.newsletterSection.invalidMessage),
      successMessage: pick(payload.blogPage?.newsletterSection?.successMessage, fallback.newsletterSection.successMessage),
      errorMessage: pick(payload.blogPage?.newsletterSection?.errorMessage, fallback.newsletterSection.errorMessage),
    },
    post: {
      backLabel: pick(payload.blogPage?.post?.backLabel, fallback.post.backLabel),
      shareLabel: pick(payload.blogPage?.post?.shareLabel, fallback.post.shareLabel),
      authorLabel: pick(payload.blogPage?.post?.authorLabel, fallback.post.authorLabel),
      tocLabel: pick(payload.blogPage?.post?.tocLabel, fallback.post.tocLabel),
      relatedEyebrow: pick(payload.blogPage?.post?.relatedEyebrow, fallback.post.relatedEyebrow),
      relatedTitle: pick(payload.blogPage?.post?.relatedTitle, fallback.post.relatedTitle),
      relatedLinkLabel: pick(payload.blogPage?.post?.relatedLinkLabel, fallback.post.relatedLinkLabel),
      newsletterEyebrow: pick(payload.blogPage?.post?.newsletterEyebrow, fallback.post.newsletterEyebrow),
      newsletterTitle: pick(payload.blogPage?.post?.newsletterTitle, fallback.post.newsletterTitle),
      newsletterDescription: pick(payload.blogPage?.post?.newsletterDescription, fallback.post.newsletterDescription),
    },
  }
}

const mapContentCards = (cards: ContentCard[] | undefined, fallback: ContentCard[] = []) =>
  cards?.map(card => ({
    title: card.title || '',
    description: card.description || '',
    bullets: card.bullets?.filter(Boolean) || undefined,
    accentClass: card.accentClass || undefined,
  })).filter(card => Boolean(card.title && card.description))
  || fallback

const mapContentSections = (sections: ContentSection[] | undefined, fallback: ContentSection[]) =>
  sections?.map(section => ({
    title: section.title || '',
    paragraphs: section.paragraphs?.filter(Boolean) || [],
    bullets: section.bullets?.filter(Boolean) || undefined,
    cards: mapContentCards(section.cards),
    links:
      section.links?.map(link => ({
        label: link.label || '',
        href: link.href || '',
      })).filter(link => Boolean(link.label && link.href))
      || undefined,
  })).filter(section => Boolean(section.title && (section.paragraphs.length || section.bullets?.length || section.cards?.length || section.links?.length)))
  || fallback

const mapLegalPage = (page: SanityLegalPage | undefined, fallback: LegalPageContent): LegalPageContent => ({
  heroTitle: pick(page?.heroTitle, fallback.heroTitle),
  heroDescription: pick(page?.heroDescription, fallback.heroDescription),
  sections: mapContentSections(page?.sections, fallback.sections),
  contactCard:
    page?.contactCard
      ? {
          title: pick(page.contactCard.title, fallback.contactCard?.title || ''),
          description: pick(page.contactCard.description, fallback.contactCard?.description || ''),
          details:
            page.contactCard.details?.map(detail => ({
              label: detail.label || '',
              value: detail.value || '',
            })).filter(detail => Boolean(detail.label && detail.value))
            || fallback.contactCard?.details
            || [],
        }
      : fallback.contactCard,
  footerNote: pick(page?.footerNote, fallback.footerNote),
  ctaTitle: pick(page?.ctaTitle, fallback.ctaTitle),
  ctaDescription: pick(page?.ctaDescription, fallback.ctaDescription),
  ctaLink: {
    label: pick(page?.ctaLink?.label, fallback.ctaLink.label),
    href: pick(page?.ctaLink?.href, fallback.ctaLink.href),
  },
})

const mapArtists = (artists: SanityArtist[] | undefined): ArtistDirectoryEntry[] =>
  artists?.map(artist => ({
    id: artist.id || artist._id || artist.name || crypto.randomUUID(),
    name: artist.name || 'Untitled artist',
    genre: artist.genre || 'Unknown',
    bio: artist.bio || '',
    image: resolveUrl(artist.image),
    locationLabel: artist.locationLabel || 'New York',
    neighborhoods: artist.neighborhoods || [],
    badge: artist.badge || 'Artist',
    links: {
      spotify: artist.links?.spotify || undefined,
      youtube: artist.links?.youtube || undefined,
      appleMusic: artist.links?.appleMusic || undefined,
      instagram: artist.links?.instagram || undefined,
      tiktok: artist.links?.tiktok || undefined,
      x: artist.links?.x || undefined,
      soundcloud: artist.links?.soundcloud || undefined,
    },
  })).filter(artist => Boolean(artist.image))
  || localContentAdapter.artistDirectoryEntries

const mapFeaturedArtists = (artists: SanityArtist[] | undefined): FeaturedArtist[] => {
  const featured = artists?.filter(artist => artist.featured) || []

  if (!featured.length)
    return localContentAdapter.featuredArtists

  return featured
    .slice(0, 10)
    .map(artist => ({
      id: artist.id || artist._id || artist.name || crypto.randomUUID(),
      name: artist.name || 'Untitled artist',
      genre: artist.genre || 'Unknown',
      image: resolveUrl(artist.homeImage || artist.image),
    }))
}

const mapTestimonials = (testimonials: SanityTestimonial[] | undefined): FollowerCard[] =>
  testimonials?.map(entry => ({
    image: resolveUrl(entry.image),
    name: entry.name || 'Anonymous',
    handle: entry.handle || '@handle',
    date: entry.date || '',
    message: entry.message || '',
  })).filter(entry => Boolean(entry.image && entry.message))
  || localContentAdapter.followerTestimonials

const mapAboutContent = (payload: SanityPayload): AboutContent => ({
  missionImage: resolveUrl(payload.aboutPage?.missionImage, localContentAdapter.aboutContent.missionImage),
  team:
    payload.teamMembers?.map(member => ({
      id: member.id || member._id || member.name || crypto.randomUUID(),
      name: member.name || 'Team member',
      role: member.role || '',
      bio: member.bio || '',
      image: resolveUrl(member.image),
      accentClass: member.accentClass || 'text-neon-lime',
      email: member.email || '',
      secondaryLink: member.secondaryLink || '',
      secondaryLabel: member.secondaryLabel || 'Link',
    })).filter(member => Boolean(member.image))
    || localContentAdapter.aboutContent.team,
})

const mapBlogPosts = (posts: SanityPost[] | undefined): BlogPost[] =>
  posts?.map(post => ({
    id: post.id || post._id || post.slug || crypto.randomUUID(),
    slug: post.slug || '',
    title: post.title || 'Untitled post',
    excerpt: post.excerpt || '',
    metaDescription: post.metaDescription || post.excerpt || '',
    category: (post.category as BlogPost['category']) || 'Noticias',
    date: post.date || '',
    author: post.author || 'ILUMINATY',
    authorBio: post.authorBio || '',
    image: resolveUrl(post.image),
    imageAlt: post.imageAlt || post.title || 'Post cover image',
    readTime: post.readTime || 1,
    tags: post.tags || [],
    blocks: mapSanityBlocks(post),
  })).filter(post => Boolean(post.slug && post.image))
  || localContentAdapter.blogPosts

const mapEvents = (events: SanityEvent[] | undefined): EventEntry[] =>
  events?.map(event => ({
    id: event.id || event._id || event.title || crypto.randomUUID(),
    title: event.title || 'Untitled event',
    description: event.description || '',
    date: event.date || '',
    time: event.time || '',
    doorsOpen: event.doorsOpen || '',
    venue: event.venue || '',
    price: event.price || '',
    image: resolveUrl(event.image),
    artists: event.artists || [],
    isSoldOut: Boolean(event.isSoldOut),
    ticketUrl: event.ticketUrl || undefined,
  })).filter(event => Boolean(event.image && event.date))
  || localContentAdapter.eventEntries

export const createSanityContentAdapter = async (): Promise<ContentAdapter> => {
  const payload = await fetchSanityResult<SanityPayload>(sanityQuery)
  const [posts, events] = await Promise.all([
    fetchSanityCollectionInBatches<SanityPost>(sanityPostsBatchQuery),
    fetchSanityCollectionInBatches<SanityEvent>(sanityEventsBatchQuery),
  ])

  const siteSettings = mapSiteSettings(payload)
  const blogPosts = mapBlogPosts(posts)
  const sortedBlogPosts = [...blogPosts].sort(
    (left, right) => parseLocalDate(right.date).getTime() - parseLocalDate(left.date).getTime(),
  )
  const eventEntries = mapEvents(events).sort(
    (left, right) => parseLocalDate(left.date).getTime() - parseLocalDate(right.date).getTime(),
  )

  const snapshot = validateContentSnapshot({
    uiAssets: mapUiAssets(payload),
    imageAssets: localContentAdapter.imageAssets,
    siteSettings,
    homePage: mapHomePage(payload),
    aboutPage: mapAboutPage(payload),
    artistsPage: mapArtistsPage(payload),
    contactPage: mapContactPage(payload),
    eventsPage: mapEventsPage(payload),
    blogPage: mapBlogPage(payload),
    termsPage: mapLegalPage(payload.termsPage, localContentAdapter.termsPage),
    privacyPage: mapLegalPage(payload.privacyPage, localContentAdapter.privacyPage),
    cookiesPage: mapLegalPage(payload.cookiesPage, localContentAdapter.cookiesPage),
    aboutContent: mapAboutContent(payload),
    featuredArtists: mapFeaturedArtists(payload.artists),
    artistDirectoryEntries: mapArtists(payload.artists),
    followerTestimonials: mapTestimonials(payload.testimonials),
    socialProfiles: siteSettings.socialProfiles,
    blogPosts,
    sortedBlogPosts,
    blogPostPaths: sortedBlogPosts.map(post => `/blog/${post.slug}`),
    eventEntries,
  })

  return {
    ...snapshot,
    getBlogPostBySlug: slug => sortedBlogPosts.find(post => post.slug === slug),
    getBlogPostById: id => sortedBlogPosts.find(post => post.id === id),
  }
}

import { aboutContent } from '@/data/about'
import { artistDirectoryEntries, featuredArtists } from '@/data/artists'
import { blogPostPaths, blogPosts, getBlogPostById, getBlogPostBySlug, sortedBlogPosts } from '@/data/blogPosts'
import { eventEntries } from '@/data/events'
import { followerTestimonials } from '@/data/followers'
import { imageAssets, uiAssets } from '@/data/assets'
import { aboutPage, artistsPage, blogPage, contactPage, cookiesPage, eventsPage, homePage, privacyPage, siteSettings, termsPage } from '@/data/pageContent'
import { validateContentSnapshot } from '@/schemas/content'
import type { ContentAdapter } from '@/types/content'

const localContentSnapshot = validateContentSnapshot({
  uiAssets,
  imageAssets,
  siteSettings,
  homePage,
  aboutPage,
  artistsPage,
  contactPage,
  eventsPage,
  blogPage,
  termsPage,
  privacyPage,
  cookiesPage,
  aboutContent,
  featuredArtists,
  artistDirectoryEntries,
  followerTestimonials,
  socialProfiles: siteSettings.socialProfiles,
  blogPosts,
  sortedBlogPosts,
  blogPostPaths,
  eventEntries,
})

export const localContentAdapter: ContentAdapter = {
  ...localContentSnapshot,
  getBlogPostBySlug,
  getBlogPostById,
}

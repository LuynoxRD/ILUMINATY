import { aboutContent } from '@/data/about'
import { artistDirectoryEntries, featuredArtists } from '@/data/artists'
import { blogPostPaths, blogPosts, getBlogPostById, getBlogPostBySlug, sortedBlogPosts } from '@/data/blogPosts'
import { eventEntries } from '@/data/events'
import { followerTestimonials } from '@/data/followers'
import { imageAssets, uiAssets } from '@/data/assets'
import { aboutPage, blogPage, contactPage, eventsPage, homePage, siteSettings } from '@/data/pageContent'
import { validateContentSnapshot } from '@/schemas/content'
import type { ContentAdapter } from '@/types/content'

const localContentSnapshot = validateContentSnapshot({
  uiAssets,
  imageAssets,
  siteSettings,
  homePage,
  aboutPage,
  contactPage,
  eventsPage,
  blogPage,
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

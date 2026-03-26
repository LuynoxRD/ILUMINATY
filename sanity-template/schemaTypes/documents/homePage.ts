import { defineField, defineType } from 'sanity'

const navLinkFields = [
  defineField({ name: 'label', type: 'string' }),
  defineField({ name: 'href', type: 'string' }),
]

const newsletterFields = [
  defineField({ name: 'title', type: 'string' }),
  defineField({ name: 'description', type: 'text', rows: 3 }),
  defineField({ name: 'inputPlaceholder', type: 'string' }),
  defineField({ name: 'buttonLabel', type: 'string' }),
  defineField({ name: 'invalidMessage', type: 'string' }),
  defineField({ name: 'successMessage', type: 'string' }),
  defineField({ name: 'errorMessage', type: 'string' }),
]

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({ name: 'highlightedWord', type: 'string' }),
        defineField({ name: 'titleRemainder', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCta', type: 'object', fields: navLinkFields }),
        defineField({ name: 'secondaryCta', type: 'object', fields: navLinkFields }),
        defineField({
          name: 'stats',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', type: 'string' }),
                defineField({ name: 'value', type: 'number' }),
                defineField({
                  name: 'format',
                  type: 'string',
                  options: {
                    list: ['plain', 'millions'],
                  },
                }),
                defineField({ name: 'suffix', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({ name: 'appPreview', title: 'Phone App Preview', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'labelsSection',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'string' }),
      ],
    }),
    defineField({
      name: 'highlightCard',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'string' }),
      ],
    }),
    defineField({
      name: 'featuredArtistsSection',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'communitySection',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 4 }),
        defineField({ name: 'benefits', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'cta', type: 'object', fields: navLinkFields }),
      ],
    }),
    defineField({
      name: 'faqSection',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'string' }),
        defineField({ name: 'contactLink', type: 'object', fields: navLinkFields }),
        defineField({
          name: 'items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'question', type: 'string' }),
                defineField({ name: 'answer', type: 'text', rows: 3 }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'featuredBlogSection',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
        defineField({ name: 'ctaLabel', type: 'string' }),
      ],
    }),
    defineField({ name: 'newsletterSection', type: 'object', fields: newsletterFields }),
    defineField({
      name: 'appCta',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
        defineField({ name: 'iosButton', type: 'object', fields: navLinkFields }),
        defineField({ name: 'androidButton', type: 'object', fields: navLinkFields }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
})

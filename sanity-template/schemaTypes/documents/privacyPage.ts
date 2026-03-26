import { defineField, defineType } from 'sanity'

const navLinkFields = [
  defineField({ name: 'label', type: 'string' }),
  defineField({ name: 'href', type: 'string' }),
]

const contentCardFields = [
  defineField({ name: 'title', type: 'string' }),
  defineField({ name: 'description', type: 'text', rows: 3 }),
  defineField({ name: 'bullets', type: 'array', of: [{ type: 'string' }] }),
  defineField({ name: 'accentClass', type: 'string' }),
]

const contentSectionFields = [
  defineField({ name: 'title', type: 'string' }),
  defineField({ name: 'paragraphs', type: 'array', of: [{ type: 'text', rows: 3 }] }),
  defineField({ name: 'bullets', type: 'array', of: [{ type: 'string' }] }),
  defineField({ name: 'cards', type: 'array', of: [{ type: 'object', fields: contentCardFields }] }),
  defineField({ name: 'links', type: 'array', of: [{ type: 'object', fields: navLinkFields }] }),
]

export const privacyPageType = defineType({
  name: 'privacyPage',
  title: 'Privacy Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', type: 'string' }),
    defineField({ name: 'heroDescription', type: 'text', rows: 3 }),
    defineField({ name: 'sections', type: 'array', of: [{ type: 'object', fields: contentSectionFields }] }),
    defineField({
      name: 'contactCard',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 2 }),
        defineField({
          name: 'details',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'label', type: 'string' }),
              defineField({ name: 'value', type: 'string' }),
            ],
          }],
        }),
      ],
    }),
    defineField({ name: 'footerNote', type: 'string' }),
    defineField({ name: 'ctaTitle', type: 'string' }),
    defineField({ name: 'ctaDescription', type: 'text', rows: 2 }),
    defineField({ name: 'ctaLink', type: 'object', fields: navLinkFields }),
  ],
  preview: {
    prepare: () => ({ title: 'Privacy Page' }),
  },
})

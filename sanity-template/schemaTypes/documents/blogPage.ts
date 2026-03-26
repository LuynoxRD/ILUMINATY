import { defineField, defineType } from 'sanity'

const newsletterFields = [
  defineField({ name: 'title', type: 'string' }),
  defineField({ name: 'description', type: 'text', rows: 3 }),
  defineField({ name: 'inputPlaceholder', type: 'string' }),
  defineField({ name: 'buttonLabel', type: 'string' }),
  defineField({ name: 'invalidMessage', type: 'string' }),
  defineField({ name: 'successMessage', type: 'string' }),
  defineField({ name: 'errorMessage', type: 'string' }),
]

export const blogPageType = defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', type: 'string' }),
    defineField({ name: 'heroDescription', type: 'text', rows: 3 }),
    defineField({ name: 'newsletterSection', type: 'object', fields: newsletterFields }),
    defineField({
      name: 'post',
      type: 'object',
      fields: [
        defineField({ name: 'backLabel', type: 'string' }),
        defineField({ name: 'shareLabel', type: 'string' }),
        defineField({ name: 'authorLabel', type: 'string' }),
        defineField({ name: 'tocLabel', type: 'string' }),
        defineField({ name: 'relatedEyebrow', type: 'string' }),
        defineField({ name: 'relatedTitle', type: 'string' }),
        defineField({ name: 'relatedLinkLabel', type: 'string' }),
        defineField({ name: 'newsletterEyebrow', type: 'string' }),
        defineField({ name: 'newsletterTitle', type: 'string' }),
        defineField({ name: 'newsletterDescription', type: 'text', rows: 3 }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Blog Page' }),
  },
})

import { defineField, defineType } from 'sanity'

const optionFields = [
  defineField({ name: 'label', type: 'string' }),
  defineField({ name: 'value', type: 'string' }),
]

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', type: 'string' }),
    defineField({ name: 'heroDescription', type: 'text', rows: 3 }),
    defineField({ name: 'infoTitle', type: 'string' }),
    defineField({ name: 'socialTitle', type: 'string' }),
    defineField({ name: 'formTitle', type: 'string' }),
    defineField({
      name: 'methods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'value', type: 'string' }),
            defineField({ name: 'href', type: 'string' }),
            defineField({ name: 'description', type: 'string' }),
            defineField({ name: 'accentClass', type: 'string' }),
            defineField({ name: 'icon', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'office',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'lines', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'hours', type: 'string' }),
      ],
    }),
    defineField({
      name: 'form',
      type: 'object',
      fields: [
        defineField({ name: 'nameLabel', type: 'string' }),
        defineField({ name: 'emailLabel', type: 'string' }),
        defineField({ name: 'subjectLabel', type: 'string' }),
        defineField({ name: 'subjectPlaceholder', type: 'string' }),
        defineField({ name: 'subjectOptions', type: 'array', of: [{ type: 'object', fields: optionFields }] }),
        defineField({ name: 'phoneLabel', type: 'string' }),
        defineField({ name: 'artistNameLabel', type: 'string' }),
        defineField({ name: 'artistNamePlaceholder', type: 'string' }),
        defineField({ name: 'genreLabel', type: 'string' }),
        defineField({ name: 'genrePlaceholder', type: 'string' }),
        defineField({ name: 'genreOptions', type: 'array', of: [{ type: 'object', fields: optionFields }] }),
        defineField({ name: 'messageLabel', type: 'string' }),
        defineField({ name: 'messagePlaceholder', type: 'string' }),
        defineField({ name: 'messageLimit', type: 'number' }),
        defineField({ name: 'privacyPrefix', type: 'string' }),
        defineField({ name: 'termsLabel', type: 'string' }),
        defineField({ name: 'privacyLabel', type: 'string' }),
        defineField({ name: 'privacySuffix', type: 'string' }),
        defineField({ name: 'loadingMessage', type: 'string' }),
        defineField({ name: 'successMessage', type: 'string' }),
        defineField({ name: 'errorMessage', type: 'string' }),
        defineField({ name: 'submitLabel', type: 'string' }),
        defineField({ name: 'submitLoadingLabel', type: 'string' }),
      ],
    }),
    defineField({ name: 'faqTitle', type: 'string' }),
    defineField({
      name: 'faqs',
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
  preview: {
    prepare: () => ({ title: 'Contact Page' }),
  },
})

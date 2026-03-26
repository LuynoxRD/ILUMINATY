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

export const eventsPageType = defineType({
  name: 'eventsPage',
  title: 'Events Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', type: 'string' }),
    defineField({ name: 'heroDescription', type: 'text', rows: 3 }),
    defineField({
      name: 'statsLabels',
      type: 'object',
      fields: [
        defineField({ name: 'total', type: 'string' }),
        defineField({ name: 'upcoming', type: 'string' }),
        defineField({ name: 'soldOut', type: 'string' }),
        defineField({ name: 'available', type: 'string' }),
      ],
    }),
    defineField({
      name: 'filters',
      type: 'object',
      fields: [
        defineField({ name: 'allMonthsLabel', type: 'string' }),
        defineField({ name: 'allVenuesLabel', type: 'string' }),
        defineField({ name: 'availableOnlyLabel', type: 'string' }),
      ],
    }),
    defineField({ name: 'resultsSubtitle', type: 'string' }),
    defineField({ name: 'resultsTitleSuffix', type: 'string' }),
    defineField({
      name: 'emptyState',
      type: 'object',
      fields: [
        defineField({ name: 'icon', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'string' }),
      ],
    }),
    defineField({ name: 'purchaseStepsTitle', type: 'string' }),
    defineField({
      name: 'purchaseSteps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', type: 'string' }),
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text', rows: 3 }),
          ],
        },
      ],
    }),
    defineField({ name: 'notificationSection', type: 'object', fields: newsletterFields }),
    defineField({
      name: 'cardLabels',
      type: 'object',
      fields: [
        defineField({ name: 'artists', type: 'string' }),
        defineField({ name: 'available', type: 'string' }),
        defineField({ name: 'soldOut', type: 'string' }),
        defineField({ name: 'buyTickets', type: 'string' }),
        defineField({ name: 'comingSoon', type: 'string' }),
        defineField({ name: 'doorsOpenPrefix', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Events Page' }),
  },
})

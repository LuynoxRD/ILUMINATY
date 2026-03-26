import { defineField, defineType } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', type: 'string' }),
    defineField({ name: 'heroDescription', type: 'text', rows: 3 }),
    defineField({ name: 'missionImage', title: 'Mission Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'missionSection',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'string' }),
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 5 }),
        defineField({ name: 'bullets', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'valuesSection',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({
          name: 'items',
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
      ],
    }),
    defineField({
      name: 'teamSection',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'string' }),
      ],
    }),
    defineField({
      name: 'manifestoSection',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
          name: 'entries',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'accentLabel', type: 'string' }),
                defineField({ name: 'accentClass', type: 'string' }),
                defineField({ name: 'body', type: 'text', rows: 3 }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'About Page' }),
  },
})

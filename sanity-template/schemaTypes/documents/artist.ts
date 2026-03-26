import { defineArrayMember, defineField, defineType } from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'genre', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'bio', type: 'text' }),
    defineField({ name: 'locationLabel', type: 'string' }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'homeImage',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'neighborhoods',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'badge', type: 'string' }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({
      name: 'links',
      type: 'object',
      fields: [
        defineField({ name: 'spotify', type: 'url' }),
        defineField({ name: 'youtube', type: 'url' }),
        defineField({ name: 'appleMusic', type: 'url' }),
        defineField({ name: 'instagram', type: 'url' }),
        defineField({ name: 'tiktok', type: 'url' }),
        defineField({ name: 'x', type: 'url' }),
        defineField({ name: 'soundcloud', type: 'url' }),
      ],
    }),
  ],
})

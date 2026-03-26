import { defineArrayMember, defineField, defineType } from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'genre', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'bio', type: 'text' }),
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
  ],
})

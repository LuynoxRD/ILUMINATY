import { defineArrayMember, defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'date', type: 'date', validation: Rule => Rule.required() }),
    defineField({ name: 'time', type: 'string' }),
    defineField({ name: 'doorsOpen', type: 'string' }),
    defineField({ name: 'venue', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'price', type: 'string' }),
    defineField({
      name: 'artists',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'isSoldOut', type: 'boolean', initialValue: false }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ticketUrl',
      type: 'url',
      description: 'Preparado para checkout externo o ticketing provider.',
    }),
  ],
})

import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'handle', type: 'string' }),
    defineField({ name: 'date', type: 'string' }),
    defineField({ name: 'message', type: 'text', validation: Rule => Rule.required() }),
    defineField({ name: 'order', type: 'number', initialValue: 0 }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
  ],
})

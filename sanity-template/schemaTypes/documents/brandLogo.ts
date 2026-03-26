import { defineField, defineType } from 'sanity'

export const brandLogoType = defineType({
  name: 'brandLogo',
  title: 'Brand Logo',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'order', type: 'number', initialValue: 0 }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
  ],
})

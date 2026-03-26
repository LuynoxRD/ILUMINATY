import { defineField, defineType } from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'bio', type: 'text' }),
    defineField({ name: 'accentClass', type: 'string', initialValue: 'text-neon-lime' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'secondaryLink', type: 'url' }),
    defineField({ name: 'secondaryLabel', type: 'string' }),
    defineField({ name: 'order', type: 'number', initialValue: 0 }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
  ],
})

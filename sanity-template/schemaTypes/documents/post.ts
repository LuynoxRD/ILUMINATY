import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'excerpt', type: 'text', rows: 3, validation: Rule => Rule.required() }),
    defineField({ name: 'metaDescription', type: 'text', rows: 3 }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: ['Noticias', 'Análisis', 'Tutoriales', 'Entrevistas', 'Tendencias', 'Colaboraciones'],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'date', type: 'date', validation: Rule => Rule.required() }),
    defineField({ name: 'author', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'authorBio', type: 'text' }),
    defineField({ name: 'imageAlt', type: 'string' }),
    defineField({ name: 'readTime', type: 'number', validation: Rule => Rule.required().min(1) }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'heading',
          type: 'object',
          fields: [
            defineField({ name: 'text', type: 'string', validation: Rule => Rule.required() }),
            defineField({
              name: 'style',
              type: 'string',
              initialValue: 'h2',
              options: {
                list: [
                  { title: 'Heading 2', value: 'h2' },
                  { title: 'Heading 3', value: 'h3' },
                ],
              },
            }),
          ],
        }),
        defineArrayMember({
          name: 'paragraph',
          type: 'object',
          fields: [
            defineField({ name: 'text', type: 'text', rows: 5, validation: Rule => Rule.required() }),
          ],
        }),
        defineArrayMember({
          name: 'bulletList',
          type: 'object',
          fields: [
            defineField({
              name: 'items',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
              validation: Rule => Rule.required().min(1),
            }),
          ],
        }),
        defineArrayMember({
          name: 'quote',
          type: 'object',
          fields: [
            defineField({ name: 'text', type: 'text', rows: 4, validation: Rule => Rule.required() }),
            defineField({ name: 'citation', type: 'string' }),
          ],
        }),
        defineArrayMember({
          name: 'imageBlock',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required(),
            }),
            defineField({ name: 'alt', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'caption', type: 'string' }),
          ],
        }),
        defineArrayMember({
          name: 'embed',
          type: 'object',
          fields: [
            defineField({ name: 'url', type: 'url', validation: Rule => Rule.required() }),
            defineField({ name: 'title', type: 'string' }),
          ],
        }),
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
})

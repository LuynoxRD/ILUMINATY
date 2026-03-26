import { defineField, defineType } from 'sanity'

const optionFields = [
  defineField({ name: 'label', type: 'string' }),
  defineField({ name: 'value', type: 'string' }),
]

export const artistsPageType = defineType({
  name: 'artistsPage',
  title: 'Artists Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', type: 'string' }),
    defineField({ name: 'heroDescription', type: 'text', rows: 3 }),
    defineField({
      name: 'filters',
      type: 'object',
      fields: [
        defineField({ name: 'genreLabel', type: 'string' }),
        defineField({ name: 'allGenresLabel', type: 'string' }),
        defineField({ name: 'neighborhoodLabel', type: 'string' }),
        defineField({ name: 'allNeighborhoodsLabel', type: 'string' }),
        defineField({ name: 'searchLabel', type: 'string' }),
        defineField({ name: 'searchPlaceholder', type: 'string' }),
      ],
    }),
    defineField({
      name: 'genreOptions',
      type: 'array',
      of: [{ type: 'object', fields: optionFields }],
    }),
    defineField({
      name: 'neighborhoodOptions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'resultsSection',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({ name: 'countSuffix', type: 'string' }),
      ],
    }),
    defineField({
      name: 'actions',
      type: 'object',
      fields: [
        defineField({ name: 'viewProfileLabel', type: 'string' }),
      ],
    }),
    defineField({
      name: 'popup',
      type: 'object',
      fields: [
        defineField({ name: 'musicTitle', type: 'string' }),
        defineField({ name: 'socialTitle', type: 'string' }),
        defineField({ name: 'spotifyMeta', type: 'string' }),
        defineField({ name: 'youtubeMeta', type: 'string' }),
        defineField({ name: 'appleMusicMeta', type: 'string' }),
        defineField({ name: 'soundcloudMeta', type: 'string' }),
        defineField({ name: 'instagramMeta', type: 'string' }),
        defineField({ name: 'tiktokMeta', type: 'string' }),
        defineField({ name: 'xMeta', type: 'string' }),
      ],
    }),
    defineField({
      name: 'emptyState',
      type: 'object',
      fields: [
        defineField({ name: 'icon', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 2 }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Artists Page' }),
  },
})

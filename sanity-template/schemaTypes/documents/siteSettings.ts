import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', title: 'Brand Name', type: 'string' }),
    defineField({ name: 'footerDescription', title: 'Footer Description', type: 'text', rows: 3 }),
    defineField({
      name: 'footerLinkGroups',
      title: 'Footer Link Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({
              name: 'links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', type: 'string' }),
                    defineField({ name: 'href', type: 'string' }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({ name: 'footerFollowLabel', title: 'Footer Follow Label', type: 'string' }),
    defineField({ name: 'footerCopyright', title: 'Footer Copyright', type: 'string' }),
    defineField({ name: 'footerCreditPrefix', title: 'Footer Credit Prefix', type: 'string' }),
    defineField({ name: 'footerCreditName', title: 'Footer Credit Name', type: 'string' }),
    defineField({ name: 'footerCreditHref', title: 'Footer Credit URL', type: 'url' }),
    defineField({
      name: 'socialProfiles',
      title: 'Social Profiles',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', type: 'url' }),
        defineField({ name: 'x', type: 'url' }),
        defineField({ name: 'youtube', type: 'url' }),
        defineField({ name: 'tiktok', type: 'url' }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})

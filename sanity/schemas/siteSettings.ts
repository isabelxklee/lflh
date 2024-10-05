import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string'
    }),
    defineField({
      name: 'siteLogo',
      type: 'file'
    }),
    defineField({
      name: 'aboutPageText',
      type: 'text'
    })
  ]
});

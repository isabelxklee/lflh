import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const excerptType = defineType({
  name: 'excerpt',
  title: 'Excerpt',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'transcriptText',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'subTheme',
      type: 'reference',
      to: { type: 'subTheme' }
    }),
    defineField({
      name: 'interview',
      type: 'reference',
      to: { type: 'interview' }
    })
  ]
});

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
      name: 'startTime',
      type: 'string'
    }),
    defineField({
      name: 'endTime',
      type: 'string'
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

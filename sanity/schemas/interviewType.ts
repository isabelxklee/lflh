import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const interviewType = defineType({
  name: 'interview',
  title: 'Interview',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'audioFile',
      type: 'file'
    }),
    defineField({
      name: 'transcriptText',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
});

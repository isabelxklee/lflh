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
        source: 'title',
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\-/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 200)
      }
    }),
    defineField({
      name: 'audioFile',
      type: 'file'
    }),
    defineField({
      name: 'transcript',
      type: 'file'
    })
  ]
});

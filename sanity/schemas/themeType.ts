import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const themeType = defineType({
  name: 'theme',
  title: 'Theme',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'sort',
      type: 'number'
    })
  ]
});

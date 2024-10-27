import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const colorType = defineType({
  name: 'colorType',
  title: 'Color',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'hexCode',
      type: 'string'
    })
  ]
});

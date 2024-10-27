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
      name: 'description',
      type: 'text'
    }),
    defineField({
      name: 'sort',
      type: 'number'
    }),
    defineField({
      name: 'color',
      type: 'reference',
      to: { type: 'color' }
    })
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [
        {
          field: 'sort',
          direction: 'asc'
        }
      ]
    }
  ]
});

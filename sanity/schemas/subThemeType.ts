import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const subThemeType = defineType({
  name: 'subTheme',
  title: 'Sub Theme',
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
    }),
    defineField({
      name: 'theme',
      type: 'reference',
      to: { type: 'theme' }
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

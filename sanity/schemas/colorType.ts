import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const colorType = defineType({
  name: 'color',
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
      type: 'string',
      validation: Rule =>
        Rule.regex(
          /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g,
          'valid hex code'
        )
    })
  ]
});

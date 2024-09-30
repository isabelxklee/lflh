import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { themeType } from './themeType';
import { subThemeType } from './subThemeType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [themeType, subThemeType]
};

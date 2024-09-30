import { type SchemaTypeDefinition } from 'sanity';

import { themeType } from './themeType';
import { subThemeType } from './subThemeType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [themeType, subThemeType]
};

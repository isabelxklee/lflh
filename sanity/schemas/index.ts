import { type SchemaTypeDefinition } from 'sanity';

import { themeType } from './themeType';
import { subThemeType } from './subThemeType';
import { interviewType } from './interviewType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [interviewType, themeType, subThemeType]
};

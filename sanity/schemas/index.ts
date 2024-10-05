import { type SchemaTypeDefinition } from 'sanity';

import { themeType } from './themeType';
import { subThemeType } from './subThemeType';
import { interviewType } from './interviewType';
import { siteSettings } from './siteSettings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, interviewType, themeType, subThemeType]
};

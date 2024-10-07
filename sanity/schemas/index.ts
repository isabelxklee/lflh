import { type SchemaTypeDefinition } from 'sanity';

import { themeType } from './themeType';
import { subThemeType } from './subThemeType';
import { interviewType } from './interviewType';
import { siteSettings } from './siteSettings';
import { excerptType } from './excerptType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [excerptType, siteSettings, interviewType, themeType, subThemeType]
};

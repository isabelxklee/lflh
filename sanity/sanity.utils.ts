import { client } from './lib/client';
import {
  SITE_SETTINGS_QUERY,
  SUB_THEMES_QUERY,
  THEMES_QUERY
} from './lib/queries';
import { ThemeType, SubThemeType } from './types/types';

export async function getThemes(): Promise<ThemeType[]> {
  const themes = await client.fetch(THEMES_QUERY);

  return themes;
}

export async function getSubThemes(): Promise<SubThemeType[]> {
  const subThemes = await client.fetch(SUB_THEMES_QUERY);

  return subThemes;
}

export async function getSiteSettings(): Promise<any> {
  const siteSettings = await client.fetch(SITE_SETTINGS_QUERY);

  return siteSettings;
}

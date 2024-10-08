import { client } from './lib/client';
import { SUB_THEMES_QUERY, THEMES_QUERY } from './lib/queries';

export type ThemeType = {
  _id: string;
  title: string;
  sort: number;
  description: any;
};

export type SubThemeType = {
  _id: string;
  title: string;
  sort: number;
  themeName: any;
};

export async function getThemes(): Promise<ThemeType[]> {
  const themes = await client.fetch(THEMES_QUERY);

  return themes;
}

export async function getSubThemes(): Promise<SubThemeType[]> {
  const subThemes = await client.fetch(SUB_THEMES_QUERY);

  return subThemes;
}

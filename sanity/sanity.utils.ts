import { client } from './lib/client';
import { SUBTHEMES_QUERY, THEMES_QUERY } from './lib/queries';

export type ThemeType = {
  _id: string;
  title: string;
  sort: number;
};

export type SubThemeType = {
  _id: string;
  title: string;
  sort: number;
};

export async function getThemes() {
  const themes = await client.fetch(THEMES_QUERY);

  return { themes };
}

export async function getSubThemes() {
  const subThemes = await client.fetch(SUBTHEMES_QUERY);

  return { subThemes };
}

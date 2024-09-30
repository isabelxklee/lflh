import { client } from './lib/client';

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

export async function getThemes(): Promise<ThemeType[]> {
  const themes = await client.fetch(`
    *[_type == "theme"]{
      _id,
      title,
      sort
    }`);

  return themes;
}

export async function getSubThemes(): Promise<SubThemeType[]> {
  const subThemes = await client.fetch(`
    *[_type == "subTheme"]{
      _id,
      title,
      sort,
      "themeName": theme->title
    }`);

  return subThemes;
}

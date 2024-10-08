import { defineQuery } from 'next-sanity';

export const THEMES_QUERY = defineQuery(`*[_type == "theme"]{
      _id,
      title,
      sort,
      description
    }`);

export const SUB_THEMES_QUERY = defineQuery(`*[_type == "subTheme"]{
      _id,
      title,
      sort,
      "themeName": theme->title
    }`);

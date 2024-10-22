import { defineQuery } from 'next-sanity';

export const THEMES_QUERY = defineQuery(`*[_type == "theme"] | order(sort asc) {
      _id,
      title,
      sort,
      description
    }`);

export const SUB_THEMES_QUERY =
  defineQuery(`*[_type == "subTheme"] | order(sort asc) {
      _id,
      title,
      sort,
      "themeName": theme->title
    }`);

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"]{
      _id,
      siteTitle,
      siteLogo,
      aboutPageText
    }`);

export const INTERVIEWS_QUERY = defineQuery(`*[_type == "interview"]{
      _id,
      title,
      audioFile,
      "audioFileURL": audioFile.asset->url,
      "transcript": transcript.asset->url,
      slug
    }`);

export const EXCERPTS_QUERY = defineQuery(`*[_type == "excerpt"]{
      _id,
      title,
      startTime,
      endTime,
      subTheme,
      interview
    }`);

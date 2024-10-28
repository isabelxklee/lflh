import { defineQuery } from 'next-sanity';

export const THEMES_QUERY = defineQuery(`*[_type == "theme"] | order(sort asc) {
      _id,
      title,
      sort,
      description,
      "subThemes": *[_type == "subTheme" && references(^._id)] {
        title,
        "slug": slug.current
      },
      "colorTitle": color->title,
      "colorHex": color->hexCode
    }`);

export const SUB_THEMES_QUERY =
  defineQuery(`*[_type == "subTheme"] | order(sort asc) {
      _id,
      title,
      sort,
      theme->,
      "slug": slug.current
    }`);

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"]{
      _id,
      siteTitle,
      siteLogo,
      aboutPageText,
      themePageText,
    }`);

export const INTERVIEWS_QUERY = defineQuery(`*[_type == "interview"]{
      _id,
      title,
      audioFile,
      "audioFileURL": audioFile.asset->url,
      "transcriptText": transcriptText[].children[].text,
      "slug": slug.current,
      "excerpts": *[_type == "excerpt" && references(^._id)] {
        title,
        transcriptText,
        "colorTitle": subTheme->theme->color->title,
        "colorHex": subTheme->theme->color->hexCode,
      },
    }`);

export const EXCERPTS_QUERY = defineQuery(`*[_type == "excerpt"]{
      _id,
      title,
      transcriptText,
      subTheme->,
      "theme": subTheme->theme->,
      "colorTitle": subTheme->theme->color->title,
      "colorHex": subTheme->theme->color->hexCode,
      interview->
    }`);

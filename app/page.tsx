'use server';

import {
  getSiteSettings,
  getSubThemes,
  getThemes
} from '../sanity/sanity.utils';
import Home from './(pages)';

export default async function Index() {
  const themes = await getThemes();
  const subThemes = await getSubThemes();
  const siteSettings = await getSiteSettings();

  return (
    <>
      <Home themes={themes} subThemes={subThemes} siteSettings={siteSettings} />
    </>
  );
}

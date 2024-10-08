'use server';

import { client } from '../sanity/lib/client';
import { SUB_THEMES_QUERY, THEMES_QUERY } from '../sanity/lib/queries';
import { getSubThemes, getThemes } from '../sanity/sanity.utils';
import Home from './(pages)';

export default async function Index() {
  // const themes = await getThemes();
  // const subThemes = await getSubThemes();
  const themes = await client.fetch(THEMES_QUERY);
  const subThemes = await client.fetch(SUB_THEMES_QUERY);

  return (
    <>
      <Home themes={themes} subThemes={subThemes} />
    </>
  );
}

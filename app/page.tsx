'use server';

import { getSubThemes, getThemes } from '../sanity/sanity.utils';
import Home from './(pages)';

export default async function Index() {
  const themes = await getThemes();
  const subThemes = await getSubThemes();

  return (
    <>
      <Home themes={themes} subThemes={subThemes} />
    </>
  );
}

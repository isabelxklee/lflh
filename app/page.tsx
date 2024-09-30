'use server';

import { getSubThemes, getThemes } from '../sanity/sanity.utils';
import HomePage from './components/HomePage';

export default async function Index() {
  const themes = await getThemes();
  const subThemes = await getSubThemes();

  return (
    <>
      <HomePage themes={themes} subThemes={subThemes} />
    </>
  );
}

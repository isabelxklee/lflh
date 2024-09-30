'use server';

import { getThemes } from '../sanity/sanity.utils';
import HomePage from './components/HomePage';

export default async function Index() {
  const themes = await getThemes();

  return (
    <>
      <HomePage themes={themes} />
    </>
  );
}

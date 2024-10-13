'use server';

import 'server-only';
import { client } from '../sanity/lib/client';
import { THEMES_QUERY } from '../sanity/lib/queries';

export async function getThemes() {
  const themes = await client.fetch(THEMES_QUERY);

  return themes;
}

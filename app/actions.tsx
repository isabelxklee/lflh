'use server';

import { client } from '../sanity/lib/client';
import {
  EXCERPTS_QUERY,
  INTERVIEWS_QUERY,
  SITE_SETTINGS_QUERY,
  SUB_THEMES_QUERY,
  THEMES_QUERY
} from '../sanity/lib/queries';

export async function getThemes() {
  const themes = await client.fetch(THEMES_QUERY);

  return themes;
}

export async function getSubThemes() {
  const subThemes = await client.fetch(SUB_THEMES_QUERY);

  return subThemes;
}

export async function getSiteSettings() {
  const siteSettings = await client.fetch(SITE_SETTINGS_QUERY);

  return siteSettings;
}

export async function getInterviews() {
  const interviews = await client.fetch(INTERVIEWS_QUERY);

  return interviews;
}

export async function getExcerpts() {
  const excerpts = await client.fetch(EXCERPTS_QUERY);

  return excerpts;
}

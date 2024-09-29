import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';
import { structure } from './sanity/structure';
import { postType } from './sanity/schemaTypes/postType';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  projectId: '4569xi28',
  dataset: 'production',
  title: 'Listening for the Long Haul',
  apiVersion: '2024-09-29',
  basePath: '/admin',
  plugins: [structureTool({ structure: structure }), media(), visionTool()],
  schema: {
    types: [postType]
  }
});

export default config;

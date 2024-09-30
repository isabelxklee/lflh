import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('theme').title('Themes'),
      S.documentTypeListItem('subTheme').title('Sub Themes'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        item => item.getId() && !['theme', 'subTheme'].includes(item.getId()!)
      )
    ]);

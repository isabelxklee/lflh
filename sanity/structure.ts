import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  // S.list()
  //   .title('Sub Themes')
  //   .items([
  //     S.documentTypeListItem('theme').title('Themes'),
  //     S.documentTypeListItem('subTheme').title('Sub Themes'),
  //     S.listItem()
  //       .title('By Theme')
  //       .child(
  //         S.documentTypeList('theme')
  //           .title('By Theme')
  //           .child(themeId =>
  //             S.documentList()
  //               .title('Sub Themes')
  //               .filter('_type == "subTheme" && $themeId in themes[]._ref')
  //               .params({ themeId })
  //           )
  //       )
  //   ]);

  S.list()
    .title('Themes')
    .items([
      S.documentTypeListItem('theme').title('Themes'),
      S.documentTypeListItem('subTheme').title('Sub Themes'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        item => item.getId() && !['theme', 'subTheme'].includes(item.getId()!)
      )
    ]);

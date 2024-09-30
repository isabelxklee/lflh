// export async function getsettings(): Promise<Settings[]> {
//   return createClient(clientConfig).fetch(
//     `*[_type == "siteSettings"]{
//         _id,
//        title,
//        "herovisual": herovisual[]{
//           _key,
//           _type,
//           "heroImgUrl": asset->url,
//        },
//        "herovisualMobile": herovisualMobile[]{
//         _key,
//         _type,
//         "heroImgUrl": asset->url,
//        },
//       "logo": site_log.asset->url,
//       "seoDescription": seo.description,
//       "seoImageUrl": seo.seo_image.asset->url,
//     }`
//   );
// }

import { client } from './lib/client';
export type Theme = {
  _id: string;
  title: string;
  sort: number;
};

export async function getThemes(): Promise<Theme[]> {
  const themes = await client.fetch(`
    *[_type == "theme"]{
      _id,
      title,
      sort
    }`);

  return themes;
}

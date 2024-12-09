import { MetadataRoute } from 'next';
import { getNotePosts } from '@/lib/posts';
import { metaData } from '@/config/metadata';

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = (await getNotePosts()).map((post) => ({
    url: `${BaseUrl}notes/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    {
      url: BaseUrl,
      lastModified: new Date(),
    },
    {
      url: `${BaseUrl}projects`,
      lastModified: new Date(),
    },
    {
      url: `${BaseUrl}notes`,
      lastModified: new Date(),
    },
    ...blogs,
  ];
}

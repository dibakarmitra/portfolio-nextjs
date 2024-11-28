import { MetadataRoute } from "next";
import { getNotePosts } from "./lib/posts";
import { metaData } from "config/metadata";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = getNotePosts().map((post) => ({
    url: `${BaseUrl}notes/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "notes", "projects", "photos"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}

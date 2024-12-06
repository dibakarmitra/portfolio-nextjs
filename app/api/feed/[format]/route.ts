import { Feed } from "feed";
import { getNotePosts } from "../../../lib/posts";
import { metaData } from "config/metadata";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { format: string } }
) {
  const { format } = params;
  const validFormats = ["rss.xml", "atom.xml", "feed.json"];

  if (!validFormats.includes(format)) {
    return NextResponse.json(
      { error: "Unsupported feed format" },
      { status: 404 }
    );
  }

  const BaseUrl = metaData.baseUrl.endsWith("/")
    ? metaData.baseUrl
    : `${metaData.baseUrl}/`;

  const feed = new Feed({
    title: metaData.title,
    description: metaData.description,
    id: BaseUrl,
    link: BaseUrl,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      metaData.title
    }`,
    generator: "Feed for Node.js",
    feedLinks: {
      json: `${BaseUrl}api/feed/feed.json`,
      atom: `${BaseUrl}api/feed/atom.xml`,
      rss: `${BaseUrl}api/feed/rss.xml`,
    },
  });

  const allPosts = await getNotePosts();

  allPosts.forEach((post) => {
    const postUrl = `${BaseUrl}blog/${post.slug}`;
    const categories = post.metadata.tags || [];

    feed.addItem({
      title: post.metadata.title,
      id: postUrl,
      link: postUrl,
      description: post.metadata.excerpt,
      content: post.content,
      author: [
        {
          name: metaData.author,
          email: metaData.email,
          link: metaData.siteUrl,
        },
      ],
      contributor: [],
      category: categories.map((tag) => ({
        name: tag,
        term: tag, // Optional: Use if you need additional metadata.
      })),
      date: post.metadata.publishedAt ? new Date(post.metadata.publishedAt) : new Date(),
    });
  });

  const responseMap: Record<string, { content: string; contentType: string }> =
    {
      "rss.xml": { content: feed.rss2(), contentType: "application/xml" },
      "atom.xml": { content: feed.atom1(), contentType: "application/xml" },
      "feed.json": { content: feed.json1(), contentType: "application/json" },
    };

  const response = responseMap[format];

  return new NextResponse(response.content, {
    headers: {
      "Content-Type": response.contentType,
    },
  });
}
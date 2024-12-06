import { Feed } from "feed";
import { getNotePosts } from "../../../app/lib/posts";
import { metaData } from "../../../config/metadata";
import { NextResponse } from "next/server";

// Generate static paths for feed formats
export async function generateStaticParams() {
  return [
    { format: "rss.xml" },
    { format: "atom.xml" },
    { format: "feed.json" },
  ];
}

// Handle GET request for feeds
export async function GET(
  _: Request,
  { params }: { params: { format: string } }
) {
  const { format } = params;
  const validFormats = ["rss.xml", "atom.xml", "feed.json"];

  // Check if format is valid
  if (!validFormats.includes(format)) {
    return NextResponse.json(
      { error: "Unsupported feed format" },
      { status: 404 }
    );
  }

  // Base URL for the site
  const BaseUrl = metaData.siteUrl.endsWith("/")
    ? metaData.siteUrl
    : `${metaData.siteUrl}/`;

  // Initialize the feed
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
      json: `${BaseUrl}feed.json`,
      atom: `${BaseUrl}atom.xml`,
      rss: `${BaseUrl}rss.xml`,
    },
  });

  // Fetch all posts
  const allPosts = await getNotePosts();

  // Add posts to the feed
  allPosts.forEach((post) => {
    const postUrl = `${BaseUrl}blog/${post.slug}`;
    const categories = Array.isArray(post.metadata.tags)
      ? post.metadata.tags.map((tag) => tag.trim())
      : [];

    feed.addItem({
      title: post.metadata.title,
      id: postUrl,
      link: postUrl,
      description: post.metadata.summary,
      category: categories.map((tag) => ({
        name: tag,
        term: tag,
      })),
      date: new Date(post.metadata.publishedAt || Date.now()),
    });
  });

  // Map feed formats to content types and generated content
  const responseMap: Record<string, { content: string; contentType: string }> =
    {
      "rss.xml": { content: feed.rss2(), contentType: "application/xml" },
      "atom.xml": { content: feed.atom1(), contentType: "application/xml" },
      "feed.json": { content: feed.json1(), contentType: "application/json" },
    };

  // Generate response for the requested format
  const response = responseMap[format];

  return new NextResponse(response.content, {
    headers: {
      "Content-Type": response.contentType,
    },
  });
}

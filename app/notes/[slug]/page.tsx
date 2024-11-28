import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNotePost, getNotePosts } from "app/lib/posts";
import { metaData } from "config/metadata";
import NoteLayout from "../../components/note-layout";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getNotePosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = getNotePost(params.slug);
  if (!post) {
    return;
  }

  const { title, date, excerpt, image } = post.metadata;
  const ogImage = image
    ? image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: "article",
      publishedTime: date,
      url: `${metaData.baseUrl}/notes/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getNotePost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <NoteLayout
      title={post.metadata.title}
      date={post.metadata.date}
      tags={post.metadata.tags}
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NotePosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.excerpt,
            image: post.metadata.image
              ? `${metaData.baseUrl}${post.metadata.image}`
              : `${metaData.baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${metaData.baseUrl}/notes/${post.slug}`,
            author: {
              "@type": "Person",
              name: metaData.name,
            },
          }),
        }}
      />
      <MDXRemote source={post.content} />
    </NoteLayout>
  );
}

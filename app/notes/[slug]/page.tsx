import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNotePost, getNotePosts } from "@/lib/posts";
import { metaData } from "@/config/metadata";
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

  const { title, date, excerpt, image } = post;
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
      publishedTime: new Date(date).toISOString(),
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
      title={post.title}
      date={formatDate(new Date(post.date))}
      tags={post.tags}
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NotePosting",
            headline: post.title,
            datePublished: new Date(post.date).toISOString(),
            dateModified: new Date(post.date).toISOString(),
            description: post.excerpt,
            image: post.image
              ? `${metaData.baseUrl}${post.image}`
              : `${metaData.baseUrl}/og?title=${encodeURIComponent(post.title)}`,
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

function formatDate(date: Date) {
  return date.toDateString();
}

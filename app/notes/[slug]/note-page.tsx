import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useState, useEffect } from 'react';
import { NotePost } from '@/types/notes';
import { useNotes } from "@/hooks/useNotes";
import { metaData } from "@/config/metadata";
import NoteLayout from "@/components/note-layout";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const { posts } = useNotes();
  return posts.map((post: NotePost) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { getPostBySlug } = useNotes();
  const post = getPostBySlug(params.slug);

  if (!post) {
    return;
  }

  const ogImage = post.image
    ? post.image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(post.title)}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      url: `${metaData.baseUrl}/notes/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const { getPostBySlug } = useNotes();
  const post = getPostBySlug(params.slug);

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

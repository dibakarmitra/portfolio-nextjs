import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotePost } from '@/types/notes';
import { metaData } from "@/config/metadata";
import NoteLayout from "@/components/note-layout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getNotePosts, getNotePost } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getNotePosts();
  return posts.map((post: NotePost) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = await getNotePost(params.slug);

  if (!post) {
    return;
  }

  const ogImage = post.image
    ? post.image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(post.title)}`;

  const publishedTime = new Date(post.date);
  const isValidDate = !isNaN(publishedTime.getTime());

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      ...(isValidDate && { publishedTime: publishedTime.toISOString() }),
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

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getNotePost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <NoteLayout title={post.title} date={post.date} tags={post.tags || []}>
      <div className="prose dark:prose-invert max-w-3xl mx-auto">
        <article>
          <MDXRemote source={post.content} />
        </article>
      </div>
    </NoteLayout>
  );
}

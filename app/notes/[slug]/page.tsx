import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotePost } from '@/types/notes';
import { metaData } from "@/config/metadata";
import NoteLayout from "@/components/note-layout";
import { MDXRemote } from "next-mdx-remote/rsc";

async function fetchNoteBySlug(slug: string): Promise<NotePost | null> {
  try {
    const res = await fetch(`${metaData.baseUrl}/api/notes?slug=${encodeURIComponent(slug)}`, {
      next: { 
        revalidate: 60, // 1-minute revalidation
        tags: [`note-${slug}`] 
      }
    });
    
    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch note: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching note:', error);
    return null;
  }
}

async function fetchAllNotes(): Promise<{ posts: NotePost[] }> {
  try {
    const res = await fetch(`${metaData.baseUrl}/api/notes`, {
      next: { 
        revalidate: 3600,
        tags: ['all-notes'] 
      }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch notes: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching all notes:', error);
    return { posts: [] };
  }
}

export async function generateStaticParams() {
  const { posts } = await fetchAllNotes();
  return posts.map((post: NotePost) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = await fetchNoteBySlug(params.slug);

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
  const post = await fetchNoteBySlug(params.slug);

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

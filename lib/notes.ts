import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { v5 as uuidv5 } from 'uuid';
import { NotePost } from '@/types/notes';

const postsDirectory = path.join(process.cwd(), 'contents');

// Namespace for generating consistent UUIDs
const NOTES_NAMESPACE = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';

export async function getAllPosts(page: number = 1, limit: number = 10): Promise<{
  posts: NotePost[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
}> {
  // Get file names under /contents
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(async fileName => {
        // Remove ".mdx" from file name to get slug
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);

        // Combine the data with the slug
        return {
          id: uuidv5(slug, NOTES_NAMESPACE),
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          tags: Array.isArray(data.tags) 
            ? data.tags 
            : (data.tags ? data.tags.split(',').map((tag: string) => tag.trim()) : []),
          content
        } as NotePost;
      })
  );

  // Sort posts by date
  const sortedPosts = allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Calculate pagination
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  
  // Adjust page number if out of bounds
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  
  // Slice posts based on pagination
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    totalPosts,
    totalPages,
    currentPage
  };
}

export async function getPostBySlug(slug: string): Promise<NotePost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: uuidv5(slug, NOTES_NAMESPACE),
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: Array.isArray(data.tags) 
        ? data.tags 
        : (data.tags ? data.tags.split(',').map((tag: string) => tag.trim()) : []),
      content
    } as NotePost;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getPostById(id: string): Promise<NotePost | null> {
  const { posts } = await getAllPosts();
  return posts.find(post => post.id === id) || null;
}

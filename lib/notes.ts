import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { v4 as uuidv4 } from 'uuid';
import { NotePost } from '@/types/notes';

const postsDirectory = path.join(process.cwd(), 'contents');

export async function getAllPosts(): Promise<NotePost[]> {
  // Get file names under /contents
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = fileNames
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
        id: uuidv4(),
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: Array.isArray(data.tags) 
          ? data.tags 
          : (data.tags ? data.tags.split(',').map((tag: string) => tag.trim()) : []),
        content
      } as NotePost;
    });

  // Sort posts by date
  const resolvedPosts = await Promise.all(allPostsData);
  return resolvedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<NotePost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: uuidv4(),
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
  const posts = await getAllPosts();
  return posts.find(post => post.id === id) || null;
}

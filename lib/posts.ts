import { NotePost } from '@/types/notes';
import matter from "gray-matter";
import fs from 'fs/promises';
import path from "path";
import { v5 as uuidv5 } from 'uuid';

export type { NotePost };

// Namespace for generating consistent UUIDs
const POSTS_NAMESPACE = '6ba7b812-9dad-11d1-80b4-00c04fd430c8';

async function getMDXFiles(dir: string) {
  const files = await fs.readdir(dir);
  return files.filter((file) => path.extname(file) === ".mdx");
}

async function readMDXFile(filePath: string): Promise<NotePost> {
  const rawContent = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  const slug = path.basename(filePath, path.extname(filePath));

  return {
    id: uuidv5(slug, POSTS_NAMESPACE),
    slug,
    title: data.title,
    date: data.date || data.publishedAt || new Date().toISOString(),
    excerpt: data.summary || data.description || '',
    tags: data.tags ? (Array.isArray(data.tags) ? data.tags : data.tags.split(',').map((tag: string) => tag.trim())) : [],
    content,
    image: data.image,
  };
}

export async function getNotePosts(): Promise<NotePost[]> {
  const postsDirectory = path.join(process.cwd(), 'contents');
  
  try {
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData = await Promise.all(fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        return readMDXFile(fullPath);
      }));

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else if (a.date > b.date) {
        return -1;
      } else {
        return 0;
      }
    });
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getNotePost(slug: string): Promise<NotePost | null> {
  const postsDirectory = path.join(process.cwd(), 'contents');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    return await readMDXFile(filePath);
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function formatDate(date: string, includeRelative = false) {
  const parsedDate = new Date(date);
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedDate = formatter.format(parsedDate);

  if (includeRelative) {
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - parsedDate.getTime()) / (1000 * 3600 * 24));
    
    let relativeTime = '';
    if (diffInDays === 0) {
      relativeTime = 'Today';
    } else if (diffInDays === 1) {
      relativeTime = 'Yesterday';
    } else if (diffInDays < 7) {
      relativeTime = `${diffInDays} days ago`;
    } else if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      relativeTime = `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30);
      relativeTime = `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(diffInDays / 365);
      relativeTime = `${years} year${years > 1 ? 's' : ''} ago`;
    }

    return `${formattedDate} (${relativeTime})`;
  }

  return formattedDate;
}

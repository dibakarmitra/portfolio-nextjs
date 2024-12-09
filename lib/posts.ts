import { NotePost } from '@/types/notes';
import matter from "gray-matter";
import fs from 'fs/promises';
import path from "path";

export type { NotePost };

async function getMDXFiles(dir: string) {
  const files = await fs.readdir(dir);
  return files.filter((file) => path.extname(file) === ".mdx");
}

async function readMDXFile(filePath: string): Promise<NotePost> {
  const rawContent = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  const slug = path.basename(filePath, path.extname(filePath));

  return {
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
  const postsDirectory = path.join(process.cwd(), "contents");
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    return await readMDXFile(fullPath);
  } catch (error) {
    console.error(`Error reading note post: ${slug}`, error);
    return null;
  }
}

export function formatDate(date: string, includeRelative = false) {
  try {
    const currentDate = new Date();
    const targetDate = new Date(date);

    if (!includeRelative) {
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).format(targetDate);
    }

    const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    const diffInMilliseconds = targetDate.getTime() - currentDate.getTime();
    const diffInDays = Math.round(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const diffInMonths = Math.round(diffInDays / 30);
    const diffInYears = Math.round(diffInDays / 365);

    let relativeTime = '';
    if (Math.abs(diffInYears) >= 1) {
      relativeTime = formatter.format(diffInYears, 'year');
    } else if (Math.abs(diffInMonths) >= 1) {
      relativeTime = formatter.format(diffInMonths, 'month');
    } else if (!isNaN(diffInDays)) {
      relativeTime = formatter.format(diffInDays, 'day');
    }

    const fullDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(targetDate);

    return includeRelative && relativeTime ? `${fullDate} (${relativeTime})` : fullDate;
  } catch (error) {
    console.error('Error formatting date:', error);
    return date;
  }
}

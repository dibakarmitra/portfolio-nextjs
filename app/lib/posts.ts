import { NotePost } from '@/types/notes';
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type { NotePost };

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): NotePost {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  const slug = path.basename(filePath, path.extname(filePath));

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tags: data.tags || [],
    content,
    image: data.image,
  };
}

export function getNotePosts(): NotePost[] {
  const postsDirectory = path.join(process.cwd(), 'app/content/blog');
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags || [],
        content,
        image: data.image,
      } as NotePost;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getNotePost(slug: string): NotePost | null {
  const postsDirectory = path.join(process.cwd(), "app/content/blog");
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    return readMDXFile(fullPath);
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
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

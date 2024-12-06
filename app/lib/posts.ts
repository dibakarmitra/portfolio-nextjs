import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type NotePost = {
  slug: string;
  metadata: {
    baseUrl: string;
    title: string;
    date: Date;
    excerpt: string;
    tags: string[];
    image?: string;
    summary?: string;
    publishedAt?: Date;
  };
  content: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): NotePost {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  const slug = path.basename(filePath, path.extname(filePath));

  return {
    slug,
    metadata: {
      baseUrl: data.baseUrl,
      title: data.title,
      date: new Date(data.date),
      excerpt: data.excerpt,
      tags: data.tags || [],
      image: data.image,
      publishedAt: data.publishedAt ? new Date(data.publishedAt) : undefined,
    },
    content,
  };
}

export function getNotePosts(): NotePost[] {
  const postsDirectory = path.join(process.cwd(), "app/content/blog");
  const mdxFiles = getMDXFiles(postsDirectory);
  
  return mdxFiles
    .map((file) => readMDXFile(path.join(postsDirectory, file)))
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
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

    // Return only formatted date if includeRelative is false
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
    // If there's any error in date formatting, return the original date string
    console.error('Error formatting date:', error);
    return date;
  }
}

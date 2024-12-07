import Link from 'next/link';
import { formatDate } from '@/app/lib/posts';
import type { NotePost as Note } from '@/types/notes';

export default function NoteList({ posts }: { posts: Note[] }) {
  return (
    <div className="flex flex-col gap-8 mt-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/notes/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.date)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

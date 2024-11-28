import Link from "next/link";
import { formatDate } from "app/lib/posts";
import type { NotePost } from "app/lib/posts";
import styles from "../styles/animations.module.css";

interface NoteListProps {
  posts: NotePost[];
}

export default function NoteList({ posts }: NoteListProps) {
  return (
    <section className="mx-auto px-4">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Notes
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Articles about web development, software engineering, and technology
        </p>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map((post, i) => (
          <article
            key={post.slug}
            className={`py-6 ${styles.fadeInUp} ${styles[`delay${i + 1}`]}`}
          >
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/notes/${post.slug}`}
                      className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {post.metadata.title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap space-x-3 text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={post.metadata.date}>
                      {formatDate(post.metadata.date)}
                    </time>
                    {post.metadata.tags && post.metadata.tags.length > 0 && (
                      <>
                        <span>•</span>
                        <div className="flex flex-wrap gap-2">
                          {post.metadata.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {post.metadata.excerpt && (
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    {post.metadata.excerpt}
                  </div>
                )}
                <div className="text-base font-medium leading-6">
                  <Link
                    href={`/notes/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    aria-label={`Read "${post.metadata.title}"`}
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
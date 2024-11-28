'use client';

import { format } from 'date-fns';
import styles from "../styles/animations.module.css";

interface NoteLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
  tags: string[];
}

export default function NoteLayout({ children, title, date, tags }: NoteLayoutProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <div className={styles.fadeInUp}>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
          <time dateTime={date}>
            {format(new Date(date), 'MMMM d, yyyy')}
          </time>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className={`${styles.fadeInUp} ${styles.delay2}`}>
        {children}
      </div>
    </article>
  );
}
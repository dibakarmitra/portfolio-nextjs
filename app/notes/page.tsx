// app/notes/page.tsx
import { Suspense } from 'react';
import NoteList from '@/components/note-list';
import NoteListSkeleton from '@/components/skeletons/note-list-skeleton';

export const metadata = {
  title: "Notes",
  description: "Insights, tutorials, and thoughts on technology, programming, and personal growth",
};

export default function NotesPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">TECH NOTES & INSIGHTS</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A collection of thoughts, tutorials, and deep dives into technology, programming, and personal development.
        </p>
      </div>

      {/* Notes Grid */}
      <Suspense fallback={<NoteListSkeleton />}>
        <NoteList />
      </Suspense>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import type { NotePost } from "@/types/notes";
import NoteListSkeleton from './skeletons/note-list-skeleton';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function NoteList() {
  const [posts, setPosts] = useState<NotePost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchNotes() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/notes?page=${page}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }

        const data = await response.json();
        setPosts(data.posts);
        setTotalPages(data.pagination.totalPages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    }

    fetchNotes();
  }, [page]);

  if (isLoading) {
    return <NoteListSkeleton />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post: NotePost) => (
          <Link href={`/notes/${post.slug}`} key={post.id}>
            <div className="group cursor-pointer bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full hover:scale-[1.02] transition-all">
              <div className="flex flex-col h-full">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {formatDate(post.date)}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={() => setPage(prev => Math.max(1, prev - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {page} of {totalPages}
          </span>
          <button 
            onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

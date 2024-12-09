'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaThLarge, FaList } from "react-icons/fa";
import { NotePost } from '@/types/notes';
import { useNotes } from '../hooks/useNotes';
import { formatDate } from "@/app/lib/posts";

interface NotesViewProps {
  posts: NotePost[];
}

export default function NotesView() {
  const [isGridView, setIsGridView] = useState(true);
  const { posts } = useNotes();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end gap-2 mb-8">
        <button
          onClick={() => setIsGridView(true)}
          className={`p-2 rounded-lg transition-colors ${
            isGridView 
              ? 'bg-orange-500 text-white' 
              : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500'
          }`}
        >
          <FaThLarge size={20} />
        </button>
        <button
          onClick={() => setIsGridView(false)}
          className={`p-2 rounded-lg transition-colors ${
            !isGridView 
              ? 'bg-orange-500 text-white' 
              : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500'
          }`}
        >
          <FaList size={20} />
        </button>
      </div>

      {isGridView ? (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link href={`/notes/${post.slug}`} key={index}>
              <div className="group h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {post.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-10"></div>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                
                <div className="p-6 space-y-4">
                  <div className="text-sm text-orange-500 dark:text-orange-400 font-medium">
                    {formatDate(post.date)}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="inline-flex items-center rounded-full bg-orange-50 dark:bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // List View
        <div className="flex flex-col gap-8">
          {posts.map((post, index) => (
            <Link href={`/notes/${post.slug}`} key={index} className="block">
              <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col md:flex-row">
                  {post.image && (
                    <div className="relative w-full md:w-72 h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-10"></div>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col h-full">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors mb-2">
                          {post.title}
                        </h2>
                        
                        <div className="text-sm text-orange-500 dark:text-orange-400 font-medium mb-3">
                          {formatDate(post.date)}
              
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {post.excerpt}
                        </p>
                      </div>

                      {post.tags && post.tags.length > 0 && (
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="inline-flex items-center rounded-full bg-orange-50 dark:bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

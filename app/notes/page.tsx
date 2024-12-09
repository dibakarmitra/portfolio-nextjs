// app/notes/page.tsx
import { getNotePosts } from "@/lib/posts";
import Link from "next/link";
import type { NotePost } from "@/types/notes";

export const metadata = {
  title: "Notes",
  description: "Technical insights, learnings, and personal reflections",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default async function NotesPage({ searchParams }: { searchParams: { page?: string } }) {
  const posts = await getNotePosts();
  
  // Pagination logic
  const pageSize = 9;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / pageSize);

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">DESIGN THOUGHTS</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Exploring software development, design patterns, and technical insights through detailed articles and case studies.
        </p>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {paginatedPosts.map((post: NotePost, index: number) => (
          <Link href={`/notes/${post.slug}`} key={index}>
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
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link 
              key={pageNum} 
              href={`/notes?page=${pageNum}`}
              className={`px-4 py-2 rounded-md ${
                pageNum === page 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {pageNum}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
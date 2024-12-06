// app/notes/page.tsx
import { getNotePosts } from "app/lib/posts";
import Link from "next/link";
import type { NotePost } from "app/lib/posts";

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

export default function NotesPage({ searchParams }: { searchParams: { page?: string } }) {
  const posts = getNotePosts();
  
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
                  {formatDate(post.metadata.date.toDateString())}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {post.metadata.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {post.metadata.excerpt}
                </p>
                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.metadata.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {post.metadata.image && (
                  <div className="mt-4 aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={post.metadata.image} 
                      alt={post.metadata.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link
              key={pageNum}
              href={`/notes?page=${pageNum}`}
              className={`px-4 py-2 rounded-lg transition-colors ${
                pageNum === page
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-gray-700'
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
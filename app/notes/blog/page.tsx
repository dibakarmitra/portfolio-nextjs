// app/notes/page.tsx
import { getNotePosts } from "app/lib/posts";
import NoteList from "../../components/note-list";
import Pagination from "../../components/pagination";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Notes",
  description: "Technical insights and personal learnings",
};

export default function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  // Get all posts
  const posts = getNotePosts();
  
  // If no posts, return 404
  if (!posts || posts.length === 0) {
    return notFound();
  }

  // Pagination setup
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  
  // Parse page number from URL
  const parsedPage = Number(searchParams.page);
  const currentPage = (!isNaN(parsedPage) && parsedPage > 0) ? parsedPage : 1;
  
  // If page number is invalid, return 404
  if (currentPage > totalPages) {
    return notFound();
  }
  
  // Get posts for current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  // Render the page
  return (
    <div>
      <NoteList posts={paginatedPosts} />
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl="/blog"
        />
      )}
    </div>
  );
}
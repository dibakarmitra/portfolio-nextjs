// app/notes/page.tsx
import { getNotePosts } from "app/lib/posts";
import NoteList from "../components/note-list";

export const metadata = {
  title: "Notes",
  description: "Technical insights, learnings, and personal reflections",
};

export default function NotesPage({ searchParams }: { searchParams: { page?: string } }) {
  const posts = getNotePosts();
  
  // Pagination logic remains the same
  const pageSize = 10;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / pageSize);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Technical Notes
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Exploring software development, technology insights, and personal learnings.
        </p>
      </div>
      <NoteList posts={paginatedPosts} />
      {/* Pagination component */}
    </div>
  );
}
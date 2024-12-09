import Link from 'next/link';

export default function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      {currentPage > 1 && (
        <Link
          href={`/notes/blog?page=${currentPage - 1}`}
          className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          Previous
        </Link>
      )}
      <span className="text-sm text-neutral-600 dark:text-neutral-400">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          href={`/notes/blog?page=${currentPage + 1}`}
          className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          Next
        </Link>
      )}
    </div>
  );
}

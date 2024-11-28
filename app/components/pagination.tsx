// app/components/pagination.tsx
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  // Generate array of page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2; // Number of pages to show on each side of current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // First page
        i === totalPages || // Last page
        (i >= currentPage - delta && i <= currentPage + delta) // Pages around current page
      ) {
        pages.push(i);
      }
    }

    // Add ellipsis
    const withEllipsis = [];
    let prev = 0;
    for (const page of pages) {
      if (prev && page - prev > 1) {
        withEllipsis.push('...');
      }
      withEllipsis.push(page);
      prev = page;
    }

    return withEllipsis;
  };

  return (
    <nav className="flex justify-center items-center gap-2 mt-8">
      {/* Previous button */}
      {currentPage > 1 && (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          ←
        </Link>
      )}

      {/* Page numbers */}
      <div className="flex gap-2">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span
              key={`ellipsis-${index}`}
              className="px-3 py-1 text-sm text-gray-700 dark:text-gray-300"
            >
              {page}
            </span>
          ) : (
            <Link
              key={page}
              href={`${baseUrl}?page=${page}`}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700'
              }`}
            >
              {page}
            </Link>
          )
        ))}
      </div>

      {/* Next button */}
      {currentPage < totalPages && (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          →
        </Link>
      )}
    </nav>
  );
}
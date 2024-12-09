'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Photo } from "@/types/photos";
import PhotoListSkeleton from './skeletons/photo-list-skeleton';
import BlurImage from './blur-image';

export default function PhotoList({ 
  photos: initialPhotos = [], 
  page: initialPage = 1 
}: { 
  photos?: Photo[], 
  page?: number 
}) {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [isLoading, setIsLoading] = useState(initialPhotos.length === 0);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPhotos = useCallback(async () => {
    if (initialPhotos.length > 0) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/photos?page=${page}&limit=10`);
      const data = await response.json();
      setPhotos(data.photos);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Failed to fetch photos:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, initialPhotos.length]);

  useEffect(() => {
    fetchPhotos();
  }, [page, fetchPhotos]);

  const handleNextPage = useCallback(() => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  }, [page, totalPages]);

  const handlePrevPage = useCallback(() => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  }, [page]);

  if (isLoading) {
    return <PhotoListSkeleton />;
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
        {photos.map((photo: Photo) => (
          <BlurImage 
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            aspectRatio={photo.aspectRatio}
            blurDataURL={photo.blurDataURL}
            category={photo.category}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {page} of {totalPages}
          </span>
          <button 
            onClick={handleNextPage}
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

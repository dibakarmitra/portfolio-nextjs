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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPhotos = useCallback(async () => {
    console.log('Fetching photos', { 
      initialPhotosLength: initialPhotos.length, 
      currentPage: page 
    });

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/photos?page=${page}&limit=10`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('API Response:', data);
      
      if (!data.photos || data.photos.length === 0) {
        console.warn('No photos returned from API');
        setError('No photos found');
      }
      
      setPhotos(data.photos || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error('Failed to fetch photos:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    // Always fetch photos, ignore initial photos
    fetchPhotos();
  }, [fetchPhotos]);

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

  if (error) {
    return (
      <div className="text-red-500 text-center py-4">
        Error loading photos: {error}
        <button 
          onClick={fetchPhotos} 
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
        {photos.map((photo: Photo) => (
          <BlurImage 
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            aspectRatio={photo.aspectRatio}
            category={photo.category}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button 
          onClick={handlePrevPage} 
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>
        <button 
          onClick={handleNextPage} 
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { Photo } from "@/types/photos";
import PhotoListSkeleton from './skeletons/photo-list-skeleton';

export default function PhotoList() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPhotos = useCallback(async () => {
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
  }, [page]);

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
          <div 
            key={photo.id} 
            className={`relative group overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 
              ${photo.aspectRatio === 'portrait' ? 'row-span-2' : 
                photo.aspectRatio === 'landscape' ? 'col-span-2' : ''}`}
          >
            <Image 
              src={photo.src} 
              alt={photo.alt} 
              width={photo.width || 300} 
              height={photo.height || 300} 
              className={`w-full object-cover 
                ${photo.aspectRatio === 'portrait' ? 'h-96' : 
                  photo.aspectRatio === 'landscape' ? 'h-48' : 
                  'h-48'}`}
              placeholder={photo.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={photo.blurDataURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVojAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwZJjItJjBBMDQ0QEFRUlpOT0FRXmhjbmRlc3Z3fmRqbWd/dXiGkLZ+hXiagP/bAEMBFRcXHhoeOyEhOYRQQlCEkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkP/AABEIAAYACAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlgAH/9k='}
            />
            {photo.alt && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm truncate">{photo.alt}</p>
              </div>
            )}
          </div>
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

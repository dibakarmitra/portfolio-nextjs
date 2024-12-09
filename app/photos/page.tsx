import React from "react";
import type { Metadata } from "next";
import { Suspense } from 'react';
import PhotoList from '@/components/photo-list';
import PhotoListSkeleton from '@/components/skeletons/photo-list-skeleton';

export const metadata: Metadata = {
  title: "Photos",
  description: "A curated collection of my photography work and visual experiments",
};

interface Photo {
  src: string;
  alt: string;
  category: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  blurDataURL?: string;
}

const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVojAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwZJjItJjBBMDQ0QEFRUlpOT0FRXmhjbmRlc3Z3fmRqbWd/dXiGkLZ+hXiagP/bAEMBFRcXHhoeOyEhOYRQQlCEkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkP/AABEIAAYACAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlgAH/9k=';

const photos: Photo[] = [
  {
    src: '/photos/photo1.jpg',
    alt: 'Urban Architecture',
    category: 'Architecture',
    aspectRatio: "portrait",
    blurDataURL: BLUR_DATA_URL,
  },
  {
    src: '/photos/photo2.jpg',
    alt: 'Street Photography',
    category: 'Street',
    aspectRatio: "landscape",
    blurDataURL: BLUR_DATA_URL,
  },
  {
    src: '/photos/photo3.jpg',
    alt: 'Nature Landscape',
    category: 'Nature',
    aspectRatio: "square",
    blurDataURL: BLUR_DATA_URL,
  },
  {
    src: '/photos/photo4.jpg',
    alt: 'Portrait Photography',
    category: 'Portrait',
    aspectRatio: "portrait",
    blurDataURL: BLUR_DATA_URL,
  },
  {
    src: '/photos/photo5.jpg',
    alt: 'Urban Life',
    category: 'Street',
    aspectRatio: "landscape",
    blurDataURL: BLUR_DATA_URL,
  },
  {
    src: '/photos/photo6.jpg',
    alt: 'Modern Architecture',
    category: 'Architecture',
    aspectRatio: "square",
    blurDataURL: BLUR_DATA_URL,
  },
];

export default function PhotosPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">PHOTOGRAPHY</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A visual journey through my lens, capturing moments and perspectives in architecture, street life, and nature.
        </p>
      </div>

      {/* Photos Grid */}
      <Suspense fallback={<PhotoListSkeleton />}>
        <PhotoList photos={photos} />
      </Suspense>
    </div>
  );
}

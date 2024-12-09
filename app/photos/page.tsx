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
}

const photos: Photo[] = [
  {
    src: '/photos/photo1.jpg',
    alt: 'Urban Architecture',
    category: 'Architecture',
    aspectRatio: "portrait",
  },
  {
    src: '/photos/photo2.jpg',
    alt: 'Street Photography',
    category: 'Street',
    aspectRatio: "landscape",
  },
  {
    src: '/photos/photo3.jpg',
    alt: 'Nature Landscape',
    category: 'Nature',
    aspectRatio: "square",
  },
  {
    src: '/photos/photo4.jpg',
    alt: 'Portrait Photography',
    category: 'Portrait',
    aspectRatio: "portrait",
  },
  {
    src: '/photos/photo5.jpg',
    alt: 'Urban Life',
    category: 'Street',
    aspectRatio: "landscape",
  },
  {
    src: '/photos/photo6.jpg',
    alt: 'Modern Architecture',
    category: 'Architecture',
    aspectRatio: "square",
  },
];

const categories = Array.from(new Set(photos.map(photo => photo.category)));

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
        <PhotoList />
      </Suspense>
    </div>
  );
}

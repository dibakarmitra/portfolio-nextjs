import React from "react";
import type { Metadata } from "next";
import BlurImage from "@/components/blur-image";

export const metadata: Metadata = {
  title: 'Photos',
  description: 'A collection of my photography work and visual experiments',
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

export default function Photos() {
  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">PHOTOGRAPHY</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A visual journey through my lens, capturing moments and perspectives in architecture, street life, and nature.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`block group relative overflow-hidden rounded-xl ${
              photo.aspectRatio === 'portrait'
                ? 'row-span-2'
                : photo.aspectRatio === 'landscape'
                ? 'col-span-2'
                : ''
            }`}
          >
            <div className={`relative w-full h-full`}>
              <BlurImage
                src={photo.src}
                alt={photo.alt}
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">
                  {photo.alt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <button className="px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
          Load More Photos
        </button>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  blurDataURL?: string;
  category?: string;
}

export default function BlurImage({ src, alt, className, aspectRatio, blurDataURL, category }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div 
      className={`
        relative w-full pb-[100%] overflow-hidden rounded-lg group
        ${aspectRatio === 'portrait' ? 'row-span-2 pb-[150%]' : ''}
        ${aspectRatio === 'landscape' ? 'col-span-2 pb-[66.66%]' : ''}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(
          'absolute inset-0 duration-700 ease-in-out object-cover',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          className
        )}
        onLoadingComplete={() => setLoading(false)}
        loading="lazy"
        quality={60}
        blurDataURL={blurDataURL}
      />
      {category && (
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <p className="text-white text-opacity-0 group-hover:text-opacity-100 text-sm font-medium transition-all duration-300">
            {category}
          </p>
        </div>
      )}
    </div>
  );
}

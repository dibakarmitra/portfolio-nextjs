'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BlurImage({ src, alt, className }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn(
        'duration-700 ease-in-out object-cover',
        isLoading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0',
        className
      )}
      onLoadingComplete={() => setLoading(false)}
      loading="lazy"
      quality={60}
    />
  );
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  blurDataURL?: string;
  category?: string;
}

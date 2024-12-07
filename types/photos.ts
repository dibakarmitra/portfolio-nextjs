export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  category?: string;
}

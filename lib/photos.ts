import { v4 as uuidv4 } from 'uuid';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export function getPhotos(): Photo[] {
  return [
    {
      id: uuidv4(),
      src: '/photos/photo1.jpg',
      alt: 'Urban Architecture',
      category: 'Architecture',
      aspectRatio: "portrait",
    },
    {
      id: uuidv4(),
      src: '/photos/photo2.jpg',
      alt: 'Street Photography',
      category: 'Street',
      aspectRatio: "landscape",
    },
    {
      id: uuidv4(),
      src: '/photos/photo3.jpg',
      alt: 'Nature Landscape',
      category: 'Nature',
      aspectRatio: "square",
    },
    {
      id: uuidv4(),
      src: '/photos/photo4.jpg',
      alt: 'Portrait Photography',
      category: 'Portrait',
      aspectRatio: "portrait",
    },
    {
      id: uuidv4(),
      src: '/photos/photo5.jpg',
      alt: 'Urban Life',
      category: 'Street',
      aspectRatio: "landscape",
    },
    {
      id: uuidv4(),
      src: '/photos/photo6.jpg',
      alt: 'Modern Architecture',
      category: 'Architecture',
      aspectRatio: "square",
    }
  ];
}

export function getPhotosByCategory(category: string): Photo[] {
  return getPhotos().filter(photo => photo.category === category);
}

export function getPhotoById(id: string): Photo | undefined {
  return getPhotos().find(photo => photo.id === id);
}

export function getPhotoByAlt(alt: string): Photo | undefined {
  return getPhotos().find(photo => photo.alt === alt);
}

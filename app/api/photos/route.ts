import { NextRequest, NextResponse } from 'next/server';
import { getPhotos, getPhotosByCategory, getPhotoById, getPhotoByAlt } from '@/lib/photos';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const id = searchParams.get('id');
  const alt = searchParams.get('alt');
  
  // Pagination parameters
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  if (category) {
    const photos = getPhotosByCategory(category);
    const paginatedPhotos = photos.slice((page - 1) * limit, page * limit);
    return NextResponse.json({
      photos: paginatedPhotos,
      total: photos.length,
      page,
      limit,
      totalPages: Math.ceil(photos.length / limit)
    });
  }

  if (id) {
    const photo = getPhotoById(id);
    return photo 
      ? NextResponse.json(photo) 
      : NextResponse.json({ error: 'Photo not found' }, { status: 404 });
  }

  if (alt) {
    const photo = getPhotoByAlt(alt);
    return photo 
      ? NextResponse.json(photo) 
      : NextResponse.json({ error: 'Photo not found' }, { status: 404 });
  }

  const photos = getPhotos();
  const paginatedPhotos = photos.slice((page - 1) * limit, page * limit);
  
  return NextResponse.json({
    photos: paginatedPhotos,
    total: photos.length,
    page,
    limit,
    totalPages: Math.ceil(photos.length / limit)
  });
}

// Placeholder for other methods to maintain API consistency
export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

import { NextRequest, NextResponse } from 'next/server';
import { getPhotos, getPhotosByCategory, getPhotoById, getPhotoByAlt } from '@/lib/photos';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const id = searchParams.get('id');
  const alt = searchParams.get('alt');

  if (category) {
    const photos = getPhotosByCategory(category);
    return NextResponse.json(photos);
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
  return NextResponse.json(photos);
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

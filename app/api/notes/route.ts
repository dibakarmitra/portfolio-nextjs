import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, getPostBySlug, getPostById } from '@/lib/notes';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const id = searchParams.get('id');

  if (id) {
    const note = await getPostById(id);
    return note 
      ? NextResponse.json(note) 
      : NextResponse.json({ error: 'Note not found' }, { status: 404 });
  }

  if (slug) {
    const note = await getPostBySlug(slug);
    return note 
      ? NextResponse.json(note) 
      : NextResponse.json({ error: 'Note not found' }, { status: 404 });
  }

  const notes = await getAllPosts();
  return NextResponse.json(notes);
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

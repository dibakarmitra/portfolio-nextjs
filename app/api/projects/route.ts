import { NextRequest, NextResponse } from 'next/server';
import { getProjects, getProjectById, getFeaturedProjects } from '@/lib/projects';

// Simulated projects database (replace with actual database in production)
const projects = [
  { 
    id: '1', 
    title: 'Portfolio Website', 
    description: 'Personal portfolio built with Next.js', 
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/username/portfolio',
    liveLink: 'https://yourportfolio.com'
  },
  { 
    id: '2', 
    title: 'Task Management App', 
    description: 'Full-stack task management application', 
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/username/task-app',
    liveLink: 'https://taskapp.com'
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const featured = searchParams.get('featured');

  if (id) {
    const project = getProjectById(id);
    return project 
      ? NextResponse.json(project) 
      : NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  if (featured !== null) {
    const projects = getFeaturedProjects();
    return NextResponse.json(projects);
  }

  const projects = getProjects();
  return NextResponse.json(projects);
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

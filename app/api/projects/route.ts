import { NextRequest, NextResponse } from 'next/server';
import { getProjects, getProjectById } from '@/lib/projects';

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
  
  // Pagination parameters
  const page = searchParams.get('page') 
    ? parseInt(searchParams.get('page') as string, 10) 
    : 1;
  const limit = searchParams.get('limit') 
    ? parseInt(searchParams.get('limit') as string, 10) 
    : 10;

  if (id) {
    const project = getProjectById(id);
    return project 
      ? NextResponse.json(project) 
      : NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  // Fetch paginated projects
  const { 
    projects: fetchedProjects, 
    totalProjects, 
    totalPages, 
    currentPage 
  } = getProjects(
    page, 
    limit, 
    featured !== null ? featured === 'true' : undefined
  );
  
  return NextResponse.json({
    projects: fetchedProjects,
    pagination: {
      totalProjects,
      totalPages,
      currentPage,
      pageSize: limit
    }
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

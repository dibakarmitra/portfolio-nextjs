import { v5 as uuidv5 } from 'uuid';
import { Project } from '@/types/project';

export type { Project };

// Namespace for generating consistent UUIDs
const PROJECT_NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';

export function getProjects(page: number = 1, limit: number = 10, featured?: boolean): {
  projects: Project[];
  totalProjects: number;
  totalPages: number;
  currentPage: number;
} {
  const allProjects = [
    {
      id: uuidv5('TalentPlace.ai', PROJECT_NAMESPACE),
      title: "TalentPlace.ai",
      description: "AI-powered resume builder and job portal with advanced candidate matching and skill assessment capabilities.",
      skills: ["ReactJS", "Laravel", "MySQL", "OpenAI", "AI Integration"],
      githubUrl: "https://github.com/dibakarmitra/talentplace",
      demoUrl: "https://talentplace.ai",
      featured: true,
      date: "2023-07-15",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('PRECAMPAIGN', PROJECT_NAMESPACE),
      title: "PRECAMPAIGN",
      description: "Enterprise-level campaign management platform with sophisticated domain management and scalable microservices architecture.",
      skills: ["Laravel", "MongoDB", "React", "Docker", "Microservices"],
      githubUrl: "https://github.com/dibakarmitra/precampaign",
      featured: true,
      date: "2024-01-20",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('Database Optimization Framework', PROJECT_NAMESPACE),
      title: "Database Optimization Framework",
      description: "High-performance database optimization framework with advanced query analysis and automated performance tuning.",
      skills: ["Python", "MySQL", "PostgreSQL", "Redis", "Performance Optimization"],
      githubUrl: "https://github.com/dibakarmitra/db-optimizer",
      date: "2023-09-10",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('Portfolio Website', PROJECT_NAMESPACE),
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js, showcasing professional projects, skills, and experience with modern web technologies.",
      skills: ["Next.js", "TypeScript", "TailwindCSS", "React", "Vercel"],
      githubUrl: "https://github.com/dibakarmitra/portfolio",
      demoUrl: "https://dibakarmitra.com",
      featured: true,
      date: "2024-02-15",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('Jobs.TalentPlace.ai', PROJECT_NAMESPACE),
      title: "Jobs.TalentPlace.ai",
      description: "AI-driven job matching platform with advanced resume parsing and automated skill assessment.",
      skills: ["Django", "ReactJS", "PostgreSQL", "OpenAI", "Machine Learning"],
      githubUrl: "https://github.com/dibakarmitra/jobs-talentplace",
      demoUrl: "https://jobs.talentplace.ai",
      date: "2023-11-05",
      image: "/projects/placeholder.svg"
    }
  ];

  // Sort projects by date in descending order
  const sortedProjects = allProjects.sort((a, b) => {
    // If date is missing, put it at the end
    if (!a.date) return 1;
    if (!b.date) return -1;
    
    // Compare dates in descending order
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Filter featured projects if specified
  const filteredProjects = featured !== undefined 
    ? sortedProjects.filter(project => project.featured === featured)
    : sortedProjects;

  // Calculate pagination
  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / limit);
  
  // Adjust page number if out of bounds
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  
  // Slice projects based on pagination
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  return {
    projects: paginatedProjects,
    totalProjects,
    totalPages,
    currentPage
  };
}

export function getProjectById(id: string): Project | undefined {
  const { projects } = getProjects();
  return projects.find(project => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  const { projects } = getProjects(1, 10, true);
  return projects;
}
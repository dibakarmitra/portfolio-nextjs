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
      id: uuidv5('www.TalentPlace.ai', PROJECT_NAMESPACE),
      title: "www.TalentPlace.ai",
      description: "Resume Builder, 2022 - Facilitates professional resume creation with step-by-step guidance, skill assessment, and mobile-friendly design, ideal for job seekers.",
      skills: ["ReactJS", "Laravel", "Zoho Subscriptions", "MySQL", "OpenAi"],
      githubUrl: "https://github.com/dibakarmitra/talentplace",
      demoUrl: "https://www.talentplace.ai",
      featured: true,
      date: "2022-01-01",
      image: "/projects/talentplace.webp"
    },
    {
      id: uuidv5('jobs.TalentPlace.ai', PROJECT_NAMESPACE),
      title: "jobs.TalentPlace.ai",
      description: "Job Portal for Recruiters, 2023 - A job portal for recruiters to streamline hiring with advanced tools for job postings, candidate searches, and application tracking. It features resume parsing, job matching, and analytics, ensuring an efficient recruiting experience.",
      skills: ["ReactJS", "PostgreSQL", "Python", "Django", "OpenAi"],
      githubUrl: "https://github.com/dibakarmitra/jobs-talentplace",
      demoUrl: "https://jobs.talentplace.ai",
      date: "2023-01-01",
      image: "/projects/job_talentplace.webp"
    },
    {
      id: uuidv5('www.TheYouthSummit.live', PROJECT_NAMESPACE),
      title: "www.TheYouthSummit.live",
      description: "Conference Website, 2024 - Developed an exclusive event website using WordPress and Elementor to promote The Youth Summit, bringing together young professionals, students, entrepreneurs, industry leaders, and decision-makers.",
      skills: ["WordPress", "Elementor", "HTML", "CSS"],
      demoUrl: "https://www.youthsummit.live",
      date: "2024-01-01",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('www.EliteShoe.com', PROJECT_NAMESPACE),
      title: "www.EliteShoe.com",
      description: "E-Commerce Platform, 2020 - E-commerce platform for Elite Products with category management, product listings, offers, product zoom, and advanced search.",
      skills: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"],
      demoUrl: "https://www.eliteshoe.com",
      date: "2020-01-01",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('PRECAMPAIGN', PROJECT_NAMESPACE),
      title: "PRECAMPAIGN",
      description: "Campaign App Platform, 2024 - Campaign app platform with modular architecture and domains.",
      skills: ["Laravel", "MongoDB"],
      featured: true,
      date: "2024-01-01",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('RYW', PROJECT_NAMESPACE),
      title: "RYW",
      description: "E-Commerce Platform, 2022 - E-commerce platform for renting and purchasing wearables.",
      skills: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"],
      date: "2022-01-01",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('www.Taxolowgy.com', PROJECT_NAMESPACE),
      title: "www.Taxolowgy.com",
      description: "Business & Job Website, 2021 - Business website with features for in-line-editing business portfolio and blogging. It includes functionalities for mail-inbox and reply, direct posts to social media platforms like Facebook and Twitter, category and sub-category management, brand or manufacturer management, menu management, and advanced search filters (attribute searching). The site is fully responsive, catering to both mobile and desktop users.",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "Ajax", "MySQL", "WordPress", "Laravel"],
      demoUrl: "https://www.taxolowgy.com",
      date: "2021-01-01",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('Prosenjit-Blog', PROJECT_NAMESPACE),
      title: "Prosenjit-Blog",
      description: "Personal Blog & Portfolio Site, 2020 - Personal blog site with in-line editing, gallery view, album creation, social media integration, category management, and advanced search.",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "Ajax", "MySQL", "WordPress", "Laravel"],
      date: "2020-01-01",
      image: "/projects/placeholder.svg"
    },
    {
      id: uuidv5('https://dibakarmitra.com', PROJECT_NAMESPACE),
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js, showcasing professional projects, skills, and experience with modern web technologies.",
      skills: ["Next.js", "TypeScript", "TailwindCSS", "React", "Vercel"],
      githubUrl: "https://github.com/dibakarmitra/portfolio-nextjs",
      demoUrl: "https://dibakarmitra.com",
      featured: true,
      date: "2024-02-15",
      image: "/projects/portfolio_nextjs.webp"
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
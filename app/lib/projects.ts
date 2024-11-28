export interface Project {
  title: string;
  description: string;
  skills: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  date?: string;
}

export function getProjects(): Project[] {
  const projects = [
    {
      title: "TalentPlace.ai",
      description: "AI-powered resume builder and job portal with advanced candidate matching and skill assessment capabilities.",
      skills: ["ReactJS", "Laravel", "MySQL", "OpenAI", "AI Integration"],
      githubUrl: "https://github.com/dibakarmitra/talentplace",
      demoUrl: "https://talentplace.ai",
      featured: true,
      date: "2023-07-15"
    },
    {
      title: "PRECAMPAIGN",
      description: "Enterprise-level campaign management platform with sophisticated domain management and scalable microservices architecture.",
      skills: ["Laravel", "MongoDB", "React", "Docker", "Microservices"],
      githubUrl: "https://github.com/dibakarmitra/precampaign",
      featured: true,
      date: "2024-01-20"
    },
    {
      title: "Database Optimization Framework",
      description: "Performance enhancement toolkit with advanced query optimization, caching strategies, and database monitoring tools.",
      skills: ["Python", "MySQL", "PostgreSQL", "Redis", "Performance Optimization"],
      githubUrl: "https://github.com/dibakarmitra/db-optimizer",
      date: "2023-09-10"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js, showcasing professional projects, skills, and experience with modern web technologies.",
      skills: ["Next.js", "TypeScript", "TailwindCSS", "React", "Vercel"],
      githubUrl: "https://github.com/dibakarmitra/portfolio",
      demoUrl: "https://dibakarmitra.com",
      featured: true,
      date: "2024-02-15"
    },
    {
      title: "Jobs.TalentPlace.ai",
      description: "Advanced recruitment platform with AI-powered candidate matching, job tracking, and comprehensive search capabilities.",
      skills: ["Django", "ReactJS", "PostgreSQL", "OpenAI", "Machine Learning"],
      githubUrl: "https://github.com/dibakarmitra/jobs-talentplace",
      demoUrl: "https://jobs.talentplace.ai",
      date: "2023-11-05"
    }
  ];

  // Sort projects by date in descending order
  return projects.sort((a, b) => {
    // If date is missing, put it at the end
    if (!a.date) return 1;
    if (!b.date) return -1;
    
    // Compare dates in descending order
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
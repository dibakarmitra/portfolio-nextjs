export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  date: string;
  image: string;
  sourceUrl?: string;
}

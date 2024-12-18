export interface ResumeSkills {
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
  practices: string[];
}

export interface ResumeExperience {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface ResumeSocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface ResumeEducation {
  degree: string;
  school: string;
  period: string;
  location: string;
  achievements?: string[];
}

export interface ResumeCertification {
  name: string;
  issuer: string;
  date?: string;
  description?: string;
}

export interface ResumeLanguage {
  name: string;
  level: string;
}

export interface ResumeProject {
  title: string;
  description: string;
  technologies: string[];
  url?: string | null;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  about: string;
  summary: string;
  socialLinks: ResumeSocialLinks;
  skills: ResumeSkills;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];
  languages: ResumeLanguage[];
  projects: ResumeProject[];
  hobbies: string[];
}

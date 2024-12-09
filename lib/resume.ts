import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  name: "Dibakar Mitra",
  title: "Software Developer",
  email: "dibakarmitra10@gmail.com",
  location: "Kolkata, India",
  about: "Experienced Software Developer with expertise in building scalable web applications and microservices. Passionate about clean code, performance optimization, and modern development practices.",
  
  socialLinks: {
    github: "https://github.com/dibakarmitra",
    linkedin: "https://linkedin.com/in/dibakarmitra",
    twitter: "https://twitter.com/dibakarmitra",
  },

  skills: {
    // languages: ["JavaScript", "TypeScript", "Python", "PHP", "SQL"],
    frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Material-UI"],
    backend: ["Node.js", "Laravel", "Django", "Express", "FastAPI"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    tools: ["Docker", "Git", "AWS", "Linux", "Nginx"],
    practices: ["CI/CD", "Agile", "TDD", "Microservices", "REST APIs"]
  },

  experience: [
    {
      company: "TalentPlace.ai",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      location: "Remote",
      achievements: [
        "Led development of AI-powered resume builder and job matching platform",
        "Implemented microservices architecture reducing system latency by 40%",
        "Integrated OpenAI APIs for advanced candidate matching and skill assessment",
        "Managed team of 5 developers and improved deployment efficiency by 60%"
      ]
    },
    {
      company: "PRECAMPAIGN",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      location: "Remote",
      achievements: [
        "Developed enterprise-level campaign management platform",
        "Implemented scalable domain management system",
        "Optimized database queries reducing response time by 50%",
        "Built real-time analytics dashboard using React and WebSocket"
      ]
    },
    {
      company: "Freelance",
      position: "Web Developer",
      period: "2018 - 2020",
      location: "Remote",
      achievements: [
        "Developed custom web applications for various clients",
        "Created e-commerce solutions using Laravel and Vue.js",
        "Implemented payment gateway integrations and security features",
        "Provided technical consultation and maintenance support"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "West Bengal University of Technology",
      period: "2014 - 2018",
      location: "Kolkata, India",
      achievements: [
        "First Class with Distinction",
        "Technical Lead of College Programming Club",
        "Won multiple coding competitions"
      ]
    }
  ],

  certifications: [
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022"
    }
  ],

  languages: [
    {
      name: "English",
      level: "Professional"
    },
    {
      name: "Hindi",
      level: "Native"
    },
    {
      name: "Bengali",
      level: "Native"
    }
  ]
};

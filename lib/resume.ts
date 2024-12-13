import { ResumeData } from '@/types/resume';

const calculateYearsOfExperience = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export const resumeData: ResumeData = {
  name: "Dibakar Mitra",
  title: "Software Developer",
  email: "dibakarmitra10@gmail.com",
  phone: "+91 7278589051",
  location: "Kolkata, India",
  about: "Experienced Software Developer with expertise in building scalable web applications and microservices. Passionate about clean code, performance optimization, and modern development practices.",
  summary: `Skilled Software Developer with over ${calculateYearsOfExperience()} years of experience in building scalable web applications and microservices, specializing in JavaScript, TypeScript, and PHP. Proficient in developing robust APIs and integrating with various databases. Adept at collaborating with frontend developers to create seamless user experiences and maintaining high-performance web applications. Experienced in React, Next.js, Vue.js, and other modern web technologies. Known for effective team collaboration, problem-solving, and delivering scalable solutions.`,
  
  socialLinks: {
    github: "https://github.com/dibakarmitra",
    linkedin: "https://linkedin.com/in/dibakarmitra",
    twitter: "https://x.com/_mitradibakar",
  },

  skills: {
    // languages: ["JavaScript", "TypeScript", "Python", "PHP", "SQL"],
    frontend: ["React", "Next.js", "Bootstrap CSS", "Tailwind CSS",],
    backend: ["Laravel", "Django",],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    tools: ["VS Code", "DBeaver", "Postman", "Chrome", "Git", "Linux",],
    practices: ["CI/CD", "Microservices", "REST APIs"]
  },

  education: [
    {
      degree: "Diploma in Computer Science of Technology",
      school: "BPC Institute of Technology, Krishnagar",
      period: "2015",
      location: "Krishnagar, West Bengal",
      achievements: [
        "Specialized in Computer Science and Technology"
      ]
    },
    {
      degree: "Higher Secondary",
      school: "Naihati Narendra Vaidyanathan",
      period: "2012",
      location: "Naihati, West Bengal",
      achievements: []
    },
    {
      degree: "Secondary / Madhyamik",
      school: "Naihati Narendra Vaidyanathan",
      period: "2010",
      location: "Naihati, West Bengal",
      achievements: []
    }
  ],

  experience: [
    {
      company: "Taxolawgy Inc.",
      position: "Web Developer",
      period: "November 2021 - Present",
      location: "Bangalore",
      achievements: [
        "Developed and maintained various web applications using PHP, Laravel, Django, ReactJS, and WordPress",
        "Collaborated with cross-functional teams to integrate user-facing elements with server-side logic",
        "Ensured scalability, performance, and responsiveness of web applications",
        "Collaborated closely with team members to understand project requirements and deliver tailored solutions within specified timelines"
      ]
    },
    {
      company: "Taxolawgy Inc.",
      position: "Freelance Web Developer",
      period: "June 2021 - November 2021",
      location: "Bangalore",
      achievements: [
        "Led the development of Laravel-based applications, catering to the company's specific business requirements",
        "Implemented responsive design principles to ensure compatibility across mobile and desktop platforms",
        "Provided ongoing maintenance and support for existing web applications"
      ]
    },
    {
      company: "builtyoursite.com",
      position: "Freelance Web Developer",
      period: "Prior to 2021",
      location: "Kolkata",
      achievements: [
        "Spearheaded the development of multiple web projects, including personal blogs, portfolio websites, and e-commerce platforms",
        "Utilized diverse technologies such as HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, PHP, MySQL, Laravel, ReactJS, and MongoDB",
        "Collaborated closely with clients to understand their needs and deliver tailored solutions within specified timelines"
      ]
    }
  ],

  certifications: [
    {
      name: "Diploma in Computer Science of Technology",
      issuer: "BPC Institute of Technology, Krishnagar",
      date: "2015"
    }
  ],

  languages: [
    {
      name: "English",
      level: "Advanced"
    },
    {
      name: "Hindi",
      level: "Intermediate"
    },
    {
      name: "Bengali",
      level: "Native"
    }
  ]
};

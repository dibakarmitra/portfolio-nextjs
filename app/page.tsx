'use client';

import { metaData, socialLinks } from "config/metadata";
import SkillCard from "@/components/skill-card";
import ProjectCard from "@/components/project-card";
import ExperienceCard from "@/components/experience-card";
import BlogPost from "@/components/blog-post";
import ContactForm from "@/components/contact-form";
import { useRef } from 'react';

export default function Page() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  return (
    <div className="flex flex-col space-y-24">
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="">SOFTWARE </span>
              <span className="text-orange-500">DEVELOPER </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              {metaData.description}
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-full text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                View GitHub
              </a>
              <button 
                onClick={scrollToContactForm}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-500 text-orange-500 text-base font-semibold rounded-full hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src="/profile.webp" 
              alt={metaData.name} 
              className="relative rounded-full object-cover w-full h-full shadow-2xl ring-4 ring-orange-500/20"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metaData.skills.map((skill, index) => (
          <div 
            key={index} 
            className="py-4 bg-gray-50/50 dark:bg-gray-900/10 rounded-xl dark:hover:bg-gray-900/20 transition-colors duration-300"
          >
            <SkillCard 
              title={skill.title}
              subtitle={skill.subtitle}
              color={skill.color}
              textColor={skill.textColor}
            />
          </div>
        ))}
      </section>

      {/* About/Stats Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/90 to-orange-100/50 dark:from-gray-900/30 dark:to-orange-900/10 -skew-y-3 transform"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="p-6 bg-white/50 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-4xl font-bold text-orange-500">{metaData.stats.yearsOfExperience}+</span>
              <h3 className="text-xl font-semibold">Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">Building digital solutions</p>
            </div>
          </div>
          
          <div className="p-6 bg-white/50 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-4xl font-bold text-orange-500">{metaData.stats.projectsCompleted}+</span>
              <h3 className="text-xl font-semibold">Projects Completed</h3>
              <p className="text-gray-600 dark:text-gray-400">From concept to deployment</p>
            </div>
          </div>
          
          <div className="p-6 bg-white/50 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-4xl font-bold text-orange-500">{metaData.stats.clientSatisfaction}%</span>
              <h3 className="text-xl font-semibold">Client Satisfaction</h3>
              <p className="text-gray-600 dark:text-gray-400">Delivering excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          {metaData.stats.yearsOfExperience} YEARS OF <span className="text-orange-500">EXPERIENCE</span>
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {metaData.companies.map((company, index) => (
            <ExperienceCard 
              key={index}
              company={company.name}
              role={company.role}
              period={company.period}
              description={company.description}
              technologies={company.technologies}
            />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          FEATURED <span className="text-orange-500">PROJECTS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metaData.projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              color={index % 2 === 0 ? "bg-orange-500" : "bg-lime-400"}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          TOOLS & <span className="text-orange-500">TECHNOLOGIES</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metaData.tools.map((tool) => (
            <div
              key={tool.name}
              className={`group relative p-4 rounded-xl ${tool.color} backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-2xl mb-1">{tool.icon}</span>
                <span className={`text-sm font-medium ${tool.textColor} group-hover:scale-105 transition-transform duration-300`}>
                  {tool.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
    </div>
  );
}
import { metaData, socialLinks } from "config/metadata";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import BlogPost from "./components/BlogPost";
import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <div className="flex flex-col space-y-24">
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {metaData.jobTitle.split(' ').map((word, index) => (
                <span key={index} className={index === 0 ? '' : 'text-orange-500'}>
                  {word.toUpperCase()}{' '}
                </span>
              ))}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              {metaData.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
              >
                View GitHub
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="/profile.jpg"
              alt={metaData.name}
              className="relative rounded-full object-cover w-full h-full shadow-2xl ring-4 ring-orange-500/20"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {metaData.skills.map((skill, index) => (
          <SkillCard 
            key={index}
            title={skill.title}
            subtitle={skill.subtitle}
            color={skill.color}
          />
        ))}
      </section>

      {/* Insights Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-orange-50 dark:bg-orange-950/10 -skew-y-3 transform"></div>
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

      {/* Recent Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          RECENT <span className="text-orange-500">PROJECTS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metaData.projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project}
              description="Web Development"
              color={index % 2 === 0 ? "bg-orange-500" : "bg-lime-400"}
            />
          ))}
          <ProjectCard 
            title="Portfolio"
            description="Personal Website"
            color="bg-purple-500"
          />
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          {metaData.stats.yearsOfExperience} YEARS OF <span className="text-orange-500">EXPERIENCE</span>
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <ExperienceCard 
            company={metaData.currentCompany}
            role={metaData.jobTitle}
            period="2023 - Present"
            description="Leading development of innovative digital solutions. Specializing in Laravel, Django, and full-stack development with a focus on performance optimization and scalable architecture."
            technologies={metaData.expertise}
          />
          <ExperienceCard 
            company={metaData.previousCompany}
            role="Software Developer"
            period="2021 - 2023"
            description="Developed and maintained multiple high-traffic web applications. Implemented responsive designs and optimized application performance."
            technologies={["Laravel", "React", "MySQL", "API Development"]}
          />
        </div>
      </section>

      {/* Tools Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          DEVELOPMENT <span className="text-orange-500">TOOLS</span>
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

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
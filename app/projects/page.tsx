// /app/projects/notes-page.tsx
import { getProjects } from "@/lib/projects";
import type { Project } from "@/types/project"; 
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const metadata = {
  title: "Projects",
  description: "Showcase of my latest works and side projects",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

export default function ProjectsPage() {
  const { projects } = getProjects();
  
  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">FEATURED PROJECTS</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A curated showcase of my projects, ranging from web applications to design systems and open-source contributions.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project: Project, index: number) => (
          <div 
            key={project.id}
            className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:scale-[1.01] transition-all"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Project Info */}
              <div className="flex-grow space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  {project.date && (
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {formatDate(project.date)}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

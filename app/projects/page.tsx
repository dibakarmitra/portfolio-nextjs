// /app/projects/page.tsx
import { getProjects } from "app/lib/projects";
import type { Project } from "app/lib/projects"; // This import should work correctly now
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
  const projects = getProjects();
  
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
            key={index}
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

                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>View Code</span>
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Preview */}
              <div className="lg:w-1/2 aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">
                    {project.title.split('.')[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a 
          href="https://github.com/dibakarmitra"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
        >
          <FaGithub size={24} />
          <span>View More Projects on GitHub</span>
        </a>
      </div>
    </div>
  );
}

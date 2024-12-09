'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaThLarge, FaList } from "react-icons/fa";
import type { Project } from "@/lib/projects";
import { formatDate } from "@/lib/formatDate";

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end gap-2 mb-8">
        <button
          onClick={() => setIsGridView(true)}
          className={`p-2 rounded-lg transition-colors ${
            isGridView 
              ? 'bg-orange-500 text-white' 
              : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500'
          }`}
        >
          <FaThLarge size={20} />
        </button>
        <button
          onClick={() => setIsGridView(false)}
          className={`p-2 rounded-lg transition-colors ${
            !isGridView 
              ? 'bg-orange-500 text-white' 
              : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500'
          }`}
        >
          <FaList size={20} />
        </button>
      </div>

      {isGridView ? (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-10"></div>
                <img
                  src={project.image || "/projects/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>

                {project.date && (
                  <div className="text-sm text-orange-500 dark:text-orange-400 font-medium">
                    {formatDate(project.date)}
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="inline-flex items-center rounded-full bg-orange-50 dark:bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div className="space-y-8">
          {projects.map((project: Project, index: number) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className="relative w-full md:w-72 h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-10"></div>
                  <img
                    src={project.image || "/projects/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Project Info */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors mb-2">
                        {project.title}
                      </h3>

                      {project.date && (
                        <div className="text-sm text-orange-500 dark:text-orange-400 font-medium mb-3">
                          {formatDate(project.date)}
                        </div>
                      )}

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="inline-flex items-center rounded-full bg-orange-50 dark:bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                        >
                          <FaGithub size={20} />
                        </a>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                          >
                            <FaExternalLinkAlt size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/types/project";
import ProjectListSkeleton from './skeletons/project-list-skeleton';
import Image from 'next/image';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

interface ProjectListProps {
  viewMode?: 'grid' | 'list';
}

export default function ProjectList({ viewMode = 'grid' }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/projects?page=${page}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        setProjects(data.projects);
        setTotalPages(data.pagination.totalPages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, [page]);

  if (isLoading) {
    return <ProjectListSkeleton />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        {error}
      </div>
    );
  }

  const ProjectContent = viewMode === 'grid' ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project: Project) => (
        <div 
          key={project.id}
          className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform"
            />
          </div>

          {/* Project Info */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
              {project.date && (
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(project.date)}
                </span>
              )}
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
              {project.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.slice(0, 3).map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
              {project.skills.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{project.skills.length - 3} more
                </span>
              )}
            </div>

            {/* Project Links */}
            <div className="flex space-x-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="space-y-8">
      {projects.map((project: Project) => (
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
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span className="text-sm">GitHub</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {ProjectContent}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={() => setPage(prev => Math.max(1, prev - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {page} of {totalPages}
          </span>
          <button 
            onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

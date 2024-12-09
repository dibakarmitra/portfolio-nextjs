'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/types/project";
import ProjectListSkeleton from './skeletons/project-list-skeleton';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

export default function ProjectList() {
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

  return (
    <div>
      <div className="grid grid-cols-1 gap-8">
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

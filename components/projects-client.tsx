'use client';

import { useState } from 'react';
import { FaThLarge, FaList } from "react-icons/fa";
import ProjectList from '@/components/project-list';

export default function ProjectsClient() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">FEATURED PROJECTS</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
          A curated showcase of my projects, ranging from web applications to design systems and open-source contributions.
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={toggleViewMode} 
          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors"
          aria-label={`Switch to ${viewMode === 'grid' ? 'list' : 'grid'} view`}
        >
          {viewMode === 'grid' ? (
            <FaList className="text-gray-600 dark:text-gray-400" />
          ) : (
            <FaThLarge className="text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>

      {/* Project Grid/List */}
      <ProjectList viewMode={viewMode} />
    </div>
  );
}
// /app/projects/page.tsx
import { Suspense } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectList from '@/components/project-list';
import ProjectListSkeleton from '@/components/skeletons/project-list-skeleton';

export const metadata = {
  title: "Projects",
  description: "Showcase of my latest works and side projects",
};

export default function ProjectsPage() {
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
      <Suspense fallback={<ProjectListSkeleton />}>
        <ProjectList />
      </Suspense>
    </div>
  );
}

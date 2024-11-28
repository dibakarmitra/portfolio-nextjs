// /app/projects/page.tsx
import { getProjects } from "app/lib/projects";
import ProjectList from "../components/project-list";

export const metadata = {
  title: "Projects",
  description: "Showcase of my latest works and side projects",
};

export default function ProjectsPage() {
  const projects = getProjects();
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Technical Notes
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Exploring software development, technology insights, and personal learnings.
        </p>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
}
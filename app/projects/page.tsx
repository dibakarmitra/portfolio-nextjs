import { Metadata } from 'next';
import ProjectsClient from '@/components/projects-client';

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of my latest works and side projects",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
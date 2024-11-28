import Link from "next/link";
import type { Project } from "app/lib/projects";
import styles from "../styles/animations.module.css";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="mx-auto px-4">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Showcase of my latest works and side projects
        </p>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`py-6 ${styles.fadeInUp} ${styles[`delay${i + 1}`]}`}
          >
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    {project.demoUrl ? (
                      <Link
                        href={project.demoUrl}
                        className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </Link>
                    ) : (
                      <span className="text-gray-900 dark:text-gray-100">
                        {project.title}
                      </span>
                    )}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {project.date && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(project.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </span>
                    )}
                    {project.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  {project.description}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub →
                    </Link>
                  )}
                  {project.sourceUrl && (
                    <Link
                      href={project.sourceUrl}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source →
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
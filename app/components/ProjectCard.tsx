interface ProjectCardProps {
  title: string;
  description: string;
  color: string;
}

export default function ProjectCard({ title, description, color }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className={`${color} aspect-video rounded-xl mb-4 group-hover:scale-[1.02] transition-transform`} />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

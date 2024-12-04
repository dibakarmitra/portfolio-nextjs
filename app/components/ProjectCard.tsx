import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  color: string;
  image?: string;
  url?: string;
}

export default function ProjectCard({ title, description, color, image, url }: ProjectCardProps) {
  const Card = () => (
    <div className="group hover:scale-[1.02] focus:scale-[1.02] transition-all duration-300 cursor-pointer">
      <div className={`${color} aspect-video rounded-xl mb-4 relative overflow-hidden`}>
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
          />
        )}
      </div>
      <h3 className="font-bold text-lg group-hover:text-orange-500 group-focus:text-orange-500 transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );

  if (url) {
    return (
      <Link href={url} target="_blank" className="block focus:outline-none">
        <Card />
      </Link>
    );
  }

  return <Card />;
}

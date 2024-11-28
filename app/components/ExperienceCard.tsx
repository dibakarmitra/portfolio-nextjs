interface ExperienceCardProps {
  company: string;
  period: string;
  description: string;
}

export default function ExperienceCard({ company, period, description }: ExperienceCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 group cursor-pointer">
      <div className="md:w-48 flex-shrink-0">
        <p className="text-gray-600 dark:text-gray-400">{period}</p>
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg group-hover:text-orange-500 transition-colors">{company}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
}

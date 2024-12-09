interface ExperienceCardProps {
  company: string;
  period: string;
  description: string;
  role?: string;
  technologies?: string[];
}

export default function ExperienceCard({ 
  company, 
  period, 
  description, 
  role,
  technologies 
}: ExperienceCardProps) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 hover:bg-orange-50 dark:hover:bg-orange-950/10 transition-all duration-300 group">
      <div className="absolute top-0 left-0 w-2 h-full bg-orange-500 rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
          <div>
            <h3 className="font-bold text-lg md:text-xl group-hover:text-orange-500 transition-colors">
              {company}
            </h3>
            {role && (
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
                {role}
              </p>
            )}
          </div>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
            {period}
          </p>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/20 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

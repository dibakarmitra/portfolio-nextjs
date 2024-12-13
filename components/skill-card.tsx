interface SkillCardProps {
  title: string;
  subtitle: string;
  color: string;
  textColor?: string;
}

export default function SkillCard({ title, subtitle, color, textColor = "text-black dark:text-white" }: SkillCardProps) {
  return (
    <div className={`
      ${color} 
      p-6 
      rounded-2xl 
      ${textColor} 
      hover:scale-[1.02] 
      transition-all 
      duration-300 
      ease-in-out
      shadow-lg 
      hover:shadow-xl 
      transform 
      hover:-translate-y-2 
      border-l-4 
      border-opacity-70
      relative 
      overflow-hidden
      bg-opacity-90 
      dark:bg-opacity-80
      backdrop-blur-sm
    `}>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2 tracking-tight dark:text-white">{title}</h3>
        <p className="opacity-80 font-medium text-sm tracking-wide uppercase dark:text-gray-300">{subtitle}</p>
      </div>
      <div 
        className={`
          absolute 
          -top-4 
          -right-4 
          w-16 
          h-16 
          ${color} 
          opacity-10 
          dark:opacity-20 
          rounded-full 
          transform 
          rotate-45
        `}
      ></div>
    </div>
  );
}

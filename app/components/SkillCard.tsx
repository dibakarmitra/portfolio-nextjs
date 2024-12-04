interface SkillCardProps {
  title: string;
  subtitle: string;
  color: string;
  textColor?: string;
}

export default function SkillCard({ title, subtitle, color, textColor = "text-black dark:text-white" }: SkillCardProps) {
  return (
    <div className={`${color} p-6 rounded-xl ${textColor} hover:scale-[1.02] transition-transform cursor-pointer`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="opacity-80">{subtitle}</p>
    </div>
  );
}

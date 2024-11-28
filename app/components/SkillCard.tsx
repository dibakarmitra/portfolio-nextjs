interface SkillCardProps {
  title: string;
  subtitle: string;
  color: string;
}

export default function SkillCard({ title, subtitle, color }: SkillCardProps) {
  return (
    <div className={`${color} p-6 rounded-xl text-black hover:scale-[1.02] transition-transform cursor-pointer`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="opacity-80">{subtitle}</p>
    </div>
  );
}

interface BlogPostProps {
  title: string;
  date: string;
}

export default function BlogPost({ title, date }: BlogPostProps) {
  return (
    <div className="group cursor-pointer">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg group-hover:text-orange-500 transition-colors">{title}</h3>
        <span className="text-gray-600 dark:text-gray-400">{date}</span>
      </div>
      <div className="h-px bg-gray-200 dark:bg-gray-700 mt-4" />
    </div>
  );
}

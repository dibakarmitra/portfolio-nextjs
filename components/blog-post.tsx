import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface BlogPostProps {
  title: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date }) => {
  return (
    <Link href="/blog" className="block group">
      <article className="p-4 md:p-5 lg:p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 hover:bg-orange-50 dark:hover:bg-orange-950/10 transition-all duration-300">
        <div className="flex flex-col space-y-3 md:space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
              {title}
            </h3>
            <FaArrowRight className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-gray-400 group-hover:text-orange-500 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          <time className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            {date}
          </time>
        </div>
      </article>
    </Link>
  );
};

export default BlogPost;

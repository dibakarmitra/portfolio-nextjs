export default function ProjectListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {[1, 2, 3].map((item) => (
        <div 
          key={item}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 animate-pulse"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow space-y-4">
              <div className="flex items-start justify-between">
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
              </div>

              <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>

              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((skill) => (
                  <div 
                    key={skill} 
                    className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-20"
                  ></div>
                ))}
              </div>

              <div className="flex space-x-4">
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

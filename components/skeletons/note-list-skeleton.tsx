export default function NoteListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div 
          key={item}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 animate-pulse h-full"
        >
          <div className="flex flex-col h-full">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-3"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-3"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
            <div className="mt-auto flex flex-wrap gap-2">
              {[1, 2, 3].map((tag) => (
                <div 
                  key={tag} 
                  className="h-4 bg-gray-300 dark:bg-gray-600 rounded-full w-16"
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

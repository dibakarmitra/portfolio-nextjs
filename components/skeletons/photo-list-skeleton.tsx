export default function PhotoListSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div 
          key={item}
          className="bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse h-48"
        />
      ))}
    </div>
  );
}

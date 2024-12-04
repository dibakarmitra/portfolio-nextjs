export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-orange-200 dark:border-orange-900 animate-pulse"></div>
        
        {/* Inner spinning ring */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-orange-500 animate-spin"></div>
        </div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
}

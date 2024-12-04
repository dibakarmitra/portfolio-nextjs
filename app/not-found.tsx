import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">
            4<span className="text-orange-500">0</span>4
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
        >
          <FiArrowLeft className="text-lg" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

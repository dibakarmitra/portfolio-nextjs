"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { FiSun, FiMoon } from 'react-icons/fi';

const storageKey = 'theme-preference';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 p-3 md:p-4 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="w-5 h-5 md:w-6 md:h-6 text-orange-500 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <FiMoon className="w-5 h-5 md:w-6 md:h-6 text-orange-500 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};
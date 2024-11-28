"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

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
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<'light' | 'dark'>('dark');

  const getColorPreference = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      const storedPreference = localStorage.getItem(storageKey);
      if (storedPreference) {
        return storedPreference as 'light' | 'dark';
      }
      return 'dark';
    }
    return 'dark';
  };

  const reflectPreference = (theme: 'light' | 'dark') => {
    document.documentElement.classList.remove('bg-light', 'bg-dark');
    document.documentElement.classList.add(`bg-${theme}`);
    setCurrentTheme(theme);
    setTheme(theme);
  };

  React.useEffect(() => {
    setMounted(true);
    const initTheme = getColorPreference();
    reflectPreference(initTheme);
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      id="theme-toggle"
      aria-label={`${currentTheme} mode`}
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
    >
      {currentTheme === 'dark' ? (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};
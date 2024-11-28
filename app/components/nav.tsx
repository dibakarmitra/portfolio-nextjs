'use client';

import Link from "next/link";
import { metaData } from "config/metadata";
import { memo } from 'react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/notes", name: "Notes" },
  { path: "/photos", name: "Photos" },
  { path: "/resume.pdf", name: "Resume" },
];

const NavLink = memo(({ path, name }: NavItem) => (
  <Link
    href={path}
    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative group py-2 md:py-0"
  >
    {name}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
  </Link>
));
NavLink.displayName = 'NavLink';

export const Navbar = memo(function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between md:justify-start">
        <Link 
          href="/" 
          className="text-md font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group relative"
        >
          {metaData.title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-6 ml-auto items-center">
          {navItems.slice(1).map((item) => (
            <NavLink key={item.path} {...item} />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg mt-2 py-4 px-6 flex flex-col gap-4 md:hidden z-50">
          {navItems.slice(1).map((item) => (
            <NavLink key={item.path} {...item} />
          ))}
        </div>
      )}
    </nav>
  );
});

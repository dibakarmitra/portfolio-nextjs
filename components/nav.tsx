'use client';

import Link from "next/link";
import { metaData } from "@/config/metadata";
import { memo } from 'react';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/notes", name: "Notes" },
  { path: "/photos", name: "Photos" },
  { path: "/resume", name: "Resume" },
];

const NavLink = memo(({ path, name, onLinkClick }: NavItem & { onLinkClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === path || (path !== '/' && pathname?.startsWith(path));
  const isExternal = path.startsWith('http');

  const LinkComponent = isExternal ? 'a' : Link;
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const handleClick = () => {
    onLinkClick?.();
  };

  return (
    <LinkComponent
      href={path}
      onClick={handleClick}
      className={`relative px-2 py-2 text-sm font-medium transition-colors duration-200 group ${
        isActive 
          ? 'text-black dark:text-white' 
          : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
      }`}
      {...externalProps}
    >
      {name}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </LinkComponent>
  );
});
NavLink.displayName = 'NavLink';

export const Navbar = memo(function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            onClick={closeMenu}
            className="text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors group relative flex items-center gap-3"
          >
            <div className="relative">
              <span className="text-xl font-bold tracking-tighter">
                <span className="text-black dark:text-white group-hover:text-orange-500 transition-colors duration-300">d</span>
                <span className="text-orange-500">m</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 transform origin-left group-hover:scale-x-110 transition-transform duration-300"></span>
            </div>
            <span className="hidden relative group-hover:translate-x-1 transition-transform duration-300">
              {metaData.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.slice(1).map((item) => (
              <NavLink key={item.path} {...item} />
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="py-3 space-y-3">
            {navItems.slice(1).map((item) => (
              <div key={item.path} className="px-2">
                <NavLink {...item} onLinkClick={closeMenu} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
});

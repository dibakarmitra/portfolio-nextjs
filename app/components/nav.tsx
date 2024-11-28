import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "config/metadata";
import { memo } from 'react';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { path: "/notes", name: "Notes" },
  { path: "/projects", name: "Projects" },
  { path: "/photos", name: "Photos" },
];

const NavLink = memo(({ path, name }: NavItem) => (
  <Link
    href={path}
    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative group"
  >
    {name}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
  </Link>
));
NavLink.displayName = 'NavLink';

export const Navbar = memo(function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="text-md font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group"
          >
            {metaData.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {navItems.map((item) => (
            <NavLink key={item.path} {...item} />
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
});

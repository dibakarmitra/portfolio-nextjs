"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "config/metadata";

const YEAR = new Date().getFullYear();

// Define types for the props
interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
}

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-all duration-300 transform hover:scale-110"
    >
      <Icon size={20} />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-3.5 transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      {/* <SocialLink href={socialLinks.instagram} icon={FaInstagram} /> */}
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <a 
        href="/api/feed/rss.xml" 
        target="_self"
        className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-all duration-300 transform hover:scale-110"
      >
        <FaRss size={20} />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="relative py-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <a
            className="text-md font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group relative"
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            {metaData.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600 dark:text-gray-400">
            &copy; {YEAR}
          </span>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

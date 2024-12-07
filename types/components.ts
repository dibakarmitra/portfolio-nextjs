import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

export interface BlurImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
  };
}

export interface NavItem {
  name: string;
  href: string;
  icon?: ReactNode;
}

export interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export interface SkillCardProps {
  name: string;
  icon: ReactNode;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface MDXLayoutProps {
  children: ReactNode;
  title: string;
  date?: string;
  tags?: string[];
}

export interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export interface RoundedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
}

export interface CodeProps {
  children: ReactNode;
  className?: string;
}

export interface CalloutProps {
  type?: 'info' | 'warning' | 'error';
  children: ReactNode;
}

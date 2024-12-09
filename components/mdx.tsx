import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { highlight } from "sugar-high";
import "katex/dist/katex.min.css";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, ...props }) => {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

interface RoundedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  src: string;
  width?: number;
  height?: number;
}

const RoundedImage: React.FC<RoundedImageProps> = ({ alt, ...props }) => {
  return <Image alt={alt} className="rounded-lg" {...props} />;
};

interface CodeProps {
  children: string;
  [key: string]: any;
}

const Code: React.FC<CodeProps> = ({ children, ...props }) => {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

const createHeading = (level: number) => {
  const HeadingComponent: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
    const Heading = `h${level}` as keyof JSX.IntrinsicElements;
    return React.createElement(Heading, props, children);
  };
  return HeadingComponent;
};

const components = {
  a: CustomLink,
  img: RoundedImage,
  code: Code,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
};

export default components;

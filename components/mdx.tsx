import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { TweetComponent } from "./tweet";
import { CaptionComponent } from "./caption";
import { YouTubeComponent } from "./youtube";
import { ImageGrid } from "./image-grid";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

// TypeScript type for the CustomLink component's props
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
  if (href.startsWith("#")) {
    return <a {...props} />;
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

interface TableProps {
  data: {
    headers: string[];
    rows: string[][];
  };
}

const Table: React.FC<TableProps> = ({ data }) => {
  const headers = data.headers.map((header, index) => (
    <th key={index} className="text-left px-4 py-2">{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} className="px-4 py-2">{cell}</td>
      ))}
    </tr>
  ));
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-left bg-gray-200">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const Strikethrough: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => <del {...props} />;

interface CalloutProps {
  emoji?: string;
  children: React.ReactNode;
}

const Callout: React.FC<CalloutProps> = ({ emoji, children }) => (
  <div className="px-4 py-3 bg-[#F7F7F7] dark:bg-[#181818] rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
    <div className="flex items-center w-4 mr-4">{emoji}</div>
    <div className="w-full callout leading-relaxed">{children}</div>
  </div>
);

const slugify = (str: string): string => {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

interface HeadingProps {
  children: React.ReactNode;
  id?: string;
}

const createHeading = (level: number) => {
  const Heading: React.FC<HeadingProps> = ({ children }) => {
    const slug = slugify(String(children));
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
        children
      ]
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
};

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  ImageGrid,
  a: CustomLink,
  StaticTweet: TweetComponent,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  code: Code,
  Table,
  del: Strikethrough,
  Callout,
} as const;

interface CustomMDXProps extends Omit<MDXRemoteProps, 'components'> {
  components?: Record<string, React.ComponentType<any>>;
}

export const CustomMDX: React.FC<CustomMDXProps> = (props) => (
  <MDXRemote
    {...props}
    components={Object.assign({}, components, props.components) as any}
    options={{
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    }}
  />
);

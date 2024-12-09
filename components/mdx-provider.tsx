'use client';

import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="my-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside my-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside my-4 space-y-2" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  a: (props: any) => (
    <a
      className="text-blue-600 hover:text-blue-800 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 rounded px-2 py-1 text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 rounded p-4 my-4 overflow-x-auto" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 my-4 italic"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" {...props} />
  ),
};

interface MDXLayoutProps {
  children: ReactNode;
}

export default function MDXLayout({ children }: MDXLayoutProps) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

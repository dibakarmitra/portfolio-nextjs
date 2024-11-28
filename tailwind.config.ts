import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: 'inherit',
                textDecoration: 'none',
              },
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
              backgroundColor: 'rgb(var(--code-bg))',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
              '&::before': {
                content: '""',
              },
              '&::after': {
                content: '""',
              },
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgb(var(--code-bg))',
              color: 'inherit',
              fontSize: '0.875em',
              overflow: 'auto',
              padding: '1rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;

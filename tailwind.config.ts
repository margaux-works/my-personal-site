import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        teal: '#7c5dfa',
        tealLight: '#9277FF',
        gray: '#242424',
        lightGray: '#979797',
        green: '#4EE1A0',
        red: '#FF6F5B',
      },
    },
  },
  plugins: [],
} satisfies Config;

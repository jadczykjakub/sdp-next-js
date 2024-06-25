import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#db842d",
        'secondary': "#363636"
      },
      fontSize: {
        'xsm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'sm': ['0.9375rem', { lineHeight: '1.1875' }], // 15px
        'base': ['1rem', { lineHeight: '1.5' }], // 16px
        'lg': ['1.125rem', { lineHeight: '1.5' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.208' }], // 20px
        '2xl': ['1.875rem', { lineHeight: '1.21875' }], //30px
        '3xl': ['2.5rem', { lineHeight: '1.2' }], //40px
      },
    }
  },
  plugins: [],
};
export default config;

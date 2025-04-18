/** @type {import('tailwindcss').Config} */
// @ts-nocheck
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['var(--font-karla)'],
        barlow: ['var(--font-barlow)'],
      },
    },
  },
  plugins: [],
}
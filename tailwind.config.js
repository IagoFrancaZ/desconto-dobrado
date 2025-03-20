/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        '--primary': '#0070f3',
        '--secondary': '#00a3bf',
        '--accent': '#7928ca',
        '--urgent': '#ff4d4f',
      },
    },
  },
  plugins: [],
} 
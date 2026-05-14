/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C5A059',
          light: '#D4B577',
          dark: '#A8864A',
        },
        obsidian: '#0A0A0A',
        graphite: '#1A1A1A',
        alabaster: '#F5F5F5',
        emerald: {
          muted: '#2D4C3B',
        },
      },
    },
  },
  plugins: [],
}
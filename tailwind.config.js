/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',    // slate-900
          card: '#1e293b',  // slate-800
          border: '#334155' // slate-700
        },
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          hover: '#2563eb',   // blue-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

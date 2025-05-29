/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep blue
        secondary: '#3B82F6', // Lighter blue
        accent: '#E5E7EB', // Light gray for backgrounds
      },
      backgroundImage: {
        'gradient-education': 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)',
      },
    },
  },
  plugins: [],
}
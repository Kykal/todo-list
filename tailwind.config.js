/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'k-black-1': '#06080A',
        'k-black-2': '#0E1012',
        'k-black-3': '#181A1C',
        'k-black-4': '#2C2E30',
        'k-black-5': '#222426',
      },
    },
  },
  plugins: [],
}

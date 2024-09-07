/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'min-content 1fr',
      }
    },
  },
  plugins: [],
}


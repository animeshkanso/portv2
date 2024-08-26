/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        '0.3': '0.075rem', // Add a custom padding value
      },
      width: {
        '0.3': '0.075rem'
      },
      fontFamily: {
        instrument: ['Instrument Serif', 'sans-serif'],
        outfit: ['Outfit Variable', 'sans-serif']
    },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // Existing breakpoints like 'sm', 'md', etc., will be here
      'cu': '1080px', // Custom breakpoint for 'cu'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#121121",
        darkred: "#801D18",
        white: "#FAFAFA",
        dark: "#0A0A0A",
        gray: "#262626",
        buttongray: "#32363A",
      },
    },
  },
  plugins: [],
}


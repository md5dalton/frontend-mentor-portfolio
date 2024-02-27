/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: ["18px", {
        lineHeight: "28px",
        fontWeight: "600"
      }],
      md: ["24px", {
        lineHeight: "32px",
        fontWeight: "700"
      }],
      lg: ["48px", {
        lineHeight: "56px",
        letterSpacing: "-1.5px",
        fontWeight: "700"
      }],
      xl: ["88px", {
        lineHeight: "88px",
        letterSpacing: "-2.5px",
        fontWeight: "700"
      }],
    },
    extend: {
      colors: {
        "very-dark-grey": "#151515",
        "light-green": "#4ee1a0",
        "dark-grey": "#242424",
        "light-grey": "#d9d9d9",
      },
    },
  },
  plugins: [],
};

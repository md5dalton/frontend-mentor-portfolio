/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontSize: {
    //   xxs: ["12px", {
    //     // lineHeight: "16px",
    //     fontWeight: "600"
    //   }],
    //   base: ["18px", {
    //     lineHeight: "28px",
    //     fontWeight: "600"
    //   }],
    //   md: ["24px", {
    //     lineHeight: "32px",
    //     fontWeight: "700"
    //   }],
    //   lg: ["48px", {
    //     lineHeight: "56px",
    //     letterSpacing: "-1.5px",
    //     fontWeight: "700"
    //   }],
    //   xl: ["88px", {
    //     lineHeight: "88px",
    //     letterSpacing: "-2.5px",
    //     fontWeight: "700"
    //   }
    // ],
    // },
    extend: {
      colors: {
        "very-dark-grey": "#151515",
        "light-green": "#4ee1a0",
        "dark-grey": "#242424",
        "light-grey": "#d9d9d9",
        "light-red": "#FF6F5B",
      },
      
      fontSize: {
        "body": ["var(--body-fs)", {
          fontWeight: "600",
          lineHeight: "var(--body-lh)",
        }],
        "h-m": ["24px", {
          fontWeight: "700",
          lineHeight: "32px",
        }],
        "h-l": ["var(--h-l-fs)", {
          fontWeight: "700",
          lineHeight: "var(--h-l-lh)",
          letterSpacing: "var(--h-l-ls)"
        }],
        "h-xl": ["var(--h-xl-fs)", {
          fontWeight: "700",
          lineHeight: "var(--h-xl-lh)",
          letterSpacing: "var(--h-xl-ls)"
        }],
    },
  },
  plugins: [],
}};

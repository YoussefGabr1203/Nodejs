import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5d7fb1",
          dark: "#4a658d",
          light: "#7e9cc9",
        },
        secondary: "#E8475F",
        "medical-blue": "#1A3C6E",
        "accent-teal": "#38b2ac",
        "background-dark": "#15181d",
        "surface-dark": "#1e2329",
        "card-dark": "#21252c",
        "border-dark": "#2e343d",
        "text-secondary": "#a2abb9",
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;

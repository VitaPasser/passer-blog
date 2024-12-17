import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "cod-gray": "#121212",
        "purple-heart": "#6941C6",
        "pale-sky": "#667085",
      },
      backgroundImage: {
        boom: "url('/boom.png')",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      borderColor: {
        "black-34": "rgba(0, 0, 0, 0.34)",
      },
    },
  },
  plugins: [],
} satisfies Config;

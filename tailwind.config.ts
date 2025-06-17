import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",                            // 单字符串写法最安全
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",               // App Router
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        /* 避免 Unknown utility 错误的基础 token */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],    // 若没装可删
};
export default config;

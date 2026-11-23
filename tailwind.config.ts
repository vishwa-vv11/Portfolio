import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
        },
        border: "var(--border)",
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          dim: "var(--text-dim)",
        },
        muted: "var(--text-muted)",
        dim: "var(--text-dim)",
        accent: {
          DEFAULT: "var(--accent)",
          2: "var(--accent-2)",
          alt: "var(--accent-alt)",
        },
        "chip-text": "var(--chip-text)",
        "on-accent": "var(--on-accent)",
      },
    },
  },
  plugins: [],
};
export default config;

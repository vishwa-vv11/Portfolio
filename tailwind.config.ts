import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink: "#090b10", panel: "#11151d", line: "#252c38", accent: "#78a9ff" },
    fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] }
  }},
  plugins: []
};
export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gh: {
          bg: "var(--gh-bg)",
          bg2: "var(--gh-bg-2)",
          surface: "var(--gh-surface)",
          border: "var(--gh-border)",
          fg: "var(--gh-fg)",
          muted: "var(--gh-fg-muted)",
          accent: "var(--gh-accent)",
          success: "var(--gh-success)",
          warning: "var(--gh-warning)",
          danger: "var(--gh-danger)",
          card: "var(--gh-card)",
          card2: "var(--gh-card-2)",
        },
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;

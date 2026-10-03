import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--ink-rgb) / <alpha-value>)",
          light: "rgb(var(--ink-light-rgb) / <alpha-value>)",
          dark: "rgb(var(--ink-dark-rgb) / <alpha-value>)",
        },
        espresso: {
          DEFAULT: "rgb(var(--espresso-rgb) / <alpha-value>)",
          light: "rgb(var(--espresso-light-rgb) / <alpha-value>)",
          dark: "rgb(var(--espresso-dark-rgb) / <alpha-value>)",
        },
        ivory: {
          DEFAULT: "rgb(var(--ivory-rgb) / <alpha-value>)",
          dark: "rgb(var(--ivory-dark-rgb) / <alpha-value>)",
          light: "rgb(var(--ivory-light-rgb) / <alpha-value>)",
        },
        champagne: {
          DEFAULT: "rgb(var(--champagne-rgb) / <alpha-value>)",
          light: "rgb(var(--champagne-rgb) / <alpha-value>)",
          dark: "rgb(var(--champagne-rgb) / <alpha-value>)",
        },
        nude: {
          DEFAULT: "rgb(var(--nude-rgb) / <alpha-value>)",
          light: "rgb(var(--nude-rgb) / <alpha-value>)",
          dark: "rgb(var(--nude-rgb) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--gold-rgb) / <alpha-value>)",
          light: "rgb(var(--gold-light-rgb) / <alpha-value>)",
          dark: "rgb(var(--gold-dark-rgb) / <alpha-value>)",
          subtle: "rgb(var(--gold-rgb) / 0.18)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        arch: "160px 160px 0 0",
        "arch-lg": "240px 240px 0 0",
      },
      letterSpacing: {
        widest: "0.25em",
        editorial: "0.15em",
      },
      animation: {
        "ken-burns": "kenburns 25s ease infinite alternate",
        "fade-in": "fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

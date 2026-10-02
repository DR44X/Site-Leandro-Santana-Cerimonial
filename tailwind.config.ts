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
          DEFAULT: "#0B0908",
          light: "#161311",
          dark: "#050403",
        },
        espresso: {
          DEFAULT: "#2A1D17",
          light: "#3D2B22",
          dark: "#1B120E",
        },
        ivory: {
          DEFAULT: "#F6F0E6",
          dark: "#ECE2D0",
          light: "#FAF7F2",
        },
        champagne: {
          DEFAULT: "#E8D8BC",
          light: "#F0E4CE",
          dark: "#D7C29F",
        },
        nude: {
          DEFAULT: "#D9BFA9",
          light: "#E5D1BF",
          dark: "#C5A58A",
        },
        gold: {
          DEFAULT: "#B8975A",
          light: "#CCA96C",
          dark: "#9E7F43",
          subtle: "rgba(184, 151, 90, 0.18)",
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

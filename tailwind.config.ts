import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // RealNet brand palette: red primary, purple accent, white surfaces
        brand: {
          DEFAULT: "#D50130", // primary — CTAs, links, contact icons
          dark: "#B00127", // hover state for primary
        },
        plum: {
          DEFAULT: "#681D75", // secondary accent — matches the logo "Net"
          dark: "#4E1657",
          tint: "#F4EAF6", // soft background for accent callouts
        },
        whatsapp: {
          // Functional channel color (WhatsApp only), deepened so white text
          // clears WCAG AA (~5.3:1) against the red/purple brand.
          DEFAULT: "#0E7C43",
          dark: "#0A6836",
        },
        ink: "#1E2839", // headings & primary body text
        slate: {
          DEFAULT: "#5A6B77", // secondary text
          2: "#8494A0", // tertiary/muted text
        },
        paper: "#F4F4F6", // page background
        card: "#FFFFFF",
        line: {
          DEFAULT: "#E2E8F0", // borders/dividers
          2: "#D8DEE7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        card: "22px",
        control: "14px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 20px 50px rgba(30,40,57,0.16)",
      },
      maxWidth: {
        card: "440px",
      },
    },
  },
  plugins: [],
};

export default config;

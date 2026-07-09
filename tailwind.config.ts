import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#1B6FB0",
          dark: "#12527F",
          ink: "#0F3F63",
        },
        amber: {
          DEFAULT: "#F4A825",
          dark: "#C97F0A",
          tint: "#FDF1DA",
        },
        whatsapp: "#25A366",
        ink: "#20303B",
        slate: {
          DEFAULT: "#5A6B77",
          2: "#8494A0",
        },
        paper: "#FBF7F0",
        card: "#FFFFFF",
        line: {
          DEFAULT: "#ECE6DB",
          2: "#E0DACE",
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
        card: "0 20px 50px rgba(15,63,99,0.16)",
      },
      maxWidth: {
        card: "440px",
      },
    },
  },
  plugins: [],
};

export default config;

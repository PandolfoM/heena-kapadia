import type { Config } from "tailwindcss";

const config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      primary: "#1F272D",
      secondary: "#0A1F30",
      accent: "#3DA5D9",
      error: "#790505",
    },
    fontSize: {
      xs: "12px",
      sm: "16px",
      md: "18px",
      lg: "28px",
      xl: "38px",
    },
    borderRadius: {
      sm: "10px",
      md: "20px",
      full: "9999px",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        nav: "100px",
        navMobile: "120px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

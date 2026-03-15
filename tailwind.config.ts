import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"],
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      fontSize: {
        "display-2xl": ["3.75rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-xl": ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "headline-xl": ["2.1rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "headline-lg": ["1.7rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "headline-md": ["1.35rem", { lineHeight: "1.35" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
      },
      borderRadius: {
        card: "1.5rem",
      },
      boxShadow: {
        card: "0 30px 80px -50px rgba(2, 6, 23, 0.9)",
      },
      colors: {
        ink: {
          950: "#050607",
          900: "#0b0d10",
          800: "#12151a",
        },
        army: {
          olive: "#6B8E23",
          khaki: "#F0E68C",
          burgundy: "#800020",
          lime: "#32CD32",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

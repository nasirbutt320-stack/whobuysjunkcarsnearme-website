import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1734",
          50: "#eef1f8",
          100: "#d7deee",
          200: "#aebddd",
          300: "#7f97c4",
          400: "#516ea3",
          500: "#334f80",
          600: "#213a63",
          700: "#172a4a",
          800: "#101d35",
          900: "#0b1734",
          950: "#070f22",
        },
        teal: {
          DEFAULT: "#17c3a2",
          50: "#eafdf8",
          100: "#cdf8ec",
          200: "#9ceed9",
          300: "#65dfc4",
          400: "#33caa9",
          500: "#17c3a2",
          600: "#0e9a80",
          700: "#0f7b68",
          800: "#116254",
          900: "#115047",
          950: "#052e29",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 20px 45px -15px rgba(11, 23, 52, 0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

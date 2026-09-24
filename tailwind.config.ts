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
        gold: {
          DEFAULT: "#f59e0b",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px -15px rgba(11, 23, 52, 0.25)",
        "card-hover": "0 24px 55px -12px rgba(11, 23, 52, 0.32)",
        btn: "0 12px 24px -8px rgba(245, 158, 11, 0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

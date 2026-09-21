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
        ink: {
          DEFAULT: "#171613",
          50: "#f4f3f1",
          100: "#e5e3de",
          200: "#c7c3ba",
          300: "#a29c8d",
          400: "#78735f",
          500: "#57523f",
          600: "#423d2d",
          700: "#302c20",
          800: "#201d15",
          900: "#171613",
          950: "#0c0b09",
        },
        hazard: {
          DEFAULT: "#ffc72c",
          50: "#fffbeb",
          100: "#fff3c4",
          200: "#ffe38a",
          300: "#ffd24d",
          400: "#ffc72c",
          500: "#f5b700",
          600: "#d69e00",
          700: "#ad7d00",
          800: "#8a6300",
          900: "#6b4d00",
          950: "#402d00",
        },
        rust: {
          DEFAULT: "#c1440e",
          50: "#fdf1ec",
          100: "#fbdccb",
          200: "#f5b48c",
          300: "#ea8752",
          400: "#d96530",
          500: "#c1440e",
          600: "#9e360a",
          700: "#7c2a08",
          800: "#5c1f07",
          900: "#401505",
          950: "#240b02",
        },
        paper: {
          DEFAULT: "#f6f1e6",
          50: "#fdfcf9",
          100: "#f6f1e6",
          200: "#ece3cd",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: [
          "var(--font-body)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 20px 45px -15px rgba(23, 22, 19, 0.3)",
        sticker: "7px 7px 0 0 #171613",
        "sticker-sm": "4px 4px 0 0 #171613",
        "sticker-hazard": "7px 7px 0 0 #ffc72c",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        stripes:
          "repeating-linear-gradient(135deg, #ffc72c 0, #ffc72c 22px, #171613 22px, #171613 44px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

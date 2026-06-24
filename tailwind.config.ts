import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00C853",
          50: "#e6fbef",
          100: "#bff4d3",
          200: "#80e9a8",
          300: "#40dd7d",
          400: "#00E676",
          500: "#00C853",
          600: "#009624",
          700: "#00701b",
          800: "#004d12",
          900: "#00290a",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00E676 0%, #00C853 45%, #009624 100%)",
        "radial-fade": "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(0, 200, 83, 0.55)",
        "glow-lg": "0 0 80px -10px rgba(0, 230, 118, 0.45)",
        soft: "0 10px 40px -12px rgba(0, 0, 0, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-26px) translateX(12px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(1.8)", opacity: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.45,0,0.2,1) infinite",
        shimmer: "shimmer 2.5s infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

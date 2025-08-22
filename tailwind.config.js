/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",
        secondary: "#991b1b",
        accent: "#fbbf24",
        dark: "#1f2937",
      },
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -12px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(10deg)" },
        },
        glow: {
          from: { textShadow: "2px 2px 4px rgba(0,0,0,0.5)" },
          to: { textShadow: "2px 2px 20px rgba(255, 255, 255, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

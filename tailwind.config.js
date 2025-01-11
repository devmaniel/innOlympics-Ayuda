/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      fontFamily: {
        excon: ["Excon", "inter"],
        ranade: ["Ranade", "inter"],
      },
      backgroundImage: {
        blueNoiseGradient: "url('/images/blue-noise-gradient.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

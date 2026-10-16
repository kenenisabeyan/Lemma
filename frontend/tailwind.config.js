/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        engineering: {
          bg: "#121417",
          surface: "#1E2125",
          card: "#181A1E",
          gold: "#D4AF37",
          "gold-light": "#F3E5AB",
          "gold-dark": "#9A7B1C",
          text: "#EAEAEA",
          muted: "#9CA3AF",
          border: "#333333"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace']
      },
      backgroundImage: {
        'blueprint-grid': 'linear-gradient(to right, rgba(212,175,55,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.08) 1px, transparent 1px)',
        'dark-grid': 'linear-gradient(to right, #26292E 1px, transparent 1px), linear-gradient(to bottom, #26292E 1px, transparent 1px)'
      }
    },
  },
  plugins: [],
}

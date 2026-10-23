/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        },
        architectural: {
          canvas: "#FFFFFF",
          surface: "#FFFFFF",
          subtle: "#F8F9FA",
          "wine-tint": "#FAF0F3",
          "slate-tint": "#F1F5F9",
          "warm-tint": "#FAF8F5",
          border: "#E4E4E7",
          wine: "#801834",
          "wine-dark": "#671229",
          "wine-light": "#A32446",
          gold: "#D4AF37"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace']
      },
      backgroundImage: {
        'blueprint-grid': 'linear-gradient(to right, rgba(128,24,52,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,24,52,0.06) 1px, transparent 1px)',
        'light-grid': 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
        'dark-grid': 'linear-gradient(to right, #26292E 1px, transparent 1px), linear-gradient(to bottom, #26292E 1px, transparent 1px)'
      }
    },
  },
  plugins: [],
}

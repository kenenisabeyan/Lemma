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
        brand: {
          gold: "#D3AE36",
          "gold-hover": "#C29F2F",
          "gold-light": "#F5E7B2",
          "gold-dark": "#9E7F1E",
          obsidian: "#12151C",
          "obsidian-dark": "#0B0D12",
          navy: "#232936",
          "navy-light": "#2D3445",
          "navy-border": "#31394D",
          alabaster: "#F8F9FA",
          charcoal: "#1E2025",
          "charcoal-muted": "#4B505C"
        },
        engineering: {
          bg: "#12151C",
          surface: "#232936",
          card: "#232936",
          gold: "#D3AE36",
          "gold-light": "#F5E7B2",
          "gold-dark": "#9E7F1E",
          text: "#F8F9FA",
          muted: "#94A3B8",
          border: "#232936"
        },
        architectural: {
          canvas: "#F8F9FA",
          surface: "#FFFFFF",
          subtle: "#F1F3F5",
          border: "#E2E5EA",
          gold: "#D3AE36",
          "gold-dark": "#C29F2F",
          obsidian: "#12151C",
          navy: "#232936",
          charcoal: "#1E2025",
          alabaster: "#F8F9FA"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace']
      },
      backgroundImage: {
        'blueprint-grid': 'linear-gradient(to right, rgba(211,174,54,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(211,174,54,0.06) 1px, transparent 1px)',
        'light-grid': 'linear-gradient(to right, rgba(30,32,37,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,32,37,0.04) 1px, transparent 1px)',
        'dark-grid': 'linear-gradient(to right, #232936 1px, transparent 1px), linear-gradient(to bottom, #232936 1px, transparent 1px)'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF8',
        navy: '#1A1A2E',
        surface: '#222238',
        terra: { DEFAULT: '#C45B4D', dark: '#A84A3F' },
        gold: { DEFAULT: '#D4A84B', light: '#E8C97A' },
        ink: '#2D2D2D',
        mid: '#6B6B6B',
        cap: '#999999',
        warm: '#E8E0D8',
        ok: '#4A9E6B',
        border: { light: '#E0DCD7', dark: 'rgba(255,255,255,0.08)' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

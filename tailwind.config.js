/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warm: { 50: '#FAFAF8', 100: '#F5F0EB', 200: '#E8E4DF', 300: '#D4CFC8' },
        dark: { DEFAULT: '#1A1A2E', surface: '#232340', lighter: '#2D2D4A' },
        terracotta: { DEFAULT: '#B85042', light: '#D4716A', dark: '#8B3A30' },
        gold: { DEFAULT: '#D4A84B', light: '#E8C97A', dark: '#A88535' },
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

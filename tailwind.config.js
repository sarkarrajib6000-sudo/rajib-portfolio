/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgDark: '#0A0D12',
        panelDark: '#151A22',
        hairline: '#232A35',
        textPrimary: '#EDEFF2',
        textMuted: '#8A93A1',
        accentTeal: '#22D3AA',
        accentAmber: '#FF7A45',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}


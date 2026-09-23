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
        bgDark: '#06080E',
        panelDark: 'rgba(15, 23, 42, 0.75)',
        hairline: 'rgba(255, 255, 255, 0.1)',
        textPrimary: '#F8FAFC',
        textSecondary: '#CBD5E1',
        textMuted: '#94A3B8',
        accentTeal: '#00F5D4',
        accentCyan: '#06B6D4',
        accentAmber: '#FF6B35',
        accentPurple: '#8B5CF6',
        accentBlue: '#3B82F6',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-teal': '0 0 25px rgba(0, 245, 212, 0.25)',
        'glow-amber': '0 0 25px rgba(255, 107, 53, 0.25)',
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}



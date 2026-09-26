/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prayer: {
          bg: '#0D0E11',
          sub: '#151619',
          card: '#1B1C20',
          cardHover: '#222329',
          border: '#2A2B2F',
          text: '#F4F1EA',
          muted: '#A8A6A0',
        },
        gold: {
          DEFAULT: '#E8C66A',
          light: '#F4D98C',
          dark: '#B8963D',
          dim: 'rgba(232, 198, 106, 0.15)',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(232, 198, 106, 0.15)',
        'gold-glow-lg': '0 0 45px rgba(232, 198, 106, 0.25)',
        'card-subtle': '0 4px 20px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}

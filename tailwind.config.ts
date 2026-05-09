import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8EDF5',
          100: '#C5D0E3',
          200: '#9CAEC9',
          300: '#738BAF',
          400: '#4A6894',
          500: '#2A4875',
          600: '#1A3055',
          700: '#162436',
          800: '#0F1B2D',
          900: '#080F1A',
          DEFAULT: '#0F1B2D',
        },
        gold: {
          50: '#FDF8EC',
          100: '#F9EEC8',
          200: '#F2DB8A',
          300: '#D4B866',
          400: '#C9A84C',
          500: '#A8872E',
          600: '#876820',
          DEFAULT: '#C9A84C',
        },
      },
    },
  },
  plugins: [],
}

export default config

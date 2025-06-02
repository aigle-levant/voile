import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1F1F1F',
        soft: '#F4F0EC',
        accent: '#9F7AEA',
      },
      fontFamily: {
        sans: ['Switzer', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config;
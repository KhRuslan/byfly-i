import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beach-sand': '#F5E6D3',
        'ocean-blue': '#4A90E2',
        'ocean-turquoise': '#00CED1',
      },
    },
  },
  plugins: [],
} satisfies Config


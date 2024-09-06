import type {Config} from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import {fontFamily} from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    screens: {
      xl: {max: '1536px'},
      lg: {max: '1280px'},
      md: {max: '1024px'},
      sm: {max: '428px'},
    },
    fontFamily: {
      mono: ['var(--font-jetbrains-mono)', ...fontFamily.mono],
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
        },
      },
    },
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
    require('tailwindcss-animate'),
  ],
} satisfies Config

export default config

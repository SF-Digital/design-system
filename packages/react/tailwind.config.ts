import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@sf-digital-ui/tokens'
import { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      fontFamily: fonts,
      lineHeight: lineHeights,
      borderRadius: radii,
      space,
    },
  },
  plugins: [],
} satisfies Config

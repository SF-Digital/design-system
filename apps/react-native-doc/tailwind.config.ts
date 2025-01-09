import {
  blur,
  borderWidth,
  colors,
  dropShadow,
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
  content: ['./src/app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      fontFamily: fonts,
      lineHeight: lineHeights,
      borderRadius: radii,
      space,
      dropShadow,
      blur,
      borderWidth,
    },
  },
  plugins: [],
} satisfies Config

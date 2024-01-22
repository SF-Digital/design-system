import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@sf-digital-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, keyframes, config, globalCss, theme, createTheme } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },
    theme: {
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      radii,
      space,
    },
  })

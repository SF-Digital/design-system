import React from 'react'
import { fonts } from '@sf-digital-ui/tokens'
import {
  TextProps as RNTextProps,
  Text as RNText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native'
import { fontSizesInPx } from '../../tokens/font-sizes-in-px'
import { calculateLineHeight } from '../../utils/calculate-line-height'

export interface TextProps extends RNTextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  style?: StyleProp<TextStyle>
}

const textSizes = StyleSheet.create({
  base: {
    fontFamily: fonts['sf-digital'],
  },
  xs: {
    fontSize: fontSizesInPx['sf-xs'],
    lineHeight: calculateLineHeight(fontSizesInPx['sf-xs']),
  },
  sm: {
    fontSize: fontSizesInPx['sf-sm'],
    lineHeight: calculateLineHeight(fontSizesInPx['sf-sm']),
  },
  md: {
    fontSize: fontSizesInPx['sf-md'],
    lineHeight: calculateLineHeight(fontSizesInPx['sf-md']),
  },
  lg: {
    fontSize: fontSizesInPx['sf-lg'],
    lineHeight: calculateLineHeight(fontSizesInPx['sf-lg']),
  },
})

export const Text = ({ size = 'md', style, ...props }: TextProps) => {
  const sizeStyle = {
    ...textSizes[size],
    ...textSizes.base,
  }

  return (
    <RNText style={[sizeStyle, style]} accessibilityRole="text" {...props} />
  )
}

// export default Text

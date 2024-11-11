import React, { useMemo } from 'react'
import { Text, TextProps, StyleSheet, StyleProp, TextStyle } from 'react-native'
import { colors } from '@sf-digital-ui/tokens'

interface HeadingProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3'
  style?: StyleProp<TextStyle>
  color?: string
  children: React.ReactNode
}

const headingVariants = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.neutral[500],
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.neutral[500],
  },
  h3: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.neutral[500],
  },
})

const Heading = ({ variant = 'h1', style, color, ...props }: HeadingProps) => {
  const variantStyle = useMemo(() => {
    return {
      ...headingVariants[variant],
      ...(color && { color }),
    }
  }, [variant, color])

  return (
    <Text style={[variantStyle, style]} accessibilityRole="header" {...props} />
  )
}

export default Heading

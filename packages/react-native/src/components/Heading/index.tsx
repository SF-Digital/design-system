import React, { useMemo } from 'react'
import { Text, TextProps, StyleSheet, StyleProp, TextStyle } from 'react-native'

interface HeadingProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3'
  style?: StyleProp<TextStyle>
  color?: string
  children: React.ReactNode
}

const theme = {
  colors: {
    primary: '#333',
    secondary: '#555',
    tertiary: '#666',
  },
}

const headingVariants = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.secondary,
  },
  h3: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.colors.tertiary,
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

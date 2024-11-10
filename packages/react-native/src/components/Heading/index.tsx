import React, { PropsWithChildren } from 'react'
import { Text, TextProps, StyleSheet } from 'react-native'

interface HeadingProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3'
  style?: object
}

const headingVariants = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: '#555',
  },
  h3: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
  },
})

const Heading = ({
  variant = 'h1',
  style,
  children,
  ...props
}: PropsWithChildren<HeadingProps>) => {
  const variantStyle = headingVariants[variant]

  return (
    <Text style={[variantStyle, style]} {...props}>
      {children}
    </Text>
  )
}

export default Heading

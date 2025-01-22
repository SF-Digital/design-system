import React from 'react'
import {
  View as RNView,
  StyleProp,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native'

export interface CardProps extends ViewProps {
  style?: StyleProp<ViewStyle>
}

const cardSizes = StyleSheet.create({
  base: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
  },
  shadow: {
    shadowColor: 'rgba(16, 24, 40, 1)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
})

export const Card = ({ style, ...props }: CardProps) => {
  return (
    <RNView
      style={[cardSizes.base, cardSizes.shadow, style]}
      accessibilityRole="none"
      {...props}
    />
  )
}

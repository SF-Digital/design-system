import React from 'react'
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewProps,
} from 'react-native'

export type SelectViewportProps = ViewProps

const viewportStyles = StyleSheet.create({
  content: {
    paddingHorizontal: 8,
    paddingVertical: 48,
  },
})

export const Viewport = ({
  style,
  children,
  ...props
}: SelectViewportProps) => {
  const { height } = useWindowDimensions()

  return (
    <View
      style={[
        viewportStyles.content,
        {
          maxHeight: height,
          flexDirection: 'column',
          justifyContent: 'center',
        },
        style,
      ]}
      {...props}
    >
      <ScrollView bounces={false}>{children}</ScrollView>
    </View>
  )
}

import React from 'react'
import { colors, fonts } from '@sf-digital-ui/tokens'
import { TextProps, Text as RNText, StyleSheet } from 'react-native'

export type SelectItemTextProps = TextProps

const textStyles = StyleSheet.create({
  text: {
    fontFamily: fonts['sf-digital'],
    color: colors.neutral['900'],
  },
})

export const ItemText = ({ style, ...props }: SelectItemTextProps) => {
  return <RNText style={[textStyles.text, style]} {...props} />
}

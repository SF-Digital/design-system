import React from 'react'
import { View, ViewProps } from 'react-native'

export type ButtonPrefixProps = ViewProps

export const Prefix = (props: ButtonPrefixProps) => {
  return <View {...props} />
}

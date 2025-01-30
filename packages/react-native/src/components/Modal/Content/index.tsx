import React, { ReactNode } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  ViewProps,
  ViewStyle,
  StyleProp,
} from 'react-native'

export interface ModalContentProps extends ViewProps {
  children?: ReactNode
  style?: StyleProp<ViewStyle>
}

export const Content = ({ children, ...props }: ModalContentProps) => {
  return (
    <View style={[styles.centeredView, props.style]} {...props}>
      <View style={[styles.content, props.style]}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...(Platform.select({
      web: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    }) as ModalContentProps),
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    maxWidth: 500,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    }),
  },
})

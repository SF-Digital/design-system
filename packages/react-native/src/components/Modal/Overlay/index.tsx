import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, ViewProps } from 'react-native'
import { useModalContext } from '../Context'

export interface ModalOverlayProps extends ViewProps {
  children?: ReactNode
}

export const Overlay = ({ ...props }: ModalOverlayProps) => {
  const { isVisible, setIsVisible } = useModalContext()

  return (
    <Pressable
      style={[styles.overlay, props.style]}
      onPress={() => setIsVisible(!isVisible)}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { useModalContext } from '../Context'

export const Overlay: React.FC = () => {
  const { isVisible, setIsVisible } = useModalContext()

  return (
    <Pressable
      style={styles.overlay}
      onPress={() => setIsVisible(!isVisible)}
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

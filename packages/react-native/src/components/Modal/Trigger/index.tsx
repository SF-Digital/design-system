import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { useModalContext } from '../Context'
import { ModalProps } from '../Types'
import { colors, fonts } from '@sf-digital-ui/tokens'

export const Trigger: React.FC<ModalProps> = ({ children }) => {
  const { setIsVisible } = useModalContext()

  return (
    <Pressable style={styles.button} onPress={() => setIsVisible(true)}>
      {children || <Text style={styles.buttonText}>Open Modal</Text>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors['primary-green']['500'],
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts['sf-digital'],
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})

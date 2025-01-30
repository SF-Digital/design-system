import React, { ReactNode } from 'react'
import { Pressable, Text, StyleSheet, ViewProps } from 'react-native'
import { useModalContext } from '../Context'
import { colors, fonts } from '@sf-digital-ui/tokens'

export interface ModalCloseProps extends ViewProps {
  children?: ReactNode
}

export const Close = ({ children, ...props }: ModalCloseProps) => {
  const { setIsVisible } = useModalContext()

  return (
    <Pressable
      style={[styles.button, props.style]}
      onPress={() => setIsVisible(false)}
      {...props}
    >
      {children || <Text style={styles.buttonText}>Close</Text>}
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
    marginTop: 20,
  },
  buttonText: {
    fontFamily: fonts['sf-digital'],
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})

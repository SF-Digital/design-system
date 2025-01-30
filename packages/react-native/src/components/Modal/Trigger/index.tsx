import React, { ReactNode } from 'react'
import { Pressable, Text, StyleSheet, ViewProps } from 'react-native'
import { useModalContext } from '../Context'
import { colors, fonts } from '@sf-digital-ui/tokens'

export interface ModalTriggerProps extends ViewProps {
  children?: ReactNode
}

export const Trigger = ({ children, ...props }: ModalTriggerProps) => {
  const { setIsVisible } = useModalContext()

  return (
    <Pressable
      style={[styles.button, props.style]}
      onPress={() => setIsVisible(true)}
      {...props}
    >
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

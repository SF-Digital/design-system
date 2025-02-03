import React, { ReactNode } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { useModalContext } from '../Root'

export interface ModalTriggerProps extends PressableProps {
  children?: ReactNode
}

export const Trigger = ({ children, ...props }: ModalTriggerProps) => {
  const { setIsVisible } = useModalContext()

  return (
    <Pressable
      pointerEvents="box-only"
      onPress={() => {
        setIsVisible(true)
      }}
      {...props}
    >
      {children}
    </Pressable>
  )
}

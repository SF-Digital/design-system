import React, { ReactNode } from 'react'
// import { ViewProps, View, Pressable, PressableProps } from 'react-native'
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
      onTouchEnd={() => {
        setIsVisible(true)
      }}
      {...props}
    >
      {children}
    </Pressable>
  )
}

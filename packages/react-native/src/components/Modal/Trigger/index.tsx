import React, { ReactNode } from 'react'
import { ViewProps, View } from 'react-native'
import { useModalContext } from '../Root'

export interface ModalTriggerProps extends ViewProps {
  children?: ReactNode
}

export const Trigger = ({ children, ...props }: ModalTriggerProps) => {
  const { setIsVisible } = useModalContext()

  return (
    <View
      pointerEvents="box-none"
      onTouchEnd={(e) => {
        e.stopPropagation()
        setIsVisible(true)
      }}
      {...props}
    >
      {children}
    </View>
  )
}

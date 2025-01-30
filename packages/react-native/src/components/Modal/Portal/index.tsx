import React, { ReactNode } from 'react'
import { Modal as RNModal, ViewProps } from 'react-native'
import { useModalContext } from '../Context'

export interface ModalPortalProps extends ViewProps {
  children?: ReactNode
}

export const Portal = ({ children, ...props }: ModalPortalProps) => {
  const { isVisible, setIsVisible } = useModalContext()

  return (
    <RNModal
      animationType="none"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
      {...props}
    >
      {children}
    </RNModal>
  )
}

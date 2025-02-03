import React, { ReactNode } from 'react'
import { ModalProps, Modal as RNModal } from 'react-native'
import { useModalContext } from '../Root'

export interface ModalPortalProps extends ModalProps {
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

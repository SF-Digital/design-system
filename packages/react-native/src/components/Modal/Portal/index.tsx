import React from 'react'
import { Modal as RNModal } from 'react-native'
import { useModalContext } from '../Context'
import { ModalProps } from '../Types'

export const Portal: React.FC<ModalProps> = ({ children }) => {
  const { isVisible, setIsVisible } = useModalContext()

  return (
    <RNModal
      animationType="none"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
    >
      {children}
    </RNModal>
  )
}

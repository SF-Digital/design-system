import React from 'react'
import { Modal, ModalProps } from 'react-native'
import { useSelectContext } from '../Root'

export type SelectContentProps = ModalProps

export const Content = ({ style, ...props }: SelectContentProps) => {
  const { open, onOpenChange } = useSelectContext()

  return (
    <Modal
      style={[style]}
      visible={open}
      animationType="slide"
      onRequestClose={() => onOpenChange(false)}
      {...props}
    />
  )
}

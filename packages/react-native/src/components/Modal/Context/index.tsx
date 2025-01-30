import { createContext, useContext } from 'react'
import { ModalContextType } from '../Types'

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
)

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('Modal components must be used within a Modal.Root')
  }
  return context
}

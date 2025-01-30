import React, { useState } from 'react'
import { ModalContext } from '../Context'
import { ModalProps } from '../Types'

export const Root: React.FC<ModalProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <ModalContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </ModalContext.Provider>
  )
}

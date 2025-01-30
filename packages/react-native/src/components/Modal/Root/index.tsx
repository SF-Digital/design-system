import React, { ReactNode, useState } from 'react'
import { ModalContext } from '../Context'

export interface ModalRootProps {
  children?: ReactNode
}

export const Root = ({ children }: ModalRootProps) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <ModalContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </ModalContext.Provider>
  )
}

import React, { ReactNode, useState, createContext, useContext } from 'react'

export interface ModalRootProps {
	children?: ReactNode
}
export interface ModalContextType {
	isVisible: boolean
	setIsVisible: (value: boolean) => void
}

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

export const Root = ({ children }: ModalRootProps) => {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<ModalContext.Provider value={{ isVisible, setIsVisible }}>
			{children}
		</ModalContext.Provider>
	)
}

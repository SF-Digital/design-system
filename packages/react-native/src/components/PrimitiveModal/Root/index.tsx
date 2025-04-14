import React, { createContext, ReactNode, useContext, useState } from 'react'

export interface PrimitiveModalRootProps {
	children?: ReactNode
	open?: boolean
	onOpenChange?: (open: boolean) => void
}

export interface PrimitiveModalContextType {
	isVisible: boolean
	setIsVisible: (value: boolean) => void
}

export const PrimitiveModalContext = createContext<
	PrimitiveModalContextType | undefined
>(undefined)

export const usePrimitiveModalContext = () => {
	const context = useContext(PrimitiveModalContext)
	if (!context) {
		throw new Error(
			'PrimitiveModal components must be used within a PrimitiveModal.Root',
		)
	}
	return context
}

export const Root = ({
	children,
	open,
	onOpenChange,
}: PrimitiveModalRootProps) => {
	const [internalIsVisible, setInternalIsVisible] = useState(false)

	const isControlled = open !== undefined
	const isVisible = isControlled ? open : internalIsVisible

	const setIsVisible = (value: boolean) => {
		if (onOpenChange) {
			onOpenChange(value)
		}

		if (!isControlled) {
			setInternalIsVisible(value)
		}
	}

	return (
		<PrimitiveModalContext.Provider value={{ isVisible, setIsVisible }}>
			{children}
		</PrimitiveModalContext.Provider>
	)
}

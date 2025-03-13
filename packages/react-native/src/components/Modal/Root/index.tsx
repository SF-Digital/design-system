import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'

export interface ModalRootProps {
	children?: ReactNode
	// For controlled mode
	open?: boolean
	onOpenChange?: (open: boolean) => void
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

export const Root = ({ children, open, onOpenChange }: ModalRootProps) => {
	const [internalIsVisible, setInternalIsVisible] = useState(false)

	const isControlled = open !== undefined
	const isVisible = isControlled ? open : internalIsVisible

	useEffect(() => {
		if (isControlled && open !== internalIsVisible) {
			setInternalIsVisible(open)
		}
	}, [isControlled, open, internalIsVisible])

	const setIsVisible = (value: boolean) => {
		if (onOpenChange) {
			onOpenChange(value)
		}

		if (!isControlled) {
			setInternalIsVisible(value)
		}
	}

	return (
		<ModalContext.Provider value={{ isVisible, setIsVisible }}>
			{children}
		</ModalContext.Provider>
	)
}

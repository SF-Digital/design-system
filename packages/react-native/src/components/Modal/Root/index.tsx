import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react'

export interface ModalRootProps {
	initialState?: boolean
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

export const Root = ({
	children,
	initialState = false,
}: PropsWithChildren<ModalRootProps>) => {
	const [isVisible, setIsVisible] = useState(initialState)

	useEffect(() => {
		if (initialState !== undefined) {
			setIsVisible(initialState)
		}
	}, [initialState])

	return (
		<ModalContext.Provider value={{ isVisible, setIsVisible }}>
			{children}
		</ModalContext.Provider>
	)
}

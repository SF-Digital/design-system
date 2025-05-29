import React, { createContext, useContext, useState } from 'react'
import { ViewProps } from 'react-native'

type DropdownMenuContextType = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

export const DropdownMenuContext = createContext<DropdownMenuContextType>({
	isOpen: false,
	setIsOpen: () => {},
})

export const useDropdownMenuContext = () => {
	const context = useContext(DropdownMenuContext)
	if (!context) {
		throw new Error(
			'Dropdown components must be used within a Dropdown provider',
		)
	}
	return context
}

export interface DropdownMenuRootProps extends ViewProps {
	open?: boolean
	onOpenChange?: (open: boolean) => void
}

export const Root = ({
	children,
	open,
	onOpenChange,
}: DropdownMenuRootProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenChange = (value: boolean) => {
		setIsOpen(value)
		onOpenChange?.(value)
	}

	return (
		<DropdownMenuContext.Provider
			value={{
				isOpen: open ?? isOpen,
				setIsOpen: handleOpenChange,
			}}
		>
			{children}
		</DropdownMenuContext.Provider>
	)
}

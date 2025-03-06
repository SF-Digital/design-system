import React, { createContext, ReactNode, useContext, useState } from 'react'

type SelectContextType = {
	open: boolean
	value: string | null
	onOpenChange: (open: boolean) => void
	onValueChange: (value: string) => void
}

const SelectContext = createContext<SelectContextType | null>(null)

export const useSelectContext = () => {
	const context = useContext(SelectContext)
	if (!context) {
		throw new Error('Select components must be used within a Select provider')
	}
	return context
}

export type SelectRootProps = {
	value: string | null
	onValueChange: (value: string) => void
	children: ReactNode
}

export const Root = ({ children, value, onValueChange }: SelectRootProps) => {
	const [open, setOpen] = useState(false)

	return (
		<SelectContext.Provider
			value={{
				open,
				value,
				onOpenChange: setOpen,
				onValueChange,
			}}
		>
			{children}
		</SelectContext.Provider>
	)
}

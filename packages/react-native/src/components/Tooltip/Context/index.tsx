import { createContext, useContext } from 'react'

type TooltipTheme = 'light' | 'dark'

export const TooltipThemeContext = createContext<TooltipTheme>('light')

export const useTooltipTheme = () => useContext(TooltipThemeContext)

type TooltipContextType = {
	open: boolean
	setOpen: (open: boolean) => void
	triggerLayout: { x: number; y: number; width: number; height: number } | null
	setTriggerLayout: (layout: {
		x: number
		y: number
		width: number
		height: number
	}) => void
}

export const TooltipContext = createContext<TooltipContextType | null>(null)

export const useTooltipContext = () => {
	const context = useContext(TooltipContext)
	if (!context) {
		throw new Error('Tooltip components must be used within Tooltip.Root')
	}
	return context
}

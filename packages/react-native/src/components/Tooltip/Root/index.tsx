import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'
import { TooltipContext } from '../Context'

export interface TooltipRootProps extends PropsWithChildren {
	open?: boolean
	onOpenChange?: (open: boolean) => void
	defaultOpen?: boolean
}

export const Root = ({
	open: controlledOpen,
	onOpenChange,
	defaultOpen = false,
	children,
}: TooltipRootProps) => {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
	const [triggerLayout, setTriggerLayout] = useState<{
		x: number
		y: number
		width: number
		height: number
	} | null>(null)

	const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
	const setOpen = (newOpen: boolean) => {
		if (controlledOpen === undefined) {
			setUncontrolledOpen(newOpen)
		}
		onOpenChange?.(newOpen)
	}

	return (
		<TooltipContext.Provider
			value={{ open, setOpen, triggerLayout, setTriggerLayout }}
		>
			{children}
		</TooltipContext.Provider>
	)
}

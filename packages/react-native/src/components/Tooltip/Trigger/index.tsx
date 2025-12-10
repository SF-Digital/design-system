import React, { useRef } from 'react'
import { Pressable, type PressableProps, View } from 'react-native'
import { useTooltipContext } from '../Context'

export interface TooltipTriggerProps extends Omit<PressableProps, 'onPress'> {}

export const Trigger = ({ children, ...props }: TooltipTriggerProps) => {
	const { setOpen, setTriggerLayout } = useTooltipContext()

	const triggerRef = useRef<View>(null)

	const handlePress = () => {
		triggerRef.current?.measureInWindow((x, y, width, height) => {
			setTriggerLayout({ x, y, width, height })
			setOpen(true)
		})
	}

	return (
		<Pressable ref={triggerRef} onPress={handlePress} {...props}>
			{children}
		</Pressable>
	)
}

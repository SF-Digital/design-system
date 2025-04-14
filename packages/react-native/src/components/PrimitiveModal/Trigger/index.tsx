import React, { ReactNode } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { usePrimitiveModalContext } from '../Root'

export interface PrimitiveModalTriggerProps extends PressableProps {
	children?: ReactNode
}

export const Trigger = ({ children, ...props }: PrimitiveModalTriggerProps) => {
	const { setIsVisible } = usePrimitiveModalContext()

	return (
		<Pressable
			pointerEvents='box-only'
			onPress={() => {
				setIsVisible(true)
			}}
			{...props}
		>
			{children}
		</Pressable>
	)
}

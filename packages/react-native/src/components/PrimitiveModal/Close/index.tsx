import React, { ReactNode } from 'react'
import { View, ViewProps } from 'react-native'
import { usePrimitiveModalContext } from '../Root'

export interface PrimitiveModalCloseProps extends ViewProps {
	children?: ReactNode
}

export const Close = ({ children, ...props }: PrimitiveModalCloseProps) => {
	const { setIsVisible } = usePrimitiveModalContext()

	return (
		<View
			pointerEvents='box-none'
			onTouchEnd={(e) => {
				e.stopPropagation()
				setIsVisible(false)
			}}
			{...props}
		>
			{children}
		</View>
	)
}

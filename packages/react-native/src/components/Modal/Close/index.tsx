import React, { ReactNode } from 'react'
import { ViewProps, View } from 'react-native'
import { useModalContext } from '../Root'

export interface ModalCloseProps extends ViewProps {
	children?: ReactNode
}

export const Close = ({ children, ...props }: ModalCloseProps) => {
	const { setIsVisible } = useModalContext()

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

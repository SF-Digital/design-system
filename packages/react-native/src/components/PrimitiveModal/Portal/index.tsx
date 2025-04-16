import React, { ReactNode } from 'react'
import { ModalProps, Modal as RNModal } from 'react-native'
import { usePrimitiveModalContext } from '../Root'

export interface PrimitiveModalPortalProps extends ModalProps {
	children?: ReactNode
}

export const Portal = ({ children, ...props }: PrimitiveModalPortalProps) => {
	const { isVisible, setIsVisible } = usePrimitiveModalContext()

	return (
		<RNModal
			animationType='none'
			transparent={true}
			visible={isVisible}
			onRequestClose={() => setIsVisible(false)}
			{...props}
		>
			{children}
		</RNModal>
	)
}

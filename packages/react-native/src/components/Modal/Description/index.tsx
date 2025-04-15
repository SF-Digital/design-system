import { colors } from '@sf-digital-ui/tokens'
import React from 'react'
import type { TextProps } from 'react-native'
import { PrimitiveModal } from '../../PrimitiveModal'

export interface ModalDescriptionProps extends TextProps {}

export const Description = ({
	children,
	style = {
		color: colors.neutral['500'],
	},
}: ModalDescriptionProps) => {
	return (
		<PrimitiveModal.Description testID='modal-description' style={style}>
			{children}
		</PrimitiveModal.Description>
	)
}

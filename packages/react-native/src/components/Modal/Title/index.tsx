import { colors } from '@sf-digital-ui/tokens'
import type { TextProps } from 'react-native'
import { PrimitiveModal } from '../../PrimitiveModal'

export interface ModalTitleProps extends TextProps {}

export const Title = ({
	children,
	style = {
		color: colors.neutral['700'],
	},
}: ModalTitleProps) => {
	return (
		<PrimitiveModal.Title testID='modal-title' style={style}>
			{children}
		</PrimitiveModal.Title>
	)
}

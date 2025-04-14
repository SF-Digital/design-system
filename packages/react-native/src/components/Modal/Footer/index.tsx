import { StyleSheet, type ViewProps } from 'react-native'
import { PrimitiveModal } from '../../PrimitiveModal'

export interface ModalFooterProps extends ViewProps {}

export const Footer = ({ children }: ModalFooterProps) => {
	return (
		<PrimitiveModal.Close testID='modal-footer' style={styles.footerContainer}>
			{children}
		</PrimitiveModal.Close>
	)
}

const styles = StyleSheet.create({
	footerContainer: {
		width: '100%',
		gap: 12,
		marginTop: 20,
		padding: 4,
	},
})

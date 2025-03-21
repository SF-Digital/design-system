import React from 'react'
import { Modal, ModalProps, StyleSheet, View } from 'react-native'
import { useSelectContext } from '../Root'

export type SelectContentProps = ModalProps

const modalStyles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'flex-end',
	},
})

export const Content = (props: SelectContentProps) => {
	const { open, onOpenChange } = useSelectContext()

	return (
		<Modal
			visible={open}
			animationType='slide'
			transparent={true}
			onRequestClose={() => onOpenChange(false)}
			{...props}
		>
			<View style={modalStyles.overlay} onTouchEnd={() => onOpenChange(false)}>
				{props.children}
			</View>
		</Modal>
	)
}

import React from 'react'
import { StyleSheet, View, type ViewProps } from 'react-native'

export interface ModalBodyProps extends ViewProps {}

export const Body = ({ children }: ModalBodyProps) => {
	return (
		<View testID='modal-body' style={styles.bodyContainer}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	bodyContainer: {
		gap: 4,
		paddingHorizontal: 4,
		paddingBottom: 4,
		paddingTop: 24,
	},
})

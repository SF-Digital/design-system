import React, { ReactNode } from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'

export interface ModalDescriptionProps extends TextProps {
	children?: ReactNode
}

export const Description = ({
	children,
	style,
	...props
}: ModalDescriptionProps) => {
	return (
		<Text style={[styles.description, style]} {...props}>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	description: {
		fontSize: 16,
	},
})

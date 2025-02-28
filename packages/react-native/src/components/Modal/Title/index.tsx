import React, { ReactNode } from 'react'
import { Text, TextProps, StyleSheet } from 'react-native'

export interface ModalTitleProps extends TextProps {
	children?: ReactNode
}

export const Title = ({ children, style, ...props }: ModalTitleProps) => {
	return (
		<Text style={[styles.title, style]} {...props}>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
})

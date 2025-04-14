import React, { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

export interface PrimitiveModalTitleProps extends TextProps {
	children?: ReactNode
}

export const Title = ({
	children,
	style,
	...props
}: PrimitiveModalTitleProps) => {
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

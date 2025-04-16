import React, { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

export interface PrimitiveModalDescriptionProps extends TextProps {
	children?: ReactNode
}

export const Description = ({
	children,
	style,
	...props
}: PrimitiveModalDescriptionProps) => {
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

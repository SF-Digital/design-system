import React, { ReactNode } from 'react'
import {
	Platform,
	StyleProp,
	StyleSheet,
	View,
	ViewProps,
	ViewStyle,
} from 'react-native'

export interface ModalContentProps extends ViewProps {
	children?: ReactNode
	style?: StyleProp<ViewStyle>
}

export const Content = ({ children, style, ...props }: ModalContentProps) => {
	return (
		<View style={[styles.content, style]} {...props}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 20,
		gap: 4,
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.25,
				shadowRadius: 4,
			},
			android: {
				elevation: 5,
			},
		}),
	},
})

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
		<View style={styles.centeredView}>
			<View style={[styles.content, style]} {...props}>
				{children}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	content: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 20,
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

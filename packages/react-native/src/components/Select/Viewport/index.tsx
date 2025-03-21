import React from 'react'
import {
	ScrollView,
	StyleSheet,
	useWindowDimensions,
	View,
	ViewProps,
} from 'react-native'

export type SelectViewportProps = ViewProps

const viewportStyles = StyleSheet.create({
	content: {
		paddingHorizontal: 8,
		paddingVertical: 48,
		backgroundColor: 'white',
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	scrollContainer: {
		maxHeight: '80%',
	},
})

export const Viewport = ({
	style,
	children,
	...props
}: SelectViewportProps) => {
	const { height } = useWindowDimensions()

	return (
		<View
			style={[
				viewportStyles.content,
				{
					maxHeight: height,
				},
				style,
			]}
			{...props}
		>
			<ScrollView contentContainerStyle={viewportStyles.scrollContainer}>
				{children}
			</ScrollView>
		</View>
	)
}

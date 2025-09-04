import { colors } from '@sf-digital-ui/tokens'
import React from 'react'
import {
	Pressable,
	ScrollView,
	StyleSheet,
	View,
	ViewProps,
} from 'react-native'
import { useSelectContext } from '../Root'

export type SelectViewportProps = ViewProps

const viewportStyles = StyleSheet.create({
	content: {
		paddingHorizontal: 8,
		paddingVertical: 48,
		backgroundColor: 'white',
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		maxHeight: '70%',
		marginTop: 'auto',
	},
	scrollContainer: {
		flexGrow: 1,
	},
	topBar: {
		width: 60,
		height: 4,
		backgroundColor: colors.neutral['50'],
		borderRadius: 2,
		alignSelf: 'center',
		marginBottom: 16,
		marginTop: -32,
	},
})

export const Viewport = ({
	style,
	children,
	...props
}: SelectViewportProps) => {
	const { onOpenChange } = useSelectContext()

	return (
		<View style={[viewportStyles.content, style]} {...props}>
			<Pressable
				style={viewportStyles.topBar}
				onPress={() => onOpenChange(false)}
			/>

			<ScrollView contentContainerStyle={viewportStyles.scrollContainer}>
				{children}
			</ScrollView>
		</View>
	)
}

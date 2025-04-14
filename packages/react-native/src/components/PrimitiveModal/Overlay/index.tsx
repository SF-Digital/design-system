import React, { ReactNode } from 'react'
import {
	Pressable,
	PressableProps,
	StyleProp,
	StyleSheet,
	ViewStyle,
} from 'react-native'
import { usePrimitiveModalContext } from '../Root'

export interface PrimitiveModalOverlayProps extends PressableProps {
	children?: ReactNode
	style?: StyleProp<ViewStyle>
}

export const Overlay = ({ style, ...props }: PrimitiveModalOverlayProps) => {
	const { isVisible, setIsVisible } = usePrimitiveModalContext()

	return (
		<Pressable
			style={[styles.overlay, style]}
			onPress={() => setIsVisible(!isVisible)}
			{...props}
		/>
	)
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

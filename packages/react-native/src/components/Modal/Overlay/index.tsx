import React, { ReactNode } from 'react'
import {
	Pressable,
	PressableProps,
	StyleProp,
	StyleSheet,
	ViewStyle,
} from 'react-native'
import { useModalContext } from '../Root'

export interface ModalOverlayProps extends PressableProps {
	children?: ReactNode
	style?: StyleProp<ViewStyle>
}

export const Overlay = ({ style, ...props }: ModalOverlayProps) => {
	const { isVisible, setIsVisible } = useModalContext()

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
		paddingHorizontal: 16,
		paddingBottom: 64,
		justifyContent: 'flex-end',
	},
})

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
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
})

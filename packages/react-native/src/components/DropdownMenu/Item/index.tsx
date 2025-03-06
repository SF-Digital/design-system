import { colors } from '@sf-digital-ui/tokens'
import React from 'react'
import {
	Pressable,
	StyleSheet,
	type GestureResponderEvent,
	type PressableProps,
} from 'react-native'
import { useDropdownMenuContext } from '../Root'

export type DropdownMenuItemProps = PressableProps

export const Item: React.FC<DropdownMenuItemProps> = ({
	style,
	children,
	onPress,
	...props
}) => {
	const { setIsOpen } = useDropdownMenuContext()

	const handlePress = (e: GestureResponderEvent) => {
		onPress?.(e)
		setIsOpen(false)
	}

	return (
		<Pressable
			{...props}
			onPress={handlePress}
			style={({ pressed }) => [
				styles.item,
				typeof style === 'object' ? style : {},
				pressed && { backgroundColor: colors.neutral[20] },
			]}
		>
			{children}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		paddingVertical: 8,
		paddingLeft: 16,
		paddingRight: 48,
	},
})

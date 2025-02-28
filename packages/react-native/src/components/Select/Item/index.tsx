import React, { useCallback } from 'react'
import { Pressable, PressableProps, StyleSheet } from 'react-native'
import { useSelectContext } from '../Root'
import { colors } from '@sf-digital-ui/tokens'

export interface SelectItemProps extends PressableProps {
	value: string
}

const itemStyles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 14,
		paddingVertical: 10,
	},
	selectedItem: {
		backgroundColor: colors.neutral['20'],
	},
})

export const Item = ({
	value: itemValue,
	style,
	...props
}: SelectItemProps) => {
	const { onValueChange, value, onOpenChange } = useSelectContext()
	const isSelected = itemValue === value

	const handlePress = useCallback(() => {
		onValueChange(itemValue)
		onOpenChange(false)
	}, [itemValue, onValueChange, onOpenChange])

	return (
		<Pressable
			onPress={handlePress}
			style={[
				itemStyles.item,
				isSelected && itemStyles.selectedItem,
				typeof style === 'object' ? style : {},
			]}
			accessibilityRole='menuitem'
			accessibilityState={{ selected: isSelected }}
			{...props}
		/>
	)
}

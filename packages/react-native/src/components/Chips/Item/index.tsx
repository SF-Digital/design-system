import { colors } from '@sf-digital-ui/tokens'
import React, { useState } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { createStylesheet } from '../../../utils/create-styles'
import { useChipsContext } from '../Root'

export type ChipsItemProps = PressableProps & {
	value: string
	children: React.ReactNode
}

type ChipItemVariants = {
	selected?: boolean
	pressed?: boolean
}

const chipItemStyles = createStylesheet<ChipItemVariants>({
	base: {
		paddingVertical: 4,
		paddingHorizontal: 12,
		borderRadius: 8,
		gap: 8,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
	},
	variants: {
		selected: {
			true: {
				backgroundColor: colors['primary-green']['500'],
				borderColor: colors['primary-green']['500'],
			},
			false: {
				borderColor: colors.neutral['30'],
			},
		},
		pressed: {
			true: {
				backgroundColor: colors.neutral['20'],
				shadowColor: colors['primary-green']['300'],
				shadowOffset: { width: 0, height: 0 },
				shadowOpacity: 0.7,
				shadowRadius: 4,

				// Android properties (iOS will ignore)
				elevation: 4,
			},
			false: {},
		},
	},
	defaultVariants: {
		selected: false,
		pressed: false,
	},
})

export const Item = ({ value, children, style, ...props }: ChipsItemProps) => {
	const [pressed, setPressed] = useState(false)

	const { value: contextValue, onValueChange, isScrolling } = useChipsContext()
	const isSelected = value === contextValue

	const styles = chipItemStyles({ selected: isSelected, pressed })

	return (
		<Pressable
			onPressIn={() => {
				if (isScrolling) return
				setPressed(true)
			}}
			disabled={isSelected}
			onPressOut={() => {
				setPressed(false)
				onValueChange(value)
			}}
			style={[...styles, typeof style === 'object' ? style : {}]}
			{...props}
		>
			{children}
		</Pressable>
	)
}

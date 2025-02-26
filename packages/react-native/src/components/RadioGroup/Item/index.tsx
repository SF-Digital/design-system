import { colors } from '@sf-digital-ui/tokens'
import { useContext } from 'react'
import { Pressable, View, type PressableProps } from 'react-native'
import { createStylesheet } from '../../../utils/create-styles'
import { RadioGroupContext } from '../Root'

export type RadioGroupVariants = {
	size?: 'sm' | 'md' | 'lg'
	color?: 'sf-green' | 'succession-blue'
	isSelected?: boolean
}

export interface RadioGroupItemProps extends PressableProps {
	value: string
	size?: 'sm' | 'md' | 'lg'
	color?: 'sf-green' | 'succession-blue'
}

const radioItemStyles = createStylesheet<RadioGroupVariants>({
	base: {
		borderWidth: 1,
		borderColor: colors.neutral['50'],
		backgroundColor: 'white',
	},

	variants: {
		size: {
			sm: {
				height: 20,
				width: 20,
				borderRadius: 20,
			},
			md: {
				height: 24,
				width: 24,
				borderRadius: 24,
			},
			lg: {
				height: 32,
				width: 32,
				borderRadius: 32,
			},
		},

		color: {
			'sf-green': {},
			'succession-blue': {},
		},

		isSelected: {
			true: {},
			false: {},
		},
	},

	compoundVariants: [
		{
			variants: { isSelected: true, size: 'sm' },
			style: {
				borderWidth: 6,
			},
		},
		{
			variants: { isSelected: true, size: 'md' },
			style: {
				borderWidth: 8,
			},
		},
		{
			variants: { isSelected: true, size: 'lg' },
			style: {
				borderWidth: 10,
			},
		},
		{
			variants: { isSelected: true, color: 'sf-green' },
			style: {
				borderColor: colors['primary-green']['500'],
			},
		},
		{
			variants: { isSelected: true, color: 'succession-blue' },
			style: {
				borderColor: colors['succession-blue']['500'],
			},
		},
	],

	defaultVariants: {
		size: 'sm',
		color: 'sf-green',
		isSelected: false,
	},
})

export const Item = ({
	style,
	value,
	color,
	size,
	...props
}: RadioGroupItemProps) => {
	const context = useContext(RadioGroupContext)
	if (!context) {
		throw new Error('RadioGroup.Item must be used within a RadioGroup.Root')
	}

	const { value: selectedValue, onChange, disabled: groupDisabled } = context
	const isDisabled = groupDisabled
	const isSelected = value === selectedValue

	const itemStyles = radioItemStyles({
		color,
		size,
		isSelected,
	})

	return (
		<Pressable
			onPress={() => !isDisabled && onChange(value)}
			disabled={isDisabled}
			accessibilityRole='radio'
			accessibilityState={{
				checked: isSelected,
				disabled: isDisabled,
			}}
			{...props}
		>
			<View style={[itemStyles, typeof style === 'object' ? style : {}]} />
		</Pressable>
	)
}

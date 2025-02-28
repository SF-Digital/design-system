import React, { useState, useCallback } from 'react'
import { SwitchProps as RNSwitchProps, Switch as RNSwitch } from 'react-native'
import { createStylesheet } from '../../utils/create-styles'
import { colors } from '@sf-digital-ui/tokens'

export interface SwitchProps extends RNSwitchProps {
	size?: 'sm' | 'md'
	color?: 'sf-green' | 'succession-blue'
	defaultValue?: boolean
}

type SwitchVariants = {
	size?: 'sm' | 'md'
	color?: 'sf-green' | 'succession-blue'
	disabled?: boolean
	isChecked?: boolean
}

const stylesheet = createStylesheet<SwitchVariants>({
	base: {
		maxWidth: 65,
		maxHeight: 40,
	},
	variants: {
		size: {
			sm: {
				transform: [{ scaleX: 1 }, { scaleY: 1 }],
			},
			md: {
				transform: [{ scaleY: 1.33 }, { scaleX: 1.33 }],
			},
		},
		color: {
			'sf-green': {},
			'succession-blue': {},
		},
		disabled: {
			true: {},
			false: {},
		},
		isChecked: {
			true: {},
			false: {},
		},
	},
	compoundVariants: [],
	defaultVariants: {
		size: 'md',
		color: 'sf-green',
		disabled: false,
		isChecked: false,
	},
})

export const Switch = ({
	value,
	defaultValue,
	onValueChange,
	size = 'md',
	color = 'sf-green',
	disabled,
	style,
	...props
}: SwitchProps) => {
	const [uncontrolledChecked, setUncontrolledChecked] = useState(
		defaultValue ?? false,
	)

	const isControlled = value !== undefined
	const isChecked = isControlled ? value : uncontrolledChecked

	const handleValueChange = useCallback(
		(newValue: boolean) => {
			if (!isControlled) {
				setUncontrolledChecked(newValue)
			}
			onValueChange?.(newValue)
		},
		[isControlled, onValueChange],
	)

	const trackColor =
		color === 'sf-green'
			? colors['primary-green']['500']
			: colors['succession-blue']['500']

	return (
		<RNSwitch
			style={[
				stylesheet({
					color,
					disabled,
					isChecked,
					size,
				}),
				style,
			]}
			trackColor={{
				false: colors.neutral['40'],
				true: trackColor,
			}}
			thumbColor='white'
			disabled={disabled}
			onValueChange={handleValueChange}
			value={isChecked}
			{...props}
		/>
	)
}

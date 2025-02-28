import React from 'react'
import { colors, fonts } from '@sf-digital-ui/tokens'
import { StyleSheet, Text, TextProps } from 'react-native'
import { useSelectContext } from '../Root'

export interface SelectValueProps extends TextProps {
	placeholder?: string
}

const valueStyles = StyleSheet.create({
	value: {
		fontFamily: fonts['sf-digital'],
		color: colors.neutral['900'],
	},
	placeholder: {
		color: colors.neutral['500'],
		fontWeight: 'thin',
	},
})

export const Value = ({ placeholder, style, ...props }: SelectValueProps) => {
	const { value } = useSelectContext()

	return (
		<Text
			style={[valueStyles.value, !value && valueStyles.placeholder, style]}
			{...props}
		>
			{value ?? placeholder}
		</Text>
	)
}

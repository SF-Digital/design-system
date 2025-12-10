import { colors } from '@sf-digital-ui/tokens'
import React from 'react'
import { StyleSheet, View, type ViewProps } from 'react-native'
import { useTooltipTheme } from '../Context'

export interface TooltipArrowProps extends ViewProps {
	size?: number
}

export const Arrow = ({ size = 8, style, ...props }: TooltipArrowProps) => {
	const theme = useTooltipTheme()
	const arrowColor =
		theme === 'light' ? colors.neutral[0] : colors['primary-black'][500]

	return (
		<View
			style={[
				styles.arrow,
				{
					width: size * 2,
					height: size,
					borderLeftWidth: size,
					borderRightWidth: size,
					borderBottomWidth: size,
					borderBottomColor: arrowColor,
				},
				style,
			]}
			{...props}
		/>
	)
}

const styles = StyleSheet.create({
	arrow: {
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		alignSelf: 'center',
	},
})

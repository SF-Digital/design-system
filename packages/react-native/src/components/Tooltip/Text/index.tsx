import { colors } from '@sf-digital-ui/tokens'
import type { PropsWithChildren } from 'react'
import React from 'react'
import { Text as RNText, type TextProps as RNTextProps } from 'react-native'
import { createStylesheet } from '../../../utils/create-styles'
import { useTooltipTheme } from '../Context'

export interface TooltipTextProps extends PropsWithChildren, RNTextProps {}

type TextVariants = {
	theme?: 'light' | 'dark'
}

const textStyles = createStylesheet<TextVariants>({
	base: {
		fontSize: 12,
		lineHeight: 16,
	},
	variants: {
		theme: {
			light: {
				color: colors['primary-grey'][200],
			},
			dark: {
				color: colors.neutral[0],
			},
		},
	},
	defaultVariants: {
		theme: 'light',
	},
})

export const Text = ({ children, style, ...props }: TooltipTextProps) => {
	const theme = useTooltipTheme()

	return (
		<RNText style={[...textStyles({ theme }), style]} {...props}>
			{children}
		</RNText>
	)
}

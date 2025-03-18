import { mobileFonts } from '@sf-digital-ui/tokens'
import React from 'react'
import {
	Text as RNText,
	TextProps as RNTextProps,
	StyleProp,
	StyleSheet,
	TextStyle,
} from 'react-native'
import { fontSizesInPx } from '../../tokens/font-sizes-in-px'
import { calculateLineHeight } from '../../utils/calculate-line-height'

export interface TextProps extends RNTextProps {
	size?: 'xs' | 'sm' | 'md' | 'lg'
	fontWeight?: 'thin' | 'light' | 'regular' | 'bold' | 'black'
	style?: StyleProp<TextStyle>
}

const textSizes = StyleSheet.create({
	base: {
		fontFamily: mobileFonts['regular-400'],
	},
	xs: {
		fontSize: fontSizesInPx['sf-xs'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-xs']),
	},
	sm: {
		fontSize: fontSizesInPx['sf-sm'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-sm']),
	},
	md: {
		fontSize: fontSizesInPx['sf-md'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-md']),
	},
	lg: {
		fontSize: fontSizesInPx['sf-lg'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-lg']),
	},
})

const fontWeights = StyleSheet.create({
	thin: {
		fontFamily: mobileFonts['thin-100'],
	},
	light: {
		fontFamily: mobileFonts['light-300'],
	},
	regular: {
		fontFamily: mobileFonts['regular-400'],
	},
	bold: {
		fontFamily: mobileFonts['bold-700'],
	},
	black: {
		fontFamily: mobileFonts['black-900'],
	},
})

export const Text = ({
	size = 'md',
	fontWeight,
	style,
	...props
}: TextProps) => {
	const sizeStyle = {
		...textSizes.base,
		...textSizes[size],
		...fontWeights[fontWeight || 'regular'],
	}

	return (
		<RNText style={[sizeStyle, style]} accessibilityRole='text' {...props} />
	)
}

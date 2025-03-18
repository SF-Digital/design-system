import { mobileFonts } from '@sf-digital-ui/tokens'
import React from 'react'
import {
	StyleSheet,
	Text,
	type StyleProp,
	type TextProps,
	type TextStyle,
} from 'react-native'
import { fontSizesInPx } from '../../tokens/font-sizes-in-px'
import { calculateLineHeight } from '../../utils/calculate-line-height'

export interface HeadingProps extends TextProps {
	size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	fontWeight?: 'thin' | 'light' | 'regular' | 'bold' | 'black'
	style?: StyleProp<TextStyle>
}

const headingSizes = StyleSheet.create({
	base: {
		fontFamily: mobileFonts['regular-400'],
	},
	h1: {
		fontSize: fontSizesInPx['sf-h1'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-h1']),
	},
	h2: {
		fontSize: fontSizesInPx['sf-h2'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-h2']),
	},
	h3: {
		fontSize: fontSizesInPx['sf-h3'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-h3']),
	},
	h4: {
		fontSize: fontSizesInPx['sf-h4'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-h4']),
	},
	h5: {
		fontSize: fontSizesInPx['sf-h5'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-h5']),
	},
	h6: {
		fontSize: fontSizesInPx['sf-h6'],
		lineHeight: calculateLineHeight(fontSizesInPx['sf-h6']),
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

export const Heading = ({
	size = 'h1',
	fontWeight,
	style,
	...props
}: HeadingProps) => {
	const sizeStyle = {
		...headingSizes.base,
		...headingSizes[size],
		...fontWeights[fontWeight || 'regular'],
	}

	return (
		<Text style={[sizeStyle, style]} accessibilityRole='header' {...props} />
	)
}

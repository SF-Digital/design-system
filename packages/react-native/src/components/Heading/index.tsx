import { fonts } from '@sf-digital-ui/tokens'
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
	style?: StyleProp<TextStyle>
}

const headingSizes = StyleSheet.create({
	base: {
		fontFamily: fonts['sf-digital'],
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

export const Heading = ({ size = 'h1', style, ...props }: HeadingProps) => {
	const sizeStyle = {
		...headingSizes[size],
		...headingSizes.base,
	}

	return (
		<Text style={[sizeStyle, style]} accessibilityRole='header' {...props} />
	)
}

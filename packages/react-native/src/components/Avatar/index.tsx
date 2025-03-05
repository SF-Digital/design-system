import React from 'react'
import {
	ImageProps as RNImageProps,
	Image as RNImage,
	StyleSheet,
	ImageStyle,
	StyleProp,
} from 'react-native'

export interface AvatarProps extends RNImageProps {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
	style?: StyleProp<ImageStyle>
}
const imageSizes = StyleSheet.create({
	base: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		backgroundColor: 'black',
		alignSelf: 'center',
	},
	xs: { height: 24, width: 24, borderRadius: 24 },
	sm: { height: 32, width: 32, borderRadius: 32 },
	md: { height: 40, width: 40, borderRadius: 40 },
	lg: { height: 48, width: 48, borderRadius: 48 },
	xl: { height: 56, width: 56, borderRadius: 56 },
	xxl: { height: 64, width: 64, borderRadius: 64 },
})

export const Avatar = ({ size = 'md', style, ...props }: AvatarProps) => {
	const sizeStyle = {
		...imageSizes[size],
		...imageSizes.base,
	}

	return (
		<RNImage style={[sizeStyle, style]} accessibilityRole='image' {...props} />
	)
}

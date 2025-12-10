import { colors } from '@sf-digital-ui/tokens'
import type { PropsWithChildren } from 'react'
import React, { useEffect, useState } from 'react'
import {
	Animated,
	Dimensions,
	Modal,
	Pressable,
	StyleSheet,
	View,
	type ViewProps,
} from 'react-native'
import { createStylesheet } from '../../../utils/create-styles'
import { TooltipThemeContext, useTooltipContext } from '../Context'

export type TooltipTheme = 'light' | 'dark'
export type TooltipSide = 'top' | 'bottom'

export interface TooltipContentProps extends PropsWithChildren, ViewProps {
	theme?: TooltipTheme
	side?: TooltipSide
	sideOffset?: number
	showArrow?: boolean
}

type ContentVariants = {
	theme?: TooltipTheme
}

const contentStyles = createStylesheet<ContentVariants>({
	base: {
		maxWidth: 320,
		borderRadius: 6,
		paddingHorizontal: 12,
		paddingVertical: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	variants: {
		theme: {
			light: {
				backgroundColor: colors.neutral[0],
			},
			dark: {
				backgroundColor: colors['primary-black'][500],
			},
		},
	},
	defaultVariants: {
		theme: 'light',
	},
})

export const Content = ({
	theme = 'light',
	side = 'top',
	sideOffset = 10,
	showArrow = true,
	children,
	style,
	...props
}: TooltipContentProps) => {
	const { open, setOpen, triggerLayout } = useTooltipContext()
	const [fadeAnim] = useState(new Animated.Value(0))
	const [position, setPosition] = useState<{ top: number; left: number }>({
		top: 0,
		left: 0,
	})
	const [contentSize, setContentSize] = useState<{
		width: number
		height: number
	} | null>(null)

	useEffect(() => {
		if (open) {
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 150,
				useNativeDriver: true,
			}).start()
		} else {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 150,
				useNativeDriver: true,
			}).start()
		}
	}, [open, fadeAnim])

	useEffect(() => {
		if (triggerLayout && contentSize) {
			const screenWidth = Dimensions.get('window').width
			const screenHeight = Dimensions.get('window').height
			let top = 0
			let left = 0

			switch (side) {
				case 'top':
					// Content above trigger, centered horizontally
					top = triggerLayout.y - contentSize.height - 10
					left =
						triggerLayout.x + triggerLayout.width / 2 - contentSize.width / 2
					break
				case 'bottom':
					// Content below trigger, centered horizontally
					top = triggerLayout.y + triggerLayout.height + 10
					left =
						triggerLayout.x + triggerLayout.width / 2 - contentSize.width / 2
					break
			}

			// Ensure tooltip stays within screen bounds
			left = Math.max(8, Math.min(left, screenWidth - contentSize.width - 8))
			top = Math.max(8, Math.min(top, screenHeight - contentSize.height - 8))

			setPosition({ top, left })
		}
	}, [triggerLayout, contentSize, side])

	const handleContentLayout = (event: {
		nativeEvent: { layout: { width: number; height: number } }
	}) => {
		const { width, height } = event.nativeEvent.layout
		setContentSize({ width, height })
	}

	const arrowSize = 8
	const arrowColor =
		theme === 'light' ? colors.neutral[0] : colors['primary-black'][500]

	if (!open) return null

	return (
		<Modal transparent visible={open} onRequestClose={() => setOpen(false)}>
			<Pressable style={styles.overlay} onPress={() => setOpen(false)}>
				<TooltipThemeContext.Provider value={theme}>
					<View
						style={{
							position: 'absolute',
							top: position.top,
							left: position.left,
						}}
					>
						{showArrow && side === 'bottom' && (
							<View
								style={[
									styles.arrow,
									{
										width: arrowSize * 2,
										height: arrowSize,
										borderLeftWidth: arrowSize,
										borderRightWidth: arrowSize,
										borderBottomWidth: arrowSize,
										borderBottomColor: arrowColor,
										transform: [{ rotate: '180deg' }],
									},
								]}
							/>
						)}
						<Animated.View
							style={[
								...contentStyles({ theme }),
								{
									opacity: fadeAnim,
								},
								style,
							]}
							onLayout={handleContentLayout}
							{...props}
						>
							{children}
						</Animated.View>
						{showArrow && side === 'top' && (
							<View
								style={[
									styles.arrow,
									{
										width: arrowSize * 2,
										height: arrowSize,
										borderLeftWidth: arrowSize,
										borderRightWidth: arrowSize,
										borderBottomWidth: arrowSize,
										borderBottomColor: arrowColor,
									},
								]}
							/>
						)}
					</View>
				</TooltipThemeContext.Provider>
			</Pressable>
		</Modal>
	)
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
	},
	arrow: {
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		alignSelf: 'center',
	},
})

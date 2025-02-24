import { colors } from '@sf-digital-ui/tokens'
import { createContext, useContext, useState } from 'react'
import { Pressable, type PressableProps } from 'react-native'
import { createStylesheet } from '../../../utils/create-styles'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link'
export type ButtonColor =
	| 'sf-green'
	| 'succession-blue'
	| 'neutral'
	| 'success'
	| 'warning'
	| 'error'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonVariants = {
	variant?: ButtonVariant
	color?: ButtonColor
	size?: ButtonSize
	iconButton?: boolean
	disabled?: boolean
	pressed?: boolean
}

type ButtonContextType = {
	color?: ButtonColor
	variant?: ButtonVariant
	size?: ButtonSize
	disabled?: boolean
	pressed?: boolean
} | null

const getRingStyle = (color = colors['primary-green']['500'], size = 4) => ({
	// iOS properties (Android will ignore)
	shadowColor: color,
	shadowOffset: { width: 0, height: 0 },
	shadowOpacity: 0.7,
	shadowRadius: size,

	// Android properties (iOS will ignore)
	elevation: size,
})

const ButtonContext = createContext<ButtonContextType>(null)

export const useButtonContext = () => {
	const context = useContext(ButtonContext)
	if (!context) {
		throw new Error('Button.Text must be used within Button.Root')
	}
	return context
}

const buttonStyles = createStylesheet<ButtonVariants>({
	base: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		gap: 4,
		borderRadius: 6,
	},
	variants: {
		size: {
			sm: {},
			md: {},
			lg: {},
		},
		variant: {
			primary: {},
			secondary: {
				backgroundColor: 'white',
				borderWidth: 1,
			},
			tertiary: {},
			link: {},
		},
		color: {
			'sf-green': {},
			'succession-blue': {},
			neutral: {},
			success: {},
			warning: {},
			error: {},
		},
		disabled: {
			true: {},
			false: {},
		},
		iconButton: {
			true: {},
			false: {},
		},
		pressed: {
			true: {},
			false: {},
		},
	},
	compoundVariants: [
		{
			variants: {
				size: 'sm',
				iconButton: false,
			},
			style: {
				paddingHorizontal: 24,
				paddingVertical: 8,
			},
		},
		{
			variants: {
				size: 'md',
				iconButton: false,
			},
			style: {
				paddingHorizontal: 24,
				paddingVertical: 10,
			},
		},
		{
			variants: {
				size: 'lg',
				iconButton: false,
			},
			style: {
				paddingHorizontal: 32,
				paddingVertical: 10,
			},
		},
		{
			variants: {
				size: 'sm',
				iconButton: true,
			},
			style: {
				padding: 8,
			},
		},
		{
			variants: {
				size: 'md',
				iconButton: true,
			},
			style: {
				padding: 10,
			},
		},
		{
			variants: {
				size: 'lg',
				iconButton: true,
			},
			style: {
				padding: 12,
			},
		},
		{
			variants: { color: 'sf-green', variant: 'primary' },
			style: {
				backgroundColor: colors['primary-green']['500'],
			},
		},
		{
			variants: { color: 'sf-green', variant: 'primary', pressed: true },
			style: {
				backgroundColor: colors['primary-green']['500'],
				...getRingStyle(colors['primary-green']['500']),
			},
		},
		{
			variants: { color: 'succession-blue', variant: 'primary' },
			style: {
				backgroundColor: colors['succession-blue']['500'],
			},
		},
		{
			variants: { color: 'succession-blue', variant: 'primary', pressed: true },
			style: {
				backgroundColor: colors['succession-blue']['500'],
				...getRingStyle(colors['succession-blue']['500']),
			},
		},
		{
			variants: { color: 'neutral', variant: 'primary' },
			style: {
				backgroundColor: colors.neutral['500'],
			},
		},
		{
			variants: { color: 'success', variant: 'primary' },
			style: {
				backgroundColor: colors.success['500'],
			},
		},
		{
			variants: { color: 'success', variant: 'primary', pressed: true },
			style: {
				backgroundColor: colors.success['500'],
				...getRingStyle(colors.success['500']),
			},
		},
		{
			variants: { color: 'warning', variant: 'primary' },
			style: {
				backgroundColor: colors.warning['500'],
			},
		},
		{
			variants: { color: 'warning', variant: 'primary', pressed: true },
			style: {
				backgroundColor: colors.warning['500'],
				...getRingStyle(colors.warning['500']),
			},
		},
		{
			variants: { color: 'error', variant: 'primary' },
			style: {
				backgroundColor: colors.error['500'],
			},
		},
		{
			variants: { color: 'error', variant: 'primary', pressed: true },
			style: {
				backgroundColor: colors.error['500'],
				...getRingStyle(colors.error['500']),
			},
		},
		{
			variants: { variant: 'primary', disabled: true },
			style: {
				backgroundColor: colors.neutral['20'],
				borderColor: colors.neutral['500'],
				cursor: 'auto',
			},
		},
		{
			variants: { color: 'sf-green', variant: 'secondary' },
			style: {
				borderColor: colors['primary-green']['500'],
			},
		},
		{
			variants: { color: 'sf-green', variant: 'secondary', pressed: true },
			style: {
				borderColor: colors['primary-green']['500'],
				...getRingStyle(colors['primary-green']['500']),
			},
		},
		{
			variants: { color: 'succession-blue', variant: 'secondary' },
			style: {
				borderColor: colors['succession-blue']['500'],
			},
		},
		{
			variants: {
				color: 'succession-blue',
				variant: 'secondary',
				pressed: true,
			},
			style: {
				borderColor: colors['succession-blue']['500'],
				...getRingStyle(colors['succession-blue']['500']),
			},
		},
		{
			variants: { color: 'neutral', variant: 'secondary' },
			style: {
				borderColor: colors.neutral['60'],
			},
		},
		{
			variants: { color: 'neutral', variant: 'secondary', pressed: true },
			style: {
				borderColor: colors.neutral['80'],
				...getRingStyle(colors.neutral['30']),
			},
		},
		{
			variants: { color: 'success', variant: 'secondary' },
			style: {
				borderColor: colors.success['500'],
			},
		},
		{
			variants: { color: 'success', variant: 'secondary', pressed: true },
			style: {
				borderColor: colors.success['500'],
				...getRingStyle(colors.success['500']),
			},
		},
		{
			variants: { color: 'error', variant: 'secondary' },
			style: {
				borderColor: colors.error['500'],
			},
		},
		{
			variants: { color: 'error', variant: 'secondary', pressed: true },
			style: {
				borderColor: colors.error['500'],
				...getRingStyle(colors.error['500']),
			},
		},
		{
			variants: { color: 'warning', variant: 'secondary' },
			style: {
				borderColor: colors.warning['500'],
			},
		},
		{
			variants: { color: 'warning', variant: 'secondary', pressed: true },
			style: {
				borderColor: colors.warning['500'],
				...getRingStyle(colors.warning['500']),
			},
		},
		{
			variants: { variant: 'secondary', disabled: true },
			style: {
				borderColor: colors.neutral['30'],
				backgroundColor: colors.neutral['10'],
				cursor: 'auto',
			},
		},
		{
			variants: { variant: 'tertiary', disabled: true },
			style: {
				backgroundColor: 'transparent',
				cursor: 'auto',
			},
		},
		{
			variants: { variant: 'link', disabled: true },
			style: {
				backgroundColor: 'transparent',
				cursor: 'auto',
			},
		},
	],
	defaultVariants: {
		size: 'md',
		variant: 'primary',
		color: 'sf-green',
		iconButton: false,
		disabled: false,
	},
})

export interface ButtonRootProps extends PressableProps {
	variant?: ButtonVariant
	color?: ButtonColor
	size?: ButtonSize
	iconButton?: boolean
	disabled?: boolean
}

export const Root = ({
	color,
	variant,
	size,
	iconButton,
	disabled,
	style,
	...props
}: ButtonRootProps) => {
	const [pressed, setPressed] = useState(false)
	const styles = buttonStyles({
		size,
		variant,
		color,
		iconButton,
		disabled,
		pressed,
	})

	const contextValue = { color, variant, size, disabled, pressed }

	return (
		<ButtonContext.Provider value={contextValue}>
			<Pressable
				onPressIn={() => setPressed(true)}
				onPressOut={() => setPressed(false)}
				style={[...styles, typeof style === 'object' ? style : {}]}
				{...props}
			/>
		</ButtonContext.Provider>
	)
}

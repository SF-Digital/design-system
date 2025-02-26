import { colors, fonts } from '@sf-digital-ui/tokens'
import { Text as RNText, type TextProps } from 'react-native'
import { createStylesheet } from '../../../utils/create-styles'
import {
	type ButtonColor,
	type ButtonSize,
	type ButtonVariant,
	useButtonContext,
} from '../Root'

type TextVariants = {
	variant?: ButtonVariant
	color?: ButtonColor
	size?: ButtonSize
	disabled?: boolean
	pressed?: boolean
}

const textStyles = createStylesheet<TextVariants>({
	base: {
		fontFamily: fonts['sf-digital'],
		fontWeight: 600,
		textAlign: 'center',
		width: '100%',
	},
	variants: {
		size: {
			sm: { fontSize: 14 },
			md: { fontSize: 16 },
			lg: { fontSize: 18 },
		},
		variant: {
			primary: {},
			secondary: {},
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
		pressed: {
			true: {},
			false: {},
		},
	},
	compoundVariants: [
		{
			variants: { color: 'sf-green', variant: 'primary' },
			style: { color: 'white' },
		},
		{
			variants: { color: 'sf-green', variant: 'primary', pressed: true },
			style: { color: 'white' },
		},
		{
			variants: { color: 'succession-blue', variant: 'primary' },
			style: { color: 'white' },
		},
		{
			variants: { color: 'succession-blue', variant: 'primary', pressed: true },
			style: { color: 'white' },
		},
		{
			variants: { color: 'neutral', variant: 'primary' },
			style: { color: 'white' },
		},
		{
			variants: { color: 'success', variant: 'primary' },
			style: { color: 'white' },
		},
		{
			variants: { color: 'success', variant: 'primary', pressed: true },
			style: { color: 'white' },
		},
		{
			variants: { color: 'warning', variant: 'primary' },
			style: { color: 'white' },
		},
		{
			variants: { color: 'warning', variant: 'primary', pressed: true },
			style: { color: 'white' },
		},
		{
			variants: { color: 'error', variant: 'primary' },
			style: { color: 'white' },
		},
		{
			variants: { color: 'error', variant: 'primary', pressed: true },
			style: { color: 'white' },
		},
		{
			variants: { variant: 'primary', disabled: true },
			style: { color: colors.neutral['80'] },
		},
		{
			variants: { color: 'sf-green', variant: 'secondary' },
			style: { color: colors['primary-green']['500'] },
		},
		{
			variants: { color: 'sf-green', variant: 'secondary', pressed: true },
			style: { color: colors['primary-green']['500'] },
		},
		{
			variants: { color: 'succession-blue', variant: 'secondary' },
			style: { color: colors['succession-blue']['500'] },
		},
		{
			variants: {
				color: 'succession-blue',
				variant: 'secondary',
				pressed: true,
			},
			style: { color: colors['succession-blue']['500'] },
		},
		{
			variants: { color: 'neutral', variant: 'secondary' },
			style: { color: colors.neutral['500'] },
		},
		{
			variants: { color: 'neutral', variant: 'secondary', pressed: true },
			style: { color: colors.neutral['500'] },
		},
		{
			variants: { color: 'success', variant: 'secondary' },
			style: { color: colors.success['600'] },
		},
		{
			variants: { color: 'success', variant: 'secondary', pressed: true },
			style: { color: colors.success['700'] },
		},
		{
			variants: { color: 'error', variant: 'secondary' },
			style: { color: colors.error['600'] },
		},
		{
			variants: { color: 'error', variant: 'secondary', pressed: true },
			style: { color: colors.error['700'] },
		},
		{
			variants: { color: 'warning', variant: 'secondary' },
			style: { color: colors.warning['600'] },
		},
		{
			variants: { color: 'warning', variant: 'secondary', pressed: true },
			style: { color: colors.warning['700'] },
		},
		{
			variants: { variant: 'secondary', disabled: true },
			style: { color: colors.neutral['70'] },
		},
		{
			variants: { color: 'sf-green', variant: 'tertiary' },
			style: { color: colors['primary-green']['500'] },
		},
		{
			variants: { color: 'sf-green', variant: 'tertiary', pressed: true },
			style: { color: colors['primary-green']['700'] },
		},
		{
			variants: { color: 'succession-blue', variant: 'tertiary' },
			style: { color: colors['succession-blue']['500'] },
		},
		{
			variants: {
				color: 'succession-blue',
				variant: 'tertiary',
				pressed: true,
			},
			style: { color: colors['succession-blue']['700'] },
		},
		{
			variants: { color: 'neutral', variant: 'tertiary' },
			style: { color: colors.neutral['500'] },
		},
		{
			variants: { color: 'neutral', variant: 'tertiary', pressed: true },
			style: { color: colors.neutral['700'] },
		},
		{
			variants: { color: 'success', variant: 'tertiary' },
			style: { color: colors.success['600'] },
		},
		{
			variants: { color: 'success', variant: 'tertiary', pressed: true },
			style: { color: colors.success['700'] },
		},
		{
			variants: { color: 'warning', variant: 'tertiary' },
			style: { color: colors.warning['600'] },
		},
		{
			variants: { color: 'warning', variant: 'tertiary', pressed: true },
			style: { color: colors.warning['700'] },
		},
		{
			variants: { color: 'error', variant: 'tertiary' },
			style: { color: colors.error['600'] },
		},
		{
			variants: { color: 'error', variant: 'tertiary', pressed: true },
			style: { color: colors.error['700'] },
		},
		{
			variants: { variant: 'tertiary', disabled: true },
			style: { color: colors.neutral['80'] },
		},
		{
			variants: { color: 'neutral', variant: 'link' },
			style: { color: colors.neutral['600'] },
		},
		{
			variants: { color: 'neutral', variant: 'link', pressed: true },
			style: { color: colors.neutral['700'] },
		},
		{
			variants: { color: 'sf-green', variant: 'link' },
			style: { color: colors['primary-green']['500'] },
		},
		{
			variants: { color: 'sf-green', variant: 'link', pressed: true },
			style: { color: colors['primary-green']['600'] },
		},
		{
			variants: { color: 'succession-blue', variant: 'link' },
			style: { color: colors['succession-blue']['500'] },
		},
		{
			variants: { color: 'succession-blue', variant: 'link', pressed: true },
			style: { color: colors['succession-blue']['600'] },
		},
		{
			variants: { color: 'success', variant: 'link' },
			style: { color: colors.success['600'] },
		},
		{
			variants: { color: 'success', variant: 'link', pressed: true },
			style: { color: colors.success['700'] },
		},
		{
			variants: { color: 'warning', variant: 'link' },
			style: { color: colors.warning['600'] },
		},
		{
			variants: { color: 'warning', variant: 'link', pressed: true },
			style: { color: colors.warning['700'] },
		},
		{
			variants: { color: 'error', variant: 'link' },
			style: { color: colors.error['600'] },
		},
		{
			variants: { color: 'error', variant: 'link', pressed: true },
			style: { color: colors.error['700'] },
		},
		{
			variants: { variant: 'link', disabled: true },
			style: { color: colors.neutral['70'] },
		},
	],
	defaultVariants: {
		size: 'md',
		variant: 'primary',
		color: 'sf-green',
		disabled: false,
	},
})

export const Text = ({ style, ...props }: TextProps) => {
	const { color, variant, size, disabled, pressed } = useButtonContext()

	return (
		<RNText
			style={[
				...textStyles({ color, variant, size, disabled, pressed }),
				typeof style === 'object' ? style : {},
			]}
			accessibilityRole='text'
			{...props}
		/>
	)
}

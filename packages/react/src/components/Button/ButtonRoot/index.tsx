import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
	base: [
		'font-heading align-center flex items-center gap-1 rounded-md font-semibold transition duration-150 disabled:cursor-not-allowed',
	],

	variants: {
		color: {
			'sf-green': [],
			'succession-blue': [],
			neutral: [],
			success: [],
			warning: [],
			error: [],
		},
		variant: {
			primary: [],
			secondary: 'border bg-white',
			tertiary: [],
			link: [],
		},

		size: {
			sm: 'text-sf-sm',
			md: 'text-sf-md',
			lg: 'text-sf-lg',
		},
		iconButton: {
			true: [],
			false: [],
		},
	},
	compoundVariants: [
		{
			size: 'sm',
			iconButton: false,
			className: 'px-6 py-2',
		},
		{
			size: 'md',
			iconButton: false,
			className: 'px-6 py-2.5',
		},
		{
			size: 'lg',
			iconButton: false,
			className: 'px-8 py-4',
		},
		{
			size: 'sm',
			iconButton: true,
			className: 'p-2',
		},
		{
			size: 'md',
			iconButton: true,
			className: 'p-2.5',
		},
		{
			size: 'lg',
			iconButton: true,
			className: 'p-3',
		},
		{
			color: 'sf-green',
			variant: 'primary',
			className:
				'bg-primary-green-500 text-white hover:bg-primary-green-700 active:bg-primary-green-500 active:ring-4 active:ring-primary-green-50 disabled:border disabled:border-neutral-50 disabled:bg-neutral-20 disabled:text-neutral-80 disabled:hover:bg-neutral-20 disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'succession-blue',
			variant: 'primary',
			className:
				'bg-succession-blue-500 text-white hover:bg-succession-blue-700 active:bg-succession-blue-500 active:ring-4 active:ring-succession-blue-50 disabled:border disabled:border-neutral-50 disabled:bg-neutral-20 disabled:text-neutral-80 disabled:hover:bg-neutral-20 disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'success',
			variant: 'primary',
			className:
				'bg-success-500 text-white hover:bg-success-700 active:bg-success-500 active:ring-4 active:ring-success-100 disabled:bg-neutral-30 disabled:text-neutral-70 disabled:hover:bg-neutral-30 disabled:hover:text-neutral-70 disabled:active:ring-0',
		},
		{
			color: 'warning',
			variant: 'primary',
			className:
				'bg-warning-500 text-white hover:bg-warning-700 active:bg-warning-500 active:ring-4 active:ring-warning-100 disabled:bg-neutral-30 disabled:text-neutral-70 disabled:hover:bg-neutral-30 disabled:hover:text-neutral-70 disabled:active:ring-0',
		},
		{
			color: 'error',
			variant: 'primary',
			className:
				'bg-error-500 text-white hover:bg-error-700 active:bg-error-500 active:ring-4 active:ring-error-100 disabled:bg-neutral-30 disabled:text-neutral-70 disabled:hover:bg-neutral-30 disabled:hover:text-neutral-70 disabled:active:ring-0',
		},
		{
			color: 'neutral',
			variant: 'secondary',
			className:
				'border-neutral-60 text-neutral-500 hover:bg-neutral-20 hover:text-neutral-700 active:border-neutral-80 active:bg-neutral-20 active:bg-transparent active:text-neutral-500 active:ring-4 active:ring-neutral-30 disabled:border-neutral-50 disabled:bg-white disabled:text-neutral-80 disabled:hover:border-neutral-50 disabled:hover:bg-white disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'sf-green',
			variant: 'secondary',
			className:
				'border-primary-green-500 text-primary-green-500 hover:border-primary-green-700 hover:bg-primary-green-50 hover:text-primary-green-700 active:border-primary-green-500 active:bg-transparent active:text-primary-green-500 active:ring-4 active:ring-primary-green-50 disabled:border-neutral-50 disabled:bg-white disabled:text-neutral-80 disabled:hover:border-neutral-50 disabled:hover:bg-white disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'succession-blue',
			variant: 'secondary',
			className:
				'border-succession-blue-500 text-succession-blue-500 hover:border-succession-blue-700 hover:bg-succession-blue-50 hover:text-succession-blue-700 active:border-succession-blue-500 active:bg-transparent active:text-succession-blue-500 active:ring-4 active:ring-succession-blue-50 disabled:border-neutral-50 disabled:bg-white disabled:text-neutral-80 disabled:hover:border-neutral-50 disabled:hover:bg-white disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'success',
			variant: 'secondary',
			className:
				'border-success-100 text-success-600 hover:border-success-100 hover:bg-success-50 hover:text-success-800 active:border-success-100 active:bg-white active:text-success-700 active:ring-4 active:ring-success-50 disabled:border-neutral-30 disabled:bg-neutral-10 disabled:text-neutral-70 disabled:hover:border-neutral-30 disabled:hover:bg-neutral-10 disabled:hover:text-neutral-70 disabled:active:ring-0',
		},
		{
			color: 'error',
			variant: 'secondary',
			className:
				'border-error-100 text-error-600 hover:border-error-100 hover:bg-error-50 hover:text-error-800 active:border-error-100 active:bg-white active:text-error-700 active:ring-4 active:ring-error-50 disabled:border-neutral-30 disabled:bg-neutral-10 disabled:text-neutral-70 disabled:hover:border-neutral-30 disabled:hover:bg-neutral-10 disabled:hover:text-neutral-70 disabled:active:ring-0',
		},
		{
			color: 'warning',
			variant: 'secondary',
			className:
				'border-warning-100 text-warning-600 hover:border-warning-100 hover:bg-warning-50 hover:text-warning-800 active:border-warning-100 active:bg-white active:text-warning-700 active:ring-4 active:ring-warning-50 disabled:border-neutral-30 disabled:bg-neutral-10 disabled:text-neutral-70 disabled:hover:border-neutral-30 disabled:hover:bg-neutral-10 disabled:hover:text-neutral-70 disabled:active:ring-0',
		},
		{
			color: 'sf-green',
			variant: 'tertiary',
			className:
				'text-primary-green-500 hover:bg-primary-green-50 hover:text-primary-green-700 active:bg-transparent active:text-primary-green-500 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'succession-blue',
			variant: 'tertiary',
			className:
				'text-succession-blue-500 hover:bg-succession-blue-50 hover:text-succession-blue-700 active:bg-transparent active:text-succession-blue-500 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'neutral',
			variant: 'tertiary',
			className:
				'text-neutral-700 hover:bg-neutral-20 hover:text-neutral-700 active:bg-transparent active:text-neutral-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'success',
			variant: 'tertiary',
			className:
				'text-success-600 hover:bg-success-50 hover:text-success-800 active:bg-transparent active:text-success-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'warning',
			variant: 'tertiary',
			className:
				'text-warning-600 hover:bg-warning-50 hover:text-warning-800 active:bg-transparent active:text-warning-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'error',
			variant: 'tertiary',
			className:
				'text-error-600 hover:bg-error-50 hover:text-error-800 active:bg-transparent active:text-error-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'neutral',
			variant: 'link',
			className:
				'text-neutral-600 hover:text-neutral-800 active:bg-transparent active:text-neutral-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'sf-green',
			variant: 'link',
			className:
				'text-primary-green-500 hover:text-primary-green-700 active:bg-transparent active:text-primary-green-600 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'succession-blue',
			variant: 'link',
			className:
				'text-succession-blue-500 hover:text-succession-blue-700 active:bg-transparent active:text-succession-blue-600 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:text-neutral-80 disabled:active:ring-0',
		},
		{
			color: 'success',
			variant: 'link',
			className:
				'text-success-600 hover:text-success-800 active:bg-transparent active:text-success-700 disabled:bg-transparent disabled:text-neutral-70 disabled:hover:text-neutral-70 disabled:active:ring-0',
		},
		{
			color: 'warning',
			variant: 'link',
			className:
				'text-warning-600 hover:text-warning-800 active:bg-transparent active:text-warning-700 disabled:bg-transparent disabled:text-neutral-70 disabled:hover:text-neutral-70 disabled:active:ring-0',
		},
		{
			color: 'error',
			variant: 'link',
			className:
				'text-error-600 hover:text-error-800 active:bg-transparent active:text-error-700 disabled:bg-transparent disabled:text-neutral-70 disabled:hover:text-neutral-70 disabled:active:ring-0',
		},
	],
	defaultVariants: {
		variant: 'primary',
		color: 'sf-green',
		size: 'md',
		iconButton: false,
	},
})

export type ButtonRootProps = ComponentProps<'button'> &
	VariantProps<typeof button>

export const Root = ({
	variant,
	className,
	size,
	color,
	iconButton,
	...props
}: ButtonRootProps) => {
	return (
		<button
			{...props}
			className={button({
				variant,
				color,
				size,
				iconButton,
				className,
			})}
		/>
	)
}

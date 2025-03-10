import * as Tabs from '@radix-ui/react-tabs'
import { VariantProps, tv } from 'tailwind-variants'

const tab = tv(
	{
		base: ['font-sf-digital font-bold text-neutral-80'],

		variants: {
			variant: {
				solid: '',
				underline: '',
				'underline-filled': '',
				panel: '',
			},
			color: {
				'sf-green': [],
				'succession-blue': [],
				neutral: [],
			},
			size: {
				base: 'px-4 py-2',
				lg: 'px-10 py-2.5',
			},
		},
		compoundVariants: [
			{
				color: 'sf-green',
				variant: 'solid',
				className:
					'rounded-md bg-neutral-20 text-sf-lg hover:bg-neutral-40 hover:text-neutral-90 data-[state="active"]:bg-primary-green-50 data-[state="active"]:text-primary-green-500',
			},
			{
				color: 'succession-blue',
				variant: 'solid',
				className:
					'rounded-md bg-neutral-20 text-sf-lg hover:bg-neutral-40 hover:text-neutral-90 data-[state="active"]:bg-succession-blue-100 data-[state="active"]:text-succession-blue-500',
			},
			{
				color: 'sf-green',
				variant: 'underline',
				className:
					'text-sf-lg transition-all duration-200 hover:text-neutral-90 data-[state="active"]:border-b-2 data-[state="active"]:border-b-primary-green-500 data-[state="active"]:text-primary-green-500',
			},
			{
				color: 'succession-blue',
				variant: 'underline',
				className:
					'text-sf-lg transition-all duration-200 hover:text-neutral-90 data-[state="active"]:border-b-2 data-[state="active"]:border-b-succession-blue-500 data-[state="active"]:text-succession-blue-500',
			},
			{
				color: 'sf-green',
				variant: 'underline-filled',
				className:
					'text-sf-lg transition-all duration-200 hover:text-neutral-90 data-[state="active"]:border-b-2 data-[state="active"]:border-b-primary-green-500 data-[state="active"]:bg-primary-green-50 data-[state="active"]:text-primary-green-500',
			},
			{
				color: 'succession-blue',
				variant: 'underline-filled',
				className:
					'text-sf-lg transition-all duration-200 hover:text-neutral-90 data-[state="active"]:border-b-2 data-[state="active"]:border-b-succession-blue-500 data-[state="active"]:bg-succession-blue-50 data-[state="active"]:text-succession-blue-500',
			},
			{
				color: 'neutral',
				variant: 'solid',
				className:
					'rounded-md bg-transparent text-sf-lg text-neutral-100 hover:bg-neutral-10 hover:text-neutral-200 data-[state="active"]:bg-neutral-20 data-[state="active"]:text-neutral-200',
			},
			{
				color: 'neutral',
				variant: 'panel',
				className:
					'rounded-md text-sf-lg text-neutral-100 hover:bg-neutral-10 hover:text-neutral-200 data-[state="active"]:bg-white data-[state="active"]:text-neutral-500 data-[state="active"]:drop-shadow-sm',
			},
		],
		defaultVariants: { variant: 'solid', size: 'base', color: 'sf-green' },
	},
	{
		twMerge: false,
	},
)

export type TabsTriggerProps = Tabs.TabsTriggerProps & VariantProps<typeof tab>

export const Trigger = ({
	size,
	variant,
	color,
	className,
	...props
}: TabsTriggerProps) => {
	return (
		<Tabs.Trigger
			{...props}
			className={tab({
				className,
				variant,
				size,
				color,
			})}
		/>
	)
}

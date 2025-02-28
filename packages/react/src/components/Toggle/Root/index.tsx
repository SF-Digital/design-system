import * as Switch from '@radix-ui/react-switch'
import { VariantProps, tv } from 'tailwind-variants'

const toggle = tv({
	base: [
		'flex flex-row items-center rounded-lg p-0.5 data-[state="checked"]:justify-end data-[disabled]:bg-neutral-40 data-[state="unchecked"]:bg-neutral-40',
	],

	variants: {
		size: {
			sm: 'h-5 w-9',
			md: 'h-6 w-11',
		},
		color: {
			'sf-green': 'data-[state="checked"]:bg-primary-green-500',
			'succession-blue': 'data-[state="checked"]:bg-succession-blue-500',
		},
	},
	defaultVariants: { size: 'md', color: 'sf-green' },
})

export type ToggleRootProps = Switch.SwitchProps & VariantProps<typeof toggle>

export const Root = ({ className, color, size, ...props }: ToggleRootProps) => {
	return (
		<Switch.Root {...props} className={toggle({ className, size, color })} />
	)
}

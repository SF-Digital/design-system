import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@sf-digital-ui/react'
import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `Checkbox` component, which is a React Element built using Pattern Composition.
 *
 * ## Usage:
 * `Checkbox.Root` - The controller of the checkbox.
 *
 * `Checkbox.Indicator` - The element that will handle the ui feedback showing the state of the component.
 *
 * `Checkbox.Check` - The check mark that will appear when the state is .
 *
 * ## API Reference:
 * ### Root
 *
 * `size: 'sm' | 'md' | 'lg'` - The size of the checkbox.
 *
 * `color: 'sf-green' | 'succession-blue'` - The color of the checkbox.
 *
 * `checked: boolean` - Whether the checkbox is checked.
 */

const CheckboxStory: Meta<typeof Checkbox.Root> = {
	title: 'Form/Checkbox',
	component: Checkbox.Root,
	args: {
		size: 'md',
		checked: true,
		color: 'sf-green',
	},
	argTypes: {
		color: {
			control: {
				type: 'inline-radio',
			},
			options: ['sf-green', 'succession-blue'],
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'inline-radio',
			},
			checked: { control: { type: 'boolean' } },
		},
	},
}

export default CheckboxStory

export const Primary: StoryObj = {
	args: {
		children: (
			<>
				<Checkbox.Indicator>
					<Checkbox.Check />
				</Checkbox.Indicator>
			</>
		),
	},
}

export const SuccessionBlue: StoryObj = {
	args: {
		children: (
			<>
				<Checkbox.Root size='md' color='succession-blue'>
					<Checkbox.Indicator>
						<Checkbox.Check />
					</Checkbox.Indicator>
				</Checkbox.Root>
			</>
		),
	},
}

export const WithLabel: StoryObj<typeof Checkbox.Root> = {
	render: (args) => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				gap: '10px',
			}}
		>
			<Checkbox.Root size={args.size} checked={args.checked}>
				<Checkbox.Indicator>
					<Checkbox.Check />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<p
				className={`text-primary-green-500 text-sf-${args.size ?? 'sm'} font-auto`}
			>
				Checkbox Label
			</p>
		</div>
	),
}

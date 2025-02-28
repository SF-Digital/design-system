import {
	Select,
	SelectRootProps,
	SelectTriggerProps,
} from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { ChevronDown, User } from 'lucide-react'
import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `Select` component, which is a React element built using Pattern Composition. Types generated for each component are exported as `Select{ComponentName}Props`.
 *
 * ## Usage:
 *
 * ```import { Select } from '@sf-digital-ui/react'```
 *
 * Select is a composition of the following components:
 *
 * `Select.Root` - Contains all the select parts
 *
 * `Select.Trigger` - The button that toggles the select
 *
 * `Select.Value` - The value of the select
 *
 * `Select.Icon` - The icon of the select
 *
 * `Select.Portal` - The container that holds the Content
 *
 * `Select.Content` - The content that pops out when select is open
 *
 * `Select.Viewport` - The scrolling viewport that holds the items
 *
 * `Select.Item` - The item that can be selected
 *
 * `Select.ItemText` - The text of the item
 *
 * `Select.ItemIndicator` - The indicator of the item
 *
 * `Select.Separator` - The separator of the items
 *
 * ## API Reference:
 * ### Root
 * Props
 *
 * `value: string` - The value of the select
 *
 * `onValueChange: (value: string) => void` - callback for value change
 *
 * `open: boolean` - controlled open state of the select
 *
 * `onOpenChange: (open: boolean) => void` - callback for open state change
 *
 * `disabled: boolean` - disabled state of the select
 *
 * `name: string` - name of the select
 *
 * ### Trigger
 * Props
 *
 * `asChild: boolean`: merging props and behaviour of the child component
 *
 * Data Attribute
 *
 * `[data-state]: 'open' | 'closed'`
 *
 * `[data-disabled]`
 *
 * `[data-placeholder]`
 *
 * ### Value
 * Props
 *
 * `placeholder: ReactNode` - The placeholder of the value
 *
 * ### Content
 * Props
 *
 * `position: 'popper' | 'item-aligned'` - The position of the content
 *
 * `side: 'top' | 'bottom' | 'left' | 'right'` - The side of the content
 *
 * `sideOffset: number` - distance in px from the trigger
 *
 * `align: 'start' | 'center' | 'end'` - The alignment of the content
 *
 * 'color: 'sf-green' | 'succession-blue'` - The color of the styling
 *
 * Data Attribute
 *
 * `[data-side]: 'top' | 'bottom' | 'left' | 'right'` - The side of the content
 *
 * `[data-state]: 'open' | 'closed'`
 *
 * `[data-align]: 'start' | 'center' | 'end'`
 *
 * Item
 * Props
 *
 * `value: string` - The value of the item
 *
 * `textValue: string` - The text value of the item
 *
 * `disabled: boolean`
 *
 * Data Attribute
 *
 * `[data-state]: 'checked' | 'unchecked'`
 *
 * `[data-disabled]`
 *
 * `[data-highlighted]`
 */

const SelectStory: Meta<SelectRootProps & SelectTriggerProps> = {
	title: 'Form/Select',
	component: Select.Root,
	args: {
		color: 'sf-green',
	},
	argTypes: {
		color: {
			options: ['sf-green', 'succession-blue'],
			control: { type: 'inline-radio' },
		},
	},
}

export default SelectStory

const exampleSelection = [
	'Option 1',
	'Option 2',
	'Option 3',
	'Option 4',
	'Option 5',
]

const longExampleSelection = [
	'Option 1',
	'Option 2',
	'Option 3',
	'Option 4',
	'Option 5',
	'Option 6',
	'Option 7',
	'Option 8',
	'Option 9',
	'Option 10',
	'Option 11',
	'Option 12',
	'Option 13',
	'Option 14',
	'Option 15',
	'Option 16',
	'Option 17',
	'Option 18',
	'Option 19',
	'Option 20',
	'Option 21',
	'Option 22',
	'Option 23',
	'Option 24',
	'Option 25',
	'Option 26',
	'Option 27',
	'Option 28',
	'Option 29',
	'Option 30',
]

export const Default: StoryObj<SelectRootProps & SelectTriggerProps> = {
	render: (args) => (
		<Select.Root {...args}>
			<Select.Trigger className='max-w-80 w-full' color={args.color}>
				<div className='flex flex-row items-center gap-2'>
					<Select.Value placeholder='Select team member' />
				</div>
				<Select.Icon>
					<ChevronDown size={20} />
				</Select.Icon>
			</Select.Trigger>

			<Select.Portal>
				<Select.Content position='popper' className='overflow-hidden'>
					<Select.Viewport>
						{exampleSelection.map((item, index) => (
							<Select.Item key={index} value={index.toString()}>
								<div className='flex items-center flex-row gap-2'>
									<User size={20} />
									<Select.ItemText>{item}</Select.ItemText>
								</div>
							</Select.Item>
						))}
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	),
}

export const Scrollable: StoryObj<SelectRootProps> = {
	render: (args) => (
		<Select.Root {...args}>
			<Select.Trigger className='max-w-80 w-full'>
				<div className='flex flex-row items-center gap-2'>
					<Select.Value placeholder='Select team member' />
				</div>
				<Select.Icon>
					<ChevronDown size={20} />
				</Select.Icon>
			</Select.Trigger>

			<Select.Portal>
				<Select.Content position='popper' className=' overflow-hidden'>
					<Select.Viewport className='max-h-[inherit] overflow-y-auto'>
						{longExampleSelection.map((item, index) => (
							<Select.Item key={index} value={index.toString()}>
								<div className='flex items-center flex-row gap-2'>
									<User size={20} />
									<Select.ItemText>{item}</Select.ItemText>
								</div>
							</Select.Item>
						))}
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	),
}

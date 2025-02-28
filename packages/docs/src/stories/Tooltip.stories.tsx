import {
	TooltipProviderProps,
	Tooltip,
	Text,
	TooltipContentProps,
} from '@sf-digital-ui/react'
import { HelpCircle } from 'lucide-react'
import { Meta, StoryObj } from '@storybook/react'

import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `Tooltip` component, which is a React element built using Pattern Composition. Types generated for each component are exported as `Tooltip{ComponentName}Props`.
 *
 * ## Usage:
 *
 * ```import { Tooltip } from '@sf-digital-ui/react'```
 *
 * Tooltip is a composition of the following components:
 *
 * `Tooltip.Provider` - Wraps your app to provide global functionality to your tooltips
 *
 * `Tooltip.Root` - Contains all the tooltip parts
 *
 * `Tooltip.Trigger` - The toggle button that activates the Content
 *
 * `Tooltip.Portal` - The container that holds the Content
 *
 * `Tooltip.Content` - The content that pops out when tooltip is open
 *
 * `Tooltip.Arrow` - The arrow that points to the trigger
 *
 * ## API Reference:
 * ### Provider
 * Props
 *
 * `delayDuration: number` - The delay duration of the content
 *
 * `skipDelayDuration: number` - The skip delay duration of the content
 *
 * `disableHoverableContent: boolean` - Prevents content from remaining open when hovering
 *
 * ### Root
 * Props
 *
 * `defaultOpen: boolean` - initial rendered open state of the tooltip
 *
 * `open: boolean` - controlled open state of the tooltip
 *
 * `onOpenChange: (open: boolean) => void` - callback for open state change
 *
 * ### Trigger
 * Props
 *
 * `asChild: boolean`: merging props and behaviour of the child component
 *
 * Data Attribute
 *
 * `[data-state]: 'closed' | 'delayed-open' | 'instant-open'`
 *
 * ### Portal
 * Props
 *
 * `forceMount: boolean` - when more control is needed, useful for animation controlling
 *
 * ### Content
 * Props
 *
 * `side: 'top' | 'bottom' | 'left' | 'right'` - The side of the tooltip
 *
 * `sideOffset: number` - distance in px from the trigger
 *
 * Data Attribute
 *
 * `[data-side]: 'top' | 'bottom' | 'left' | 'right'` - The side of the tooltip
 * `[data-state]: 'closed' | 'delayed-open' | 'instant-open'`
 * `[data-align]: 'start' | 'center' | 'end'`
 *
 * ### Arrow
 * Props
 *
 * `width: number` - The width of the arrow
 * `height: number` - The height of the arrow
 *
 */

const TooltipStory: Meta<TooltipProviderProps & TooltipContentProps> = {
	title: 'Components/Tooltip',
	component: Tooltip.Provider,
	args: {
		theme: 'light',
		side: 'top',
	},
	argTypes: {
		theme: {
			control: {
				type: 'inline-radio',
			},
			options: ['light', 'dark'],
		},
		side: {
			control: {
				type: 'inline-radio',
			},
			options: ['top', 'bottom', 'left', 'right'],
		},
	},
}

export default TooltipStory

// TODO: sort the colors here
export const Large: StoryObj<TooltipProviderProps & TooltipContentProps> = {
	render: (args) => (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<button>
						<HelpCircle style={{ color: '#676767' }} />
					</button>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content {...args}>
						<Tooltip.Arrow />
						<div className='flex flex-col gap-2'>
							<Text className='text-sf-xs font-semibold text-neutral-600'>
								This is a tooltip
							</Text>
							<Text className='text-sf-xs font-regular text-neutral-400'>
								Tooltips are used to describe or identify an element. In most
								scenarios, tooltips help the user understand the meaning,
								function or alt-text of an element.
							</Text>
						</div>
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	),

	decorators: [
		(Story) => (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '50vh',

					backgroundColor: '#f5f5f5',
				}}
			>
				{Story()}
			</div>
		),
	],
}

export const Small: StoryObj<TooltipProviderProps & TooltipContentProps> = {
	render: (args) => (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<button>
						<HelpCircle style={{ color: '#98A2B3' }} />
					</button>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content {...args}>
						<Tooltip.Arrow />
						<Text className='text-sf-xs font-semibold'>This is a tooltip</Text>
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	),
	decorators: [
		(Story) => (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '50vh',

					backgroundColor: '#f5f5f5',
				}}
			>
				{Story()}
			</div>
		),
	],
}

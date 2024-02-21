import {
  Toggle,
  ToggleControlProps,
  ToggleRootProps,
} from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `Toggle` component, which is a React element built using Pattern Composition. Types generated for each component are exported as `Toggle{ComponentName}Props`.
 *
 * ## Usage:
 *
 * ```import { Toggle } from '@sf-digital-ui/react'```
 *
 *  Toggle is a composition of the following components:
 *
 *  `Toggle.Root` - The outer wrapper for the toggle
 *
 * `Toggle.Control` - The element that represents whether the toggle is on or off
 *
 *  ## API Reference:
 * ### Root
 * Props
 *
 * `size: 'sm' | 'md'` - The size of the toggle
 *
 * `pressed: boolean` - The state of the toggle
 *
 * `disabled: boolean` - Whether the toggle is disabled
 *
 * `onPressedChange: (pressed: boolean) => void` - Callback for when the toggle is pressed
 *
 * `defaultPressed: boolean` - The default state of the toggle
 *
 * Data attribute
 *
 * `[data-state]: 'on' | 'off'` - The state of the toggle
 *
 * `[data-disabled]` - The toggle will be disabled
 *
 * ### Control
 * Props
 *
 * `size: 'sm' | 'md'` - The size of the control
 */

export default {
  title: 'Components/Toggle',
  component: Toggle.Root,
  args: {
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<ToggleRootProps>

export const Default: StoryObj<ToggleRootProps & ToggleControlProps> = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <Toggle.Root size={args.size}>
      <Toggle.Control size={args.size} />
    </Toggle.Root>
  ),
}

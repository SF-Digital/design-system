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
 * `checked: boolean` - Whether the checkbox is checked.
 */

export default {
  title: 'Form/Checkbox',
  component: Checkbox.Root,
  args: {
    size: 'md',
    checked: true,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
      checked: { control: { type: 'boolean' } },
    },
    action: 'click',
  },
} as Meta<typeof Checkbox.Root>

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

export const WithLabel: StoryObj = {
  args: {
    children: (
      <>
        <Checkbox.Indicator>
          <Checkbox.Check />
        </Checkbox.Indicator>
      </>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div>{Story()}</div>
          <p
            className={` text-primary-green-500 text-sf-${Story().props?.size ?? 'sm'} font-auto`}
          >
            Checkbox Label
          </p>
        </div>
      )
    },
  ],
}

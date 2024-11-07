import {
  RadioGroup,
  RadioGroupItemProps,
  RadioGroupRootProps,
} from '@sf-digital-ui/react'

import '@sf-digital-ui/react/dist/output.css'
import { Meta, StoryObj } from '@storybook/react'

/**
 * This story displays the `RadioGroup` component, which is a React Element built using Pattern Composition.
 *
 * ## Usage:
 *
 * `RadioGroup.Root` - The root element wrapping the group of `x` items.
 *
 * `RadioGroup.Item` - The individual radio item.
 *
 * ## API Reference:
 * ### Item
 *
 * `size: 'sm' | 'md' | 'lg'` - The size of the radio item.
 */

const RadioGroupStory: Meta<RadioGroupRootProps & RadioGroupItemProps> = {
  title: 'Form/RadioGroup',
  component: RadioGroup.Root,
  args: {
    size: 'sm',
    defaultValue: '1',
  },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
      options: ['sf-green', 'succession-blue'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default RadioGroupStory

export const Default: StoryObj<typeof RadioGroup> = {
  render: (args) => (
    <RadioGroup.Root {...args}>
      <RadioGroup.Item value="1" {...args} />
      <RadioGroup.Item value="2" {...args} />
      <RadioGroup.Item value="3" {...args} />
    </RadioGroup.Root>
  ),
}

export const WithLabel: StoryObj<typeof RadioGroup> = {
  render: (args) => (
    <RadioGroup.Root {...args}>
      <div className="flex flex-row gap-2 items-center">
        <RadioGroup.Item value="1" size="sm" />
        <p className="text-sf-sm text-primary-green-500">Radio Label</p>
      </div>
    </RadioGroup.Root>
  ),
}

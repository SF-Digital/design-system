import { RadioGroup, RadioGroupRootProps } from '@sf-digital-ui/react'

import '@sf-digital-ui/react/dist/output.css'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup.Root,
  args: {
    size: 'sm',
    defaultValue: '1',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
} as Meta<RadioGroupRootProps>

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

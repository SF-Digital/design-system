import type { Meta, StoryObj } from '@storybook/react'
import * as Checkbox from '@sf-digital-ui/react/src/components/Checkbox'

export default {
  title: 'Form/Checkbox',
  component: Checkbox.Root,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
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

import type { Meta, StoryObj } from '@storybook/react'
import { ButtonRootProps } from '@sf-digital-ui/react'
import * as Button from '@sf-digital-ui/react/src/components/Button'
import { CaretLeft, CaretRight } from 'phosphor-react'

import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Form/Button',
  component: Button.Root,
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'error', 'warning'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    action: 'click',
  },
} as Meta<ButtonRootProps>

export const Primary: StoryObj<ButtonRootProps> = {}

export const Secondary: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Success: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'success',
    children: 'Create new',
  },
}

export const Warning: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'warning',
    children: 'Create new',
  },
}

export const Error: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'error',
    children: 'Create new',
  },
}

export const WithPrefix: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Prefix>
          <CaretLeft weight="bold" />
        </Button.Prefix>
        Button
      </>
    ),
  },
}

export const WithSuffix: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        Button
        <Button.Suffix>
          <CaretRight weight="bold" />
        </Button.Suffix>
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonRootProps> = {
  args: {
    disabled: true,
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@sf-digital-ui/react'
import { ArrowRight } from 'phosphor-react'

import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Form/Button',
  component: Button,
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
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Success: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
    children: 'Create new',
  },
}

export const Warning: StoryObj<ButtonProps> = {
  args: {
    variant: 'warning',
    children: 'Create new',
  },
}

export const Error: StoryObj<ButtonProps> = {
  args: {
    variant: 'error',
    children: 'Create new',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <ArrowRight weight="bold" /> Next Step
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

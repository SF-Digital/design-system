import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@sf-digital-ui/react'
import { ArrowRight } from 'phosphor-react'
import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button CTA',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'ghost'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
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

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
    children: 'Create new',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
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

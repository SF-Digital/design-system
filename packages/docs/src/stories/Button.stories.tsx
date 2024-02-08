import type { Meta, StoryObj } from '@storybook/react'
import { ButtonRootProps, Button } from '@sf-digital-ui/react'

import { CaretLeft, CaretRight } from 'phosphor-react'

import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `Button` component, which is a React Element built using Pattern Composition.
 *
 * ## Usage:
 * `Button.Root` - The root element of the button.
 *
 * `Button.Prefix` - The element that will appear on the left side.
 *
 * `Button.Suffix` - The element that will appear on the right side.
 *
 * ## API Reference:
 * ### Root
 *
 * `size: 'sm' | 'md' | 'lg'` - The size of the button.
 *
 * `variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning'` - The variant.
 *
 * `disabled: boolean` - Whether the button is disabled.
 *
 */

export default {
  title: 'Components/Button',
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

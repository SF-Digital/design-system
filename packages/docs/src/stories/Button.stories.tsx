import type { Meta, StoryObj } from '@storybook/react'
import { ButtonRootProps, Button } from '@sf-digital-ui/react'

import { ChevronLeft, ChevronRight } from 'lucide-react'

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
 * `variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'gray'` - The variant.
 *
 * `disabled: boolean` - Whether the button is disabled.
 *
 */

const ButtonStory: Meta<ButtonRootProps> = {
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
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'gray'],
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
  },
}

export default ButtonStory

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

export const Gray: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'gray',
    children: 'Create new',
  },
}

export const WithPrefix: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Prefix>
          <ChevronLeft />
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
          <ChevronRight />
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

import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from '@sf-digital-ui/react'
import { ChevronDown, CircleUserRound } from 'lucide-react'

import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `TextInput` component, which is a React element built using Pattern Composition. Types generated for each component are exported as `TextInput{ComponentName}Props`.
 *
 * ## Usage:
 *
 * ```import { TextInput } from '@sf-digital-ui/react'```
 *
 * TextInput is a composition of the following components:
 *
 *
 * `TextInput.Root` - This appears as the input itself but is rather a wrapper
 *
 * `TextInput.Control` - The input element
 *
 * `TextInput.Prefix` - The element that will appear on the left side of the root
 *
 * `TextInput.Suffix` - The element that will appear on the right side of the root
 *
 * ## API Reference:
 * ### TextInput.Root
 * Props
 *
 * `size: 'sm' | 'md' | 'lg'` - The size of the input
 *
 * `disabled: boolean` - Whether the input is disabled
 */

export default {
  title: 'Form/TextInput',
  component: TextInput.Root,
  args: {
    size: 'sm',
    disabled: false,
  },
  argTypes: {
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
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Control placeholder="Placeholder" />,
  },
}

export const WithPrefix: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <>
        <TextInput.Prefix>
          <CircleUserRound />
        </TextInput.Prefix>
        <TextInput.Control placeholder="Placeholder" />
      </>
    ),
  },
}

export const WithSuffix: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <>
        <TextInput.Control placeholder="Placeholder" />
        <TextInput.Suffix>
          <ChevronDown />
        </TextInput.Suffix>
      </>
    ),
  },
}

export const WithPrefixAndSuffix: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <>
        <TextInput.Prefix>
          <CircleUserRound />
        </TextInput.Prefix>
        <TextInput.Control placeholder="Placeholder" />
        <TextInput.Suffix>
          <ChevronDown />
        </TextInput.Suffix>
      </>
    ),
  },
}

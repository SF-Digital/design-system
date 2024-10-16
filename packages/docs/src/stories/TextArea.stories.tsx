import { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaRootProps } from '@sf-digital-ui/react'

import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `TextArea` component, which is a React element built using Pattern Composition. Types generated for each component are exported as `TextArea{ComponentName}Props`.
 *
 * ## Usage:
 *
 * ```import { TextArea } from '@sf-digital-ui/react'```
 *
 * TextArea is a composition of the following components:
 *
 *
 * `TextArea.Root` - This appears as the input itself but is rather a wrapper
 *
 * `TextArea.Control` - The input element
 *
 * ## API Reference:
 * ### TextArea.Root
 * Props
 *
 * `size: 'sm' | 'md' | 'lg'` - The size of the input
 *
 * `disabled: boolean` - Whether the input is disabled
 *
 * `error: boolean` - Whether the input has an error
 */

export default {
  title: 'Form/TextArea',
  component: TextArea.Root,
  args: {
    size: 'sm',
    disabled: false,
    error: false,
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
    error: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TextAreaRootProps>

export const Default: StoryObj<TextAreaRootProps> = {
  args: {
    children: <TextArea.Control placeholder="Placeholder" />,
  },
}

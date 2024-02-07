import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from '@sf-digital-ui/react'
import { ChevronDown, CircleUserRound } from 'lucide-react'
// TODO: use FormGroup from design system when created
import * as Form from '@radix-ui/react-form'

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
 * `size: 'sm' | 'md' | 'lg'` - The size of the input (passed to the Root)
 *
 * `disabled: boolean` - Whether the input is disabled (passed to the Root)
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
  decorators: [
    (Story) => (
      <Form.Form>
        <Form.Field name="name">{Story()}</Form.Field>
      </Form.Form>
    ),
  ],
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
  decorators: [
    (Story) => (
      <Form.Form>
        <Form.Field name="name">{Story()}</Form.Field>
      </Form.Form>
    ),
  ],
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
  decorators: [
    (Story) => (
      <Form.Form>
        <Form.Field name="name">{Story()}</Form.Field>
      </Form.Form>
    ),
  ],
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
  decorators: [
    (Story) => (
      <Form.Form>
        <Form.Field name="name">{Story()}</Form.Field>
      </Form.Form>
    ),
  ],
}

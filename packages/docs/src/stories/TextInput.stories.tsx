import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from '@sf-digital-ui/react'
import { ChevronDown, CircleUserRound } from 'lucide-react'
// TODO: use FormGroup from design system when created
import * as Form from '@radix-ui/react-form'

import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Form/TextInput',
  component: TextInput.Root,
  args: {
    size: 'sm',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

export const Default: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <>
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

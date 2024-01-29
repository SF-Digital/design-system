import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@sf-digital-ui/react'
import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'base',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'base', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@sf-digital-ui/react'
import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `Text` component, a text tag using the `Perpetua` font.
 *
 * ## API Reference:
 *
 * `size: 'xs' | 'sm' | 'base' | 'lg'` - The size of the text.
 */

const TextStory: Meta<TextProps> = {
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
}

export default TextStory

export const Primary: StoryObj<TextProps> = {}

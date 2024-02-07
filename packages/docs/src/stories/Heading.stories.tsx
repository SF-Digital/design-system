import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@sf-digital-ui/react'
import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `Heading` component, a heading tag using the `Gill Sans` font.
 *
 * ## API Reference:
 *
 * `size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'` - The size of the heading.
 *
 */

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.',
    size: 'h3',
  },
  argTypes: {
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@sf-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

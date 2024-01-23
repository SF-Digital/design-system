import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@sf-digital-ui/react'
import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testing element</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

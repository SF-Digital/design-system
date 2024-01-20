import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@sf-ui/react'

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
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

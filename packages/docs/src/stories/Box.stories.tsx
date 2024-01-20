import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@sf-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testing element</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

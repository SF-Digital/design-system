import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@sf-digital-ui/react'
import '@sf-digital-ui/react/dist/output.css'

const BoxStory: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testing element</Text>
      </>
    ),
  },
  argTypes: {},
}

export default BoxStory

export const Primary: StoryObj<BoxProps> = {}

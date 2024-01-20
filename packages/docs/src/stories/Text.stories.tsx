import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@sf-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate et quisquam officiis, dolor dolores! Esse vel perferendis, temporibus accusantium nihil quod illo? Magnam ex amet in, nostrum numquam quidem?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

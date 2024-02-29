import { Avatar, AvatarRootProps } from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `Avatar` component, which is a React element built using Pattern Composition. Types generated for each component are exported as `Avatar{ComponentName}Props`.
 *
 * ## Usage:
 *
 * ```import { Avatar } from '@sf-digital-ui/react'```
 *
 * Avatar is a composition of the following components:
 *
 * `Avatar.Root` - The outer wrapper for the avatar
 *
 * `Avatar.Image` - The image of the avatar
 *
 * `Avatar.Fallback` - The fallback for the avatar
 *
 * ## API Reference:
 * ### Root
 * Props
 *
 *  `size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'` - The size of the avatar
 */

const AvatarStory: Meta<AvatarRootProps> = {
  title: 'Components/Avatar',
  component: Avatar.Root,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
}

export default AvatarStory

export const Default: StoryObj<AvatarRootProps> = {
  render: (args) => (
    <Avatar.Root size={args.size}>
      <Avatar.Image src="https://avatars.githubusercontent.com/u/51454097?v=4" />
      <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-primary-green-500" />
    </Avatar.Root>
  ),
}

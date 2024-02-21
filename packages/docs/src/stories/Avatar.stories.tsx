import { Avatar, AvatarRootProps } from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import '@sf-digital-ui/react/dist/output.css'

export default {
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
} as Meta<AvatarRootProps>

export const Default: StoryObj<AvatarRootProps> = {
  render: (args) => (
    <Avatar.Root size={args.size}>
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://avatars.githubusercontent.com/u/51454097?v=4"
      />
      <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-primary-green-500" />
    </Avatar.Root>
  ),
}

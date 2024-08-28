import { PopoverRootProps, Popover } from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react/*'
import { Settings } from 'lucide-react' // Changed icon from FlipVertical to Settings

import '@sf-digital-ui/react/dist/output.css'

const PopoverStory: Meta<PopoverRootProps> = {
  title: 'Components/Popover',
  component: Popover.Root,
}

export default PopoverStory

export const Default: StoryObj<PopoverRootProps> = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="rounded-full w-10 h-10 inline-flex items-center justify-center text-gray-700 bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
          aria-label="Open settings"
        >
          <Settings />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded-lg p-5 w-72 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          sideOffset={5}
        >
          <h1 className="text-lg font-semibold text-gray-800">Settings</h1>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  ),
}

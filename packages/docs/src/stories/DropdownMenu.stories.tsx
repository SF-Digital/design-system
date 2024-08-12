import { DropdownMenuRootProps, DropdownMenu, Text } from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react/*'
import { Edit, MoreVertical, Trash } from 'lucide-react'

import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `DropdownMenu` component, which is a React element built using Pattern Composition. Types generated for each component are exported as `DropdownMenu{ComponentName}Props`.
 *
 * ## Usage:
 *
 * import { DropdownMenu } from '@sf-digital-ui/react'
 *
 * DropdownMenu is a composition of the following components:
 *
 * `DropdownMenu.Root` - Contains all the dropdown menu parts
 *
 * `DropdownMenu.Trigger` - The button that toggles the dropdown menu
 *
 * `DropdownMenu.Portal` - The container that holds the Content
 *
 * `DropdownMenu.Content` - The content that pops out when dropdown menu is open
 *
 * `DropdownMenu.Item` - The item that can be selected
 *
 * ## API Reference:
 *
 * ### Root
 *
 * Props
 *
 * `open: boolean` - controlled open state of the dropdown menu
 *
 * `onOpenChange: (open: boolean) => void` - callback for open state change
 *
 * ### Trigger
 *
 * Props
 *
 * `asChild: boolean`: merging props and behaviour of the child component
 *
 * Data Attribute
 *
 * `[data-state]: 'open' | 'closed'`
 *
 * ### Content
 *
 * Props
 *
 * `side: 'top' | 'bottom' | 'left' | 'right'` - side of the content
 *
 * `align: 'start' | 'center' | 'end'` - alignment of the content
 *
 * Data Attribute
 *
 * `[data-side]: 'top' | 'bottom' | 'left' | 'right'`
 *
 * `[data-align]: 'start' | 'center' | 'end'`
 *
 * `[data-state]: 'open' | 'closed'`
 *
 * ### Item
 *
 * Props
 *
 * `disabled: boolean` - disabled state of the item
 *
 * `onSelect: () => void` - callback for item selection
 *
 * Data Attribute
 *
 * `[data-highlighted]` - highlighted state of the item
 *
 * `[data-disabled]` - disabled state of the item
 *
 */

const DropdownMenuStory: Meta<DropdownMenuRootProps> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu.Root,
}

export default DropdownMenuStory

export const Default: StoryObj<DropdownMenuRootProps> = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <MoreVertical size={20} className="text-neutral-700" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white rounded-md border border-neutral-10"
          style={{ minWidth: '220px' }}
        >
          <DropdownMenu.Item
            className=" hover:bg-neutral-20 hover:outline-none rounded-t-md"
            style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
          >
            <div className="flex flex-row px-4 py-3 gap-2 items-center">
              <Edit size={16} className="text-neutral-700" />
              <Text className="text-neutral-700">Edit</Text>
            </div>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className=" hover:bg-neutral-20 hover:outline-none rounded-b-md"
            style={{
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            }}
          >
            <div className="flex flex-row px-4 py-3 gap-2 items-center">
              <Trash size={16} className="text-neutral-700" />
              <Text className="text-neutral-700">Delete</Text>
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
}

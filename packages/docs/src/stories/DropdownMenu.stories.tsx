import { DropdownMenuRootProps, DropdownMenu } from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react/*'
import { Edit, MoreVertical, Skull, Trash } from 'lucide-react'

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
 * `DropdownMenu.Divider` - The divider that separates items
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
        <MoreVertical size={20} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Edit size={16} />
            Edit
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <Trash size={16} />
            Delete
          </DropdownMenu.Item>
          <DropdownMenu.Divider />
          <DropdownMenu.Item>
            <Skull size={16} />
            Click here to die!
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
}

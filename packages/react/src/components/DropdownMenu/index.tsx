import { Root, DropdownMenuRootProps } from './Root'
import { Trigger, DropdownMenuTriggerProps } from './Trigger'
import { Portal, DropdownMenuPortalProps } from './Portal'
import { Item, DropdownMenuItemProps } from './Item'
import { Content, DropdownMenuContentProps } from './Content'

const DropdownMenu = { Root, Trigger, Portal, Content, Item }

export { DropdownMenu }

export type {
  DropdownMenuRootProps,
  DropdownMenuTriggerProps,
  DropdownMenuPortalProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
}
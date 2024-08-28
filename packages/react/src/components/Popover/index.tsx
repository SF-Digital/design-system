import { Root, PopoverRootProps } from './Root'
import { Trigger, PopoverTriggerProps } from './Trigger'
import { Portal, PopoverPortalProps } from './Portal'
import { Content, PopoverContentProps } from './Content'
import { Anchor, PopoverAnchorProps } from './Anchor'
import { Close, PopoverCloseProps } from './Close'
import { Arrow, PopoverArrowProps } from './Arrow'

const Popover = { Root, Trigger, Portal, Content, Anchor, Close, Arrow }

export { Popover }

export type {
  PopoverRootProps,
  PopoverTriggerProps,
  PopoverPortalProps,
  PopoverContentProps,
  PopoverAnchorProps,
  PopoverCloseProps,
  PopoverArrowProps,
}

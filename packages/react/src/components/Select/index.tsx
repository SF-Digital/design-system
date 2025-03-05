import { Root, SelectRootProps } from './Root'
import { Trigger, SelectTriggerProps } from './Trigger'
import { Portal, SelectPortalProps } from './Portal'
import { Icon, SelectIconProps } from './Icon'
import { Value, SelectValueProps } from './Value'
import { Content, SelectContentProps } from './Content'
import { Item, SelectItemProps } from './Item'
import { Viewport, SelectViewportProps } from './Viewport'
import { ItemText, SelectItemTextProps } from './ItemText'
import { ItemIndicator, SelectItemIndicatorProps } from './ItemIndicator'
import { Separator, SelectSeparatorProps } from './Separator'
import { Group, SelectGroupProps } from './Group'

const Select = {
	Root,
	Trigger,
	Value,
	Icon,
	Portal,
	Content,
	Item,
	Viewport,
	ItemText,
	ItemIndicator,
	Separator,
	Group,
}

export { Select }

export type {
	SelectRootProps,
	SelectSeparatorProps,
	SelectItemIndicatorProps,
	SelectItemTextProps,
	SelectGroupProps,
	SelectViewportProps,
	SelectItemProps,
	SelectContentProps,
	SelectPortalProps,
	SelectIconProps,
	SelectTriggerProps,
	SelectValueProps,
}

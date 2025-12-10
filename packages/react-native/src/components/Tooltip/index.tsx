import { Arrow, type TooltipArrowProps } from './Arrow'
import { Content, type TooltipContentProps } from './Content'
import { Root, type TooltipRootProps } from './Root'
import { Text, type TooltipTextProps } from './Text'
import { Trigger, type TooltipTriggerProps } from './Trigger'

const Tooltip = { Root, Trigger, Content, Text, Arrow }

export { Tooltip }

export type {
	TooltipArrowProps,
	TooltipContentProps,
	TooltipRootProps,
	TooltipTextProps,
	TooltipTriggerProps,
}

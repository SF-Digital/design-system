import * as Tooltip from '@radix-ui/react-tooltip'

export type TooltipTriggerProps = Tooltip.TooltipTriggerProps

export const Trigger = (props: TooltipTriggerProps) => {
	return <Tooltip.Trigger {...props} />
}

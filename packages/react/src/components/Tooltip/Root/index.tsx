import * as Tooltip from '@radix-ui/react-tooltip'

export type TooltipRootProps = Tooltip.TooltipProps

export const Root = (props: TooltipRootProps) => {
	return <Tooltip.Root {...props} />
}

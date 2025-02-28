import * as Tooltip from '@radix-ui/react-tooltip'

export type TooltipPortalProps = Tooltip.TooltipPortalProps

export const Portal = (props: TooltipPortalProps) => {
	return <Tooltip.Portal {...props} />
}

import * as Tooltip from '@radix-ui/react-tooltip'

export type TooltipArrowProps = Tooltip.TooltipArrowProps

export const Arrow = ({ ...props }: TooltipArrowProps) => {
  return <Tooltip.Arrow {...props} />
}

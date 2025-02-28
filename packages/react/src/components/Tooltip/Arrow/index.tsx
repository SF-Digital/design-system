import * as Tooltip from '@radix-ui/react-tooltip'
import { useTooltipTheme } from '../Context'

export type TooltipArrowProps = Tooltip.TooltipArrowProps

export const Arrow = ({ ...props }: Tooltip.TooltipArrowProps) => {
	const theme = useTooltipTheme()
	return (
		<Tooltip.Arrow
			{...props}
			style={{ fill: theme === 'light' ? 'white' : 'black' }}
		/>
	)
}

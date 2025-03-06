import * as Popover from '@radix-ui/react-popover'

export type PopoverCloseProps = Popover.PopoverCloseProps

export const Close = (props: PopoverCloseProps) => {
	return <Popover.Close {...props} />
}

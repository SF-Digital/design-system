import * as Popover from '@radix-ui/react-popover'

export type PopoverContentProps = Popover.PopoverContentProps

export const Content = (props: PopoverContentProps) => {
	return <Popover.Content {...props} />
}

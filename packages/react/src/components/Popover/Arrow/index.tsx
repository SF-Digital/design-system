import * as Popover from '@radix-ui/react-popover'

export type PopoverArrowProps = Popover.PopoverProps

export const Arrow = (props: PopoverArrowProps) => {
  return <Popover.Arrow {...props} />
}

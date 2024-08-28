import * as Popover from '@radix-ui/react-popover'

export type PopoverCloseProps = Popover.PopoverProps

export const Close = (props: PopoverCloseProps) => {
  return <Popover.Close {...props} />
}

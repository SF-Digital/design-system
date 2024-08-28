import * as Popover from '@radix-ui/react-popover'

export type PopoverRootProps = Popover.PopoverProps

export const Root = (props: PopoverRootProps) => {
  return <Popover.Root {...props} />
}

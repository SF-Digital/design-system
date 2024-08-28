import * as Popover from '@radix-ui/react-popover'

export type PopoverPortalProps = Popover.PopoverPortalProps

export const Portal = (props: PopoverPortalProps) => {
  return <Popover.Portal {...props} />
}

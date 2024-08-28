import * as Popover from '@radix-ui/react-popover'

export type PopoverAnchorProps = Popover.PopoverProps

export const Anchor = (props: PopoverAnchorProps) => {
  return <Popover.Anchor {...props} />
}

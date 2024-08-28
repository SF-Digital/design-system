import * as Popover from '@radix-ui/react-popover'

export type PopoverTriggerProps = Popover.PopoverTriggerProps

export const Trigger = (props: PopoverTriggerProps) => {
  return <Popover.Trigger {...props} />
}

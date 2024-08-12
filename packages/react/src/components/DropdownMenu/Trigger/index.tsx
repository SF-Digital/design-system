import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export type DropdownMenuTriggerProps = DropdownMenu.DropdownMenuTriggerProps

export const Trigger = (props: DropdownMenuTriggerProps) => {
  return <DropdownMenu.Trigger {...props} />
}

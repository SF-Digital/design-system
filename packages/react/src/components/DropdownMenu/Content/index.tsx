import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export type DropdownMenuContentProps = DropdownMenu.DropdownMenuContentProps

export const Content = (props: DropdownMenuContentProps) => {
  return <DropdownMenu.Content {...props} />
}

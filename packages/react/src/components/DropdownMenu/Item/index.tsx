import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export type DropdownMenuItemProps = DropdownMenu.DropdownMenuItemProps

export const Item = (props: DropdownMenuItemProps) => {
  return <DropdownMenu.Item {...props} />
}

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export type DropdownMenuRootProps = DropdownMenu.DropdownMenuProps

export const Root = (props: DropdownMenuRootProps) => {
	return <DropdownMenu.Root {...props} />
}

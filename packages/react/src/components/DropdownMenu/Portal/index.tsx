import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export type DropdownMenuPortalProps = DropdownMenu.DropdownMenuPortalProps

export const Portal = (props: DropdownMenuPortalProps) => {
	return <DropdownMenu.Portal {...props} />
}

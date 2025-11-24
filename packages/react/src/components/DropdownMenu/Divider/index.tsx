import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { twMerge } from 'tailwind-merge'

export type DropdownMenuItemProps = DropdownMenu.DropdownMenuItemProps

export const Divider = (props: DropdownMenuItemProps) => {
	return (
		<div
			className={twMerge(props.className, 'flex h-px flex-row bg-neutral-40')}
		/>
	)
}

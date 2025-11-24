import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { twMerge } from 'tailwind-merge'

export type DropdownMenuItemProps = DropdownMenu.DropdownMenuItemProps

export const Item = (props: DropdownMenuItemProps) => {
	return (
		<DropdownMenu.Item
			{...props}
			className={twMerge(
				props.className,
				'flex flex-row items-center gap-3 py-2 pl-4 pr-12 outline-hidden hover:cursor-pointer hover:bg-neutral-20',
			)}
		/>
	)
}

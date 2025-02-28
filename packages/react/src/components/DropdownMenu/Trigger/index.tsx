import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { twMerge } from 'tailwind-merge'

export type DropdownMenuTriggerProps = DropdownMenu.DropdownMenuTriggerProps

export const Trigger = (props: DropdownMenuTriggerProps) => {
	return (
		<DropdownMenu.Trigger
			{...props}
			className={twMerge(
				'text-neutral-500 hover:cursor-pointer hover:text-neutral-700',
				props.className,
			)}
		/>
	)
}

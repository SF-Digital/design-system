import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { twMerge } from 'tailwind-merge'

export type DropdownMenuItemProps = DropdownMenu.DropdownMenuItemProps

export const Item = (props: DropdownMenuItemProps) => {
  return (
    <DropdownMenu.Item
      {...props}
      className={twMerge(
        'flex min-h-[40px] min-w-[240px] flex-row items-center gap-2 bg-white px-4 py-3 hover:border-neutral-300 hover:bg-neutral-20',
        props.className,
      )}
    />
  )
}

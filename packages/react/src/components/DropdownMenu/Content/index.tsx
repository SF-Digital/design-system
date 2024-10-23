import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { twMerge } from 'tailwind-merge'

export type DropdownMenuContentProps = DropdownMenu.DropdownMenuContentProps

export const Content = (props: DropdownMenuContentProps) => {
  return (
    <DropdownMenu.Content
      {...props}
      className={twMerge(
        'overflow-hidden rounded-md border border-neutral-40 bg-white',
        props.className,
      )}
    />
  )
}

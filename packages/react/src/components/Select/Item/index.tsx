import * as Select from '@radix-ui/react-select'
import { twJoin } from 'tailwind-merge'

export type SelectItemProps = Select.SelectItemProps

export const Item = (props: SelectItemProps) => (
  <Select.Item
    {...props}
    className={twJoin(
      'flex flex-row justify-between px-3.5 py-2.5 text-neutral-900 hover:outline-none focus:outline-none data-[state="checked"]:bg-neutral-20 data-[state="checked"]:outline-none',
      props.className,
    )}
  />
)

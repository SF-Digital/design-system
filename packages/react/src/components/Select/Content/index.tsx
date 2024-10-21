import * as Select from '@radix-ui/react-select'
import { twJoin } from 'tailwind-merge'

export type SelectContentProps = Select.SelectContentProps

export const Content = (props: SelectContentProps) => (
  <Select.Content
    {...props}
    className={twJoin(
      'flex w-[--radix-select-trigger-width] flex-row rounded-md border border-neutral-40 bg-white drop-shadow-lg',
      props?.className,
    )}
    align="center"
  />
)

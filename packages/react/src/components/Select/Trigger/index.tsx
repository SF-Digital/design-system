import * as Select from '@radix-ui/react-select'
import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'

export type SelectTriggerProps = ComponentProps<typeof Select.Trigger>

export const Trigger = (props: SelectTriggerProps) => (
  <Select.Trigger
    {...props}
    className={twJoin(
      'flex flex-row items-center justify-between gap-2 rounded-md border border-neutral-50 bg-white px-3.5 py-2.5 text-sf-md leading-none text-neutral-900 focus:border-primary-green-500 focus:outline-none data-[placeholder]:font-sf-digital data-[placeholder]:font-thin data-[placeholder]:text-neutral-500',
      props?.className,
    )}
  />
)

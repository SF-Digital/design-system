import * as Select from '@radix-ui/react-select'
import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const trigger = tv({
  base: [
    'flex flex-row items-center justify-between gap-2 rounded-md border border-neutral-50 bg-white px-3.5 py-2.5 text-sf-md leading-none text-neutral-900 focus:outline-none data-[placeholder]:font-sf-digital data-[placeholder]:font-thin data-[placeholder]:text-neutral-500',
  ],

  variants: {
    color: {
      'sf-green': 'data-[state="open"]:border-primary-green-500',
      'succession-blue': 'data-[state="open"]:border-succession-blue-500',
    },
  },
  defaultVariants: {
    color: 'sf-green',
  },
})

export type SelectTriggerProps = ComponentProps<typeof Select.Trigger> &
  VariantProps<typeof trigger>

export const Trigger = ({ color, ...props }: SelectTriggerProps) => (
  <Select.Trigger
    {...props}
    className={twJoin(trigger({ color }), props?.className)}
  />
)

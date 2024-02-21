import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const toggle = tv({
  base: [
    'rounded-lg bg-white drop-shadow-sm  group-data-[disabled]:bg-neutral-20',
  ],
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
    },
  },
})

export type ToggleControlProps = ComponentProps<'div'> &
  VariantProps<typeof toggle>

export const Control = ({ className, size, ...props }: ToggleControlProps) => {
  return <div {...props} className={toggle({ className, size })} />
}

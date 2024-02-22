import * as Toggle from '@radix-ui/react-toggle'
import { VariantProps, tv } from 'tailwind-variants'

const toggle = tv(
  {
    base: [
      'group flex flex-row items-center rounded-lg p-0.5 data-[state="on"]:justify-end data-[disabled]:bg-neutral-40 data-[state="off"]:bg-neutral-40 data-[state="on"]:bg-primary-green-500',
    ],

    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
      },
    },
    defaultVariants: { size: 'md' },
  },
  { twMerge: false },
)

export type ToggleRootProps = Toggle.ToggleProps & VariantProps<typeof toggle>

export const Root = ({ className, size, ...props }: ToggleRootProps) => {
  return <Toggle.Root {...props} className={toggle({ className, size })} />
}

import * as Switch from '@radix-ui/react-switch'
import { VariantProps, tv } from 'tailwind-variants'

const toggle = tv(
  {
    base: [
      'flex flex-row items-center rounded-lg p-0.5 data-[state="checked"]:justify-end data-[disabled]:bg-neutral-40 data-[state="checked"]:bg-primary-green-500 data-[state="unchecked"]:bg-neutral-40',
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

export type ToggleRootProps = Switch.SwitchProps & VariantProps<typeof toggle>

export const Root = ({ className, size, ...props }: ToggleRootProps) => {
  return <Switch.Root {...props} className={toggle({ className, size })} />
}

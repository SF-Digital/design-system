import { VariantProps, tv } from 'tailwind-variants'
import * as Switch from '@radix-ui/react-switch'

const toggle = tv({
  base: ['rounded-lg bg-white drop-shadow-sm data-[disabled]:bg-neutral-20'],
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
    },
  },
})

export type ToggleControlProps = Switch.SwitchThumbProps &
  VariantProps<typeof toggle>

export const Control = ({ className, size, ...props }: ToggleControlProps) => {
  return <Switch.Thumb {...props} className={toggle({ className, size })} />
}

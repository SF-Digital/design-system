import * as Checkbox from '@radix-ui/react-checkbox'
import type { ComponentProps } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const checkbox = tv({
  base: [
    'border-xs flex h-5 w-5 items-center justify-center rounded-xs border border-neutral-50',
    'data-[state="checked"]:border-transparent',
  ],

  variants: {
    color: {
      'sf-green': 'data-[state="checked"]:bg-primary-green-500',
      'succession-blue': 'data-[state="checked"]:bg-succession-blue-500',
    },
    size: {
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
    },
  },
  defaultVariants: { size: 'md', color: 'sf-green' },
})

export type CheckboxRootProps = ComponentProps<typeof Checkbox.Root> &
  VariantProps<typeof checkbox>

export const Root = (props: CheckboxRootProps) => {
  return (
    <Checkbox.Root
      className={checkbox({
        className: props.className,
        size: props.size,
        color: props.color,
      })}
      {...props}
    />
  )
}

Root.displayName = 'Checkbox.Root'

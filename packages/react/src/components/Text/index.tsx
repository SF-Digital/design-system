import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  base: ['font-sf-body'],

  variants: {
    size: {
      xs: 'text-sf-xs',
      sm: 'text-sf-sm',
      base: 'text-sf-md',
      lg: 'text-sf-lg',
    },
  },
  defaultVariants: {
    size: 'base',
  },
})

export type TextProps = ComponentProps<'p'> & VariantProps<typeof text>

export const Text = ({ className, size, ...props }: TextProps) => {
  return <p {...props} className={text({ size, className })} />
}

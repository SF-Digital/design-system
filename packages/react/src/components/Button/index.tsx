import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const button = tv(
  {
    base: 'rounded-md text-white',

    variants: {
      variant: {
        primary: ' bg-primary-green-500',
        secondary: 'bg-primary-green-50 text-primary-green-700',
        outline: 'border-xs border border-neutral-40 text-neutral-50',
      },

      size: {
        sm: 'px-3.5 py-2 text-sf-h6',
        md: 'px-4 py-2.5 text-sf-sm',
        lg: 'px-5 py-2.5 text-sf-md',
        xl: 'px-5 py-3 text-sf-md',
        '2xl': 'px-6 py-4 text-sf-lg',
      },
    },
  },
  {
    twMerge: false,
  },
)

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ variant, className, size, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={button({
        variant,
        size,
        className,
      })}
    />
  )
}

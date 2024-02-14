import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const button = tv(
  {
    base: [
      'font-heading align-center flex  items-center gap-1 rounded-md font-semibold transition duration-150',
      'disabled:bg-neutral-40 disabled:text-neutral-50',
    ],

    variants: {
      variant: {
        primary: [
          'bg-primary-green-500 text-white',
          'hover:bg-primary-green-700',
          'active:bg-primary-green-800',
        ],
        secondary: [
          'border-xs border border-primary-green-500 bg-white text-primary-green-500',
          'hover:border-primary-green-700 hover:bg-primary-green-50 hover:text-primary-green-700',
          'active:border-primary-green-800 active:text-primary-green-800',
        ],
        success: [
          'bg-success-500 text-white',
          'hover:bg-success-700',
          'active:bg-success-800',
        ],
        warning: [
          'bg-warning-500 text-white',
          'hover:bg-warning-700',
          'active:bg-warning-800',
        ],
        error: [
          'bg-error-500 text-white',
          'hover:bg-error-700',
          'active:bg-error-800',
        ],
      },

      size: {
        sm: 'px-6 py-2 text-sf-sm',
        md: 'px-6 py-2.5 text-sf-md',
        lg: 'px-8 py-4 text-sf-lg',
      },
    },
  },
  {
    twMerge: false,
  },
)

export type ButtonRootProps = ComponentProps<'button'> &
  VariantProps<typeof button>

export const Root = ({
  variant,
  className,
  size,
  ...props
}: ButtonRootProps) => {
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

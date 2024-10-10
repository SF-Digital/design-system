import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const button = tv(
  {
    base: [
      'font-heading align-center flex items-center gap-1 rounded-md font-semibold transition duration-150',
    ],

    variants: {
      color: {
        'sf-green': [],
        neutral: [],
        success: [],
        warning: [],
        error: [],
      },
      variant: {
        primary: 'text-white',
        secondary: 'border bg-white',
        tertiary: [],
        link: [],
        // primary: [
        //   'bg-primary-green-500  text-white',
        //   'hover:bg-primary-green-700',
        //   'active:bg-primary-green-800',
        // ],
        // secondary: [
        //   'border-xs border border-primary-green-500 bg-white text-primary-green-500',
        //   'hover:border-primary-green-700 hover:bg-primary-green-50 hover:text-primary-green-700',
        //   'active:border-primary-green-800 active:text-primary-green-800',
        // ],
        // success: [
        //   'bg-success-500 text-white',
        //   'hover:bg-success-700',
        //   'active:bg-success-800',
        // ],
        // warning: [
        //   'bg-warning-500 text-white',
        //   'hover:bg-warning-700',
        //   'active:bg-warning-800',
        // ],
        // error: [
        //   'bg-error-500 text-white',
        //   'hover:bg-error-700',
        //   'active:bg-error-800',
        // ],
        // gray: [
        //   'border border-neutral-60 bg-white text-neutral-500',
        //   'hover:bg-neutral-20 hover:text-neutral-700',
        //   'active:border-neutral-80 active:bg-neutral-20 active:text-neutral-500',
        //   'disabled:border-neutral-50 disabled:bg-white disabled:text-neutral-80',
        // ],
        // linkGray: ['text-neutral-500'],
      },

      size: {
        sm: 'px-6 py-2 text-sf-sm',
        md: 'px-6 py-2.5 text-sf-md',
        lg: 'px-8 py-4 text-sf-lg',
      },
    },
    compoundVariants: [
      {
        color: 'sf-green',
        variant: 'primary',
        className:
          'bg-primary-green-500 hover:bg-primary-green-700 active:bg-primary-green-800 disabled:border disabled:border-neutral-50 disabled:bg-neutral-20 disabled:text-neutral-80',
      },
      {
        color: 'neutral',
        variant: 'secondary',
        className:
          'border-neutral-60 text-neutral-500 hover:bg-neutral-20 hover:text-neutral-700 active:border-neutral-80 active:bg-neutral-20 active:text-neutral-500 disabled:border-neutral-50 disabled:bg-white disabled:text-neutral-80',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      color: 'sf-green',
      size: 'md',
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

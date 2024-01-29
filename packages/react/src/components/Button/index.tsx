import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: ['rounded-md'],

  variants: {
    variant: {
      primary: 'text-white bg-primary-green-500',
      secondary: 'text-primary-greeen-700 bg-primary-green-50',
      ghost: 'text-neutral-50 border-neutral-40',
      outline: 'border border-xs text-neutral-50 border-neutral-40',
    },

    // TODO: text sizes wttfff
    size: {
      sm: 'px-3.5 py-2',
      md: 'px-4 py-2.5',
      lg: 'px-5 py-2.5',
      xl: 'px-5 py-3',
      '2xl': 'px-6 py-4',
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ variant, className, size, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={button({
        size,
        variant,
        className,
      })}
    />
  )
}

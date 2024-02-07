import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv(
  {
    base: [
      'border-1 flex w-60 flex-1 flex-row items-center justify-between rounded-md border border-neutral-50 bg-white font-sf-heading text-neutral-80',
    ],

    variants: {
      size: {
        sm: 'px-4 py-2.5 text-sf-sm',
        md: 'px-4 py-2.5 text-sf-md',
        lg: 'px-5 py-3.5 text-sf-lg',
      },
    },
  },
  { twMerge: false },
)

export type TextInputRootProps = ComponentProps<'div'> &
  VariantProps<typeof input>

export const Root = ({
  size = 'sm',
  className,
  ...props
}: TextInputRootProps) => {
  return (
    <div
      {...props}
      className={input({
        className,
        size,
      })}
    />
  )
}

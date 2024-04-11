import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BoxProps extends ComponentProps<'div'> {}

export const Box = ({ className, ...rest }: BoxProps) => {
  return (
    <div
      {...rest}
      className={twMerge(
        className,
        'rounded-md border bg-white p-4 drop-shadow-sm',
      )}
    />
  )
}

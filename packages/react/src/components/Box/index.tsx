import { ComponentProps } from 'react'

export interface BoxProps extends ComponentProps<'div'> {}

export const Box = ({ ...rest }: BoxProps) => {
  return (
    <div
      {...rest}
      className="rounded-md border border-gray600 bg-gray800 p-4"
    />
  )
}

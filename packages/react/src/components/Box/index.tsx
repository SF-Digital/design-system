import { ComponentProps } from 'react'

export interface BoxProps extends ComponentProps<'div'> {}

export const Box = ({ ...rest }: BoxProps) => {
  return (
    <div
      {...rest}
      className="border-gray600 bg-gray800 rounded-md border p-4"
    />
  )
}

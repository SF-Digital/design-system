import { ComponentProps } from 'react'

export interface BoxProps extends ComponentProps<'div'> {}

export const Box = ({ ...rest }: BoxProps) => {
  return (
    <div
      {...rest}
      className="p-4 rounded-md bg-gray-800 border border-gray-600"
    />
  )
}

import * as Form from '@radix-ui/react-form'
import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'

export type TextInputControlProps = ComponentProps<typeof Form.Control>

export const Control = ({ ...props }: TextInputControlProps) => {
  return (
    <input
      {...props}
      className={twJoin(
        props.className,
        'focus: w-full border-transparent text-black outline-none',
      )}
    />
  )
}

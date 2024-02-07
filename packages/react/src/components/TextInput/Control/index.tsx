import * as Form from '@radix-ui/react-form'
import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'
import { useTextInput } from '../Root'

export type TextInputControlProps = ComponentProps<typeof Form.Control>

export const Control = ({ ...props }: TextInputControlProps) => {
  const { disabled } = useTextInput()

  return (
    <Form.Control asChild>
      <input
        {...props}
        disabled={disabled}
        className={twJoin(
          props.className,
          'focus: w-full border-transparent text-black outline-none disabled:bg-neutral-40',
        )}
      />
    </Form.Control>
  )
}

import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'
import { useTextInput } from '../Root'

export type TextInputControlProps = ComponentProps<'input'>

export const Control = ({ ...props }: TextInputControlProps) => {
  const { disabled } = useTextInput()

  return (
    <input
      {...props}
      disabled={disabled}
      className={twJoin(
        props.className,
        'w-full border-transparent text-black outline-none placeholder:font-sf-heading disabled:bg-neutral-40 disabled:text-neutral-50',
      )}
    />
  )
}

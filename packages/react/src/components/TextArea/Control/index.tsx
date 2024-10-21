import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'
import { useTextArea } from '../Root'

export type TextAreaControlProps = ComponentProps<'textarea'>

export const Control = ({ ...props }: TextAreaControlProps) => {
  const { disabled, size } = useTextArea() // Get size from context

  const sizeClasses: Record<string, string>
   = {
    sm: 'px-4 py-2.5 text-sf-sm',
    md: 'px-4 py-2.5 text-sf-md',
    lg: 'px-4 py-2.5 text-sf-lg',
  }

  return (
    <textarea
      {...props}
      disabled={disabled}
      className={twJoin(
        props.className,
        'w-full h-full border-transparent text-black outline-none placeholder:font-sf-heading disabled:bg-neutral-10 disabled:text-neutral-300',
        sizeClasses[size]
      )}
    />
  )
}
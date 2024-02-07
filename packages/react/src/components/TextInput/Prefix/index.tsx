import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'

export type TextInputPrefixProps = ComponentProps<'div'>

export const Prefix = (props: TextInputPrefixProps) => {
  return <div {...props} className={twJoin(props.className, 'pr-2.5')} />
}

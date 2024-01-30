import { ComponentProps } from 'react'

export type ButtonPrefixProps = ComponentProps<'div'>

export const Prefix = (props: ButtonPrefixProps) => {
  return <div {...props} />
}

import { ComponentProps } from 'react'

export type ButtonSuffixProps = ComponentProps<'div'>

export const Suffix = (props: ButtonSuffixProps) => {
  return <div {...props} />
}

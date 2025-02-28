import { ComponentProps } from 'react'

export type TextInputSuffixProps = ComponentProps<'div'>

export const Suffix = (props: TextInputSuffixProps) => {
	return <div {...props} />
}

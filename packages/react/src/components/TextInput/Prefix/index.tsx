import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'
import { useTextInput } from '../Root'

export type TextInputPrefixProps = ComponentProps<'div'>

const sizePaddings: Record<string, string> = {
	sm: 'pr-2',
	md: 'pr-2.5',
	lg: 'pr-3.5',
}

export const Prefix = (props: TextInputPrefixProps) => {
	const { size } = useTextInput()

	return (
		<div {...props} className={twJoin(props.className, sizePaddings[size])} />
	)
}

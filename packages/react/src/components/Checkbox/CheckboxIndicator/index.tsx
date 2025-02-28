import * as Checkbox from '@radix-ui/react-checkbox'
import { ComponentProps } from 'react'

export type CheckboxIndicatorProps = ComponentProps<
	typeof Checkbox.CheckboxIndicator
>

export const Indicator = (props: CheckboxIndicatorProps) => {
	return <Checkbox.CheckboxIndicator asChild {...props} />
}

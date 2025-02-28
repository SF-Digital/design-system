import * as Select from '@radix-ui/react-select'

export type SelectViewportProps = Select.SelectViewportProps

export const Viewport = (props: SelectViewportProps) => (
	<Select.Viewport {...props} />
)

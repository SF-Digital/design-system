import * as Select from '@radix-ui/react-select'

export type SelectIconProps = Select.SelectIconProps

export const Icon = (props: SelectIconProps) => (
	<Select.Icon {...props} className='text-neutral-500' />
)

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

export type SelectItemProps = Select.SelectItemProps

export const Item = (props: SelectItemProps) => (
	<Select.Item
		{...props}
		className={twJoin(
			'flex flex-row justify-between px-3.5 py-2.5 text-neutral-900 hover:cursor-pointer hover:bg-neutral-10 hover:outline-none focus:outline-none data-[state="checked"]:bg-neutral-20 data-[state="checked"]:outline-none',
			props.className,
		)}
	>
		{props.children}
		<Select.ItemIndicator>
			<Check size={20} />
		</Select.ItemIndicator>
	</Select.Item>
)

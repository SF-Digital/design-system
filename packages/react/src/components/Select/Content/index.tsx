import * as Select from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

export type SelectContentProps = Select.SelectContentProps

export const Content = (props: SelectContentProps) => (
	<Select.Content
		{...props}
		className={twJoin(
			'flex max-h-[var(--radix-select-content-available-height)] w-[--radix-select-trigger-width] flex-row rounded-md border border-neutral-40 bg-white drop-shadow-lg',
			props?.className,
		)}
		sideOffset={8}
		align='center'
	>
		<Select.ScrollUpButton className='flex h-[25px] cursor-default items-center justify-center border-b border-neutral-30 text-neutral-900'>
			<ChevronUp size='18' />
		</Select.ScrollUpButton>
		{props.children}
		<Select.ScrollDownButton className='flex h-[25px] cursor-default items-center justify-center border-t border-neutral-30 text-neutral-900'>
			<ChevronDown size='18' />
		</Select.ScrollDownButton>
	</Select.Content>
)

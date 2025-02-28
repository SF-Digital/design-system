import * as Select from '@radix-ui/react-select'
import { PropsWithChildren } from 'react'

export interface SelectRootProps extends PropsWithChildren {
	value?: string
	defaultValue?: string
	onValueChange?(value: string): void
	open?: boolean
	defaultOpen?: boolean
	onOpenChange?(open: boolean): void
	dir?: Select.SelectProps['dir']
	name?: string
	autoComplete?: string
	disabled?: boolean
	required?: boolean
}

export const Root = (props: SelectRootProps) => <Select.Root {...props} />

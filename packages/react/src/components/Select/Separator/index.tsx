import * as Select from '@radix-ui/react-select'

export type SelectSeparatorProps = Select.SelectSeparatorProps

export const Separator = (props: SelectSeparatorProps) => (
  <Select.Separator {...props} />
)

import { Select, SelectRootProps } from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { ChevronDown } from 'lucide-react'

import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Form/Select',
  component: Select.Root,
} as Meta<typeof Select.Root>

export const Default: StoryObj<SelectRootProps> = {
  render: (args) => (
    <Select.Root {...args}>
      <Select.Trigger className="max-w-80 w-full">
        {/* <div className="flex flex-row items-center gap-2"> */}
        {/* <Select.Icon>
            <User size={20} />
          </Select.Icon> */}
        <Select.Value placeholder="Select team member" />
        {/* </div> */}
        <Select.Icon>
          <ChevronDown size={20} />
        </Select.Icon>
      </Select.Trigger>
    </Select.Root>
  ),
}

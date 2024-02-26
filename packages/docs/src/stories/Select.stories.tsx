import { Select, SelectRootProps } from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { Check, ChevronDown, User } from 'lucide-react'
import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Form/Select',
  component: Select.Root,
  args: {},
  argTypes: {},
} as Meta<SelectRootProps>

export const Default: StoryObj<SelectRootProps> = {
  render: (args) => (
    <Select.Root {...args}>
      <Select.Trigger className="max-w-80 w-full">
        <div className="flex flex-row items-center gap-2">
          <Select.Value placeholder="Select team member" />
        </div>
        <Select.Icon>
          <ChevronDown size={20} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content position="popper" className="overflow-hidden">
          <Select.Viewport>
            <Select.Item className="w-80" value="1">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 1</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item className="w-80" value="2">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 2</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item className="w-80" value="3">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 3</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item className="w-80" value="4">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 4</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item className="w-80" value="5">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 5</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  ),
}

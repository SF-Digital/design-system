import {
  TooltipProviderProps,
  Tooltip,
  Text,
  TooltipContentProps,
} from '@sf-digital-ui/react'
import { HelpCircle } from 'lucide-react'
import { Meta, StoryObj } from '@storybook/react'

import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Components/Tooltip',
  component: Tooltip.Provider,
  args: {
    theme: 'light',
    side: 'top',
  },
  argTypes: {
    theme: {
      control: {
        type: 'inline-radio',
      },
      options: ['light', 'dark'],
    },
    side: {
      control: {
        type: 'inline-radio',
      },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
} as Meta<TooltipProviderProps>

// TODO: sort the colors here
export const Large: StoryObj<TooltipProviderProps & TooltipContentProps> = {
  render: (args) => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <button>
            <HelpCircle style={{ color: '#98A2B3' }} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content {...args}>
            <Tooltip.Arrow
              style={{ fill: args.theme === 'dark' ? 'black' : 'white' }}
            />
            <Text className="text-sf-xs font-semibold">This is a tooltip</Text>
            <Text className="text-sf-xs font-regular">
              Tooltips are used to describe or identify an element. In most
              scenarios, tooltips help the user understand the meaning, function
              or alt-text of an element.
            </Text>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),

  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',

          backgroundColor: '#f5f5f5',
        }}
      >
        {Story()}
      </div>
    ),
  ],
}

export const Small: StoryObj<TooltipProviderProps & TooltipContentProps> = {
  render: (args) => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <button>
            <HelpCircle style={{ color: '#98A2B3' }} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content {...args}>
            <Tooltip.Arrow
              style={{ fill: args.theme === 'dark' ? 'black' : 'white' }}
            />
            <Text className="text-sf-xs font-semibold">This is a tooltip</Text>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',

          backgroundColor: '#f5f5f5',
        }}
      >
        {Story()}
      </div>
    ),
  ],
}

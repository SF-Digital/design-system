import { Tabs, TabsRootProps, TabsTriggerProps } from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react'

/**
 * This story displays the `Tabs` component, which is a React element built using Pattern Composition. Types generated for each component are exported as `Tabs{ComponentName}Props`.
 *
 * ## Usage:
 *
 *  ```import { Tabs } from '@sf-digital-ui/react'```
 *
 *  Tabs is a composition of the following components:
 *
 * `Tabs.Root` - Contains all the tab component parts
 *
 * `Tabs.List` - Contains the triggers aligned along the edge of active content
 *
 * `Tabs.Trigger` - The clickable element that activates its assocaited content
 *
 * ## API Reference:
 * ### Root
 * Props
 *
 * `orientation: 'horizontal' | 'vertical'` - The orientation of the tabs
 *
 * `activationMode: 'automatic' | 'manual'` - The activation mode of the tabs
 *
 * Data attribute
 *
 * `[data-orientation]: 'horizontal' | 'vertical'` - The orientation of the tabs
 *
 * ### List
 * Props
 *
 * `loop: boolean` - if `true`, keyboard navigation will loop from last tab to first, and vice versa
 *
 *  Data attribute
 *
 * ### Trigger & Content
 * Props
 *
 * `value: string` - The unique value that associates the contnet with the trigger
 *
 * `disabled: boolean` (Only for Trigger) - If `true`, the trigger will be disabled
 *
 * `variant: 'solid' | 'underline'` (Only for Trigger) - The variant of the trigger (default: solid)
 *
 * Data attribute
 *
 * `[data-state]: 'active' | 'disabled'` - The state of the trigger
 *
 * `[data-disabled]` (Only for Trigger) - The trigger will be disabled
 *
 */

export default {
  title: 'Components/Tabs',
  component: Tabs.Root,
  args: {
    size: 'base',
    variant: 'solid',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['base', 'lg'],
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['solid', 'underline'],
    },
  },
} as Meta<TabsRootProps & TabsTriggerProps>

export const Default: StoryObj<TabsRootProps & TabsTriggerProps> = {
  args: {},
  render: (args) => (
    <Tabs.Root defaultValue="one" orientation="horizontal">
      <Tabs.List
        className={args.variant === 'solid' ? 'gap-2 flex-row flex' : ''}
      >
        <Tabs.Trigger size={args.size} variant={args.variant} value="one">
          One
        </Tabs.Trigger>
        <Tabs.Trigger size={args.size} variant={args.variant} value="two">
          Two
        </Tabs.Trigger>
        <Tabs.Trigger size={args.size} variant={args.variant} value="three">
          Three
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  ),
}

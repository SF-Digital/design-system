import { Tabs, TabsRootProps } from '@sf-digital-ui/react'
import { Meta } from '@storybook/react'

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
 * `variant: 'solid' | 'underline'` (Only for Trigger) - The variant of the trigger
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
  args: {},
  argTypes: {},
} as Meta<TabsRootProps>

export const Solid = {
  args: {},
  render: () => (
    <Tabs.Root defaultValue="one" orientation="horizontal">
      <Tabs.List className="gap-2 flex-row flex">
        <Tabs.Trigger variant="solid" value="one">
          One
        </Tabs.Trigger>
        <Tabs.Trigger variant="solid" value="two">
          Two
        </Tabs.Trigger>
        <Tabs.Trigger variant="solid" value="three">
          Three
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  ),
}

export const Underline = {
  args: {},
  render: () => (
    <Tabs.Root defaultValue="one" orientation="horizontal">
      <Tabs.List>
        <Tabs.Trigger variant="underline" value="one">
          One
        </Tabs.Trigger>
        <Tabs.Trigger variant="underline" value="two">
          Two
        </Tabs.Trigger>
        <Tabs.Trigger variant="underline" value="three">
          Three
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  ),
}

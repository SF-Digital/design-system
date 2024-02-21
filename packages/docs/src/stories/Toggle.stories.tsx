import {
  Toggle,
  ToggleControlProps,
  ToggleRootProps,
} from '@sf-digital-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import '@sf-digital-ui/react/dist/output.css'

export default {
  title: 'Components/Toggle',
  component: Toggle.Root,
} as Meta<ToggleRootProps>

export const Default: StoryObj<ToggleRootProps & ToggleControlProps> = {
  args: {
    size: 'md',
    children: (
      <>
        <Toggle.Control size="md" />
      </>
    ),
  },
}

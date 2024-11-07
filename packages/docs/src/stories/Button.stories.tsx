import type { Meta, StoryObj } from '@storybook/react'
import { ButtonRootProps, Button } from '@sf-digital-ui/react'

import { ChevronLeft, ChevronRight, Trash } from 'lucide-react'

import '@sf-digital-ui/react/dist/output.css'

/**
 * This story displays the `Button` component, which is a React Element built using Pattern Composition.
 *
 * ## Usage:
 * `Button.Root` - The root element of the button.
 *
 * `Button.Prefix` - The element that will appear on the left side.
 *
 * `Button.Suffix` - The element that will appear on the right side.
 *
 * ## API Reference:
 * ### Root
 *
 * `size: 'sm' | 'md' | 'lg'` - The size of the button.
 *
 * `variant: 'primary' | 'secondary' | 'tertiary' | 'link'` - The variant.
 *
 * `color: 'sf-green' | 'neutral' | 'success' | 'error' | 'warning' | 'succession-blue'` - The color.
 *
 * `disabled: boolean` - Whether the button is disabled.
 *
 * `iconButton: boolean` - Whether the button is an icon button.
 *
 */

const ButtonStory: Meta<ButtonRootProps> = {
  title: 'Components/Button',
  component: Button.Root,
  args: {
    children: 'Button',
    variant: 'primary',
    color: 'sf-green',
    size: 'md',
    disabled: false,
    iconButton: false,
  },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
      options: [
        'sf-green',
        'neutral',
        'success',
        'error',
        'warning',
        'succession-blue',
      ],
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    iconButton: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default ButtonStory

export const PrimarySF: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'primary',
    color: 'sf-green',
    children: 'Create new',
  },
}

export const PrimarySuccessionBlue: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'primary',
    color: 'neutral',
    children: 'Create new',
  },
}

export const PrimarySuccess: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'primary',
    color: 'success',
    children: 'Create new',
  },
}

export const PrimaryWarning: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'primary',
    color: 'warning',
    children: 'Create new',
  },
}

export const PrimaryError: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'primary',
    color: 'error',
    children: 'Create new',
  },
}

export const SecondarySF: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'secondary',
    color: 'sf-green',
    children: 'Create new',
  },
}

export const SecondarySuccessionBlue: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'secondary',
    color: 'neutral',
    children: 'Create new',
  },
}

export const SecondaryNeutral: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'secondary',
    color: 'neutral',
    children: 'Create new',
  },
}

export const SecondarySuccess: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'secondary',
    color: 'success',
    children: 'Create new',
  },
}

export const SecondaryWarning: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'secondary',
    color: 'warning',
    children: 'Create new',
  },
}

export const SecondaryError: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'secondary',
    color: 'error',
    children: 'Create new',
  },
}

export const TertiarySF: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'tertiary',
    color: 'sf-green',
    children: 'Create new',
  },
}

export const TertiarySuccessionBlue: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'tertiary',
    color: 'neutral',
    children: 'Create new',
  },
}

export const TertiaryNeutral: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'tertiary',
    color: 'neutral',
    children: 'Create new',
  },
}

export const TertiarySuccess: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'tertiary',
    color: 'success',
    children: 'Create new',
  },
}

export const TertiaryWarning: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'tertiary',
    color: 'warning',
    children: 'Create new',
  },
}

export const TertiaryError: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'tertiary',
    color: 'error',
    children: 'Create new',
  },
}

export const LinkSF: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'link',
    color: 'sf-green',
    children: 'Create new',
  },
}

export const LinkSuccessionBlue: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'link',
    color: 'neutral',
    children: 'Create new',
  },
}

export const LinkNeutral: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'link',
    color: 'neutral',
    children: 'Create new',
  },
}

export const LinkSuccess: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'link',
    color: 'success',
    children: 'Create new',
  },
}

export const LinkWarning: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'link',
    color: 'warning',
    children: 'Create new',
  },
}

export const LinkError: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'link',
    color: 'error',
    children: 'Create new',
  },
}

export const WithPrefix: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Prefix>
          <ChevronLeft />
        </Button.Prefix>
        Button
      </>
    ),
  },
}

export const WithSuffix: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        Button
        <Button.Suffix>
          <ChevronRight />
        </Button.Suffix>
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonRootProps> = {
  args: {
    disabled: true,
  },
}

export const IconButton: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Prefix>
          <Trash />
        </Button.Prefix>
      </>
    ),
    iconButton: true,
  },
}

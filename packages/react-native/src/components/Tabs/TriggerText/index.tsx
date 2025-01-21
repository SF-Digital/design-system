import React from 'react'
import { Text, TextProps } from 'react-native'
import { useTabsContext } from '../Root'
import { createStylesheet } from '../../../utils/create-styles'
import { colors } from '@sf-digital-ui/tokens'

export type TabsTriggerTextProps = TextProps

type TabsTriggerTextVariants = {
  variant?: 'solid' | 'underline' | 'panel' | 'underline-filled'
  color?: 'sf-green' | 'succession-blue' | 'neutral'
  size?: 'base' | 'lg'
  isActive?: boolean
}

const styles = createStylesheet<TabsTriggerTextVariants>({
  base: {},
  variants: {
    variant: {
      solid: {},
      underline: {},
      'underline-filled': {},
      panel: {
        color: colors.neutral['200'],
      },
    },
    color: {
      'sf-green': {},
      'succession-blue': {},
      neutral: {},
    },
    size: {
      base: {},
      lg: {},
    },
  },
  compoundVariants: [
    {
      variants: { color: 'sf-green', variant: 'solid', isActive: true },
      style: {
        color: colors['primary-green']['500'],
      },
    },
    {
      variants: { color: 'succession-blue', variant: 'solid', isActive: true },
      style: {
        color: colors['succession-blue']['500'],
      },
    },
    {
      variants: { color: 'sf-green', variant: 'underline', isActive: true },
      style: {
        color: colors['primary-green']['500'],
      },
    },
    {
      variants: {
        color: 'succession-blue',
        variant: 'underline',
        isActive: true,
      },
      style: {
        color: colors['succession-blue']['500'],
      },
    },
    {
      variants: {
        color: 'sf-green',
        variant: 'underline-filled',
        isActive: true,
      },
      style: {
        color: colors['primary-green']['500'],
      },
    },
    {
      variants: {
        color: 'succession-blue',
        variant: 'underline-filled',
        isActive: true,
      },
      style: {
        color: colors['succession-blue']['500'],
      },
    },
    {
      variants: { color: 'neutral', variant: 'solid', isActive: true },
      style: {
        color: colors.neutral['200'],
      },
    },
    {
      variants: { color: 'neutral', variant: 'panel', isActive: true },
      style: {
        color: colors['art-management-red']['500'],
      },
    },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'sf-green',
    size: 'base',
    isActive: false,
  },
})

export const TriggerText = ({ style, ...props }: TabsTriggerTextProps) => {
  const { activeTab, size, variant, color } = useTabsContext()

  const tabStyle = styles({
    variant,
    color,
    size,
    isActive: true,
  })

  return <Text style={[tabStyle, style]} {...props} />
}

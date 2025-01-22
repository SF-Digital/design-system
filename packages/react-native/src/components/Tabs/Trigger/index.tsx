import React, { createContext } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { useTabsContext } from '../Root'
import { createStylesheet } from '../../../utils/create-styles'
import { colors, fonts } from '@sf-digital-ui/tokens'

export interface TabsTriggerProps extends PressableProps {
  value: string
}

type TabsTriggerVariants = {
  variant?: 'solid' | 'underline' | 'panel' | 'underline-filled'
  color?: 'sf-green' | 'succession-blue' | 'neutral'
  size?: 'base' | 'lg'
  isActive?: boolean
}

type TabsTriggerContextType = {
  value: string
}

export const TabsTriggerContext = createContext<TabsTriggerContextType | null>(
  null,
)

export const useTabsTriggerContext = () => {
  const context = React.useContext(TabsTriggerContext)
  if (!context) {
    throw new Error(
      'TabsTrigger components must be used within a TabsTrigger provider',
    )
  }
  return context
}

const styles = createStylesheet<TabsTriggerVariants>({
  base: {
    fontFamily: fonts['sf-digital'],
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 18,
  },
  variants: {
    variant: {
      solid: {
        borderRadius: 8,
        backgroundColor: colors.neutral['20'],
      },
      underline: {},
      'underline-filled': {},
      panel: {},
    },
    color: {
      'sf-green': {},
      'succession-blue': {},
      neutral: {},
    },
    size: {
      base: {
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
      lg: {
        paddingHorizontal: 40,
        paddingVertical: 10,
      },
    },
    isActive: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { color: 'sf-green', variant: 'solid', isActive: true },
      style: {
        backgroundColor: colors['primary-green']['50'],
      },
    },
    {
      variants: { color: 'succession-blue', variant: 'solid', isActive: true },
      style: {
        backgroundColor: colors['succession-blue']['100'],
      },
    },
    {
      variants: { color: 'sf-green', variant: 'underline', isActive: true },
      style: {
        borderBottomWidth: 2,
        borderBottomColor: colors['primary-green']['500'],
      },
    },
    {
      variants: {
        color: 'succession-blue',
        variant: 'underline',
        isActive: true,
      },
      style: {
        borderBottomWidth: 2,
        borderBottomColor: colors['succession-blue']['500'],
      },
    },
    {
      variants: {
        color: 'sf-green',
        variant: 'underline-filled',
        isActive: true,
      },
      style: {
        borderBottomWidth: 2,
        borderBottomColor: colors['primary-green']['500'],
        backgroundColor: colors['primary-green']['50'],
      },
    },
    {
      variants: {
        color: 'succession-blue',
        variant: 'underline-filled',
        isActive: true,
      },
      style: {
        borderBottomWidth: 2,
        borderBottomColor: colors['succession-blue']['500'],
        backgroundColor: colors['succession-blue']['50'],
      },
    },
    {
      variants: {
        color: 'neutral',
        variant: 'panel',
        isActive: true,
      },
      style: {
        backgroundColor: 'white',
        elevation: 2,
        shadowColor: '#101828',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderRadius: 8,
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

export const Trigger = ({ value, style, ...props }: TabsTriggerProps) => {
  const { activeTab, handleTabChange, size, variant, color } = useTabsContext()
  const isActive = activeTab === value

  const tabStyle = styles({
    color,
    size,
    variant,
    isActive,
  })

  return (
    <TabsTriggerContext.Provider value={{ value }}>
      <Pressable
        onPress={() => handleTabChange(value)}
        style={[tabStyle, typeof style === 'object' ? style : {}]}
        {...props}
      />
    </TabsTriggerContext.Provider>
  )
}

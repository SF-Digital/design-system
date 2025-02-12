import React, { createContext, useContext, useState } from 'react'

import { View, ViewProps } from 'react-native'
import { createStylesheet } from '../../../utils/create-styles'
import { colors } from '@sf-digital-ui/tokens'

export type TextInputVariants = {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  color?: 'sf-green' | 'succession-blue'
  focused?: boolean
}

type InputContextType = {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  isFocused: boolean
  setIsFocused: (isFocused: boolean) => void
  variant?: 'sf-green' | 'succession-blue'
} | null

const InputContext = createContext<InputContextType>(null)

export const useInputContext = () => {
  const context = useContext(InputContext)
  if (!context) {
    throw new Error('Input.Control must be used within Input.Root')
  }
  return context
}

export interface TextInputRootProps extends ViewProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'sf-green' | 'succession-blue'
  disabled?: boolean
}

const styles = createStylesheet<TextInputVariants>({
  base: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral['50'],
    minWidth: 'auto',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: colors.neutral['10'],
        borderColor: colors.neutral['50'],
      },
      false: {},
    },
    focused: {
      true: {},
      false: {},
    },
    color: {
      'sf-green': {},
      'succession-blue': {},
    },
  },
  compoundVariants: [
    {
      variants: { color: 'sf-green', focused: true },
      style: {
        borderColor: colors['primary-green']['200'],
      },
    },
    {
      variants: { color: 'succession-blue', focused: true },
      style: {
        borderColor: colors['succession-blue']['200'],
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    disabled: false,
    color: 'sf-green',
    focused: false,
  },
})

export const Root = ({
  disabled,
  size,
  color,
  style,
  ...props
}: TextInputRootProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <InputContext.Provider
      value={{ size, disabled, isFocused, setIsFocused, variant: color }}
    >
      <View
        onTouchEnd={() => {
          if (disabled) return
          setIsFocused(true)
        }}
        style={[
          styles({
            color,
            focused: isFocused,
            disabled,
            size,
          }),
          style,
        ]}
        {...props}
      />
    </InputContext.Provider>
  )
}

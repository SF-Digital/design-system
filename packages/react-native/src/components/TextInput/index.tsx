import React, { useState } from 'react'

import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextInputFocusEventData,
} from 'react-native'
import { createStylesheet } from '../../utils/create-styles'
import { colors } from '@sf-digital-ui/tokens'

type TextInputVariants = {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  color?: 'sf-green' | 'succession-blue'
  focused?: boolean
}

export interface TextInputProps extends RNTextInputProps {
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
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral['50'],
    backgroundColor: 'white',
    color: colors.neutral['80'],
  },
  variants: {
    size: {
      sm: { fontSize: 14 },
      md: { fontSize: 16 },
      lg: { fontSize: 18 },
    },
    disabled: {
      true: {
        borderWidth: 0,
        backgroundColor: colors.neutral['40'],
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
        elevation: 4,
        shadowColor: colors['primary-green']['200'],
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
      },
    },
    {
      variants: { color: 'succession-blue', focused: true },
      style: {
        borderColor: colors['succession-blue']['200'],
        elevation: 4,
        shadowColor: colors['succession-blue']['200'],
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
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

export const TextInput = ({
  disabled,
  size,
  color,
  onBlur,
  onFocus,
  ...props
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  return (
    <RNTextInput
      style={[
        ...styles({
          color,
          focused: isFocused,
          disabled,
          size,
        }),
        props.style,
      ]}
      onBlur={handleBlur}
      onFocus={handleFocus}
      editable={!disabled}
      {...props}
    />
  )
}

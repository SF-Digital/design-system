import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInput as RNTextArea,
  TextInputProps as RNTextAreaProps,
  TextInputFocusEventData,
} from 'react-native'
import { createStylesheet } from '../../utils/create-styles'
import { colors, fonts } from '@sf-digital-ui/tokens'

type TextAreaVariants = {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  color?: 'sf-green' | 'succession-blue'
  focused?: boolean
  multiline?: true
}

export interface TextAreaProps extends RNTextAreaProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'sf-green' | 'succession-blue'
  disabled?: boolean
  multiline?: true
}

const styles = createStylesheet<TextAreaVariants>({
  base: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: fonts['sf-digital'],
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
    multiline: {
      true: {
        minHeight: 128,
      },
    },
    size: {
      sm: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        fontSize: 14,
      },
      md: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
      },
      lg: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        fontSize: 18,
      },
    },
    disabled: {
      true: {
        borderWidth: 0,
        borderColor: colors.neutral['40'],
        backgroundColor: colors.neutral['10'],
        color: colors.neutral['300'],
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
    size: 'sm',
    disabled: false,
    color: 'sf-green',
    focused: false,
    multiline: true,
  },
})

export const TextArea = ({
  multiline,
  disabled,
  size,
  color,
  onBlur,
  onFocus,
  ...props
}: TextAreaProps) => {
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
    <RNTextArea
      style={[
        ...styles({
          color,
          focused: isFocused,
          multiline,
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

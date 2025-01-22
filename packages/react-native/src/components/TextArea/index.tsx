import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInput as RNTextArea,
  TextInputProps as RNTextAreaProps,
  TextInputFocusEventData,
} from 'react-native'
import { colors, fonts } from '@sf-digital-ui/tokens'
import { createStylesheet } from '../../utils/create-styles'

type TextAreaVariants = {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  color?: 'sf-green' | 'succession-blue'
  focused?: boolean
}

export interface TextAreaProps extends RNTextAreaProps {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  color?: 'sf-green' | 'succession-blue'
  focused?: boolean
  numberOfLines?: number
}

const styles = createStylesheet<TextAreaVariants>({
  base: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral['50'],
    backgroundColor: 'white',
    color: colors.neutral['80'],
    fontFamily: fonts['sf-digital'],
  },
  variants: {
    size: {
      sm: { fontSize: 14 },
      md: { fontSize: 16 },
      lg: { fontSize: 18 },
    },
    color: {
      'sf-green': {},
      'succession-blue': {},
    },
    disabled: {
      true: {
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

export const TextArea = ({
  disabled,
  numberOfLines = 4,
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
          disabled,
          size,
        }),
        props.style,
      ]}
      onBlur={handleBlur}
      onFocus={handleFocus}
      editable={!disabled}
      multiline={true}
      numberOfLines={numberOfLines}
      scrollEnabled={true}
      {...props}
    />
  )
}

import React, { useEffect, useRef } from 'react'
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native'
import { TextInputVariants, useInputContext } from '../Root'
import { colors } from '@sf-digital-ui/tokens'
import { createStylesheet } from '../../../utils/create-styles'

export type TextInputControlProps = TextInputProps

const styles = createStylesheet<TextInputVariants>({
  base: {
    color: colors.neutral['700'],
    flex: 1,
  },
  variants: {
    size: {
      sm: { fontSize: 14 },
      md: { fontSize: 16 },
      lg: { fontSize: 18 },
    },
    disabled: {
      true: {
        color: colors.neutral['90'],
      },
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
  defaultVariants: {
    size: 'md',
    disabled: false,
    color: 'sf-green',
    focused: false,
  },
})

export const Control = ({
  style,
  onBlur,
  onFocus,
  ...props
}: TextInputControlProps) => {
  const inputRef = useRef<RNTextInput>(null)

  const { size, disabled, setIsFocused, isFocused, variant } = useInputContext()
  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const hanldeBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus()
    }
  }, [isFocused])

  return (
    <RNTextInput
      placeholderTextColor={
        disabled ? colors.neutral['90'] : colors.neutral['300']
      }
      ref={inputRef}
      style={[
        styles({ size, disabled, color: variant, focused: isFocused }),
        style,
      ]}
      editable={!disabled}
      onFocus={handleFocus}
      onBlur={hanldeBlur}
      {...props}
    />
  )
}

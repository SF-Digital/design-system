import React, { createContext, useState, ReactNode } from 'react'
import { View, StyleSheet, ViewStyle, StyleProp, ViewProps } from 'react-native'

type RadioGroupContextValue = {
  value: string | undefined
  onChange: (value: string) => void
  disabled: boolean
} | null

export interface RadioGroupRootProps extends ViewProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  orientation?: 'vertical' | 'horizontal'
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

export const RadioGroupContext = createContext<RadioGroupContextValue>(null)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
})

export const Root = ({
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled = false,
  orientation = 'vertical',
  children,
  style,
  ...props
}: RadioGroupRootProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<
    string | undefined
  >(defaultValue)
  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue

  const contextValue = {
    value,
    onChange: (newValue: string) => {
      onValueChange?.(newValue)
      if (controlledValue === undefined) {
        setUncontrolledValue(newValue)
      }
    },
    disabled,
  }

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <View
        style={[
          styles.container,
          orientation === 'horizontal' ? styles.horizontal : styles.vertical,
          style,
        ]}
        accessibilityRole="radiogroup"
        {...props}
      >
        {children}
      </View>
    </RadioGroupContext.Provider>
  )
}

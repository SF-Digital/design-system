// Trigger.tsx
import React, { useContext } from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native'
import { DropdownMenuContext } from '../Root'
import { colors } from '@sf-digital-ui/tokens'

export type DropdownMenuTriggerProps = TouchableOpacityProps & {
  textStyle?: TextStyle
}

export const Trigger: React.FC<DropdownMenuTriggerProps> = ({
  style,
  textStyle,
  children,
  ...props
}) => {
  const { isOpen, setIsOpen } = useContext(DropdownMenuContext)

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, style]}
      onPress={() => setIsOpen(!isOpen)}
    >
      {typeof children === 'string' ? (
        <Text style={[styles.text, textStyle]}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    // Add any container styles here
  } as ViewStyle,
  text: {
    color: colors.neutral[500],
  } as TextStyle,
})

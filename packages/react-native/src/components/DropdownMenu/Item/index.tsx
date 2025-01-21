import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native'

export type DropdownMenuItemProps = TouchableOpacityProps

export const Item: React.FC<DropdownMenuItemProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity {...props} style={[styles.item, style]}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    paddingLeft: 16,
    paddingRight: 48,
  },
})

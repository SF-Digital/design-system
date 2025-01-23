import React from 'react'
import { Pressable, PressableProps, StyleSheet } from 'react-native'
import { useSelectContext } from '../Root'
import { colors } from '@sf-digital-ui/tokens'

export type SelectTriggerProps = PressableProps

const triggerStyles = StyleSheet.create({
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral['50'],
    backgroundColor: 'white',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
})

export const Trigger = ({ style, ...props }: SelectTriggerProps) => {
  const { onOpenChange } = useSelectContext()

  return (
    <Pressable
      onPress={() => onOpenChange(true)}
      style={[triggerStyles.trigger, typeof style === 'object' ? style : {}]}
      accessibilityRole="button"
      accessibilityState={{ expanded: false }}
      {...props}
    />
  )
}

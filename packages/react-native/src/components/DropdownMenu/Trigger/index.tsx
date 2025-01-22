// Trigger.tsx
import React, { useContext } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { DropdownMenuContext } from '../Root'

export type DropdownMenuTriggerProps = PressableProps

export const Trigger: React.FC<DropdownMenuTriggerProps> = ({ ...props }) => {
  const { isOpen, setIsOpen } = useContext(DropdownMenuContext)

  return <Pressable onPress={() => setIsOpen(!isOpen)} {...props} />
}

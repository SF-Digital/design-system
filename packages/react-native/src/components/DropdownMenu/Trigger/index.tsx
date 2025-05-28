import React, { useContext } from 'react'
import { Pressable, type PressableProps } from 'react-native'
import { DropdownMenuContext } from '../Root'

export type DropdownMenuTriggerProps = PressableProps

export const Trigger = ({ ...props }: DropdownMenuTriggerProps) => {
	const { isOpen, setIsOpen } = useContext(DropdownMenuContext)

	return <Pressable onPress={() => setIsOpen(!isOpen)} {...props} />
}

import type React from 'react'
import { useContext } from 'react'
import { Pressable, type PressableProps } from 'react-native'
import { DropdownMenuContext } from '../Root'

export type DropdownMenuTriggerProps = PressableProps

export const Trigger: React.FC<DropdownMenuTriggerProps> = ({ ...props }) => {
	const { isOpen, setIsOpen } = useContext(DropdownMenuContext)

	return <Pressable onPress={() => setIsOpen(!isOpen)} {...props} />
}

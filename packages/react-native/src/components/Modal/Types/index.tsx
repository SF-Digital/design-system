import { ReactNode } from 'react'
import { ViewStyle, StyleProp } from 'react-native'

export interface ModalContextType {
  isVisible: boolean
  setIsVisible: (value: boolean) => void
}

export interface ModalProps {
  children?: ReactNode
}

export interface StyledProps {
  style?: StyleProp<ViewStyle>
}

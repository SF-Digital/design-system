// Content.tsx
import React, { useContext } from 'react'
import { View, ViewProps, Modal, StyleSheet } from 'react-native'
import { DropdownMenuContext } from '../Root'
import { colors } from '@sf-digital-ui/tokens'

export interface DropdownMenuContentProps extends ViewProps {
  align?: 'start' | 'center' | 'end'
}

export const Content: React.FC<DropdownMenuContentProps> = ({
  style,
  children,
  ...props
}) => {
  const { isOpen, setIsOpen } = useContext(DropdownMenuContext)

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={() => setIsOpen(false)}
    >
      <View style={styles.overlay} onTouchStart={() => setIsOpen(false)}>
        <View
          style={[styles.content, style]}
          onTouchStart={(e) => e.stopPropagation()}
          {...props}
        >
          {children}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral[500],
    overflow: 'hidden',
  },
})

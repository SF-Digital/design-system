import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { ModalProps } from '../Types'

export const Description: React.FC<ModalProps> = ({ children }) => {
  return <Text style={styles.description}>{children}</Text>
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
})

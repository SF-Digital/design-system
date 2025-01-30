import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { ModalProps } from '../Types'

export const Title: React.FC<ModalProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})

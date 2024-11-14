import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

// TODO: This is just an example component. Must be completely refactored
interface ButtonProps {
  title: string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a78728',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // Adds depth for Android
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default Button

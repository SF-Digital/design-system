import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native'

interface Option {
  label: string
  value: string
}

interface RadioGroupProps {
  options: Option[]
  selectedValue: string
  onValueChange: (value: string) => void
  labelStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>
  radioStyle?: StyleProp<ViewStyle>
  radioSelectedStyle?: StyleProp<ViewStyle>
}

const RadioGroup = ({
  options,
  selectedValue,
  onValueChange,
  labelStyle,
  containerStyle,
  radioStyle,
  radioSelectedStyle,
}: RadioGroupProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[styles.optionContainer]}
          onPress={() => onValueChange(option.value)}
        >
          <View
            style={[
              styles.radio,
              radioStyle,
              selectedValue === option.value && styles.radioSelected,
              selectedValue === option.value && radioSelectedStyle,
            ]}
          >
            {selectedValue === option.value && (
              <View style={styles.innerCircle} />
            )}
          </View>
          <Text style={[styles.label, labelStyle]}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: '#007AFF',
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
})

export default RadioGroup

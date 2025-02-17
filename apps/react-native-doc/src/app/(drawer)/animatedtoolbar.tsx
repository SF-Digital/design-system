import { ProgressBar } from '@sf-digital-ui/react-native'
import React, { useState } from 'react'
import { Pressable, View, Text } from 'react-native'

const stages = [
  { id: '1', label: 'Start' },
  { id: '2', label: 'Help' },
  { id: '3', label: 'Me' },
  { id: '4', label: 'Please' },
  { id: '5', label: 'Review' },
  { id: '6', label: 'Complete' },
]
const AnimatedToolbar: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0)

  const nextStage = () => {
    setCurrentStage((prev) => (prev + 1) % stages.length)
  }
  const prevStage = () => {
    setCurrentStage((prev) => (prev - 1 + stages.length) % stages.length)
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ProgressBar stages={stages} currentStage={currentStage} />
      <Pressable onPress={nextStage} style={{ paddingTop: 10 }}>
        <Text>Next Stage</Text>
      </Pressable>
      <Pressable onPress={prevStage} style={{ paddingTop: 10 }}>
        <Text>Prev Stage</Text>
      </Pressable>
    </View>
  )
}

export default AnimatedToolbar

import Markdown from '@ronradtke/react-native-markdown-display'
import { ProgressBar } from '@sf-digital-ui/react-native'
import React, { useState } from 'react'
import { Pressable, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../../styles'

const stages = [
  { id: '1', label: 'Start' },
  { id: '2', label: 'Help' },
  { id: '3', label: 'Me' },
  { id: '4', label: 'Please' },
  { id: '5', label: 'Review' },
  { id: '6', label: 'Complete' },
]
const ProgressBarPage: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0)

  const nextStage = () => {
    setCurrentStage((prev) => (prev + 1) % stages.length)
  }
  const prevStage = () => {
    setCurrentStage((prev) => (prev - 1 + stages.length) % stages.length)
  }

  const docs = `
This story displays the \`ProgressBar\` component, which is a React component. Types generated for each component are exported as \`ProgressBarProps\`.

## Usage:
\b
\`import { ProgressBar } from '@sf-digital-ui/react'\`
\b
## API Reference:
\b
`

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 24, padding: 10, gap: 12 }}
    >
      <Markdown>{docs}</Markdown>

      <View
        style={{
          ...styles.componentExampleContainer,
        }}
      >
        <ProgressBar stages={stages} currentStage={currentStage} />
        <Pressable onPress={nextStage} style={{ paddingTop: 10 }}>
          <Text>Next Stage</Text>
        </Pressable>
        <Pressable onPress={prevStage} style={{ paddingTop: 10 }}>
          <Text>Prev Stage</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default ProgressBarPage

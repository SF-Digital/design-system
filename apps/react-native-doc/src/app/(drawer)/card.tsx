import { View, Text } from 'react-native'
import { Card as DesignSystemCard } from '@sf-digital-ui/react-native'
import Markdown from '@ronradtke/react-native-markdown-display'
import { styles } from '../../../styles'
import { ScrollView } from 'react-native-gesture-handler'

export default function Card() {
  const cardDescription = `This story displays the \`Card\` component.
  ## The content inside the card will determine the size of the card.`
  const words = [
    'The',
    'quick',
    'brown',
    'fox',
    'jumps',
    'over',
    'the',
    'lazy',
    'dog',
    '.',
    'This is a much longer card to show you that the content will determine card size.',
  ]

  return (
    <ScrollView>
      <View style={styles.pageContainer}>
        <Markdown>{cardDescription}</Markdown>
        <View
          style={{
            alignItems: 'flex-start',
            gap: 2,
            ...styles.componentExampleContainer,
          }}
        >
          {words.map((word) => {
            return (
              <DesignSystemCard key={word}>
                <Text>{word}</Text>
              </DesignSystemCard>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

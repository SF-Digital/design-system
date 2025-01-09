import { Text, View } from 'react-native'
import { Heading } from '@design-system'

// TODO: add more typography examples and styles, let's make a component similar to storybook where we dynamic change the properties of the text

export default function Typography() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Heading className="text-primary-green-500">
        This is an H1 Heading
      </Heading>
      <Text className="text-primary-green-500 font-bold">Some text</Text>
    </View>
  )
}

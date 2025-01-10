import { View } from 'react-native'
import { Heading } from '@sf-digital-ui/react-native'

// TODO: add more typography examples and styles, let's make a component similar to storybook where we dynamic change the properties of the text

export default function Typography() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Heading variant="h1">This is an H1 Heading</Heading>
      <Heading variant="h2">This is an H2 Heading</Heading>
      <Heading variant="h3" style={{ fontStyle: 'italic' }}>
        This is an H3 Heading
      </Heading>
    </View>
  )
}

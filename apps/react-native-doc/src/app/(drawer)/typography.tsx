import { View } from 'react-native'
import { Heading } from '@design-system'

export default function Typography() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Heading variant="h1" style={{ color: '#007bff' }}>
        This is an H1 Heading
      </Heading>
      <Heading variant="h2">This is an H2 Heading</Heading>
      <Heading variant="h3" style={{ fontStyle: 'italic' }}>
        This is an H3 Heading
      </Heading>
    </View>
  )
}

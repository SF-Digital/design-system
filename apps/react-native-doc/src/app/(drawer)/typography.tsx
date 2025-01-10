import { View } from 'react-native'
import { Heading } from '@design-system'

export default function Typography() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Heading size="h1">This is an H1 Heading</Heading>
      <Heading size="h2">This is an H2 Heading</Heading>
      <Heading size="h3">This is an H3 Heading</Heading>
      <Heading size="h4">This is an H4 Heading</Heading>
      <Heading size="h5">This is an H5 Heading</Heading>
      <Heading size="h6">This is an H6 Heading</Heading>
    </View>
  )
}

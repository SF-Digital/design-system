import { View } from 'react-native'
import {
  Heading,
  HeadingProps,
  Text,
  TextProps,
} from '@sf-digital-ui/react-native'

export default function Typography() {
  const textSizes: TextProps['size'][] = ['xs', 'sm', 'md', 'lg']
  const headingSizes: HeadingProps['size'][] = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {headingSizes.map((headingSize) => {
        return (
          <Heading size={headingSize} key={headingSize}>
            This is a {headingSize} Heading
          </Heading>
        )
      })}

      {textSizes.map((textSize) => {
        return (
          <Text size={textSize} key={textSize}>
            This is a {textSize} Text
          </Text>
        )
      })}
    </View>
  )
}

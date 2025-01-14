import { View } from 'react-native'
import { Text, TextProps } from '@sf-digital-ui/react-native'
import Markdown from '@ronradtke/react-native-markdown-display'
import { exampleContainerStyle, pageContainerStyle } from './styles'

export default function TextPage() {
  const textSizes: TextProps['size'][] = ['lg', 'md', 'sm', 'xs']
  const textDescription = `This story displays the \`Text\` component, a text tag using the \`Perpetua\` font.
  ## API Reference:
  \b
  \`size: 'lg' | 'md' | 'sm' | 'xs'\` - The size of the text.`

  return (
    <View style={pageContainerStyle.container}>
      <Markdown>{textDescription}</Markdown>
      <View style={exampleContainerStyle.container}>
        {textSizes.map((textSize) => {
          return (
            <Text size={textSize} key={textSize}>
              This is a {`'${textSize}'`} Text
            </Text>
          )
        })}
      </View>
    </View>
  )
}

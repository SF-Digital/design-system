import { View } from 'react-native'
import { Text, TextProps } from '@sf-digital-ui/react-native'
import Markdown from '@ronradtke/react-native-markdown-display'

export default function Texts() {
  const textSizes: TextProps['size'][] = ['lg', 'md', 'sm', 'xs']
  const textDescription = `This story displays the \`Text\` component, a text tag using the \`Perpetua\` font.
  ## API Reference:
  \b
  \`size: 'xs' | 'sm' | 'base' | 'lg'\` - The size of the text.`

  return (
    <View style={{ flex: 1, flexDirection: 'column', gap: 10, padding: 10 }}>
      <Markdown>{textDescription}</Markdown>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
          paddingVertical: 20,
        }}
      >
        {textSizes.map((textSize) => {
          return (
            <Text size={textSize} key={textSize}>
              This is a {textSize} Text
            </Text>
          )
        })}
      </View>
    </View>
  )
}

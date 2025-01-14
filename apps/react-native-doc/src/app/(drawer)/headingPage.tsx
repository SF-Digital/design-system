import { View } from 'react-native'
import { Heading, HeadingProps } from '@sf-digital-ui/react-native'
import Markdown from '@ronradtke/react-native-markdown-display'
import { exampleContainerStyle, pageContainerStyle } from './styles'

export default function HeadingPage() {
  const headingSizes: HeadingProps['size'][] = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]
  const headingDescription = `This story displays the \`Heading\` component, a heading tag using the \`Gill Sans\` font.
  ## API Reference:
  \b
  \`size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'\` - The size of the heading.
  \b`

  return (
    <View style={pageContainerStyle.container}>
      <Markdown>{headingDescription}</Markdown>
      <View style={exampleContainerStyle.container}>
        {headingSizes.map((headingSize) => {
          return (
            <Heading size={headingSize} key={headingSize}>
              This is a {`'${headingSize}'`} Heading
            </Heading>
          )
        })}
      </View>
    </View>
  )
}

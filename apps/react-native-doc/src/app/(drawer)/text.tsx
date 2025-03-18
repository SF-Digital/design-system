import Markdown from '@ronradtke/react-native-markdown-display'
import {
	Text as DesignSystemText,
	TextProps,
} from '@sf-digital-ui/react-native'
import { View } from 'react-native'
import { styles } from '../../../styles'

export default function Text() {
	const textSizes: TextProps['size'][] = ['lg', 'md', 'sm', 'xs']
	const textDescription = `This story displays the \`Text\` component, a text tag using the \`Perpetua\` font.
  ## API Reference:
  \b
  \`size: 'lg' | 'md' | 'sm' | 'xs'\` - The size of the text.
  \b
  \`fontWeight: 'thin' | 'light' | 'regular' | 'bold' | 'black'\` - The weight of the text.
  `

	return (
		<View style={styles.pageContainer}>
			<Markdown>{textDescription}</Markdown>
			<View style={styles.componentExampleContainer}>
				{textSizes.map((textSize) => {
					return (
						<DesignSystemText size={textSize} key={textSize}>
							{`${textSize}: `}
							The quick brown fox jumps over the lazy dog
						</DesignSystemText>
					)
				})}
			</View>
		</View>
	)
}

import Markdown from '@ronradtke/react-native-markdown-display'
import {
	Heading as DesignSystemHeading,
	HeadingProps,
} from '@sf-digital-ui/react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../../styles'

export default function Heading() {
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
  \b
  \`fontWeight: 'thin' | 'light' | 'regular' | 'bold' | 'black'\` - The weight of the text.
  `

	return (
		<ScrollView style={styles.pageContainer}>
			<Markdown>{headingDescription}</Markdown>
			<View style={styles.componentExampleContainer}>
				{headingSizes.map((headingSize) => {
					return (
						<DesignSystemHeading size={headingSize} key={headingSize}>
							{`${headingSize}: `}
							The quick brown fox jumps over the lazy dog
						</DesignSystemHeading>
					)
				})}
			</View>
		</ScrollView>
	)
}

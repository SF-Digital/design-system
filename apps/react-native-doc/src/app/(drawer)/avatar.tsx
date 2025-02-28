import Markdown from '@ronradtke/react-native-markdown-display'
import {
	Avatar as DesignSystemAvatar,
	type AvatarProps,
} from '@sf-digital-ui/react-native'
import { View } from 'react-native'
import { styles } from '../../../styles'

export default function Avatar() {
	const avatarSizes: AvatarProps['size'][] = [
		'xxl',
		'xl',
		'lg',
		'md',
		'sm',
		'xs',
	]
	const textDescription = `This story displays the \`Avatar\` component. 
  \b
  Which is a React element built using Pattern Composition. 
  \b
  Types generated for each component are exported as \`Avatar{ComponentName}Props\`.
  ## API Reference:
  \b
  \`size: 'xxl' | 'xl' | 'lg' | 'md'| 'sm'| 'xs'\` - The size of the avatar.`

	return (
		<View style={styles.pageContainer}>
			<Markdown>{textDescription}</Markdown>
			<View style={styles.componentExampleContainer}>
				{avatarSizes.map((avatarSize) => {
					return (
						<DesignSystemAvatar
							key={avatarSize}
							src='https://avatars.githubusercontent.com/u/51454097?v=4'
							size={avatarSize}
						/>
					)
				})}
			</View>
		</View>
	)
}

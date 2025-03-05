import { Alert, View } from 'react-native'
import { Modal as DesignSystemModal, Button } from '@sf-digital-ui/react-native'
import { styles } from '../../../styles'
import Markdown from '@ronradtke/react-native-markdown-display'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function Modal() {
	const docs = `# Modal Component
  ## Usage:
  \b
  \b
  \`\`\`import { Modal } from '@sf-digital-ui/react-native'\`\`\`
  \b
  \`Modal.Root\` - Container component that provides context for all other Modal components.
  \b
  \`Modal.Trigger\` - Button that opens the modal.
  \b
  \`Modal.Portal\` - Renders modal content at the root level of your app.
  \b
  \`Modal.Overlay\` - Backdrop overlay that covers the main content when modal is open.
  \b
  \`Modal.Content\` - Container for modal content.
  \b
  \`Modal.Title\` - Modal title component with preset styling.
  \b
  \`Modal.Description\` - Component for modal description text.
  \b
  \`Modal.Close\` - Button that closes the modal.
  \b
  # Props
  ## Shared Props
  \b
  \`children?: ReactNode\` - Content to be rendered within the component
  \b
  \`style?: StyleProp<ViewStyle>\` - Custom styles (available on Content and Overlay)
  \b`

	return (
		<ScrollView style={styles.pageContainer}>
			<Markdown>{docs}</Markdown>
			<View style={styles.componentExampleContainer}>
				<DesignSystemModal.Root>
					<DesignSystemModal.Trigger>
						<Button.Root color='sf-green' variant='primary'>
							<Button.Text>Open Modal</Button.Text>
						</Button.Root>
					</DesignSystemModal.Trigger>

					<DesignSystemModal.Portal>
						<DesignSystemModal.Overlay />
						<DesignSystemModal.Content>
							<DesignSystemModal.Close>
								<MaterialCommunityIcons
									name='close'
									size={18}
									color='black'
									style={{
										alignSelf: 'flex-end',
									}}
								/>
							</DesignSystemModal.Close>
							<View style={{ gap: 18 }}>
								<View style={{ gap: 14 }}>
									<DesignSystemModal.Title>Welcome</DesignSystemModal.Title>
									<DesignSystemModal.Description>
										This is a description of what the DesignSystemModal does.
									</DesignSystemModal.Description>
								</View>
								<DesignSystemModal.Close>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
										}}
									>
										<Button.Root
											onPress={() =>
												Alert.alert('You have continued to some flow....')
											}
										>
											<Button.Text>Continue</Button.Text>
										</Button.Root>
										<Button.Root
											color='succession-blue'
											variant='secondary'
											onPress={() =>
												Alert.alert('You have aborted some flow....')
											}
										>
											<Button.Text>Cancel</Button.Text>
										</Button.Root>
									</View>
								</DesignSystemModal.Close>
							</View>
						</DesignSystemModal.Content>
					</DesignSystemModal.Portal>
				</DesignSystemModal.Root>
			</View>
		</ScrollView>
	)
}

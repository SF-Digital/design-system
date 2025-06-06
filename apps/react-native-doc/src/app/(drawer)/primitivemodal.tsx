import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Markdown from '@ronradtke/react-native-markdown-display'
import {
	Button,
	PrimitiveModal as DesignSystemPrimitiveModal,
} from '@sf-digital-ui/react-native'
import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../../styles'

export default function PrimitiveModal() {
	const [isControlledModalOpen, setIsControlledModalOpen] = useState(false)

	const docs = `# Modal Component
  ## Usage:
  \b
  \`\`\`import { Modal } from '@sf-digital-ui/react-native'\`\`\`
  \b
  \`Modal.Root\` - Container component that provides context for all other Modal components.
  \b
  \`Modal.Root\` now supports controlled mode with \`open\` and \`onOpenChange\` props.
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
  ## Root Props
  \b
  \`open?: boolean\` - Optional prop to control modal visibility externally (controlled mode)
  \b
  \`onOpenChange?: (open: boolean) => void\` - Optional callback when modal open state changes
  \b
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
				<Markdown>### Uncontrolled Modal (Internal State)</Markdown>
				<DesignSystemPrimitiveModal.Root>
					<DesignSystemPrimitiveModal.Trigger>
						<Button.Root color='sf-green' variant='primary'>
							<Button.Text>Open Uncontrolled Modal</Button.Text>
						</Button.Root>
					</DesignSystemPrimitiveModal.Trigger>

					<DesignSystemPrimitiveModal.Portal>
						<DesignSystemPrimitiveModal.Overlay>
							<DesignSystemPrimitiveModal.Content style={{ gap: 18 }}>
								<DesignSystemPrimitiveModal.Close>
									<MaterialCommunityIcons
										name='close'
										size={18}
										color='black'
										style={{
											alignSelf: 'flex-end',
										}}
									/>
								</DesignSystemPrimitiveModal.Close>
								<DesignSystemPrimitiveModal.Title>
									Uncontrolled Modal
								</DesignSystemPrimitiveModal.Title>
								<DesignSystemPrimitiveModal.Description>
									This modal manages its own state internally. The Modal.
									Trigger and Modal. Close components will automatically handle
									opening and closing.
								</DesignSystemPrimitiveModal.Description>
								<DesignSystemPrimitiveModal.Close style={{ gap: 14 }}>
									<Button.Root
										onPress={() =>
											Alert.alert('You have continued to some flow....')
										}
									>
										<Button.Text>Continue</Button.Text>
									</Button.Root>
									<Button.Root color='succession-blue' variant='secondary'>
										<Button.Text>Cancel</Button.Text>
									</Button.Root>
								</DesignSystemPrimitiveModal.Close>
							</DesignSystemPrimitiveModal.Content>
						</DesignSystemPrimitiveModal.Overlay>
					</DesignSystemPrimitiveModal.Portal>
				</DesignSystemPrimitiveModal.Root>
			</View>

			<View style={styles.componentExampleContainer}>
				<Markdown>### Controlled Modal (External State)</Markdown>

				<Button.Root
					color='succession-blue'
					variant='primary'
					onPress={() => setIsControlledModalOpen(true)}
				>
					<Button.Text>Open Controlled Modal</Button.Text>
				</Button.Root>

				<DesignSystemPrimitiveModal.Root
					open={isControlledModalOpen}
					onOpenChange={setIsControlledModalOpen}
				>
					<DesignSystemPrimitiveModal.Portal>
						<DesignSystemPrimitiveModal.Overlay>
							<DesignSystemPrimitiveModal.Content style={{ gap: 18 }}>
								<DesignSystemPrimitiveModal.Close>
									<MaterialCommunityIcons
										name='close'
										size={18}
										color='black'
										style={{
											alignSelf: 'flex-end',
										}}
									/>
								</DesignSystemPrimitiveModal.Close>

								<DesignSystemPrimitiveModal.Title>
									Controlled Modal
								</DesignSystemPrimitiveModal.Title>
								<DesignSystemPrimitiveModal.Description>
									This modal's state is controlled externally using the 'open'
									and 'onOpenChange' props. You can programmatically open and
									close this modal.
								</DesignSystemPrimitiveModal.Description>

								<Button.Root
									onPress={() => {
										Alert.alert('Action performed!')
										// Programmatically close the modal
										setIsControlledModalOpen(false)
									}}
								>
									<Button.Text>Perform Action</Button.Text>
								</Button.Root>
								<Button.Root
									color='succession-blue'
									variant='secondary'
									onPress={() => setIsControlledModalOpen(false)}
								>
									<Button.Text>Cancel</Button.Text>
								</Button.Root>
							</DesignSystemPrimitiveModal.Content>
						</DesignSystemPrimitiveModal.Overlay>
					</DesignSystemPrimitiveModal.Portal>
				</DesignSystemPrimitiveModal.Root>
			</View>
		</ScrollView>
	)
}

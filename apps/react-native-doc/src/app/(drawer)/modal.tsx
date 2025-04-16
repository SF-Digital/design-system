import Markdown from '@ronradtke/react-native-markdown-display'
import { Button, Modal as DesignSystemModal } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { AlertCircle } from 'lucide-react-native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../../styles'

export default function Modal() {
	const [modalWithIconVisible, setModalWithIconVisible] = useState(false)

	const docs = `# Modal Component

## Overview
The Design System Modal component provides a flexible and customizable way to present content above the main view in your React Native application.

## Installation
\`\`\`tsx
import { Modal } from '@sf-digital-ui/react-native'
\`\`\`

## Component Architecture
The Modal is composed of several sub-components that work together:

- \`Modal.Root\` - Container component that provides context for all modal components
- \`Modal.Header\` - Container for the modal header, requires icon and circularBackgroundColor props
- \`Modal.Title\` - Modal title component with preset styling
- \`Modal.Description\` - Component for modal description text
- \`Modal.Body\` - Main content area of the modal
- \`Modal.Footer\` - Container for modal actions, typically buttons

## Usage

The Modal component can be used in controlled mode by managing its state externally using the \`open\` and \`onOpenChange\` props.

## Important Note
The \`Modal.Header\` component requires both \`icon\` and \`circularBackgroundColor\` props. If you don't need an icon in your modal, consider using the PrimitiveModal component instead, which offers more flexibility.
`

	return (
		<ScrollView style={styles.pageContainer}>
			<Markdown>{docs}</Markdown>

			<View style={styles.componentExampleContainer}>
				<Markdown>### Modal with Alert Icon</Markdown>

				<Button.Root
					color='succession-blue'
					variant='primary'
					onPress={() => setModalWithIconVisible(true)}
				>
					<Button.Text>Open Modal with Alert Icon</Button.Text>
				</Button.Root>

				<DesignSystemModal.Root
					open={modalWithIconVisible}
					onOpenChange={setModalWithIconVisible}
				>
					<DesignSystemModal.Header
						icon={<AlertCircle size={24} color='white' />}
						circularBackgroundColor={colors.error[500]}
					>
						<DesignSystemModal.Title>Confirm Action</DesignSystemModal.Title>
					</DesignSystemModal.Header>

					<DesignSystemModal.Body>
						<DesignSystemModal.Description>
							This modal includes an icon in the header component. The
							Modal.Header component requires an icon prop and
							circularBackgroundColor.
						</DesignSystemModal.Description>
					</DesignSystemModal.Body>

					<DesignSystemModal.Footer>
						<Button.Root onPress={() => setModalWithIconVisible(false)}>
							<Button.Text>Close</Button.Text>
						</Button.Root>
					</DesignSystemModal.Footer>
				</DesignSystemModal.Root>
			</View>

			<View style={styles.componentExampleContainer}>
				<Markdown>### Code Example</Markdown>
				<View style={exampleStyles.codeBlock}>
					<Text style={exampleStyles.codeText}>
						{`import { Modal, Button } from '@sf-digital-ui/react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { AlertCircle } from 'lucide-react-native';
import { colors } from '@sf-digital-ui/tokens';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button.Root onPress={() => setIsOpen(true)}>
        <Button.Text>Open Modal</Button.Text>
      </Button.Root>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Header 
          icon={<AlertCircle size={24} color="white" />}
          circularBackgroundColor={colors.error[500]}
        >
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <Modal.Description>
            Description of what this modal is about.
          </Modal.Description>
          
          {/* Additional content can go here */}
        </Modal.Body>
        
        <Modal.Footer>
          <Button.Root onPress={() => setIsOpen(false)}>
            <Button.Text>Close</Button.Text>
          </Button.Root>
        </Modal.Footer>
      </Modal.Root>
    </>
  );
};`}
					</Text>
				</View>
			</View>

			<View style={styles.componentExampleContainer}>
				<Markdown>### Required Props</Markdown>
				<Text style={exampleStyles.paragraph}>
					<Text style={exampleStyles.propName}>Modal.Header:</Text>
				</Text>
				<View style={exampleStyles.listContainer}>
					<Text style={exampleStyles.listItem}>
						• <Text style={exampleStyles.propRequired}>icon: ReactNode</Text> -
						Icon to display in the header (required)
					</Text>
					<Text style={exampleStyles.listItem}>
						•{' '}
						<Text style={exampleStyles.propRequired}>
							circularBackgroundColor: string
						</Text>{' '}
						- Background color for the icon circle (required)
					</Text>
				</View>
			</View>

			<View style={styles.componentExampleContainer}>
				<Markdown>### Features</Markdown>
				<View style={exampleStyles.listContainer}>
					<Text style={exampleStyles.listItem}>
						• Fully integrated with the design system styling
					</Text>
					<Text style={exampleStyles.listItem}>
						• Compositional API for maximum flexibility
					</Text>
					<Text style={exampleStyles.listItem}>
						• Icon support in the header
					</Text>
					<Text style={exampleStyles.listItem}>
						• Customizable sections (Header, Body, Footer)
					</Text>
					<Text style={exampleStyles.listItem}>
						• Controlled state management
					</Text>
				</View>
			</View>
		</ScrollView>
	)
}

const exampleStyles = StyleSheet.create({
	modalTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 15,
	},
	modalText: {
		marginBottom: 20,
		textAlign: 'center',
	},
	codeBlock: {
		backgroundColor: colors['primary-grey'][500],
		padding: 16,
		borderRadius: 8,
		marginVertical: 12,
	},
	codeText: {
		color: colors['primary-black'][50],
		fontFamily: 'monospace',
		fontSize: 12,
	},
	listContainer: {
		marginTop: 5,
		marginBottom: 10,
	},
	listItem: {
		marginBottom: 5,
		paddingLeft: 5,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 10,
	},
	paragraph: {
		marginBottom: 8,
	},
	propName: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	propRequired: {
		fontWeight: 'bold',
		color: colors.error[500],
	},
})

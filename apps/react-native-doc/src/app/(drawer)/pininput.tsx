import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../../styles'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import {
	PinInput as DesignSystemPinInput,
	PinInputRootProps,
} from '@sf-digital-ui/react-native'
import Markdown from '@ronradtke/react-native-markdown-display'
import { useState } from 'react'
import RadioGroup from '@/components/RadioGroup'

type Size = PinInputRootProps['size']

export default function PinInput() {
	const [size, setSize] = useState<Size>('md')
	const [disabled, setDisabled] = useState<boolean>(false)

	const docs = `This story displays the \`PinInput\` component, which is a React Element built using Pattern Composition.
  ## Usage:
  \b
  \b
  \`\`\`import { PinInput } from '@sf-digital-ui/react-native'\`\`\`
  \b
  \`PinInput.Root\` - The root element of the input, providing context.
  \b
  \`PinInput.Fields\` - The container for the fields.
  \b
  \`PinInput.Field\` - The individual field.
  \b
  \`PinInput.Divider\` - The divider between groups of fields
  \b
  ## API Reference:
  \b
  ### Root
  \b
  \`size: 'sm' | 'md' | 'lg'\` - The size of each field.
  \b
  \`onComplete: (pin: string) => void\` - The function to call when the pininput is filled.
  \b
  \`disabled: boolean\` - Whether the input is disabled.
  \b
  ### Field
  \b
  \`index: number\` - The index of the field.
  \b
  `

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'position' : 'height'}
			style={styles.pageContainer}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
			contentContainerStyle={{ flex: 1 }}
		>
			<ScrollView style={styles.pageContainer}>
				<Markdown>{docs}</Markdown>
				<View style={[styles.componentExampleContainer]}>
					<DesignSystemPinInput.Root
						length={6}
						size={size}
						disabled={disabled}
						onComplete={(pin) => console.log(pin)}
					>
						<DesignSystemPinInput.Fields>
							<DesignSystemPinInput.Field index={0} />
							<DesignSystemPinInput.Field index={1} />
							<DesignSystemPinInput.Field index={2} />
							<DesignSystemPinInput.Divider />
							<DesignSystemPinInput.Field index={3} />
							<DesignSystemPinInput.Field index={4} />
							<DesignSystemPinInput.Field index={5} />
						</DesignSystemPinInput.Fields>
					</DesignSystemPinInput.Root>
					<View
						style={{
							flexDirection: 'column',
							flex: 1,
							gap: 16,
						}}
					>
						<RadioGroup
							options={[
								{ label: 'sm', value: 'sm' },
								{ label: 'md', value: 'md' },
								{ label: 'lg', value: 'lg' },
							]}
							selectedValue={size as string}
							onValueChange={(value) => setSize(value as Size)}
						/>

						<RadioGroup
							options={[
								{ label: 'Enabled', value: 'enabled' },
								{ label: 'Disabled', value: 'disabled' },
							]}
							selectedValue={disabled ? 'disabled' : 'enabled'}
							onValueChange={(value) => setDisabled(value === 'disabled')}
						/>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

import RadioGroup from '@/components/RadioGroup'
import Markdown from '@ronradtke/react-native-markdown-display'
import {
	Tooltip as DesignSystemTooltip,
	TooltipContentProps,
} from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { HelpCircleIcon } from 'lucide-react-native'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../../styles'

export default function Tooltip() {
	const docs = `
This story displays the \`Tooltip\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Tooltip{ComponentName}Props\`.

## Usage:
  \b
  \`import { Tooltip } from '@sf-digital-ui/react-native'\`
  \b
  \b
  \`Tooltip.Root\` - The root element of the Tooltip.
  \b
  \`Tooltip.Trigger\` - The trigger element that opens the tooltip.
  \b
  \`Tooltip.Content\` - The content element of the Tooltip.
  \b
  \`Tooltip.Text\` - The text element inside the Tooltip.
  \b
  ## API Reference:
  \b
  ### Root
  \b
  \`open: boolean\` - Controlled open state
  \b
  \`onOpenChange: (open: boolean) => void\` - Callback when open state changes
  \b
  \`defaultOpen: boolean\` - Default open state
  \b
  ### Content
  \b
  \`theme: 'light' | 'dark'\` - The color theme of the tooltip
  \b
  \`side: 'top' | 'bottom'\` - The side where the tooltip appears
  \b
  \`sideOffset: number\` - The distance from the trigger (default: 4)
  \b
`

	const [theme, setTheme] = useState<TooltipContentProps['theme']>('light')
	const [side, setSide] = useState<TooltipContentProps['side']>('top')

	return (
		<View style={{ flex: 1 }}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'position' : 'height'}
				style={[styles.pageContainer]}
				keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
				contentContainerStyle={{ flex: 1 }}
			>
				<ScrollView
					style={{ flex: 1 }}
					bounces={false}
					contentContainerStyle={{ flexGrow: 1 }}
				>
					<Markdown>{docs}</Markdown>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'flex-start',
							justifyContent: 'space-between',
							backgroundColor: 'white',
							borderRadius: 10,
							width: '100%',
							padding: 16,
							marginBottom: Platform.OS === 'ios' ? 20 : 0,
						}}
					>
						<View
							style={{
								paddingVertical: 24,
								flex: 1,
								justifyContent: 'space-around',
								marginRight: 16,
								gap: 16,
							}}
						>
							<RadioGroup
								options={[
									{ label: 'Light', value: 'light' },
									{ label: 'Dark', value: 'dark' },
								]}
								selectedValue={theme as string}
								onValueChange={(value) =>
									setTheme(value as TooltipContentProps['theme'])
								}
							/>
							<RadioGroup
								options={[
									{ label: 'Top', value: 'top' },
									{ label: 'Bottom', value: 'bottom' },
								]}
								selectedValue={side as string}
								onValueChange={(value) =>
									setSide(value as TooltipContentProps['side'])
								}
							/>
						</View>
						<View
							style={{
								flex: 1,
								height: '70%',
								gap: 16,
								justifyContent: 'center',
								alignItems: 'flex-start',
							}}
						>
							<DesignSystemTooltip.Root>
								<DesignSystemTooltip.Trigger>
									<HelpCircleIcon size={24} color={colors.neutral['500']} />
								</DesignSystemTooltip.Trigger>
								<DesignSystemTooltip.Content theme={theme} side={side}>
									<DesignSystemTooltip.Text>
										This is a helpful tooltip message that provides additional
										context or information to the user.
									</DesignSystemTooltip.Text>
								</DesignSystemTooltip.Content>
							</DesignSystemTooltip.Root>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	)
}

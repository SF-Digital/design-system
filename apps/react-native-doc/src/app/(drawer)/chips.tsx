import RadioGroup from '@/components/RadioGroup'
import Markdown from '@ronradtke/react-native-markdown-display'
import { Chips, Text } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { Home, X } from 'lucide-react-native'
import { useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../../styles'

export default function ChipsPage() {
	const [selectedChip, setSelectedChip] = useState<string | undefined>('chip1')
	const [multiline, setMultiline] = useState(false)

	const docs = `
 This story displays the \`Chips\` component, which is a React Element built using Pattern Composition.
 
 ## Usage:
 \b
 \`Chips.Root\` - The root element wrapping the group of chips.
 \b
 \`Chips.Item\` - The individual chip item.
 \b
 ## API Reference:
 ### Root
 \b
 \`multiline: boolean\` - The orientation of the chip group.
 \b
 \`defaultValue: string\` - The default value of the chip group.
 \b
 \`onValueChange: (value: string) => void\` - The callback function when the chip group value changes.
 \b
 \`value: string\` - The current selected value of the chip group. (Controlled state)
 \b
 ### Item
 \b
 \`value: string\` - The value of the chip item.
 \b
`

	return (
		<ScrollView
			style={{ flex: 1, backgroundColor: 'white' }}
			contentContainerStyle={{
				paddingBottom: 24,
				padding: 10,
				gap: 12,
			}}
		>
			<Markdown>{docs}</Markdown>
			<View
				style={[
					{
						flex: 1,
						flexWrap: 'wrap',
						flexDirection: 'row',
					},
					styles.componentExampleContainer,
				]}
			>
				<RadioGroup
					options={[
						{ label: 'Multiline', value: 'true' },
						{ label: 'Single line', value: 'false' },
					]}
					selectedValue={multiline ? 'true' : 'false'}
					onValueChange={(value) => setMultiline(value === 'true')}
				/>
			</View>
			<Chips.Root
				style={{ paddingVertical: 16, paddingHorizontal: 4 }}
				multiline={multiline}
				value={selectedChip}
				onValueChange={(value) => setSelectedChip(value)}
				defaultValue='chip1'
			>
				<Chips.Item value='chip1'>
					<X
						color={selectedChip === 'chip1' ? 'white' : colors.neutral['600']}
						size={18}
					/>
					<Text
						style={{
							color: selectedChip === 'chip1' ? 'white' : colors.neutral['600'],
						}}
					>
						Chip 1
					</Text>
				</Chips.Item>
				<Chips.Item value='chip2'>
					<Text
						style={{
							color: selectedChip === 'chip2' ? 'white' : colors.neutral['600'],
						}}
					>
						Chip 2
					</Text>
					<X
						color={selectedChip === 'chip2' ? 'white' : colors.neutral['600']}
						size={18}
					/>
				</Chips.Item>
				<Chips.Item value='chip3'>
					<Home
						color={selectedChip === 'chip3' ? 'white' : colors.neutral['600']}
						size={18}
					/>
					<Text
						style={{
							color: selectedChip === 'chip3' ? 'white' : colors.neutral['600'],
						}}
					>
						Chip 3
					</Text>
					<X
						color={selectedChip === 'chip3' ? 'white' : colors.neutral['600']}
						size={18}
					/>
				</Chips.Item>
				<Chips.Item value='chip4'>
					<Text
						style={{
							color: selectedChip === 'chip4' ? 'white' : colors.neutral['600'],
						}}
					>
						Chip 4
					</Text>
				</Chips.Item>
				<Chips.Item value='chip5'>
					<Text
						style={{
							color: selectedChip === 'chip5' ? 'white' : colors.neutral['600'],
						}}
					>
						Chip 5
					</Text>
				</Chips.Item>
				<Chips.Item value='chip6'>
					<Text
						style={{
							color: selectedChip === 'chip6' ? 'white' : colors.neutral['600'],
						}}
					>
						Chip 6
					</Text>
				</Chips.Item>
				<Chips.Item value='chip7'>
					<Text
						style={{
							color: selectedChip === 'chip7' ? 'white' : colors.neutral['600'],
						}}
					>
						Chip 7
					</Text>
				</Chips.Item>
				<Chips.Item value='chip8'>
					<Text
						style={{
							color: selectedChip === 'chip8' ? 'white' : colors.neutral['600'],
						}}
					>
						Chip 8
					</Text>
				</Chips.Item>
			</Chips.Root>
		</ScrollView>
	)
}

import Entypo from '@expo/vector-icons/Entypo'
import Markdown from '@ronradtke/react-native-markdown-display'
import { Select as DesignSystemSelect, Text } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import React, { useState } from 'react'
import { View } from 'react-native'

export default function Select() {
	const docs = `
This story displays the \`Select\` component, which is a React element built using Pattern Composition

## Usage:

\`import { Select } from '@sf-digital-ui/react-native'\`

## API Reference:

### Root
\`value: string | null\` - The value of the selected item
\b
\`onValueChange: (value: string | null) => void\` - Callback when the selected item changes
\b
### Value
\`placeholder: string\` - The placeholder text for the selected item
\b
### Item
\`value: string\` - The value of the item
\b
`

	const [value, setValue] = useState<string | null>(null)
	const teamMembers = [
		'Ahsoka Tano-Kenobi',
		'Kit Fisto-Windu',
		'Poe Skywalker',
		'Rey Solo-Organa',
		'Finn Calrissian',
		'Padmé Andor',
		'Ben Syndulla',
		'Ezra Bridger-Jarrus',
		'Sabine Djarin',
		'Obi-Wan Thrawn',
		'Mace Windu',
		'Yoda Kenobi',
		'Luke Skywalker',
		'Leia Organa',
		'Han Solo',
		'Chewbacca Wookiee',
		'Lando Calrissian',
		'C-3PO Droid',
		'R2-D2 Astromech',
		'Boba Fett',
		'Jango Fett',
		'Qui-Gon Jinn',
		'Darth Maul',
		'Count Dooku',
		'General Grievous',
		'Padmé Amidala',
		'Anakin Skywalker',
		'Shmi Skywalker',
		'Wedge Antilles',
		'Biggs Darklighter',
		'Plo Koon',
		'Shaak Ti',
		'Barriss Offee',
		'Luminara Unduli',
		'Ki-Adi-Mundi',
		'Aayla Secura',
		'Admiral Ackbar',
		'Nien Nunb',
		'Mon Mothma',
		'Bail Organa',
		'Captain Rex',
		'Commander Cody',
		'Fives Trooper',
		'Jesse Trooper',
		'Hardcase Trooper',
		'Bo-Katan Kryze',
		'Pre Vizsla',
		'Satine Kryze',
		'Lux Bonteri',
		'Asajj Ventress',
		'Savage Opress',
		'Zeb Orrelios',
		'Hera Syndulla',
		'Kanan Jarrus',
		'Chopper Droid',
		'Agent Kallus',
		'Grand Admiral Thrawn',
		'Rex Bridger',
		'Gregor Trooper',
		'Wolffe Trooper',
		'Jyn Erso',
		'Cassian Andor',
		'Bodhi Rook',
		'Chirrut Îmwe',
		'Baze Malbus',
		'Galen Erso',
		'Orson Krennic',
		'Saw Gerrera',
		'Enfys Nest',
		'Qi’ra',
		'Dryden Vos',
		'Beckett',
		'Val',
		'Rio Durant',
		'L3-37',
		'Rose Tico',
		'DJ Slicer',
		'Vice Admiral Holdo',
		'Captain Phasma',
		'General Hux',
		'Supreme Leader Snoke',
		'Kylo Ren',
		'Maz Kanata',
		'Unkar Plutt',
		'Lor San Tekka',
		'Zorii Bliss',
		'Babu Frik',
		'D-O Droid',
		'Jannah',
		'Ochi of Bestoon',
		'Pryde',
		'Grogu',
		'Din Djarin',
		'Cara Dune',
		'Greef Karga',
		'Moff Gideon',
		'Fennec Shand',
		'IG-11',
		'Kuiil',
		'Peli Motto',
		'Cobb Vanth',
		'Axe Woves',
		'Koska Reeves',
		'The Armorer',
		'Dr. Pershing',
		'Mayfeld',
	]

	return (
		<View style={{ padding: 10 }}>
			<Markdown>{docs}</Markdown>
			<View
				style={{
					flexDirection: 'column',
					gap: 6,
				}}
			>
				<Text size='sm' style={{ color: colors.neutral['700'] }}>
					Team member
				</Text>
				<View>
					<DesignSystemSelect.Root
						value={value}
						onValueChange={(newValue) => setValue(newValue)}
					>
						<DesignSystemSelect.Trigger>
							<DesignSystemSelect.Value placeholder='Select a number' />
							<Entypo
								name='chevron-down'
								size={24}
								color={colors.neutral['900']}
							/>
						</DesignSystemSelect.Trigger>

						<DesignSystemSelect.Content>
							<DesignSystemSelect.Viewport>
								{teamMembers.map((option) => {
									const isActive = value === option

									return (
										<DesignSystemSelect.Item key={option} value={option}>
											<DesignSystemSelect.ItemText>
												{option}
											</DesignSystemSelect.ItemText>
											{isActive && (
												<Entypo
													name='check'
													size={16}
													color={colors['primary-green']['500']}
												/>
											)}
										</DesignSystemSelect.Item>
									)
								})}
							</DesignSystemSelect.Viewport>
						</DesignSystemSelect.Content>
					</DesignSystemSelect.Root>
				</View>
			</View>
		</View>
	)
}

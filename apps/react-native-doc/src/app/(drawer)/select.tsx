import React, { useState } from 'react'
import { Select as RNSelect, Text } from '@sf-digital-ui/react-native'
import Entypo from '@expo/vector-icons/Entypo'
import { View } from 'react-native'
import { colors } from '@sf-digital-ui/tokens'
import Markdown from '@ronradtke/react-native-markdown-display'

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
        <Text size="sm" style={{ color: colors.neutral['700'] }}>
          Team member
        </Text>
        <View>
          <RNSelect.Root
            value={value}
            onValueChange={(newValue) => setValue(newValue)}
          >
            <RNSelect.Trigger>
              <RNSelect.Value placeholder="Select a number" />
              <Entypo
                name="chevron-down"
                size={24}
                color={colors.neutral['900']}
              />
            </RNSelect.Trigger>

            <RNSelect.Content>
              <RNSelect.Viewport>
                {teamMembers.map((option) => {
                  const isActive = value === option

                  return (
                    <RNSelect.Item key={option} value={option}>
                      <RNSelect.ItemText>{option}</RNSelect.ItemText>
                      {isActive && (
                        <Entypo
                          name="check"
                          size={16}
                          color={colors['primary-green']['500']}
                        />
                      )}
                    </RNSelect.Item>
                  )
                })}
              </RNSelect.Viewport>
            </RNSelect.Content>
          </RNSelect.Root>
        </View>
      </View>
    </View>
  )
}

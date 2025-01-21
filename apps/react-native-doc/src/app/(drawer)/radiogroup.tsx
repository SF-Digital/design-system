import { View } from 'react-native'
import { styles } from '../../../styles'
import {
  RadioGroup as DesignSystemRadioGroup,
  Text,
} from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { useState } from 'react'
import Markdown from '@ronradtke/react-native-markdown-display'
import Radio from '@/components/RadioGroup'
import { ScrollView } from 'react-native-gesture-handler'

type Size = 'sm' | 'md' | 'lg'
type Color = 'sf-green' | 'succession-blue'

export default function RadioGroup() {
  const [size, setSize] = useState<Size>('md')
  const [color, setColor] = useState<Color>('sf-green')

  const exampleRadioGroupItems = [1, 2, 3]

  const docs = `
 This story displays the \`RadioGroup\` component, which is a React Element built using Pattern Composition.
 
 ## Usage:
 \b
 \`RadioGroup.Root\` - The root element wrapping the group of radio items.
 \b
 \`RadioGroup.Item\` - The individual radio item.
 \b
 ## API Reference:
 ### Root
 \b
 \`orientation: 'vertical' | 'horizontal'\` - The orientation of the radio group.
 \b
 \`disabled: boolean\` - Whether the radio group is disabled.
 \b
 \`defaultValue: string\` - The default value of the radio group.
 \b
 \`onValueChange: (value: string) => void\` - The callback function when the radio group value changes.
 \b
 \`value: string\` - The value of the radio item.  
 \b
 ### Item
 \b
 \`size: 'sm' | 'md' | 'lg'\` - The size of the radio item.
 \b
 \`color: 'sf-green' | 'succession-blue'\` - The color of the radio item. 
 \b
`

  return (
    <ScrollView
      style={{
        ...styles.pageContainer,
      }}
    >
      <Markdown>{docs}</Markdown>
      <View
        style={{
          ...styles.componentExampleContainer,
        }}
      >
        <Radio
          options={[
            { label: 'sm', value: 'sm' },
            { label: 'md', value: 'md' },
            { label: 'lg', value: 'lg' },
          ]}
          selectedValue={size}
          onValueChange={(value) => setSize(value as Size)}
        />
        <Radio
          options={[
            { label: 'sf-green', value: 'sf-green' },
            { label: 'succession-blue', value: 'succession-blue' },
          ]}
          selectedValue={color}
          onValueChange={(value) => setColor(value as Color)}
        />
        <DesignSystemRadioGroup.Root defaultValue="1">
          {exampleRadioGroupItems.map((item) => (
            <View
              key={item}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <DesignSystemRadioGroup.Item
                size={size}
                color={color}
                value={item.toString()}
              />
              <Text size={size} style={{ color: colors.neutral['100'] }}>
                {item}
              </Text>
            </View>
          ))}
        </DesignSystemRadioGroup.Root>
      </View>
    </ScrollView>
  )
}

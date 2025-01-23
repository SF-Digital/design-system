import { View } from 'react-native'
import { styles } from '../../../styles'
import { Checkbox as DesignSystemCheckbox } from '@sf-digital-ui/react-native'
import { useState } from 'react'
import Markdown from '@ronradtke/react-native-markdown-display'
import RadioGroup from '@/components/RadioGroup'

type Size = 'sm' | 'md' | 'lg'
type Color = 'sf-green' | 'succession-blue'

export default function CheckboxPage() {
  const [isChecked, setIsChecked] = useState(false)
  const [size, setSize] = useState<Size>('md')
  const [color, setColor] = useState<Color>('sf-green')

  const docs = `
This story displays the \`Checkbox\` component, which is a React element built using Pattern Composition

## Usage:

\`import { Checkbox } from '@sf-digital-ui/react-native'\`

## API Reference:

\b
\`size: 'sm' | 'md' | 'lg'\` - The size of the input
\b
\`color: 'sf-green' | 'succession-blue'\` - The color of the input
\b
\`disabled: boolean\` - Whether the input is disabled
\b
\`value: boolean\` - Whether the input is checked
\b
\`onValueChange: (value: boolean) => void\` - Callback when the input is checked
\b
`

  return (
    <View style={styles.pageContainer}>
      <Markdown>{docs}</Markdown>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 16,
          width: '100%',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <RadioGroup
            options={[
              { label: 'sm', value: 'sm' },
              { label: 'md', value: 'md' },
              { label: 'lg', value: 'lg' },
            ]}
            selectedValue={size}
            onValueChange={(value) => setSize(value as Size)}
          />
          <RadioGroup
            options={[
              { label: 'sf-green', value: 'sf-green' },
              { label: 'succession-blue', value: 'succession-blue' },
            ]}
            selectedValue={color}
            onValueChange={(value) => setColor(value as Color)}
          />
        </View>
        <DesignSystemCheckbox
          color={color}
          size={size}
          value={isChecked}
          onValueChange={setIsChecked}
        />
      </View>
    </View>
  )
}

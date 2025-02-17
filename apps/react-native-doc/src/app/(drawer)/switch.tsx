import Markdown from '@ronradtke/react-native-markdown-display'
import {
  Switch as DesignSystemSwitch,
  SwitchProps,
} from '@sf-digital-ui/react-native'
import { ScrollView, View } from 'react-native'
import { styles } from '../../../styles'
import { useState } from 'react'
import RadioGroup from '@/components/RadioGroup'

export default function Switch() {
  const docs = `This story displays the \`Switch\` component, which is a React Native component. Types generated for each component are exported as \`SwitchProps\`.
\b
## Usage:
\b
\`\`\`import { Switch } from '@sf-digital-ui/react-native'\`\`\`
\b
## API Reference:
\b
### Root
Props
\b
\`value: boolean\` - The unique value that associates the contnet with the trigger
\b
\`defaultValue: boolean\` - The default value of the switch
\b
\`onValueChange: (value: boolean) => void\` - The function to handle value change
\b
\`size: 'base' | 'lg'\` (Only for Trigger) - The size of the trigger (default: base)
\b
\`color: 'sf-green' | 'succession-blue' | 'neutral'\` (Only for Trigger) - The color of the trigger (default: sf-green)
\b
`

  const [color, setColor] = useState<SwitchProps['color']>('sf-green')
  const [size, setSize] = useState<SwitchProps['size']>('md')
  const [disabled, setDisabled] = useState(false)

  return (
    <ScrollView
      style={styles.pageContainer}
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: 24,
        padding: 10,
        gap: 12,
      }}
    >
      <Markdown>{docs}</Markdown>
      <View
        style={{
          gap: 12,
          flex: 1,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            ...styles.componentExampleContainer,
          }}
        >
          <RadioGroup
            selectedValue={size as string}
            onValueChange={(value) => setSize(value as SwitchProps['size'])}
            options={[
              {
                label: 'sm',
                value: 'sm',
              },
              {
                label: 'md',
                value: 'md',
              },
            ]}
          />
          <RadioGroup
            selectedValue={color as string}
            onValueChange={(value) => setColor(value as SwitchProps['color'])}
            options={[
              {
                label: 'sf-green',
                value: 'sf-green',
              },
              {
                label: 'succession-blue',
                value: 'succession-blue',
              },
            ]}
          />
          <RadioGroup
            selectedValue={disabled ? 'true' : 'false'}
            onValueChange={(value) => setDisabled(value === 'true')}
            options={[
              { label: 'true', value: 'true' },
              { label: 'false', value: 'false' },
            ]}
          />
        </View>
        <DesignSystemSwitch disabled={disabled} color={color} size={size} />
      </View>
    </ScrollView>
  )
}

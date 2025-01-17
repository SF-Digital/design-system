import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { styles } from '../../../styles'
import { TextInput } from '@sf-digital-ui/react-native'
import Markdown from '@ronradtke/react-native-markdown-display'
import RadioGroup from '@/components/RadioGroup'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

type Size = 'sm' | 'md' | 'lg'
type Color = 'sf-green' | 'succession-blue'

export default function TextInputPage() {
  const [size, setSize] = useState<Size>('md')
  const [color, setColor] = useState<Color>('sf-green')
  const [disabled, setDisabled] = useState<boolean>(false)
  const docs = `
This story displays the \`TextInput\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`TextInput{ComponentName}Props\`.

## Usage:

\`import { TextInput } from '@sf-digital-ui/react'\`

## API Reference:
### TextInput.Root
\b
\`size: 'sm' | 'md' | 'lg'\` - The size of the input
\b
\`color: 'sf-green' | 'succession-blue'\` - The color of the input
\b
\`disabled: boolean\` - Whether the input is disabled
\b
`

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
              alignItems: 'center',
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
              }}
            >
              <TextInput
                size={size}
                color={color}
                disabled={disabled}
                placeholder="Placeholder..."
              />
            </View>
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
    </View>
  )
}

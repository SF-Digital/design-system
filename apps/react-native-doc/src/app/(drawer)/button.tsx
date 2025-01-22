import { View } from 'react-native'
import { Button as DesignSystemButton } from '@sf-digital-ui/react-native'
import Markdown from '@ronradtke/react-native-markdown-display'
import RadioGroup from '@/components/RadioGroup'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'
import { styles } from '../../../styles'

export default function Button() {
  const docs = `This story displays the \`Button\` component, which is a React Element built using Pattern Composition.
  ## Usage:
  \b
  \`Button.Root\` - The root element of the button.
  \b
  \`Button.Text\` - The text element of the button.
  \b
  \`Button.Prefix\` - The element that will appear on the left side.
  \b
  \`Button.Suffix\` - The element that will appear on the right side.
  \b
  ## API Reference:
### Root
  \b
  \`size: 'sm' | 'md' | 'lg'\` - The size of the button.
  \b
  \`variant: 'primary' | 'secondary' | 'tertiary' | 'link'\` - The variant.
  \b
  \`color: 'sf-green' | 'neutral' | 'success' | 'error' | 'warning' | 'succession-blue'\` - The color.
  \b
  \`disabled: boolean\` - Whether the button is disabled.
  \b
  \`iconButton: boolean\` - Whether the button is an icon button.
  \b`

  type Variant = 'primary' | 'secondary' | 'tertiary' | 'link'
  type Size = 'sm' | 'md' | 'lg'
  type Color =
    | 'sf-green'
    | 'succession-blue'
    | 'success'
    | 'error'
    | 'warning'
    | 'neutral'

  const [variant, setVariant] = useState<Variant>('primary')
  const [size, setSize] = useState<Size>('md')
  const [color, setColor] = useState<Color>('sf-green')
  const [disabled, setDisabled] = useState(false)
  const [iconButton, setIconButton] = useState(false)

  return (
    <ScrollView
      style={styles.pageContainer}
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: 24,
      }}
    >
      <Markdown>{docs}</Markdown>
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          ...styles.componentExampleContainer,
        }}
      >
        <RadioGroup
          options={[
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Tertiary', value: 'tertiary' },
            { label: 'Link', value: 'link' },
          ]}
          selectedValue={variant}
          onValueChange={(value) => setVariant(value as Variant)}
        />
        <RadioGroup
          options={[
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ]}
          selectedValue={size}
          onValueChange={(value) => setSize(value as Size)}
        />
        <RadioGroup
          options={[
            { label: 'Success', value: 'success' },
            { label: 'Error', value: 'error' },
            { label: 'Warning', value: 'warning' },
            { label: 'Neutral', value: 'neutral' },
            { label: 'SF Green', value: 'sf-green' },
            { label: 'Succession Blue', value: 'succession-blue' },
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
        <RadioGroup
          options={[
            { label: 'Button', value: 'button' },
            { label: 'Icon Button', value: 'iconButton' },
          ]}
          selectedValue={iconButton ? 'iconButton' : 'button'}
          onValueChange={(value) => setIconButton(value === 'iconButton')}
        />
      </View>
      <DesignSystemButton.Root
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        iconButton={iconButton}
      >
        <DesignSystemButton.Text>Button 2</DesignSystemButton.Text>
      </DesignSystemButton.Root>
    </ScrollView>
  )
}

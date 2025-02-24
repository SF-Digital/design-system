import { View } from 'react-native'
import {
  Button as DesignSystemButton,
  ButtonRootProps,
} from '@sf-digital-ui/react-native'
import Markdown from '@ronradtke/react-native-markdown-display'
import RadioGroup from '@/components/RadioGroup'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'
import { styles } from '../../../styles'

export default function Button() {
  const docs = `This story displays the \`Button\` component, which is a React Element built using Pattern Composition.
  ## Usage:
  \b
  \b
  \`\`\`import { Button } from '@sf-digital-ui/react-native'\`\`\`
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

  const [variant, setVariant] = useState<ButtonRootProps['variant']>('primary')
  const [size, setSize] = useState<ButtonRootProps['size']>('md')
  const [color, setColor] = useState<ButtonRootProps['color']>('sf-green')
  const [disabled, setDisabled] = useState(false)
  const [iconButton, setIconButton] = useState(false)

  return (
    <ScrollView
      style={{ flex: 1 }}
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
          selectedValue={variant as string}
          onValueChange={(value) =>
            setVariant(value as ButtonRootProps['variant'])
          }
        />
        <RadioGroup
          options={[
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ]}
          selectedValue={size as string}
          onValueChange={(value) => setSize(value as ButtonRootProps['size'])}
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
          selectedValue={color as string}
          onValueChange={(value) => setColor(value as ButtonRootProps['color'])}
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
      <View
        style={{
          flex: 1,
          paddingHorizontal: 8,
        }}
      >
        <DesignSystemButton.Root
          variant={variant}
          color={color}
          size={size}
          disabled={disabled}
          iconButton={iconButton}
        >
          <DesignSystemButton.Text>Button</DesignSystemButton.Text>
        </DesignSystemButton.Root>
      </View>
    </ScrollView>
  )
}

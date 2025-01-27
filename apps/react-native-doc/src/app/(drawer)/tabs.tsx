import {
  Tabs as DesignSystemTabs,
  TabsRootProps,
  Text,
} from '@sf-digital-ui/react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../../styles'
import Markdown from '@ronradtke/react-native-markdown-display'
import { View } from 'react-native'
import RadioGroup from '@/components/RadioGroup'
import { useState } from 'react'

export default function Tabs() {
  const exampleTabs = ['Home', 'Profile', 'Settings', 'Help', 'About']

  const docs = `This story displays the \`Tabs\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Tabs{ComponentName}Props\`.
\b
## Usage:
\b
\`\`\`import { Tabs } from '@sf-digital-ui/react-native'\`\`\`
\b
Tabs is a composition of the following components:
\b
\`Tabs.Root\` - Contains all the tab component parts
\b
\`Tabs.List\` - Contains the triggers aligned along the edge of active content
\b
\`Tabs.Trigger\` - The clickable element that activates its assocaited content
\b
\`Tabs.TriggerText\` - The text content of the trigger
\b
\`Tabs.Content\` - The content that is activated by its associated trigger
\b
## API Reference:
\b
### Root
Props
\b
\`activeTab: string | undefined\` - The active tab value
\b
\`handleTabChange: (newValue: string) => void\` - The function to handle tab change
\b
\`variant: 'solid' | 'underline' | 'underline-filled' | 'panel'\` (Only for Trigger) - The variant of the trigger (default: solid)
\b
\`size: 'base' | 'lg'\` (Only for Trigger) - The size of the trigger (default: base)
\b
\`color: 'sf-green' | 'succession-blue' | 'neutral'\` (Only for Trigger) - The color of the trigger (default: sf-green)
\b
### Trigger & Content
Props
\b
\`value: string\` - The unique value that associates the contnet with the trigger
\b
`
  const [variant, setVariant] = useState<TabsRootProps['variant']>('solid')
  const [color, setColor] = useState<TabsRootProps['color']>('sf-green')
  const [size, setSize] = useState<TabsRootProps['size']>('base')

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 24, padding: 10, gap: 12 }}
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
          selectedValue={variant as string}
          onValueChange={(value) =>
            setVariant(value as TabsRootProps['variant'])
          }
          options={[
            {
              label: 'solid',
              value: 'solid',
            },
            {
              label: 'underline',
              value: 'underline',
            },
            {
              label: 'underline-filled',
              value: 'underline-filled',
            },
            {
              label: 'panel',
              value: 'panel',
            },
          ]}
        />
        <RadioGroup
          selectedValue={size as string}
          onValueChange={(value) => setSize(value as TabsRootProps['size'])}
          options={[
            {
              label: 'base',
              value: 'base',
            },
            {
              label: 'lg',
              value: 'lg',
            },
          ]}
        />
        <RadioGroup
          selectedValue={color as string}
          onValueChange={(value) => setColor(value as TabsRootProps['color'])}
          options={[
            {
              label: 'sf-green',
              value: 'sf-green',
            },
            {
              label: 'succession-blue',
              value: 'succession-blue',
            },
            {
              label: 'neutral',
              value: 'neutral',
            },
          ]}
        />
      </View>

      <DesignSystemTabs.Root
        variant={variant}
        color={color}
        size={size}
        style={{
          alignItems: 'center',
          gap: 12,
        }}
        defaultValue={exampleTabs[0]}
      >
        <DesignSystemTabs.List
          style={{
            flexWrap: 'wrap',
          }}
        >
          {exampleTabs.map((tab) => (
            <DesignSystemTabs.Trigger key={tab} value={tab}>
              <DesignSystemTabs.TriggerText>{tab}</DesignSystemTabs.TriggerText>
            </DesignSystemTabs.Trigger>
          ))}
        </DesignSystemTabs.List>
        {exampleTabs.map((tab) => (
          <DesignSystemTabs.Content key={tab} value={tab}>
            <Text>Content for {tab} Tab</Text>
          </DesignSystemTabs.Content>
        ))}
      </DesignSystemTabs.Root>
    </ScrollView>
  )
}

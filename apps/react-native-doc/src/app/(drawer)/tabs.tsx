import { Tabs, Text } from '@sf-digital-ui/react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function TabsPage() {
  return (
    <ScrollView>
      <Tabs.Root defaultValue="One" variant="panel" color="neutral">
        <Tabs.List>
          <Tabs.Trigger value="One">
            <Tabs.TriggerText>One</Tabs.TriggerText>
          </Tabs.Trigger>
          <Tabs.Trigger value="Two">
            <Tabs.TriggerText>Two</Tabs.TriggerText>
          </Tabs.Trigger>
          <Tabs.Trigger value="Three">
            <Tabs.TriggerText>Three</Tabs.TriggerText>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="One">
          <Text>One</Text>
        </Tabs.Content>
        <Tabs.Content value="Two">
          <Text>Two</Text>
        </Tabs.Content>
        <Tabs.Content value="Three">
          <Text>Three</Text>
        </Tabs.Content>
      </Tabs.Root>
    </ScrollView>
  )
}

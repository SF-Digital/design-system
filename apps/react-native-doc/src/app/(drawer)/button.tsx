import { View } from 'react-native'
import { Button as DesignSystemButton, Text } from '@sf-digital-ui/react-native'

export default function Button() {
  return (
    <View style={{ flex: 1, padding: 12, alignItems: 'center' }}>
      <DesignSystemButton.Root variant="secondary" color="success">
        <Text>Button</Text>
      </DesignSystemButton.Root>
    </View>
  )
}

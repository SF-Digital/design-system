import { View } from 'react-native'
import { Button as DesignSystemButton } from '@sf-digital-ui/react-native'

export default function Button() {
  return (
    <View style={{ flex: 1, padding: 12, alignItems: 'center' }}>
      <DesignSystemButton.Root variant="secondary" color="error">
        <DesignSystemButton.Text>Button 2</DesignSystemButton.Text>
      </DesignSystemButton.Root>
    </View>
  )
}

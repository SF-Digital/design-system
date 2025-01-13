import { View } from 'react-native'
import { Button as DesignSystemButton } from '@sf-digital-ui/react-native'

export default function Button() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <DesignSystemButton.Root variant="primary" color="succession-blue">
        <DesignSystemButton.Prefix>Done</DesignSystemButton.Prefix>
        Button
        <DesignSystemButton.Suffix>Done</DesignSystemButton.Suffix>
      </DesignSystemButton.Root>
    </View>
  )
}

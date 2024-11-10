import { Text, View , Alert} from 'react-native'
import {Button, Heading} from '../../../../../packages/react-native'

export default function Index() {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Index</Text>
      <Heading variant="h1" style={{ color: "#007bff" }}>
        This is an H1 Heading
      </Heading>
      <Heading variant="h2">
        This is an H2 Heading
      </Heading>
      <Heading variant="h3" style={{ fontStyle: "italic" }}>
        This is an H3 Heading
      </Heading>
      <Button title="Button" onPress={createTwoButtonAlert} />
    </View>
  )
}

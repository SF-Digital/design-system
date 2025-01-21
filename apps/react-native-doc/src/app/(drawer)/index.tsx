import { Text, View } from 'react-native'
import { routes } from '../../../routes'
import { styles } from '../../../styles'
import { Button as DesignSystemButton } from '@sf-digital-ui/react-native'
import Markdown from '@ronradtke/react-native-markdown-display'
// TODO: someone pls make this better... just laying some ground work
const Home = () => {
  const textDescription = `## This is the design system which documents all of the react native components.
  Please click on any of the buttons or use the burger menu to navigate directly to an example.`
  return (
    <View style={{ ...styles.pageContainer }}>
      <Markdown>{textDescription}</Markdown>
      <View style={{ ...styles.componentExampleContainer, gap: 3 }}>
        {routes.map((route) => {
          return (
            <Text key={route.name}>
              <DesignSystemButton.Root
                variant={'primary'}
                size={'md'}
                color={'sf-green'}
                disabled={false}
                iconButton={true}
              >
                <DesignSystemButton.Text>{route.label}</DesignSystemButton.Text>
              </DesignSystemButton.Root>
            </Text>
          )
        })}
      </View>
    </View>
  )
}

export default Home

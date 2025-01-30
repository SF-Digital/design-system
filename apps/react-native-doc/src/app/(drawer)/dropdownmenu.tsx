import Markdown from '@ronradtke/react-native-markdown-display'
import { ScrollView } from 'react-native-gesture-handler'
import {
  Text,
  DropdownMenu as DesignSystemDropDownMenu,
} from '@sf-digital-ui/react-native'
import Entypo from '@expo/vector-icons/Entypo'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import { colors } from '@sf-digital-ui/tokens'
import { styles } from '../../../styles'
import { View } from 'react-native'

export default function DropdownMenuPage() {
  const docs = `
This story displays the \`DropdownMenu\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`DropdownMenu{ComponentName}Props\`.

## Usage:
\b
\`import { DropdownMenu } from '@sf-digital-ui/react'\`
\b
## API Reference:
\b
`

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 24, padding: 10, gap: 12 }}
    >
      <Markdown>{docs}</Markdown>

      <View
        style={{
          ...styles.componentExampleContainer,
          alignItems: 'center',
        }}
      >
        <DesignSystemDropDownMenu.Root>
          <DesignSystemDropDownMenu.Trigger>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color={colors.neutral[500]}
            />
          </DesignSystemDropDownMenu.Trigger>
          <DesignSystemDropDownMenu.Content>
            <DesignSystemDropDownMenu.Item
              onPress={() => console.log('Item 1')}
            >
              <SimpleLineIcons
                name="docs"
                size={24}
                color={colors.neutral[500]}
              />
              <Text style={{ color: colors.neutral[500], fontSize: 18 }}>
                Documents
              </Text>
            </DesignSystemDropDownMenu.Item>
            <DesignSystemDropDownMenu.Item
              onPress={() => console.log('Item 2')}
            >
              <FontAwesome
                name="list-alt"
                size={24}
                color={colors.neutral[500]}
              />
              <Text style={{ color: colors.neutral[500], fontSize: 18 }}>
                Contacts
              </Text>
            </DesignSystemDropDownMenu.Item>
            <DesignSystemDropDownMenu.Item
              onPress={() => console.log('Item 3')}
            >
              <AntDesign name="setting" size={24} color={colors.neutral[500]} />
              <Text style={{ color: colors.neutral[500], fontSize: 18 }}>
                Edit
              </Text>
            </DesignSystemDropDownMenu.Item>
            <DesignSystemDropDownMenu.Divider />
            <DesignSystemDropDownMenu.Item
              onPress={() => console.log('Item 4')}
            >
              <Feather name="trash" size={24} color={colors.neutral[500]} />
              <Text style={{ color: colors.neutral[500], fontSize: 18 }}>
                Delete
              </Text>
            </DesignSystemDropDownMenu.Item>
            <DesignSystemDropDownMenu.Item
              onPress={() => console.log('Item 5')}
            >
              <Feather
                name="thumbs-down"
                size={24}
                color={colors.neutral[500]}
              />
              <Text style={{ color: colors.neutral[500], fontSize: 18 }}>
                Dislike
              </Text>
            </DesignSystemDropDownMenu.Item>
          </DesignSystemDropDownMenu.Content>
        </DesignSystemDropDownMenu.Root>
      </View>
    </ScrollView>
  )
}

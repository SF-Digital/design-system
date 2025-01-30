import { View } from 'react-native'
import { Modal as DesignSystemModal } from '@sf-digital-ui/react-native'
import { styles } from '../../../styles'
import Markdown from '@ronradtke/react-native-markdown-display'

export default function Modal() {
  const docs = `## Modal Component
  \b
  \b`

  return (
    <View style={styles.pageContainer}>
      <Markdown>{docs}</Markdown>
      <View style={styles.componentExampleContainer}>
        <DesignSystemModal.Root>
          <DesignSystemModal.Trigger></DesignSystemModal.Trigger>

          <DesignSystemModal.Portal>
            <DesignSystemModal.Overlay />
            <DesignSystemModal.Content>
              <DesignSystemModal.Title>Welcome</DesignSystemModal.Title>
              <DesignSystemModal.Description>
                This is a description of what the DesignSystemModal does.
              </DesignSystemModal.Description>
              <DesignSystemModal.Close></DesignSystemModal.Close>
            </DesignSystemModal.Content>
          </DesignSystemModal.Portal>
        </DesignSystemModal.Root>
      </View>
    </View>
  )
}

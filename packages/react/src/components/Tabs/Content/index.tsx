import * as Tabs from '@radix-ui/react-tabs'

export type TabsContentProps = Tabs.TabsContentProps

export const Content = (props: TabsContentProps) => {
  return <Tabs.Content {...props} />
}

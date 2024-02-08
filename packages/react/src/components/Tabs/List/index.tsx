import * as Tabs from '@radix-ui/react-tabs'

export type TabsListProps = Tabs.TabsListProps

export const List = (props: TabsListProps) => {
  return <Tabs.List {...props} />
}

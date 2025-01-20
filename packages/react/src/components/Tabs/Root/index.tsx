import * as Tabs from '@radix-ui/react-tabs'

export type TabsRootProps = Tabs.TabsProps & {
  hasBackground?: boolean
}

export const Root = ({ hasBackground, ...props }: TabsRootProps) => {
  return (
    <Tabs.Root
      className={hasBackground ? 'rounded-md bg-neutral-20 p-1' : ''}
      {...props}
    />
  )
}

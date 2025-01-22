import React from 'react'
import { View, ViewProps } from 'react-native'
import { useTabsContext } from '../Root'

export interface TabsContentProps extends ViewProps {
  value: string
}

export const Content = ({ value, ...props }: TabsContentProps) => {
  const { activeTab } = useTabsContext()
  const isActive = activeTab === value

  if (!isActive) return null

  return <View {...props} />
}

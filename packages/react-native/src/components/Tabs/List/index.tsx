import React from 'react'
import { View, ViewProps } from 'react-native'
import { useTabsContext } from '../Root'
import { createStylesheet } from '../../../utils/create-styles'
import { colors } from '@sf-digital-ui/tokens'

export type TabsListProps = ViewProps

type TabsVariants = {
  variant?: 'solid' | 'underline' | 'panel' | 'underline-filled'
}

const styles = createStylesheet<TabsVariants>({
  base: {
    flexDirection: 'row',
    flex: 1,
  },
  variants: {
    variant: {
      solid: {
        gap: 8,
      },
      panel: {
        backgroundColor: colors.neutral['20'],
        padding: 4,
        borderRadius: 8,
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
})

export const List = ({ style, ...props }: TabsListProps) => {
  const { variant } = useTabsContext()

  const stylesheet = styles({
    variant,
  })

  return <View style={[stylesheet, style]} {...props} />
}

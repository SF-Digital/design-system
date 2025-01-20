import React, { ComponentProps, useState } from 'react'
import Checkbox from 'expo-checkbox'
import { createStylesheet } from '../../../utils/create-styles'
import { colors } from '@sf-digital-ui/tokens'

type CheckboxRootVariants = {
  color?: 'sf-green' | 'succession-blue'
  size?: 'sm' | 'md' | 'lg'
  isChecked?: boolean
}

const styles = createStylesheet<CheckboxRootVariants>({
  base: {
    borderColor: colors.neutral['50'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  variants: {
    color: {
      'sf-green': {},
      'succession-blue': {},
    },
    size: {
      sm: {
        height: 20,
        width: 20,
      },
      md: {
        height: 24,
        width: 24,
      },
      lg: {
        height: 32,
        width: 32,
      },
    },
    isChecked: {
      true: {
        borderColor: 'transparent',
      },
      false: {},
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'sf-green',
  },
})

export type CheckboxRootProps = ComponentProps<typeof Checkbox> &
  CheckboxRootVariants

export const Root = ({
  size = 'md',
  color = 'sf-green',
  ...props
}: CheckboxRootProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<boolean>(
    !!props.value,
  )

  const isChecked = props.value !== undefined ? props.value : uncontrolledValue
  const style = styles({ size, color, isChecked })

  return (
    <Checkbox
      value={isChecked}
      onValueChange={(value) => {
        if (props.value === undefined) {
          setUncontrolledValue(value)
        }
      }}
      color={
        color === 'sf-green'
          ? colors['primary-green']['500']
          : colors['succession-blue']['500']
      }
      style={[...style, props.style]}
      {...props}
    />
  )
}

import { colors, fonts, fontSizes } from '@sf-digital-ui/tokens'
import React from 'react'
import { Pressable, PressableProps } from 'react-native'
import { createStylesheet } from '../../../utils/create-styles'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link'
type ButtonColor =
  | 'sf-green'
  | 'succession-blue'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonVariants = {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
  iconButton?: boolean
}

const buttonStyles = createStylesheet<ButtonVariants>({
  base: {
    fontFamily: fonts['sf-digital'],
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    borderRadius: 6,
    fontWeight: 600,
  },
  variants: {
    size: {
      sm: { fontSize: fontSizes['sf-sm'] },
      md: { fontSize: fontSizes['sf-md'] },
      lg: { fontSize: fontSizes['sf-lg'] },
    },
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
      link: {},
    },
    color: {
      'sf-green': {},
      'succession-blue': {},
      neutral: {},
      success: {},
      warning: {},
      error: {},
    },
    iconButton: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { color: 'sf-green', variant: 'primary' },
      style: {
        backgroundColor: colors['primary-green']['500'],
        color: 'white',
      },
    },
    {
      variants: { color: 'succession-blue', variant: 'primary' },
      style: {
        backgroundColor: colors['succession-blue']['500'],
        color: 'white',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
    color: 'sf-green',
    iconButton: false,
  },
})

export interface ButtonRootProps extends PressableProps {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
  iconButton?: boolean
}

export const Root = ({
  color,
  variant,
  size,
  iconButton,
  ...props
}: ButtonRootProps) => {
  const styles = buttonStyles({ size, variant, color, iconButton })

  return (
    <Pressable
      style={[...styles, typeof props.style === 'object' ? props.style : {}]}
      {...props}
    />
  )
}

// import { ComponentProps } from 'react'
// import { styled } from '../../styles'

import { ComponentProps } from 'react'

// export const Box = styled('div', {
//   padding: '$4',
//   borderRadius: '$md',
//   backgroundColor: '$gray800',
//   border: '1px solid $gray600',
// })

// export interface BoxProps extends ComponentProps<typeof Box> {}

// Box.displayName = 'Box'

export interface BoxProps extends ComponentProps<'div'> {}

// No need to import styled from '../../styles' as we're using Tailwind classes directly

export const Box = ({ ...rest }: BoxProps) => {
  return (
    <div
      {...rest}
      className="p-4 rounded-md bg-fuchsia-700 border border-gray-600"
      // style={{ background: 'tomato' }}
    />
  )
}

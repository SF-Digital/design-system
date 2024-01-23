import { ComponentProps } from 'react'
import { styled } from '../../styles'


export const BoxTest = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxTestProps extends ComponentProps<typeof BoxTest> {}

BoxTest.displayName = 'BoxTest2'

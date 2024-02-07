import { Check as CheckIcon } from 'lucide-react'
import { ComponentProps } from 'react'

export type CheckProps = ComponentProps<typeof CheckIcon>

export const Check = (props: CheckProps) => {
  return <CheckIcon {...props} color="white" />
}

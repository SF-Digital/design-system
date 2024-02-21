import * as Avatar from '@radix-ui/react-avatar'

export type AvatarImageProps = Avatar.AvatarImageProps

export const Image = (props: AvatarImageProps) => {
  return <Avatar.Image {...props} />
}

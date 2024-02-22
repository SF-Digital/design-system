import * as Avatar from '@radix-ui/react-avatar'

export type AvatarImageProps = Avatar.AvatarImageProps

export const Image = (props: AvatarImageProps) => {
  return (
    <Avatar.Image
      {...props}
      className='  className="h-full object-cover" w-full rounded-[inherit]'
    />
  )
}

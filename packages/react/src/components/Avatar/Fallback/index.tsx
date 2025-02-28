import * as Avatar from '@radix-ui/react-avatar'

export type AvatarFallbackProps = Avatar.AvatarFallbackProps

export const Fallback = (props: AvatarFallbackProps) => {
	return <Avatar.Fallback {...props} />
}

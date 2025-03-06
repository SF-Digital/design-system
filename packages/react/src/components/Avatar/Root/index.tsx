import * as Avatar from '@radix-ui/react-avatar'
import { VariantProps, tv } from 'tailwind-variants'

const avatar = tv(
	{
		base: [
			'inline-flex select-none items-center justify-center overflow-hidden rounded-full bg-black align-middle',
		],
		variants: {
			size: {
				xs: 'h-6 w-6',
				sm: 'h-8 w-8',
				md: 'h-10 w-10',
				lg: 'h-12 w-12',
				xl: 'h-14 w-14',
				'2xl': 'h-16 w-16',
			},
		},
		defaultVariants: { size: 'md' },
	},
	{ twMerge: false },
)

export type AvatarRootProps = Avatar.AvatarProps & VariantProps<typeof avatar>

export const Root = ({ className, size, ...props }: AvatarRootProps) => {
	return <Avatar.Root {...props} className={avatar({ size, className })} />
}

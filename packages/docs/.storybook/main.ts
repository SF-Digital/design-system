import type { StorybookConfig } from '@storybook/react-vite'
import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-interactions'),
		getAbsolutePath('@storybook/addon-a11y'),
		getAbsolutePath('@storybook/addon-mdx-gfm'),
		'@chromatic-com/storybook',
		'@storybook/addon-mdx-gfm',
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	docs: {
		autodocs: true,
	},
	viteFinal: async (config, { configType }) => {
		if (configType === 'PRODUCTION') {
			config.base = '/design-system/'
		}
		return config
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
}

export default config

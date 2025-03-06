import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type StyleObject = ViewStyle & TextStyle
type VariantDefinitions = Record<string, unknown>

type CompoundVariant<V> = {
	variants: Partial<V>
	style: StyleObject
}

interface StyleConfig<V extends VariantDefinitions> {
	base?: StyleObject
	variants?: {
		[K in keyof V]?: Record<string & keyof V[K], StyleObject>
	}
	compoundVariants?: Array<CompoundVariant<V>>
	defaultVariants?: Partial<V>
}

type StyleKey<V> = string & keyof V

/**
 * Creates a style generator function with variant support
 * @param config Style configuration including base, variants, compound variants, and defaults
 * @returns A function that generates styles based on provided variants
 */
export function createStylesheet<V extends VariantDefinitions>(
	config: StyleConfig<V>,
) {
	const {
		base = {},
		variants = {},
		compoundVariants = [],
		defaultVariants = {},
	} = config

	const flattenedStyles = createFlattenedStyles(variants)

	const styles = StyleSheet.create({
		base,
		...flattenedStyles,
	})

	/**
	 * Generates styles based on provided variant options
	 * @param options Variant options to apply
	 * @returns Array of styles
	 */
	return (options: Partial<V> = {}): StyleObject[] => {
		const styleArray: StyleObject[] = [styles.base]
		const currentVariants = mergeWithDefaults(
			options,
			defaultVariants,
			variants,
		)

		// Apply variant styles
		applyVariantStyles(styleArray, currentVariants, styles)

		// Apply compound variants
		applyCompoundVariants(styleArray, currentVariants, compoundVariants)

		return styleArray
	}
}

// Helper Functions

/**
 * Creates flattened styles object from variant definitions
 */
function createFlattenedStyles<V extends VariantDefinitions>(
	variants: StyleConfig<V>['variants'],
): Record<string, StyleObject> {
	return Object.entries(variants || {}).reduce(
		(acc, [variantKey, variantValues]) => {
			if (!variantValues) return acc

			// biome-ignore lint/complexity/noForEach: <explanation>
			Object.entries(variantValues).forEach(([value, style]) => {
				acc[`${variantKey}_${value}`] = style as StyleObject
			})

			return acc
		},
		{} as Record<string, StyleObject>,
	)
}

/**
 * Merges provided options with default variants
 */
function mergeWithDefaults<V extends VariantDefinitions>(
	options: Partial<V>,
	defaults: Partial<V>,
	variants: StyleConfig<V>['variants'],
): Partial<V> {
	return Object.keys(variants || {}).reduce(
		(acc, key) => {
			const variantKey = key as StyleKey<V>
			acc[variantKey] = options[variantKey] ?? defaults[variantKey]
			return acc
		},
		{} as Partial<V>,
	)
}

/**
 * Applies variant styles to the style array
 */
function applyVariantStyles<V extends VariantDefinitions>(
	styleArray: StyleObject[],
	currentVariants: Partial<V>,
	styles: Record<string, StyleObject>,
): void {
	// biome-ignore lint/complexity/noForEach: <explanation>
	Object.entries(currentVariants).forEach(([key, value]) => {
		if (value === undefined) return

		const styleKey = `${key}_${value}`
		const variantStyle = styles[styleKey]

		if (variantStyle) {
			styleArray.push(variantStyle)
		}
	})
}

/**
 * Applies compound variant styles to the style array
 */
function applyCompoundVariants<V extends VariantDefinitions>(
	styleArray: StyleObject[],
	currentVariants: Partial<V>,
	compoundVariants: Array<CompoundVariant<V>>,
): void {
	// biome-ignore lint/complexity/noForEach: <explanation>
	compoundVariants.forEach(({ variants: conditions, style }) => {
		const matches = Object.entries(conditions).every(
			([key, value]) => currentVariants[key as keyof V] === value,
		)

		if (matches) {
			styleArray.push(StyleSheet.create({ style }).style)
		}
	})
}

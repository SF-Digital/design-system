import { StyleSheet } from 'react-native';

type StyleDefinition = Record<string, any>;
type Variant = Record<string, any>;
type CompoundVariant = {
  variants: Partial<Variant>;
  style: StyleDefinition;
};

interface StyleConfig<V extends Variant> {
  base?: StyleDefinition;
  variants?: {
    [K in keyof V]?: {
      [Value in V[K]]?: StyleDefinition;
    };
  };
  compoundVariants?: CompoundVariant[];
  defaultVariants?: Partial<V>;
}

export function createStylesheet<V extends Variant>(config: StyleConfig<V>) {
  const { 
    base = {}, 
    variants = {}, 
    compoundVariants = [], 
    defaultVariants = {} 
  } = config;
  
  // Pre-compute the StyleSheet for better performance
  const styles = StyleSheet.create({
    base,
    ...Object.entries(variants).reduce((acc, [variantKey, variantValues]) => {
      Object.entries(variantValues || {}).forEach(([value, style]) => {
        acc[`${variantKey}_${value}`] = style;
      });
      return acc;
    }, {} as Record<string, StyleDefinition>),
  });

  // Return a style generator function
  return (options?: Partial<V>) => {
    const styleArray = [styles.base];
    const currentVariants = Object.keys(variants).reduce((acc, key) => {
      // Only use default if option is undefined
      (acc as any)[key] = options?.[key] !== undefined ? options?.[key] : (defaultVariants as any)[key];
      return acc;
    }, {} as Partial<V>);

    // Add variant styles
    Object.entries(currentVariants).forEach(([key, value]) => {
      if (value !== undefined) {
        const variantStyle = styles[`${key}_${value}` as keyof typeof styles]; ;
        if (variantStyle) {
          styleArray.push(variantStyle);
        }
      }
    });

    // Add compound variant styles
    compoundVariants.forEach(({ variants: conditions, style }) => {
      const matches = Object.entries(conditions).every(
    ([key, value]) => currentVariants[key] === value
      );
      
      if (matches) {
        styleArray.push(StyleSheet.create({ style }).style);
      }
    });

    return styleArray;
  };
}
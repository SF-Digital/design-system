import * as react_jsx_runtime from 'react/jsx-runtime'
import * as react from 'react'
import { ComponentProps } from 'react'
import * as tailwind_variants from 'tailwind-variants'
import { VariantProps } from 'tailwind-variants'
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config'
import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component'
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util'
import * as Avatar$1 from '@radix-ui/react-avatar'
import * as _stitches_react_types_theme from '@stitches/react/types/theme'
import * as _stitches_react_types_css from '@stitches/react/types/css'
import * as _stitches_react_types_stitches from '@stitches/react/types/stitches'
import * as _stitches_react_types_util from '@stitches/react/types/util'

interface BoxProps extends ComponentProps<'div'> {}
declare const Box: ({ ...rest }: BoxProps) => react_jsx_runtime.JSX.Element

declare const text: tailwind_variants.TVReturnType<
  {
    size: {
      xs: string
      sm: string
      base: string
      lg: string
    }
  },
  undefined,
  string[],
  tailwind_variants_dist_config.TVConfig<
    {
      size: {
        xs: string
        sm: string
        base: string
        lg: string
      }
    },
    {
      size: {
        xs: string
        sm: string
        base: string
        lg: string
      }
    }
  >,
  {
    size: {
      xs: string
      sm: string
      base: string
      lg: string
    }
  },
  undefined,
  tailwind_variants.TVReturnType<
    {
      size: {
        xs: string
        sm: string
        base: string
        lg: string
      }
    },
    undefined,
    string[],
    tailwind_variants_dist_config.TVConfig<
      {
        size: {
          xs: string
          sm: string
          base: string
          lg: string
        }
      },
      {
        size: {
          xs: string
          sm: string
          base: string
          lg: string
        }
      }
    >,
    unknown,
    unknown,
    undefined
  >
>
type TextProps = ComponentProps<'p'> & VariantProps<typeof text>
declare const Text: ({
  className,
  size,
  ...props
}: TextProps) => react_jsx_runtime.JSX.Element

declare const heading: tailwind_variants.TVReturnType<
  {
    size: {
      h1: string
      h2: string
      h3: string
      h4: string
      h5: string
      h6: string
    }
  },
  undefined,
  string[],
  tailwind_variants_dist_config.TVConfig<
    {
      size: {
        h1: string
        h2: string
        h3: string
        h4: string
        h5: string
        h6: string
      }
    },
    {
      size: {
        h1: string
        h2: string
        h3: string
        h4: string
        h5: string
        h6: string
      }
    }
  >,
  {
    size: {
      h1: string
      h2: string
      h3: string
      h4: string
      h5: string
      h6: string
    }
  },
  undefined,
  tailwind_variants.TVReturnType<
    {
      size: {
        h1: string
        h2: string
        h3: string
        h4: string
        h5: string
        h6: string
      }
    },
    undefined,
    string[],
    tailwind_variants_dist_config.TVConfig<
      {
        size: {
          h1: string
          h2: string
          h3: string
          h4: string
          h5: string
          h6: string
        }
      },
      {
        size: {
          h1: string
          h2: string
          h3: string
          h4: string
          h5: string
          h6: string
        }
      }
    >,
    unknown,
    unknown,
    undefined
  >
>
type HeadingProps = ComponentProps<'h1'> & VariantProps<typeof heading>
declare const Heading: ({
  className,
  size,
  ...props
}: HeadingProps) => react_jsx_runtime.JSX.Element

declare const AvatarImage: _stitches_react_types_styled_component.StyledComponent<
  react.ForwardRefExoticComponent<
    Avatar$1.AvatarImageProps & react.RefAttributes<HTMLImageElement>
  >,
  {},
  {},
  _stitches_react_types_css_util.CSS<
    {},
    {
      colors: {
        white: string
        black: string
        gray100: string
        gray200: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
        gray900: string
        primary300: string
        primary500: string
        primary700: string
        primary900: string
      }
      fontSizes: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '4xl': string
        '5xl': string
        '6xl': string
        '7xl': string
        '8xl': string
        '9xl': string
        'sf-xs': string
        'sf-sm': string
        'sf-md': string
        'sf-lg': string
        'sf-h1': string
        'sf-h2': string
        'sf-h3': string
        'sf-h4': string
        'sf-h5': string
        'sf-h6': string
      }
      fontWeights: {
        regular: string
        medium: string
        bold: string
      }
      lineHeights: {
        shorter: string
        short: string
        base: string
        tall: string
      }
      radii: {
        px: string
        xs: string
        sm: string
        md: string
        lg: string
        full: string
      }
      space: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        8: string
        10: string
        12: string
        16: string
        20: string
        24: string
        32: string
        40: string
        48: string
        56: string
        64: string
      }
    },
    {
      height: 'space'
      width: 'space'
      gap: 'space'
      gridGap: 'space'
      columnGap: 'space'
      gridColumnGap: 'space'
      rowGap: 'space'
      gridRowGap: 'space'
      inset: 'space'
      insetBlock: 'space'
      insetBlockEnd: 'space'
      insetBlockStart: 'space'
      insetInline: 'space'
      insetInlineEnd: 'space'
      insetInlineStart: 'space'
      margin: 'space'
      marginTop: 'space'
      marginRight: 'space'
      marginBottom: 'space'
      marginLeft: 'space'
      marginBlock: 'space'
      marginBlockEnd: 'space'
      marginBlockStart: 'space'
      marginInline: 'space'
      marginInlineEnd: 'space'
      marginInlineStart: 'space'
      padding: 'space'
      paddingTop: 'space'
      paddingRight: 'space'
      paddingBottom: 'space'
      paddingLeft: 'space'
      paddingBlock: 'space'
      paddingBlockEnd: 'space'
      paddingBlockStart: 'space'
      paddingInline: 'space'
      paddingInlineEnd: 'space'
      paddingInlineStart: 'space'
      scrollMargin: 'space'
      scrollMarginTop: 'space'
      scrollMarginRight: 'space'
      scrollMarginBottom: 'space'
      scrollMarginLeft: 'space'
      scrollMarginBlock: 'space'
      scrollMarginBlockEnd: 'space'
      scrollMarginBlockStart: 'space'
      scrollMarginInline: 'space'
      scrollMarginInlineEnd: 'space'
      scrollMarginInlineStart: 'space'
      scrollPadding: 'space'
      scrollPaddingTop: 'space'
      scrollPaddingRight: 'space'
      scrollPaddingBottom: 'space'
      scrollPaddingLeft: 'space'
      scrollPaddingBlock: 'space'
      scrollPaddingBlockEnd: 'space'
      scrollPaddingBlockStart: 'space'
      scrollPaddingInline: 'space'
      scrollPaddingInlineEnd: 'space'
      scrollPaddingInlineStart: 'space'
      top: 'space'
      right: 'space'
      bottom: 'space'
      left: 'space'
      fontSize: 'fontSizes'
      background: 'colors'
      backgroundColor: 'colors'
      backgroundImage: 'colors'
      borderImage: 'colors'
      border: 'colors'
      borderBlock: 'colors'
      borderBlockEnd: 'colors'
      borderBlockStart: 'colors'
      borderBottom: 'colors'
      borderBottomColor: 'colors'
      borderColor: 'colors'
      borderInline: 'colors'
      borderInlineEnd: 'colors'
      borderInlineStart: 'colors'
      borderLeft: 'colors'
      borderLeftColor: 'colors'
      borderRight: 'colors'
      borderRightColor: 'colors'
      borderTop: 'colors'
      borderTopColor: 'colors'
      caretColor: 'colors'
      color: 'colors'
      columnRuleColor: 'colors'
      outline: 'colors'
      outlineColor: 'colors'
      fill: 'colors'
      stroke: 'colors'
      textDecorationColor: 'colors'
      fontFamily: 'fonts'
      fontWeight: 'fontWeights'
      lineHeight: 'lineHeights'
      letterSpacing: 'letterSpacings'
      blockSize: 'sizes'
      minBlockSize: 'sizes'
      maxBlockSize: 'sizes'
      inlineSize: 'sizes'
      minInlineSize: 'sizes'
      maxInlineSize: 'sizes'
      minWidth: 'sizes'
      maxWidth: 'sizes'
      minHeight: 'sizes'
      maxHeight: 'sizes'
      flexBasis: 'sizes'
      gridTemplateColumns: 'sizes'
      gridTemplateRows: 'sizes'
      borderWidth: 'borderWidths'
      borderTopWidth: 'borderWidths'
      borderLeftWidth: 'borderWidths'
      borderRightWidth: 'borderWidths'
      borderBottomWidth: 'borderWidths'
      borderStyle: 'borderStyles'
      borderTopStyle: 'borderStyles'
      borderLeftStyle: 'borderStyles'
      borderRightStyle: 'borderStyles'
      borderBottomStyle: 'borderStyles'
      borderRadius: 'radii'
      borderTopLeftRadius: 'radii'
      borderTopRightRadius: 'radii'
      borderBottomRightRadius: 'radii'
      borderBottomLeftRadius: 'radii'
      boxShadow: 'shadows'
      textShadow: 'shadows'
      transition: 'transitions'
      zIndex: 'zIndices'
    },
    {}
  >
>

interface AvatarProps extends ComponentProps<typeof AvatarImage> {}
declare const Avatar: {
  (props: AvatarProps): react_jsx_runtime.JSX.Element
  displayName: string
}

declare const button: tailwind_variants.TVReturnType<
  {
    variant: {
      primary: string[]
      secondary: string[]
      success: string[]
      warning: string[]
      error: string[]
    }
    size: {
      sm: string
      md: string
      lg: string
    }
  },
  undefined,
  string[],
  {
    twMerge: false
  },
  {
    variant: {
      primary: string[]
      secondary: string[]
      success: string[]
      warning: string[]
      error: string[]
    }
    size: {
      sm: string
      md: string
      lg: string
    }
  },
  undefined,
  tailwind_variants.TVReturnType<
    {
      variant: {
        primary: string[]
        secondary: string[]
        success: string[]
        warning: string[]
        error: string[]
      }
      size: {
        sm: string
        md: string
        lg: string
      }
    },
    undefined,
    string[],
    {
      twMerge: false
    },
    unknown,
    unknown,
    undefined
  >
>
type ButtonRootProps = ComponentProps<'button'> & VariantProps<typeof button>
declare const Root: ({
  variant,
  className,
  size,
  ...props
}: ButtonRootProps) => react_jsx_runtime.JSX.Element

type ButtonPrefixProps = ComponentProps<'div'>
declare const Prefix: (
  props: ButtonPrefixProps,
) => react_jsx_runtime.JSX.Element

type ButtonSuffixProps = ComponentProps<'div'>
declare const Suffix: (
  props: ButtonSuffixProps,
) => react_jsx_runtime.JSX.Element

declare const Input: _stitches_react_types_styled_component.StyledComponent<
  'input',
  {},
  {},
  _stitches_react_types_css_util.CSS<
    {},
    {
      colors: {
        white: string
        black: string
        gray100: string
        gray200: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
        gray900: string
        primary300: string
        primary500: string
        primary700: string
        primary900: string
      }
      fontSizes: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '4xl': string
        '5xl': string
        '6xl': string
        '7xl': string
        '8xl': string
        '9xl': string
        'sf-xs': string
        'sf-sm': string
        'sf-md': string
        'sf-lg': string
        'sf-h1': string
        'sf-h2': string
        'sf-h3': string
        'sf-h4': string
        'sf-h5': string
        'sf-h6': string
      }
      fontWeights: {
        regular: string
        medium: string
        bold: string
      }
      lineHeights: {
        shorter: string
        short: string
        base: string
        tall: string
      }
      radii: {
        px: string
        xs: string
        sm: string
        md: string
        lg: string
        full: string
      }
      space: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        8: string
        10: string
        12: string
        16: string
        20: string
        24: string
        32: string
        40: string
        48: string
        56: string
        64: string
      }
    },
    {
      height: 'space'
      width: 'space'
      gap: 'space'
      gridGap: 'space'
      columnGap: 'space'
      gridColumnGap: 'space'
      rowGap: 'space'
      gridRowGap: 'space'
      inset: 'space'
      insetBlock: 'space'
      insetBlockEnd: 'space'
      insetBlockStart: 'space'
      insetInline: 'space'
      insetInlineEnd: 'space'
      insetInlineStart: 'space'
      margin: 'space'
      marginTop: 'space'
      marginRight: 'space'
      marginBottom: 'space'
      marginLeft: 'space'
      marginBlock: 'space'
      marginBlockEnd: 'space'
      marginBlockStart: 'space'
      marginInline: 'space'
      marginInlineEnd: 'space'
      marginInlineStart: 'space'
      padding: 'space'
      paddingTop: 'space'
      paddingRight: 'space'
      paddingBottom: 'space'
      paddingLeft: 'space'
      paddingBlock: 'space'
      paddingBlockEnd: 'space'
      paddingBlockStart: 'space'
      paddingInline: 'space'
      paddingInlineEnd: 'space'
      paddingInlineStart: 'space'
      scrollMargin: 'space'
      scrollMarginTop: 'space'
      scrollMarginRight: 'space'
      scrollMarginBottom: 'space'
      scrollMarginLeft: 'space'
      scrollMarginBlock: 'space'
      scrollMarginBlockEnd: 'space'
      scrollMarginBlockStart: 'space'
      scrollMarginInline: 'space'
      scrollMarginInlineEnd: 'space'
      scrollMarginInlineStart: 'space'
      scrollPadding: 'space'
      scrollPaddingTop: 'space'
      scrollPaddingRight: 'space'
      scrollPaddingBottom: 'space'
      scrollPaddingLeft: 'space'
      scrollPaddingBlock: 'space'
      scrollPaddingBlockEnd: 'space'
      scrollPaddingBlockStart: 'space'
      scrollPaddingInline: 'space'
      scrollPaddingInlineEnd: 'space'
      scrollPaddingInlineStart: 'space'
      top: 'space'
      right: 'space'
      bottom: 'space'
      left: 'space'
      fontSize: 'fontSizes'
      background: 'colors'
      backgroundColor: 'colors'
      backgroundImage: 'colors'
      borderImage: 'colors'
      border: 'colors'
      borderBlock: 'colors'
      borderBlockEnd: 'colors'
      borderBlockStart: 'colors'
      borderBottom: 'colors'
      borderBottomColor: 'colors'
      borderColor: 'colors'
      borderInline: 'colors'
      borderInlineEnd: 'colors'
      borderInlineStart: 'colors'
      borderLeft: 'colors'
      borderLeftColor: 'colors'
      borderRight: 'colors'
      borderRightColor: 'colors'
      borderTop: 'colors'
      borderTopColor: 'colors'
      caretColor: 'colors'
      color: 'colors'
      columnRuleColor: 'colors'
      outline: 'colors'
      outlineColor: 'colors'
      fill: 'colors'
      stroke: 'colors'
      textDecorationColor: 'colors'
      fontFamily: 'fonts'
      fontWeight: 'fontWeights'
      lineHeight: 'lineHeights'
      letterSpacing: 'letterSpacings'
      blockSize: 'sizes'
      minBlockSize: 'sizes'
      maxBlockSize: 'sizes'
      inlineSize: 'sizes'
      minInlineSize: 'sizes'
      maxInlineSize: 'sizes'
      minWidth: 'sizes'
      maxWidth: 'sizes'
      minHeight: 'sizes'
      maxHeight: 'sizes'
      flexBasis: 'sizes'
      gridTemplateColumns: 'sizes'
      gridTemplateRows: 'sizes'
      borderWidth: 'borderWidths'
      borderTopWidth: 'borderWidths'
      borderLeftWidth: 'borderWidths'
      borderRightWidth: 'borderWidths'
      borderBottomWidth: 'borderWidths'
      borderStyle: 'borderStyles'
      borderTopStyle: 'borderStyles'
      borderLeftStyle: 'borderStyles'
      borderRightStyle: 'borderStyles'
      borderBottomStyle: 'borderStyles'
      borderRadius: 'radii'
      borderTopLeftRadius: 'radii'
      borderTopRightRadius: 'radii'
      borderBottomRightRadius: 'radii'
      borderBottomLeftRadius: 'radii'
      boxShadow: 'shadows'
      textShadow: 'shadows'
      transition: 'transitions'
      zIndex: 'zIndices'
    },
    {}
  >
>

interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}
declare function TextInput({
  prefix,
  ...props
}: TextInputProps): react_jsx_runtime.JSX.Element
declare namespace TextInput {
  var displayName: string
}

declare const TextArea: _stitches_react_types_styled_component.StyledComponent<
  'textarea',
  {},
  {},
  _stitches_react_types_css_util.CSS<
    {},
    {
      colors: {
        white: string
        black: string
        gray100: string
        gray200: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
        gray900: string
        primary300: string
        primary500: string
        primary700: string
        primary900: string
      }
      fontSizes: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '4xl': string
        '5xl': string
        '6xl': string
        '7xl': string
        '8xl': string
        '9xl': string
        'sf-xs': string
        'sf-sm': string
        'sf-md': string
        'sf-lg': string
        'sf-h1': string
        'sf-h2': string
        'sf-h3': string
        'sf-h4': string
        'sf-h5': string
        'sf-h6': string
      }
      fontWeights: {
        regular: string
        medium: string
        bold: string
      }
      lineHeights: {
        shorter: string
        short: string
        base: string
        tall: string
      }
      radii: {
        px: string
        xs: string
        sm: string
        md: string
        lg: string
        full: string
      }
      space: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        8: string
        10: string
        12: string
        16: string
        20: string
        24: string
        32: string
        40: string
        48: string
        56: string
        64: string
      }
    },
    {
      height: 'space'
      width: 'space'
      gap: 'space'
      gridGap: 'space'
      columnGap: 'space'
      gridColumnGap: 'space'
      rowGap: 'space'
      gridRowGap: 'space'
      inset: 'space'
      insetBlock: 'space'
      insetBlockEnd: 'space'
      insetBlockStart: 'space'
      insetInline: 'space'
      insetInlineEnd: 'space'
      insetInlineStart: 'space'
      margin: 'space'
      marginTop: 'space'
      marginRight: 'space'
      marginBottom: 'space'
      marginLeft: 'space'
      marginBlock: 'space'
      marginBlockEnd: 'space'
      marginBlockStart: 'space'
      marginInline: 'space'
      marginInlineEnd: 'space'
      marginInlineStart: 'space'
      padding: 'space'
      paddingTop: 'space'
      paddingRight: 'space'
      paddingBottom: 'space'
      paddingLeft: 'space'
      paddingBlock: 'space'
      paddingBlockEnd: 'space'
      paddingBlockStart: 'space'
      paddingInline: 'space'
      paddingInlineEnd: 'space'
      paddingInlineStart: 'space'
      scrollMargin: 'space'
      scrollMarginTop: 'space'
      scrollMarginRight: 'space'
      scrollMarginBottom: 'space'
      scrollMarginLeft: 'space'
      scrollMarginBlock: 'space'
      scrollMarginBlockEnd: 'space'
      scrollMarginBlockStart: 'space'
      scrollMarginInline: 'space'
      scrollMarginInlineEnd: 'space'
      scrollMarginInlineStart: 'space'
      scrollPadding: 'space'
      scrollPaddingTop: 'space'
      scrollPaddingRight: 'space'
      scrollPaddingBottom: 'space'
      scrollPaddingLeft: 'space'
      scrollPaddingBlock: 'space'
      scrollPaddingBlockEnd: 'space'
      scrollPaddingBlockStart: 'space'
      scrollPaddingInline: 'space'
      scrollPaddingInlineEnd: 'space'
      scrollPaddingInlineStart: 'space'
      top: 'space'
      right: 'space'
      bottom: 'space'
      left: 'space'
      fontSize: 'fontSizes'
      background: 'colors'
      backgroundColor: 'colors'
      backgroundImage: 'colors'
      borderImage: 'colors'
      border: 'colors'
      borderBlock: 'colors'
      borderBlockEnd: 'colors'
      borderBlockStart: 'colors'
      borderBottom: 'colors'
      borderBottomColor: 'colors'
      borderColor: 'colors'
      borderInline: 'colors'
      borderInlineEnd: 'colors'
      borderInlineStart: 'colors'
      borderLeft: 'colors'
      borderLeftColor: 'colors'
      borderRight: 'colors'
      borderRightColor: 'colors'
      borderTop: 'colors'
      borderTopColor: 'colors'
      caretColor: 'colors'
      color: 'colors'
      columnRuleColor: 'colors'
      outline: 'colors'
      outlineColor: 'colors'
      fill: 'colors'
      stroke: 'colors'
      textDecorationColor: 'colors'
      fontFamily: 'fonts'
      fontWeight: 'fontWeights'
      lineHeight: 'lineHeights'
      letterSpacing: 'letterSpacings'
      blockSize: 'sizes'
      minBlockSize: 'sizes'
      maxBlockSize: 'sizes'
      inlineSize: 'sizes'
      minInlineSize: 'sizes'
      maxInlineSize: 'sizes'
      minWidth: 'sizes'
      maxWidth: 'sizes'
      minHeight: 'sizes'
      maxHeight: 'sizes'
      flexBasis: 'sizes'
      gridTemplateColumns: 'sizes'
      gridTemplateRows: 'sizes'
      borderWidth: 'borderWidths'
      borderTopWidth: 'borderWidths'
      borderLeftWidth: 'borderWidths'
      borderRightWidth: 'borderWidths'
      borderBottomWidth: 'borderWidths'
      borderStyle: 'borderStyles'
      borderTopStyle: 'borderStyles'
      borderLeftStyle: 'borderStyles'
      borderRightStyle: 'borderStyles'
      borderBottomStyle: 'borderStyles'
      borderRadius: 'radii'
      borderTopLeftRadius: 'radii'
      borderTopRightRadius: 'radii'
      borderBottomRightRadius: 'radii'
      borderBottomLeftRadius: 'radii'
      boxShadow: 'shadows'
      textShadow: 'shadows'
      transition: 'transitions'
      zIndex: 'zIndices'
    },
    {}
  >
>
interface TextAreaProps extends ComponentProps<typeof TextArea> {}

declare function Checkbox(): react_jsx_runtime.JSX.Element

interface MultiStepProps {
  size: number
  currentStep?: number
}
declare function MultiStep({
  size,
  currentStep,
}: MultiStepProps): react_jsx_runtime.JSX.Element
declare namespace MultiStep {
  var displayName: string
}

declare const BoxTest: _stitches_react_types_styled_component.StyledComponent<
  'div',
  {},
  {},
  _stitches_react_types_css_util.CSS<
    {},
    {
      colors: {
        white: string
        black: string
        gray100: string
        gray200: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
        gray900: string
        primary300: string
        primary500: string
        primary700: string
        primary900: string
      }
      fontSizes: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '4xl': string
        '5xl': string
        '6xl': string
        '7xl': string
        '8xl': string
        '9xl': string
        'sf-xs': string
        'sf-sm': string
        'sf-md': string
        'sf-lg': string
        'sf-h1': string
        'sf-h2': string
        'sf-h3': string
        'sf-h4': string
        'sf-h5': string
        'sf-h6': string
      }
      fontWeights: {
        regular: string
        medium: string
        bold: string
      }
      lineHeights: {
        shorter: string
        short: string
        base: string
        tall: string
      }
      radii: {
        px: string
        xs: string
        sm: string
        md: string
        lg: string
        full: string
      }
      space: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        8: string
        10: string
        12: string
        16: string
        20: string
        24: string
        32: string
        40: string
        48: string
        56: string
        64: string
      }
    },
    {
      height: 'space'
      width: 'space'
      gap: 'space'
      gridGap: 'space'
      columnGap: 'space'
      gridColumnGap: 'space'
      rowGap: 'space'
      gridRowGap: 'space'
      inset: 'space'
      insetBlock: 'space'
      insetBlockEnd: 'space'
      insetBlockStart: 'space'
      insetInline: 'space'
      insetInlineEnd: 'space'
      insetInlineStart: 'space'
      margin: 'space'
      marginTop: 'space'
      marginRight: 'space'
      marginBottom: 'space'
      marginLeft: 'space'
      marginBlock: 'space'
      marginBlockEnd: 'space'
      marginBlockStart: 'space'
      marginInline: 'space'
      marginInlineEnd: 'space'
      marginInlineStart: 'space'
      padding: 'space'
      paddingTop: 'space'
      paddingRight: 'space'
      paddingBottom: 'space'
      paddingLeft: 'space'
      paddingBlock: 'space'
      paddingBlockEnd: 'space'
      paddingBlockStart: 'space'
      paddingInline: 'space'
      paddingInlineEnd: 'space'
      paddingInlineStart: 'space'
      scrollMargin: 'space'
      scrollMarginTop: 'space'
      scrollMarginRight: 'space'
      scrollMarginBottom: 'space'
      scrollMarginLeft: 'space'
      scrollMarginBlock: 'space'
      scrollMarginBlockEnd: 'space'
      scrollMarginBlockStart: 'space'
      scrollMarginInline: 'space'
      scrollMarginInlineEnd: 'space'
      scrollMarginInlineStart: 'space'
      scrollPadding: 'space'
      scrollPaddingTop: 'space'
      scrollPaddingRight: 'space'
      scrollPaddingBottom: 'space'
      scrollPaddingLeft: 'space'
      scrollPaddingBlock: 'space'
      scrollPaddingBlockEnd: 'space'
      scrollPaddingBlockStart: 'space'
      scrollPaddingInline: 'space'
      scrollPaddingInlineEnd: 'space'
      scrollPaddingInlineStart: 'space'
      top: 'space'
      right: 'space'
      bottom: 'space'
      left: 'space'
      fontSize: 'fontSizes'
      background: 'colors'
      backgroundColor: 'colors'
      backgroundImage: 'colors'
      borderImage: 'colors'
      border: 'colors'
      borderBlock: 'colors'
      borderBlockEnd: 'colors'
      borderBlockStart: 'colors'
      borderBottom: 'colors'
      borderBottomColor: 'colors'
      borderColor: 'colors'
      borderInline: 'colors'
      borderInlineEnd: 'colors'
      borderInlineStart: 'colors'
      borderLeft: 'colors'
      borderLeftColor: 'colors'
      borderRight: 'colors'
      borderRightColor: 'colors'
      borderTop: 'colors'
      borderTopColor: 'colors'
      caretColor: 'colors'
      color: 'colors'
      columnRuleColor: 'colors'
      outline: 'colors'
      outlineColor: 'colors'
      fill: 'colors'
      stroke: 'colors'
      textDecorationColor: 'colors'
      fontFamily: 'fonts'
      fontWeight: 'fontWeights'
      lineHeight: 'lineHeights'
      letterSpacing: 'letterSpacings'
      blockSize: 'sizes'
      minBlockSize: 'sizes'
      maxBlockSize: 'sizes'
      inlineSize: 'sizes'
      minInlineSize: 'sizes'
      maxInlineSize: 'sizes'
      minWidth: 'sizes'
      maxWidth: 'sizes'
      minHeight: 'sizes'
      maxHeight: 'sizes'
      flexBasis: 'sizes'
      gridTemplateColumns: 'sizes'
      gridTemplateRows: 'sizes'
      borderWidth: 'borderWidths'
      borderTopWidth: 'borderWidths'
      borderLeftWidth: 'borderWidths'
      borderRightWidth: 'borderWidths'
      borderBottomWidth: 'borderWidths'
      borderStyle: 'borderStyles'
      borderTopStyle: 'borderStyles'
      borderLeftStyle: 'borderStyles'
      borderRightStyle: 'borderStyles'
      borderBottomStyle: 'borderStyles'
      borderRadius: 'radii'
      borderTopLeftRadius: 'radii'
      borderTopRightRadius: 'radii'
      borderBottomRightRadius: 'radii'
      borderBottomLeftRadius: 'radii'
      boxShadow: 'shadows'
      textShadow: 'shadows'
      transition: 'transitions'
      zIndex: 'zIndices'
    },
    {}
  >
>
interface BoxTestProps extends ComponentProps<typeof BoxTest> {}

declare const styled: <
  Type extends
    | react.ComponentType<any>
    | _stitches_react_types_util.Function
    | keyof JSX.IntrinsicElements,
  Composers extends (
    | string
    | react.ComponentType<any>
    | _stitches_react_types_util.Function
    | {
        [name: string]: unknown
      }
  )[],
  CSS = _stitches_react_types_css_util.CSS<
    {},
    {
      colors: {
        white: string
        black: string
        gray100: string
        gray200: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
        gray900: string
        primary300: string
        primary500: string
        primary700: string
        primary900: string
      }
      fontSizes: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '4xl': string
        '5xl': string
        '6xl': string
        '7xl': string
        '8xl': string
        '9xl': string
        'sf-xs': string
        'sf-sm': string
        'sf-md': string
        'sf-lg': string
        'sf-h1': string
        'sf-h2': string
        'sf-h3': string
        'sf-h4': string
        'sf-h5': string
        'sf-h6': string
      }
      fontWeights: {
        regular: string
        medium: string
        bold: string
      }
      lineHeights: {
        shorter: string
        short: string
        base: string
        tall: string
      }
      radii: {
        px: string
        xs: string
        sm: string
        md: string
        lg: string
        full: string
      }
      space: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        8: string
        10: string
        12: string
        16: string
        20: string
        24: string
        32: string
        40: string
        48: string
        56: string
        64: string
      }
    },
    {
      height: 'space'
      width: 'space'
      gap: 'space'
      gridGap: 'space'
      columnGap: 'space'
      gridColumnGap: 'space'
      rowGap: 'space'
      gridRowGap: 'space'
      inset: 'space'
      insetBlock: 'space'
      insetBlockEnd: 'space'
      insetBlockStart: 'space'
      insetInline: 'space'
      insetInlineEnd: 'space'
      insetInlineStart: 'space'
      margin: 'space'
      marginTop: 'space'
      marginRight: 'space'
      marginBottom: 'space'
      marginLeft: 'space'
      marginBlock: 'space'
      marginBlockEnd: 'space'
      marginBlockStart: 'space'
      marginInline: 'space'
      marginInlineEnd: 'space'
      marginInlineStart: 'space'
      padding: 'space'
      paddingTop: 'space'
      paddingRight: 'space'
      paddingBottom: 'space'
      paddingLeft: 'space'
      paddingBlock: 'space'
      paddingBlockEnd: 'space'
      paddingBlockStart: 'space'
      paddingInline: 'space'
      paddingInlineEnd: 'space'
      paddingInlineStart: 'space'
      scrollMargin: 'space'
      scrollMarginTop: 'space'
      scrollMarginRight: 'space'
      scrollMarginBottom: 'space'
      scrollMarginLeft: 'space'
      scrollMarginBlock: 'space'
      scrollMarginBlockEnd: 'space'
      scrollMarginBlockStart: 'space'
      scrollMarginInline: 'space'
      scrollMarginInlineEnd: 'space'
      scrollMarginInlineStart: 'space'
      scrollPadding: 'space'
      scrollPaddingTop: 'space'
      scrollPaddingRight: 'space'
      scrollPaddingBottom: 'space'
      scrollPaddingLeft: 'space'
      scrollPaddingBlock: 'space'
      scrollPaddingBlockEnd: 'space'
      scrollPaddingBlockStart: 'space'
      scrollPaddingInline: 'space'
      scrollPaddingInlineEnd: 'space'
      scrollPaddingInlineStart: 'space'
      top: 'space'
      right: 'space'
      bottom: 'space'
      left: 'space'
      fontSize: 'fontSizes'
      background: 'colors'
      backgroundColor: 'colors'
      backgroundImage: 'colors'
      borderImage: 'colors'
      border: 'colors'
      borderBlock: 'colors'
      borderBlockEnd: 'colors'
      borderBlockStart: 'colors'
      borderBottom: 'colors'
      borderBottomColor: 'colors'
      borderColor: 'colors'
      borderInline: 'colors'
      borderInlineEnd: 'colors'
      borderInlineStart: 'colors'
      borderLeft: 'colors'
      borderLeftColor: 'colors'
      borderRight: 'colors'
      borderRightColor: 'colors'
      borderTop: 'colors'
      borderTopColor: 'colors'
      caretColor: 'colors'
      color: 'colors'
      columnRuleColor: 'colors'
      outline: 'colors'
      outlineColor: 'colors'
      fill: 'colors'
      stroke: 'colors'
      textDecorationColor: 'colors'
      fontFamily: 'fonts'
      fontWeight: 'fontWeights'
      lineHeight: 'lineHeights'
      letterSpacing: 'letterSpacings'
      blockSize: 'sizes'
      minBlockSize: 'sizes'
      maxBlockSize: 'sizes'
      inlineSize: 'sizes'
      minInlineSize: 'sizes'
      maxInlineSize: 'sizes'
      minWidth: 'sizes'
      maxWidth: 'sizes'
      minHeight: 'sizes'
      maxHeight: 'sizes'
      flexBasis: 'sizes'
      gridTemplateColumns: 'sizes'
      gridTemplateRows: 'sizes'
      borderWidth: 'borderWidths'
      borderTopWidth: 'borderWidths'
      borderLeftWidth: 'borderWidths'
      borderRightWidth: 'borderWidths'
      borderBottomWidth: 'borderWidths'
      borderStyle: 'borderStyles'
      borderTopStyle: 'borderStyles'
      borderLeftStyle: 'borderStyles'
      borderRightStyle: 'borderStyles'
      borderBottomStyle: 'borderStyles'
      borderRadius: 'radii'
      borderTopLeftRadius: 'radii'
      borderTopRightRadius: 'radii'
      borderBottomRightRadius: 'radii'
      borderBottomLeftRadius: 'radii'
      boxShadow: 'shadows'
      textShadow: 'shadows'
      transition: 'transitions'
      zIndex: 'zIndices'
    },
    {}
  >,
>(
  type: Type,
  ...composers: {
    [K in keyof Composers]: string extends Composers[K]
      ? Composers[K]
      : Composers[K] extends
            | string
            | react.ComponentType<any>
            | _stitches_react_types_util.Function
        ? Composers[K]
        : _stitches_react_types_stitches.RemoveIndex<CSS> & {
            variants?:
              | {
                  [x: string]: {
                    [x: string]: CSS
                    [x: number]: CSS
                  }
                }
              | undefined
            compoundVariants?:
              | (('variants' extends keyof Composers[K]
                  ? {
                      [Name in keyof Composers[K][keyof Composers[K] &
                        'variants']]?:
                        | _stitches_react_types_util.String
                        | _stitches_react_types_util.Widen<
                            keyof Composers[K][keyof Composers[K] &
                              'variants'][Name]
                          >
                        | undefined
                    }
                  : _stitches_react_types_util.WideObject) & {
                  css: CSS
                })[]
              | undefined
            defaultVariants?:
              | ('variants' extends keyof Composers[K]
                  ? {
                      [Name_1 in keyof Composers[K][keyof Composers[K] &
                        'variants']]?:
                        | _stitches_react_types_util.String
                        | _stitches_react_types_util.Widen<
                            keyof Composers[K][keyof Composers[K] &
                              'variants'][Name_1]
                          >
                        | undefined
                    }
                  : _stitches_react_types_util.WideObject)
              | undefined
          } & CSS & {
              [K2 in keyof Composers[K]]: K2 extends
                | 'variants'
                | 'compoundVariants'
                | 'defaultVariants'
                ? unknown
                : K2 extends keyof CSS
                  ? CSS[K2]
                  : unknown
            }
  }
) => _stitches_react_types_styled_component.StyledComponent<
  Type,
  _stitches_react_types_styled_component.StyledComponentProps<Composers>,
  {},
  _stitches_react_types_css_util.CSS<
    {},
    {
      colors: {
        white: string
        black: string
        gray100: string
        gray200: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
        gray900: string
        primary300: string
        primary500: string
        primary700: string
        primary900: string
      }
      fontSizes: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '4xl': string
        '5xl': string
        '6xl': string
        '7xl': string
        '8xl': string
        '9xl': string
        'sf-xs': string
        'sf-sm': string
        'sf-md': string
        'sf-lg': string
        'sf-h1': string
        'sf-h2': string
        'sf-h3': string
        'sf-h4': string
        'sf-h5': string
        'sf-h6': string
      }
      fontWeights: {
        regular: string
        medium: string
        bold: string
      }
      lineHeights: {
        shorter: string
        short: string
        base: string
        tall: string
      }
      radii: {
        px: string
        xs: string
        sm: string
        md: string
        lg: string
        full: string
      }
      space: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        8: string
        10: string
        12: string
        16: string
        20: string
        24: string
        32: string
        40: string
        48: string
        56: string
        64: string
      }
    },
    {
      height: 'space'
      width: 'space'
      gap: 'space'
      gridGap: 'space'
      columnGap: 'space'
      gridColumnGap: 'space'
      rowGap: 'space'
      gridRowGap: 'space'
      inset: 'space'
      insetBlock: 'space'
      insetBlockEnd: 'space'
      insetBlockStart: 'space'
      insetInline: 'space'
      insetInlineEnd: 'space'
      insetInlineStart: 'space'
      margin: 'space'
      marginTop: 'space'
      marginRight: 'space'
      marginBottom: 'space'
      marginLeft: 'space'
      marginBlock: 'space'
      marginBlockEnd: 'space'
      marginBlockStart: 'space'
      marginInline: 'space'
      marginInlineEnd: 'space'
      marginInlineStart: 'space'
      padding: 'space'
      paddingTop: 'space'
      paddingRight: 'space'
      paddingBottom: 'space'
      paddingLeft: 'space'
      paddingBlock: 'space'
      paddingBlockEnd: 'space'
      paddingBlockStart: 'space'
      paddingInline: 'space'
      paddingInlineEnd: 'space'
      paddingInlineStart: 'space'
      scrollMargin: 'space'
      scrollMarginTop: 'space'
      scrollMarginRight: 'space'
      scrollMarginBottom: 'space'
      scrollMarginLeft: 'space'
      scrollMarginBlock: 'space'
      scrollMarginBlockEnd: 'space'
      scrollMarginBlockStart: 'space'
      scrollMarginInline: 'space'
      scrollMarginInlineEnd: 'space'
      scrollMarginInlineStart: 'space'
      scrollPadding: 'space'
      scrollPaddingTop: 'space'
      scrollPaddingRight: 'space'
      scrollPaddingBottom: 'space'
      scrollPaddingLeft: 'space'
      scrollPaddingBlock: 'space'
      scrollPaddingBlockEnd: 'space'
      scrollPaddingBlockStart: 'space'
      scrollPaddingInline: 'space'
      scrollPaddingInlineEnd: 'space'
      scrollPaddingInlineStart: 'space'
      top: 'space'
      right: 'space'
      bottom: 'space'
      left: 'space'
      fontSize: 'fontSizes'
      background: 'colors'
      backgroundColor: 'colors'
      backgroundImage: 'colors'
      borderImage: 'colors'
      border: 'colors'
      borderBlock: 'colors'
      borderBlockEnd: 'colors'
      borderBlockStart: 'colors'
      borderBottom: 'colors'
      borderBottomColor: 'colors'
      borderColor: 'colors'
      borderInline: 'colors'
      borderInlineEnd: 'colors'
      borderInlineStart: 'colors'
      borderLeft: 'colors'
      borderLeftColor: 'colors'
      borderRight: 'colors'
      borderRightColor: 'colors'
      borderTop: 'colors'
      borderTopColor: 'colors'
      caretColor: 'colors'
      color: 'colors'
      columnRuleColor: 'colors'
      outline: 'colors'
      outlineColor: 'colors'
      fill: 'colors'
      stroke: 'colors'
      textDecorationColor: 'colors'
      fontFamily: 'fonts'
      fontWeight: 'fontWeights'
      lineHeight: 'lineHeights'
      letterSpacing: 'letterSpacings'
      blockSize: 'sizes'
      minBlockSize: 'sizes'
      maxBlockSize: 'sizes'
      inlineSize: 'sizes'
      minInlineSize: 'sizes'
      maxInlineSize: 'sizes'
      minWidth: 'sizes'
      maxWidth: 'sizes'
      minHeight: 'sizes'
      maxHeight: 'sizes'
      flexBasis: 'sizes'
      gridTemplateColumns: 'sizes'
      gridTemplateRows: 'sizes'
      borderWidth: 'borderWidths'
      borderTopWidth: 'borderWidths'
      borderLeftWidth: 'borderWidths'
      borderRightWidth: 'borderWidths'
      borderBottomWidth: 'borderWidths'
      borderStyle: 'borderStyles'
      borderTopStyle: 'borderStyles'
      borderLeftStyle: 'borderStyles'
      borderRightStyle: 'borderStyles'
      borderBottomStyle: 'borderStyles'
      borderRadius: 'radii'
      borderTopLeftRadius: 'radii'
      borderTopRightRadius: 'radii'
      borderBottomRightRadius: 'radii'
      borderBottomLeftRadius: 'radii'
      boxShadow: 'shadows'
      textShadow: 'shadows'
      transition: 'transitions'
      zIndex: 'zIndices'
    },
    {}
  >
>
declare const css: <
  Composers extends (
    | string
    | react.JSXElementConstructor<any>
    | react.ExoticComponent<any>
    | _stitches_react_types_util.Function
    | {
        [name: string]: unknown
      }
  )[],
  CSS = _stitches_react_types_css_util.CSS<
    {},
    {
      colors: {
        white: string
        black: string
        gray100: string
        gray200: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
        gray900: string
        primary300: string
        primary500: string
        primary700: string
        primary900: string
      }
      fontSizes: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '4xl': string
        '5xl': string
        '6xl': string
        '7xl': string
        '8xl': string
        '9xl': string
        'sf-xs': string
        'sf-sm': string
        'sf-md': string
        'sf-lg': string
        'sf-h1': string
        'sf-h2': string
        'sf-h3': string
        'sf-h4': string
        'sf-h5': string
        'sf-h6': string
      }
      fontWeights: {
        regular: string
        medium: string
        bold: string
      }
      lineHeights: {
        shorter: string
        short: string
        base: string
        tall: string
      }
      radii: {
        px: string
        xs: string
        sm: string
        md: string
        lg: string
        full: string
      }
      space: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        8: string
        10: string
        12: string
        16: string
        20: string
        24: string
        32: string
        40: string
        48: string
        56: string
        64: string
      }
    },
    {
      height: 'space'
      width: 'space'
      gap: 'space'
      gridGap: 'space'
      columnGap: 'space'
      gridColumnGap: 'space'
      rowGap: 'space'
      gridRowGap: 'space'
      inset: 'space'
      insetBlock: 'space'
      insetBlockEnd: 'space'
      insetBlockStart: 'space'
      insetInline: 'space'
      insetInlineEnd: 'space'
      insetInlineStart: 'space'
      margin: 'space'
      marginTop: 'space'
      marginRight: 'space'
      marginBottom: 'space'
      marginLeft: 'space'
      marginBlock: 'space'
      marginBlockEnd: 'space'
      marginBlockStart: 'space'
      marginInline: 'space'
      marginInlineEnd: 'space'
      marginInlineStart: 'space'
      padding: 'space'
      paddingTop: 'space'
      paddingRight: 'space'
      paddingBottom: 'space'
      paddingLeft: 'space'
      paddingBlock: 'space'
      paddingBlockEnd: 'space'
      paddingBlockStart: 'space'
      paddingInline: 'space'
      paddingInlineEnd: 'space'
      paddingInlineStart: 'space'
      scrollMargin: 'space'
      scrollMarginTop: 'space'
      scrollMarginRight: 'space'
      scrollMarginBottom: 'space'
      scrollMarginLeft: 'space'
      scrollMarginBlock: 'space'
      scrollMarginBlockEnd: 'space'
      scrollMarginBlockStart: 'space'
      scrollMarginInline: 'space'
      scrollMarginInlineEnd: 'space'
      scrollMarginInlineStart: 'space'
      scrollPadding: 'space'
      scrollPaddingTop: 'space'
      scrollPaddingRight: 'space'
      scrollPaddingBottom: 'space'
      scrollPaddingLeft: 'space'
      scrollPaddingBlock: 'space'
      scrollPaddingBlockEnd: 'space'
      scrollPaddingBlockStart: 'space'
      scrollPaddingInline: 'space'
      scrollPaddingInlineEnd: 'space'
      scrollPaddingInlineStart: 'space'
      top: 'space'
      right: 'space'
      bottom: 'space'
      left: 'space'
      fontSize: 'fontSizes'
      background: 'colors'
      backgroundColor: 'colors'
      backgroundImage: 'colors'
      borderImage: 'colors'
      border: 'colors'
      borderBlock: 'colors'
      borderBlockEnd: 'colors'
      borderBlockStart: 'colors'
      borderBottom: 'colors'
      borderBottomColor: 'colors'
      borderColor: 'colors'
      borderInline: 'colors'
      borderInlineEnd: 'colors'
      borderInlineStart: 'colors'
      borderLeft: 'colors'
      borderLeftColor: 'colors'
      borderRight: 'colors'
      borderRightColor: 'colors'
      borderTop: 'colors'
      borderTopColor: 'colors'
      caretColor: 'colors'
      color: 'colors'
      columnRuleColor: 'colors'
      outline: 'colors'
      outlineColor: 'colors'
      fill: 'colors'
      stroke: 'colors'
      textDecorationColor: 'colors'
      fontFamily: 'fonts'
      fontWeight: 'fontWeights'
      lineHeight: 'lineHeights'
      letterSpacing: 'letterSpacings'
      blockSize: 'sizes'
      minBlockSize: 'sizes'
      maxBlockSize: 'sizes'
      inlineSize: 'sizes'
      minInlineSize: 'sizes'
      maxInlineSize: 'sizes'
      minWidth: 'sizes'
      maxWidth: 'sizes'
      minHeight: 'sizes'
      maxHeight: 'sizes'
      flexBasis: 'sizes'
      gridTemplateColumns: 'sizes'
      gridTemplateRows: 'sizes'
      borderWidth: 'borderWidths'
      borderTopWidth: 'borderWidths'
      borderLeftWidth: 'borderWidths'
      borderRightWidth: 'borderWidths'
      borderBottomWidth: 'borderWidths'
      borderStyle: 'borderStyles'
      borderTopStyle: 'borderStyles'
      borderLeftStyle: 'borderStyles'
      borderRightStyle: 'borderStyles'
      borderBottomStyle: 'borderStyles'
      borderRadius: 'radii'
      borderTopLeftRadius: 'radii'
      borderTopRightRadius: 'radii'
      borderBottomRightRadius: 'radii'
      borderBottomLeftRadius: 'radii'
      boxShadow: 'shadows'
      textShadow: 'shadows'
      transition: 'transitions'
      zIndex: 'zIndices'
    },
    {}
  >,
>(
  ...composers: {
    [K in keyof Composers]: string extends Composers[K]
      ? Composers[K]
      : Composers[K] extends
            | string
            | react.JSXElementConstructor<any>
            | react.ExoticComponent<any>
            | _stitches_react_types_util.Function
        ? Composers[K]
        : _stitches_react_types_stitches.RemoveIndex<CSS> & {
            variants?:
              | {
                  [x: string]: {
                    [x: string]: CSS
                    [x: number]: CSS
                  }
                }
              | undefined
            compoundVariants?:
              | (('variants' extends keyof Composers[K]
                  ? {
                      [Name in keyof Composers[K][keyof Composers[K] &
                        'variants']]?:
                        | _stitches_react_types_util.String
                        | _stitches_react_types_util.Widen<
                            keyof Composers[K][keyof Composers[K] &
                              'variants'][Name]
                          >
                        | undefined
                    }
                  : _stitches_react_types_util.WideObject) & {
                  css: CSS
                })[]
              | undefined
            defaultVariants?:
              | ('variants' extends keyof Composers[K]
                  ? {
                      [Name_1 in keyof Composers[K][keyof Composers[K] &
                        'variants']]?:
                        | _stitches_react_types_util.String
                        | _stitches_react_types_util.Widen<
                            keyof Composers[K][keyof Composers[K] &
                              'variants'][Name_1]
                          >
                        | undefined
                    }
                  : _stitches_react_types_util.WideObject)
              | undefined
          } & CSS & {
              [K2 in keyof Composers[K]]: K2 extends
                | 'variants'
                | 'compoundVariants'
                | 'defaultVariants'
                ? unknown
                : K2 extends keyof CSS
                  ? CSS[K2]
                  : unknown
            }
  }
) => _stitches_react_types_styled_component.CssComponent<
  _stitches_react_types_styled_component.StyledComponentType<Composers>,
  _stitches_react_types_styled_component.StyledComponentProps<Composers>,
  {},
  CSS
>
declare const keyframes: (style: {
  [offset: string]: _stitches_react_types_css_util.CSS<
    {},
    {
      colors: {
        white: string
        black: string
        gray100: string
        gray200: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
        gray900: string
        primary300: string
        primary500: string
        primary700: string
        primary900: string
      }
      fontSizes: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '4xl': string
        '5xl': string
        '6xl': string
        '7xl': string
        '8xl': string
        '9xl': string
        'sf-xs': string
        'sf-sm': string
        'sf-md': string
        'sf-lg': string
        'sf-h1': string
        'sf-h2': string
        'sf-h3': string
        'sf-h4': string
        'sf-h5': string
        'sf-h6': string
      }
      fontWeights: {
        regular: string
        medium: string
        bold: string
      }
      lineHeights: {
        shorter: string
        short: string
        base: string
        tall: string
      }
      radii: {
        px: string
        xs: string
        sm: string
        md: string
        lg: string
        full: string
      }
      space: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        8: string
        10: string
        12: string
        16: string
        20: string
        24: string
        32: string
        40: string
        48: string
        56: string
        64: string
      }
    },
    {
      height: 'space'
      width: 'space'
      gap: 'space'
      gridGap: 'space'
      columnGap: 'space'
      gridColumnGap: 'space'
      rowGap: 'space'
      gridRowGap: 'space'
      inset: 'space'
      insetBlock: 'space'
      insetBlockEnd: 'space'
      insetBlockStart: 'space'
      insetInline: 'space'
      insetInlineEnd: 'space'
      insetInlineStart: 'space'
      margin: 'space'
      marginTop: 'space'
      marginRight: 'space'
      marginBottom: 'space'
      marginLeft: 'space'
      marginBlock: 'space'
      marginBlockEnd: 'space'
      marginBlockStart: 'space'
      marginInline: 'space'
      marginInlineEnd: 'space'
      marginInlineStart: 'space'
      padding: 'space'
      paddingTop: 'space'
      paddingRight: 'space'
      paddingBottom: 'space'
      paddingLeft: 'space'
      paddingBlock: 'space'
      paddingBlockEnd: 'space'
      paddingBlockStart: 'space'
      paddingInline: 'space'
      paddingInlineEnd: 'space'
      paddingInlineStart: 'space'
      scrollMargin: 'space'
      scrollMarginTop: 'space'
      scrollMarginRight: 'space'
      scrollMarginBottom: 'space'
      scrollMarginLeft: 'space'
      scrollMarginBlock: 'space'
      scrollMarginBlockEnd: 'space'
      scrollMarginBlockStart: 'space'
      scrollMarginInline: 'space'
      scrollMarginInlineEnd: 'space'
      scrollMarginInlineStart: 'space'
      scrollPadding: 'space'
      scrollPaddingTop: 'space'
      scrollPaddingRight: 'space'
      scrollPaddingBottom: 'space'
      scrollPaddingLeft: 'space'
      scrollPaddingBlock: 'space'
      scrollPaddingBlockEnd: 'space'
      scrollPaddingBlockStart: 'space'
      scrollPaddingInline: 'space'
      scrollPaddingInlineEnd: 'space'
      scrollPaddingInlineStart: 'space'
      top: 'space'
      right: 'space'
      bottom: 'space'
      left: 'space'
      fontSize: 'fontSizes'
      background: 'colors'
      backgroundColor: 'colors'
      backgroundImage: 'colors'
      borderImage: 'colors'
      border: 'colors'
      borderBlock: 'colors'
      borderBlockEnd: 'colors'
      borderBlockStart: 'colors'
      borderBottom: 'colors'
      borderBottomColor: 'colors'
      borderColor: 'colors'
      borderInline: 'colors'
      borderInlineEnd: 'colors'
      borderInlineStart: 'colors'
      borderLeft: 'colors'
      borderLeftColor: 'colors'
      borderRight: 'colors'
      borderRightColor: 'colors'
      borderTop: 'colors'
      borderTopColor: 'colors'
      caretColor: 'colors'
      color: 'colors'
      columnRuleColor: 'colors'
      outline: 'colors'
      outlineColor: 'colors'
      fill: 'colors'
      stroke: 'colors'
      textDecorationColor: 'colors'
      fontFamily: 'fonts'
      fontWeight: 'fontWeights'
      lineHeight: 'lineHeights'
      letterSpacing: 'letterSpacings'
      blockSize: 'sizes'
      minBlockSize: 'sizes'
      maxBlockSize: 'sizes'
      inlineSize: 'sizes'
      minInlineSize: 'sizes'
      maxInlineSize: 'sizes'
      minWidth: 'sizes'
      maxWidth: 'sizes'
      minHeight: 'sizes'
      maxHeight: 'sizes'
      flexBasis: 'sizes'
      gridTemplateColumns: 'sizes'
      gridTemplateRows: 'sizes'
      borderWidth: 'borderWidths'
      borderTopWidth: 'borderWidths'
      borderLeftWidth: 'borderWidths'
      borderRightWidth: 'borderWidths'
      borderBottomWidth: 'borderWidths'
      borderStyle: 'borderStyles'
      borderTopStyle: 'borderStyles'
      borderLeftStyle: 'borderStyles'
      borderRightStyle: 'borderStyles'
      borderBottomStyle: 'borderStyles'
      borderRadius: 'radii'
      borderTopLeftRadius: 'radii'
      borderTopRightRadius: 'radii'
      borderBottomRightRadius: 'radii'
      borderBottomLeftRadius: 'radii'
      boxShadow: 'shadows'
      textShadow: 'shadows'
      transition: 'transitions'
      zIndex: 'zIndices'
    },
    {}
  >
}) => {
  (): string
  name: string
}
declare const config: {
  prefix: ''
  media: {}
  theme: {
    colors: {
      white: string
      black: string
      gray100: string
      gray200: string
      gray400: string
      gray500: string
      gray600: string
      gray700: string
      gray800: string
      gray900: string
      primary300: string
      primary500: string
      primary700: string
      primary900: string
    }
    fontSizes: {
      xxs: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '4xl': string
      '5xl': string
      '6xl': string
      '7xl': string
      '8xl': string
      '9xl': string
      'sf-xs': string
      'sf-sm': string
      'sf-md': string
      'sf-lg': string
      'sf-h1': string
      'sf-h2': string
      'sf-h3': string
      'sf-h4': string
      'sf-h5': string
      'sf-h6': string
    }
    fontWeights: {
      regular: string
      medium: string
      bold: string
    }
    lineHeights: {
      shorter: string
      short: string
      base: string
      tall: string
    }
    radii: {
      px: string
      xs: string
      sm: string
      md: string
      lg: string
      full: string
    }
    space: {
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      8: string
      10: string
      12: string
      16: string
      20: string
      24: string
      32: string
      40: string
      48: string
      56: string
      64: string
    }
  }
  themeMap: {
    height: 'space'
    width: 'space'
    gap: 'space'
    gridGap: 'space'
    columnGap: 'space'
    gridColumnGap: 'space'
    rowGap: 'space'
    gridRowGap: 'space'
    inset: 'space'
    insetBlock: 'space'
    insetBlockEnd: 'space'
    insetBlockStart: 'space'
    insetInline: 'space'
    insetInlineEnd: 'space'
    insetInlineStart: 'space'
    margin: 'space'
    marginTop: 'space'
    marginRight: 'space'
    marginBottom: 'space'
    marginLeft: 'space'
    marginBlock: 'space'
    marginBlockEnd: 'space'
    marginBlockStart: 'space'
    marginInline: 'space'
    marginInlineEnd: 'space'
    marginInlineStart: 'space'
    padding: 'space'
    paddingTop: 'space'
    paddingRight: 'space'
    paddingBottom: 'space'
    paddingLeft: 'space'
    paddingBlock: 'space'
    paddingBlockEnd: 'space'
    paddingBlockStart: 'space'
    paddingInline: 'space'
    paddingInlineEnd: 'space'
    paddingInlineStart: 'space'
    scrollMargin: 'space'
    scrollMarginTop: 'space'
    scrollMarginRight: 'space'
    scrollMarginBottom: 'space'
    scrollMarginLeft: 'space'
    scrollMarginBlock: 'space'
    scrollMarginBlockEnd: 'space'
    scrollMarginBlockStart: 'space'
    scrollMarginInline: 'space'
    scrollMarginInlineEnd: 'space'
    scrollMarginInlineStart: 'space'
    scrollPadding: 'space'
    scrollPaddingTop: 'space'
    scrollPaddingRight: 'space'
    scrollPaddingBottom: 'space'
    scrollPaddingLeft: 'space'
    scrollPaddingBlock: 'space'
    scrollPaddingBlockEnd: 'space'
    scrollPaddingBlockStart: 'space'
    scrollPaddingInline: 'space'
    scrollPaddingInlineEnd: 'space'
    scrollPaddingInlineStart: 'space'
    top: 'space'
    right: 'space'
    bottom: 'space'
    left: 'space'
    fontSize: 'fontSizes'
    background: 'colors'
    backgroundColor: 'colors'
    backgroundImage: 'colors'
    borderImage: 'colors'
    border: 'colors'
    borderBlock: 'colors'
    borderBlockEnd: 'colors'
    borderBlockStart: 'colors'
    borderBottom: 'colors'
    borderBottomColor: 'colors'
    borderColor: 'colors'
    borderInline: 'colors'
    borderInlineEnd: 'colors'
    borderInlineStart: 'colors'
    borderLeft: 'colors'
    borderLeftColor: 'colors'
    borderRight: 'colors'
    borderRightColor: 'colors'
    borderTop: 'colors'
    borderTopColor: 'colors'
    caretColor: 'colors'
    color: 'colors'
    columnRuleColor: 'colors'
    outline: 'colors'
    outlineColor: 'colors'
    fill: 'colors'
    stroke: 'colors'
    textDecorationColor: 'colors'
    fontFamily: 'fonts'
    fontWeight: 'fontWeights'
    lineHeight: 'lineHeights'
    letterSpacing: 'letterSpacings'
    blockSize: 'sizes'
    minBlockSize: 'sizes'
    maxBlockSize: 'sizes'
    inlineSize: 'sizes'
    minInlineSize: 'sizes'
    maxInlineSize: 'sizes'
    minWidth: 'sizes'
    maxWidth: 'sizes'
    minHeight: 'sizes'
    maxHeight: 'sizes'
    flexBasis: 'sizes'
    gridTemplateColumns: 'sizes'
    gridTemplateRows: 'sizes'
    borderWidth: 'borderWidths'
    borderTopWidth: 'borderWidths'
    borderLeftWidth: 'borderWidths'
    borderRightWidth: 'borderWidths'
    borderBottomWidth: 'borderWidths'
    borderStyle: 'borderStyles'
    borderTopStyle: 'borderStyles'
    borderLeftStyle: 'borderStyles'
    borderRightStyle: 'borderStyles'
    borderBottomStyle: 'borderStyles'
    borderRadius: 'radii'
    borderTopLeftRadius: 'radii'
    borderTopRightRadius: 'radii'
    borderBottomRightRadius: 'radii'
    borderBottomLeftRadius: 'radii'
    boxShadow: 'shadows'
    textShadow: 'shadows'
    transition: 'transitions'
    zIndex: 'zIndices'
  }
  utils: {}
}
declare const globalCss: <
  Styles extends {
    [K: string]: any
  },
>(
  ...styles: ({
    '@import'?: unknown
    '@font-face'?: unknown
  } & {
    [K in keyof Styles]: K extends '@import'
      ? string | string[]
      : K extends '@font-face'
        ?
            | _stitches_react_types_css.AtRule.FontFace
            | _stitches_react_types_css.AtRule.FontFace[]
        : K extends `@keyframes ${string}`
          ? {
              [x: string]: _stitches_react_types_css_util.CSS<
                {},
                {
                  colors: {
                    white: string
                    black: string
                    gray100: string
                    gray200: string
                    gray400: string
                    gray500: string
                    gray600: string
                    gray700: string
                    gray800: string
                    gray900: string
                    primary300: string
                    primary500: string
                    primary700: string
                    primary900: string
                  }
                  fontSizes: {
                    xxs: string
                    xs: string
                    sm: string
                    md: string
                    lg: string
                    xl: string
                    '2xl': string
                    '4xl': string
                    '5xl': string
                    '6xl': string
                    '7xl': string
                    '8xl': string
                    '9xl': string
                    'sf-xs': string
                    'sf-sm': string
                    'sf-md': string
                    'sf-lg': string
                    'sf-h1': string
                    'sf-h2': string
                    'sf-h3': string
                    'sf-h4': string
                    'sf-h5': string
                    'sf-h6': string
                  }
                  fontWeights: {
                    regular: string
                    medium: string
                    bold: string
                  }
                  lineHeights: {
                    shorter: string
                    short: string
                    base: string
                    tall: string
                  }
                  radii: {
                    px: string
                    xs: string
                    sm: string
                    md: string
                    lg: string
                    full: string
                  }
                  space: {
                    1: string
                    2: string
                    3: string
                    4: string
                    5: string
                    6: string
                    8: string
                    10: string
                    12: string
                    16: string
                    20: string
                    24: string
                    32: string
                    40: string
                    48: string
                    56: string
                    64: string
                  }
                },
                {
                  height: 'space'
                  width: 'space'
                  gap: 'space'
                  gridGap: 'space'
                  columnGap: 'space'
                  gridColumnGap: 'space'
                  rowGap: 'space'
                  gridRowGap: 'space'
                  inset: 'space'
                  insetBlock: 'space'
                  insetBlockEnd: 'space'
                  insetBlockStart: 'space'
                  insetInline: 'space'
                  insetInlineEnd: 'space'
                  insetInlineStart: 'space'
                  margin: 'space'
                  marginTop: 'space'
                  marginRight: 'space'
                  marginBottom: 'space'
                  marginLeft: 'space'
                  marginBlock: 'space'
                  marginBlockEnd: 'space'
                  marginBlockStart: 'space'
                  marginInline: 'space'
                  marginInlineEnd: 'space'
                  marginInlineStart: 'space'
                  padding: 'space'
                  paddingTop: 'space'
                  paddingRight: 'space'
                  paddingBottom: 'space'
                  paddingLeft: 'space'
                  paddingBlock: 'space'
                  paddingBlockEnd: 'space'
                  paddingBlockStart: 'space'
                  paddingInline: 'space'
                  paddingInlineEnd: 'space'
                  paddingInlineStart: 'space'
                  scrollMargin: 'space'
                  scrollMarginTop: 'space'
                  scrollMarginRight: 'space'
                  scrollMarginBottom: 'space'
                  scrollMarginLeft: 'space'
                  scrollMarginBlock: 'space'
                  scrollMarginBlockEnd: 'space'
                  scrollMarginBlockStart: 'space'
                  scrollMarginInline: 'space'
                  scrollMarginInlineEnd: 'space'
                  scrollMarginInlineStart: 'space'
                  scrollPadding: 'space'
                  scrollPaddingTop: 'space'
                  scrollPaddingRight: 'space'
                  scrollPaddingBottom: 'space'
                  scrollPaddingLeft: 'space'
                  scrollPaddingBlock: 'space'
                  scrollPaddingBlockEnd: 'space'
                  scrollPaddingBlockStart: 'space'
                  scrollPaddingInline: 'space'
                  scrollPaddingInlineEnd: 'space'
                  scrollPaddingInlineStart: 'space'
                  top: 'space'
                  right: 'space'
                  bottom: 'space'
                  left: 'space'
                  fontSize: 'fontSizes'
                  background: 'colors'
                  backgroundColor: 'colors'
                  backgroundImage: 'colors'
                  borderImage: 'colors'
                  border: 'colors'
                  borderBlock: 'colors'
                  borderBlockEnd: 'colors'
                  borderBlockStart: 'colors'
                  borderBottom: 'colors'
                  borderBottomColor: 'colors'
                  borderColor: 'colors'
                  borderInline: 'colors'
                  borderInlineEnd: 'colors'
                  borderInlineStart: 'colors'
                  borderLeft: 'colors'
                  borderLeftColor: 'colors'
                  borderRight: 'colors'
                  borderRightColor: 'colors'
                  borderTop: 'colors'
                  borderTopColor: 'colors'
                  caretColor: 'colors'
                  color: 'colors'
                  columnRuleColor: 'colors'
                  outline: 'colors'
                  outlineColor: 'colors'
                  fill: 'colors'
                  stroke: 'colors'
                  textDecorationColor: 'colors'
                  fontFamily: 'fonts'
                  fontWeight: 'fontWeights'
                  lineHeight: 'lineHeights'
                  letterSpacing: 'letterSpacings'
                  blockSize: 'sizes'
                  minBlockSize: 'sizes'
                  maxBlockSize: 'sizes'
                  inlineSize: 'sizes'
                  minInlineSize: 'sizes'
                  maxInlineSize: 'sizes'
                  minWidth: 'sizes'
                  maxWidth: 'sizes'
                  minHeight: 'sizes'
                  maxHeight: 'sizes'
                  flexBasis: 'sizes'
                  gridTemplateColumns: 'sizes'
                  gridTemplateRows: 'sizes'
                  borderWidth: 'borderWidths'
                  borderTopWidth: 'borderWidths'
                  borderLeftWidth: 'borderWidths'
                  borderRightWidth: 'borderWidths'
                  borderBottomWidth: 'borderWidths'
                  borderStyle: 'borderStyles'
                  borderTopStyle: 'borderStyles'
                  borderLeftStyle: 'borderStyles'
                  borderRightStyle: 'borderStyles'
                  borderBottomStyle: 'borderStyles'
                  borderRadius: 'radii'
                  borderTopLeftRadius: 'radii'
                  borderTopRightRadius: 'radii'
                  borderBottomRightRadius: 'radii'
                  borderBottomLeftRadius: 'radii'
                  boxShadow: 'shadows'
                  textShadow: 'shadows'
                  transition: 'transitions'
                  zIndex: 'zIndices'
                },
                {}
              >
            }
          : K extends `@property ${string}`
            ? _stitches_react_types_css.AtRule.Property
            : _stitches_react_types_css_util.CSS<
                {},
                {
                  colors: {
                    white: string
                    black: string
                    gray100: string
                    gray200: string
                    gray400: string
                    gray500: string
                    gray600: string
                    gray700: string
                    gray800: string
                    gray900: string
                    primary300: string
                    primary500: string
                    primary700: string
                    primary900: string
                  }
                  fontSizes: {
                    xxs: string
                    xs: string
                    sm: string
                    md: string
                    lg: string
                    xl: string
                    '2xl': string
                    '4xl': string
                    '5xl': string
                    '6xl': string
                    '7xl': string
                    '8xl': string
                    '9xl': string
                    'sf-xs': string
                    'sf-sm': string
                    'sf-md': string
                    'sf-lg': string
                    'sf-h1': string
                    'sf-h2': string
                    'sf-h3': string
                    'sf-h4': string
                    'sf-h5': string
                    'sf-h6': string
                  }
                  fontWeights: {
                    regular: string
                    medium: string
                    bold: string
                  }
                  lineHeights: {
                    shorter: string
                    short: string
                    base: string
                    tall: string
                  }
                  radii: {
                    px: string
                    xs: string
                    sm: string
                    md: string
                    lg: string
                    full: string
                  }
                  space: {
                    1: string
                    2: string
                    3: string
                    4: string
                    5: string
                    6: string
                    8: string
                    10: string
                    12: string
                    16: string
                    20: string
                    24: string
                    32: string
                    40: string
                    48: string
                    56: string
                    64: string
                  }
                },
                {
                  height: 'space'
                  width: 'space'
                  gap: 'space'
                  gridGap: 'space'
                  columnGap: 'space'
                  gridColumnGap: 'space'
                  rowGap: 'space'
                  gridRowGap: 'space'
                  inset: 'space'
                  insetBlock: 'space'
                  insetBlockEnd: 'space'
                  insetBlockStart: 'space'
                  insetInline: 'space'
                  insetInlineEnd: 'space'
                  insetInlineStart: 'space'
                  margin: 'space'
                  marginTop: 'space'
                  marginRight: 'space'
                  marginBottom: 'space'
                  marginLeft: 'space'
                  marginBlock: 'space'
                  marginBlockEnd: 'space'
                  marginBlockStart: 'space'
                  marginInline: 'space'
                  marginInlineEnd: 'space'
                  marginInlineStart: 'space'
                  padding: 'space'
                  paddingTop: 'space'
                  paddingRight: 'space'
                  paddingBottom: 'space'
                  paddingLeft: 'space'
                  paddingBlock: 'space'
                  paddingBlockEnd: 'space'
                  paddingBlockStart: 'space'
                  paddingInline: 'space'
                  paddingInlineEnd: 'space'
                  paddingInlineStart: 'space'
                  scrollMargin: 'space'
                  scrollMarginTop: 'space'
                  scrollMarginRight: 'space'
                  scrollMarginBottom: 'space'
                  scrollMarginLeft: 'space'
                  scrollMarginBlock: 'space'
                  scrollMarginBlockEnd: 'space'
                  scrollMarginBlockStart: 'space'
                  scrollMarginInline: 'space'
                  scrollMarginInlineEnd: 'space'
                  scrollMarginInlineStart: 'space'
                  scrollPadding: 'space'
                  scrollPaddingTop: 'space'
                  scrollPaddingRight: 'space'
                  scrollPaddingBottom: 'space'
                  scrollPaddingLeft: 'space'
                  scrollPaddingBlock: 'space'
                  scrollPaddingBlockEnd: 'space'
                  scrollPaddingBlockStart: 'space'
                  scrollPaddingInline: 'space'
                  scrollPaddingInlineEnd: 'space'
                  scrollPaddingInlineStart: 'space'
                  top: 'space'
                  right: 'space'
                  bottom: 'space'
                  left: 'space'
                  fontSize: 'fontSizes'
                  background: 'colors'
                  backgroundColor: 'colors'
                  backgroundImage: 'colors'
                  borderImage: 'colors'
                  border: 'colors'
                  borderBlock: 'colors'
                  borderBlockEnd: 'colors'
                  borderBlockStart: 'colors'
                  borderBottom: 'colors'
                  borderBottomColor: 'colors'
                  borderColor: 'colors'
                  borderInline: 'colors'
                  borderInlineEnd: 'colors'
                  borderInlineStart: 'colors'
                  borderLeft: 'colors'
                  borderLeftColor: 'colors'
                  borderRight: 'colors'
                  borderRightColor: 'colors'
                  borderTop: 'colors'
                  borderTopColor: 'colors'
                  caretColor: 'colors'
                  color: 'colors'
                  columnRuleColor: 'colors'
                  outline: 'colors'
                  outlineColor: 'colors'
                  fill: 'colors'
                  stroke: 'colors'
                  textDecorationColor: 'colors'
                  fontFamily: 'fonts'
                  fontWeight: 'fontWeights'
                  lineHeight: 'lineHeights'
                  letterSpacing: 'letterSpacings'
                  blockSize: 'sizes'
                  minBlockSize: 'sizes'
                  maxBlockSize: 'sizes'
                  inlineSize: 'sizes'
                  minInlineSize: 'sizes'
                  maxInlineSize: 'sizes'
                  minWidth: 'sizes'
                  maxWidth: 'sizes'
                  minHeight: 'sizes'
                  maxHeight: 'sizes'
                  flexBasis: 'sizes'
                  gridTemplateColumns: 'sizes'
                  gridTemplateRows: 'sizes'
                  borderWidth: 'borderWidths'
                  borderTopWidth: 'borderWidths'
                  borderLeftWidth: 'borderWidths'
                  borderRightWidth: 'borderWidths'
                  borderBottomWidth: 'borderWidths'
                  borderStyle: 'borderStyles'
                  borderTopStyle: 'borderStyles'
                  borderLeftStyle: 'borderStyles'
                  borderRightStyle: 'borderStyles'
                  borderBottomStyle: 'borderStyles'
                  borderRadius: 'radii'
                  borderTopLeftRadius: 'radii'
                  borderTopRightRadius: 'radii'
                  borderBottomRightRadius: 'radii'
                  borderBottomLeftRadius: 'radii'
                  boxShadow: 'shadows'
                  textShadow: 'shadows'
                  transition: 'transitions'
                  zIndex: 'zIndices'
                },
                {}
              >
  })[]
) => () => string
declare const theme: string & {
  className: string
  selector: string
} & {
  colors: {
    white: _stitches_react_types_theme.Token<'white', string, 'colors', ''>
    black: _stitches_react_types_theme.Token<'black', string, 'colors', ''>
    gray100: _stitches_react_types_theme.Token<'gray100', string, 'colors', ''>
    gray200: _stitches_react_types_theme.Token<'gray200', string, 'colors', ''>
    gray400: _stitches_react_types_theme.Token<'gray400', string, 'colors', ''>
    gray500: _stitches_react_types_theme.Token<'gray500', string, 'colors', ''>
    gray600: _stitches_react_types_theme.Token<'gray600', string, 'colors', ''>
    gray700: _stitches_react_types_theme.Token<'gray700', string, 'colors', ''>
    gray800: _stitches_react_types_theme.Token<'gray800', string, 'colors', ''>
    gray900: _stitches_react_types_theme.Token<'gray900', string, 'colors', ''>
    primary300: _stitches_react_types_theme.Token<
      'primary300',
      string,
      'colors',
      ''
    >
    primary500: _stitches_react_types_theme.Token<
      'primary500',
      string,
      'colors',
      ''
    >
    primary700: _stitches_react_types_theme.Token<
      'primary700',
      string,
      'colors',
      ''
    >
    primary900: _stitches_react_types_theme.Token<
      'primary900',
      string,
      'colors',
      ''
    >
  }
  fontSizes: {
    xxs: _stitches_react_types_theme.Token<'xxs', string, 'fontSizes', ''>
    xs: _stitches_react_types_theme.Token<'xs', string, 'fontSizes', ''>
    sm: _stitches_react_types_theme.Token<'sm', string, 'fontSizes', ''>
    md: _stitches_react_types_theme.Token<'md', string, 'fontSizes', ''>
    lg: _stitches_react_types_theme.Token<'lg', string, 'fontSizes', ''>
    xl: _stitches_react_types_theme.Token<'xl', string, 'fontSizes', ''>
    '2xl': _stitches_react_types_theme.Token<'2xl', string, 'fontSizes', ''>
    '4xl': _stitches_react_types_theme.Token<'4xl', string, 'fontSizes', ''>
    '5xl': _stitches_react_types_theme.Token<'5xl', string, 'fontSizes', ''>
    '6xl': _stitches_react_types_theme.Token<'6xl', string, 'fontSizes', ''>
    '7xl': _stitches_react_types_theme.Token<'7xl', string, 'fontSizes', ''>
    '8xl': _stitches_react_types_theme.Token<'8xl', string, 'fontSizes', ''>
    '9xl': _stitches_react_types_theme.Token<'9xl', string, 'fontSizes', ''>
    'sf-xs': _stitches_react_types_theme.Token<'sf-xs', string, 'fontSizes', ''>
    'sf-sm': _stitches_react_types_theme.Token<'sf-sm', string, 'fontSizes', ''>
    'sf-md': _stitches_react_types_theme.Token<'sf-md', string, 'fontSizes', ''>
    'sf-lg': _stitches_react_types_theme.Token<'sf-lg', string, 'fontSizes', ''>
    'sf-h1': _stitches_react_types_theme.Token<'sf-h1', string, 'fontSizes', ''>
    'sf-h2': _stitches_react_types_theme.Token<'sf-h2', string, 'fontSizes', ''>
    'sf-h3': _stitches_react_types_theme.Token<'sf-h3', string, 'fontSizes', ''>
    'sf-h4': _stitches_react_types_theme.Token<'sf-h4', string, 'fontSizes', ''>
    'sf-h5': _stitches_react_types_theme.Token<'sf-h5', string, 'fontSizes', ''>
    'sf-h6': _stitches_react_types_theme.Token<'sf-h6', string, 'fontSizes', ''>
  }
  fontWeights: {
    regular: _stitches_react_types_theme.Token<
      'regular',
      string,
      'fontWeights',
      ''
    >
    medium: _stitches_react_types_theme.Token<
      'medium',
      string,
      'fontWeights',
      ''
    >
    bold: _stitches_react_types_theme.Token<'bold', string, 'fontWeights', ''>
  }
  lineHeights: {
    shorter: _stitches_react_types_theme.Token<
      'shorter',
      string,
      'lineHeights',
      ''
    >
    short: _stitches_react_types_theme.Token<'short', string, 'lineHeights', ''>
    base: _stitches_react_types_theme.Token<'base', string, 'lineHeights', ''>
    tall: _stitches_react_types_theme.Token<'tall', string, 'lineHeights', ''>
  }
  radii: {
    px: _stitches_react_types_theme.Token<'px', string, 'radii', ''>
    xs: _stitches_react_types_theme.Token<'xs', string, 'radii', ''>
    sm: _stitches_react_types_theme.Token<'sm', string, 'radii', ''>
    md: _stitches_react_types_theme.Token<'md', string, 'radii', ''>
    lg: _stitches_react_types_theme.Token<'lg', string, 'radii', ''>
    full: _stitches_react_types_theme.Token<'full', string, 'radii', ''>
  }
  space: {
    1: _stitches_react_types_theme.Token<'1', string, 'space', ''>
    2: _stitches_react_types_theme.Token<'2', string, 'space', ''>
    3: _stitches_react_types_theme.Token<'3', string, 'space', ''>
    4: _stitches_react_types_theme.Token<'4', string, 'space', ''>
    5: _stitches_react_types_theme.Token<'5', string, 'space', ''>
    6: _stitches_react_types_theme.Token<'6', string, 'space', ''>
    8: _stitches_react_types_theme.Token<'8', string, 'space', ''>
    10: _stitches_react_types_theme.Token<'10', string, 'space', ''>
    12: _stitches_react_types_theme.Token<'12', string, 'space', ''>
    16: _stitches_react_types_theme.Token<'16', string, 'space', ''>
    20: _stitches_react_types_theme.Token<'20', string, 'space', ''>
    24: _stitches_react_types_theme.Token<'24', string, 'space', ''>
    32: _stitches_react_types_theme.Token<'32', string, 'space', ''>
    40: _stitches_react_types_theme.Token<'40', string, 'space', ''>
    48: _stitches_react_types_theme.Token<'48', string, 'space', ''>
    56: _stitches_react_types_theme.Token<'56', string, 'space', ''>
    64: _stitches_react_types_theme.Token<'64', string, 'space', ''>
  }
}
declare const createTheme: <
  Argument0 extends
    | string
    | ({
        colors?:
          | {
              white?: string | number | boolean | undefined
              black?: string | number | boolean | undefined
              gray100?: string | number | boolean | undefined
              gray200?: string | number | boolean | undefined
              gray400?: string | number | boolean | undefined
              gray500?: string | number | boolean | undefined
              gray600?: string | number | boolean | undefined
              gray700?: string | number | boolean | undefined
              gray800?: string | number | boolean | undefined
              gray900?: string | number | boolean | undefined
              primary300?: string | number | boolean | undefined
              primary500?: string | number | boolean | undefined
              primary700?: string | number | boolean | undefined
              primary900?: string | number | boolean | undefined
            }
          | undefined
        fontSizes?:
          | {
              xxs?: string | number | boolean | undefined
              xs?: string | number | boolean | undefined
              sm?: string | number | boolean | undefined
              md?: string | number | boolean | undefined
              lg?: string | number | boolean | undefined
              xl?: string | number | boolean | undefined
              '2xl'?: string | number | boolean | undefined
              '4xl'?: string | number | boolean | undefined
              '5xl'?: string | number | boolean | undefined
              '6xl'?: string | number | boolean | undefined
              '7xl'?: string | number | boolean | undefined
              '8xl'?: string | number | boolean | undefined
              '9xl'?: string | number | boolean | undefined
              'sf-xs'?: string | number | boolean | undefined
              'sf-sm'?: string | number | boolean | undefined
              'sf-md'?: string | number | boolean | undefined
              'sf-lg'?: string | number | boolean | undefined
              'sf-h1'?: string | number | boolean | undefined
              'sf-h2'?: string | number | boolean | undefined
              'sf-h3'?: string | number | boolean | undefined
              'sf-h4'?: string | number | boolean | undefined
              'sf-h5'?: string | number | boolean | undefined
              'sf-h6'?: string | number | boolean | undefined
            }
          | undefined
        fontWeights?:
          | {
              regular?: string | number | boolean | undefined
              medium?: string | number | boolean | undefined
              bold?: string | number | boolean | undefined
            }
          | undefined
        lineHeights?:
          | {
              shorter?: string | number | boolean | undefined
              short?: string | number | boolean | undefined
              base?: string | number | boolean | undefined
              tall?: string | number | boolean | undefined
            }
          | undefined
        radii?:
          | {
              px?: string | number | boolean | undefined
              xs?: string | number | boolean | undefined
              sm?: string | number | boolean | undefined
              md?: string | number | boolean | undefined
              lg?: string | number | boolean | undefined
              full?: string | number | boolean | undefined
            }
          | undefined
        space?:
          | {
              1?: string | number | boolean | undefined
              2?: string | number | boolean | undefined
              3?: string | number | boolean | undefined
              4?: string | number | boolean | undefined
              5?: string | number | boolean | undefined
              6?: string | number | boolean | undefined
              8?: string | number | boolean | undefined
              10?: string | number | boolean | undefined
              12?: string | number | boolean | undefined
              16?: string | number | boolean | undefined
              20?: string | number | boolean | undefined
              24?: string | number | boolean | undefined
              32?: string | number | boolean | undefined
              40?: string | number | boolean | undefined
              48?: string | number | boolean | undefined
              56?: string | number | boolean | undefined
              64?: string | number | boolean | undefined
            }
          | undefined
      } & {
        [x: string]: {
          [x: string]: string | number | boolean
          [x: number]: string | number | boolean
        }
      }),
  Argument1 extends
    | string
    | ({
        colors?:
          | {
              white?: string | number | boolean | undefined
              black?: string | number | boolean | undefined
              gray100?: string | number | boolean | undefined
              gray200?: string | number | boolean | undefined
              gray400?: string | number | boolean | undefined
              gray500?: string | number | boolean | undefined
              gray600?: string | number | boolean | undefined
              gray700?: string | number | boolean | undefined
              gray800?: string | number | boolean | undefined
              gray900?: string | number | boolean | undefined
              primary300?: string | number | boolean | undefined
              primary500?: string | number | boolean | undefined
              primary700?: string | number | boolean | undefined
              primary900?: string | number | boolean | undefined
            }
          | undefined
        fontSizes?:
          | {
              xxs?: string | number | boolean | undefined
              xs?: string | number | boolean | undefined
              sm?: string | number | boolean | undefined
              md?: string | number | boolean | undefined
              lg?: string | number | boolean | undefined
              xl?: string | number | boolean | undefined
              '2xl'?: string | number | boolean | undefined
              '4xl'?: string | number | boolean | undefined
              '5xl'?: string | number | boolean | undefined
              '6xl'?: string | number | boolean | undefined
              '7xl'?: string | number | boolean | undefined
              '8xl'?: string | number | boolean | undefined
              '9xl'?: string | number | boolean | undefined
              'sf-xs'?: string | number | boolean | undefined
              'sf-sm'?: string | number | boolean | undefined
              'sf-md'?: string | number | boolean | undefined
              'sf-lg'?: string | number | boolean | undefined
              'sf-h1'?: string | number | boolean | undefined
              'sf-h2'?: string | number | boolean | undefined
              'sf-h3'?: string | number | boolean | undefined
              'sf-h4'?: string | number | boolean | undefined
              'sf-h5'?: string | number | boolean | undefined
              'sf-h6'?: string | number | boolean | undefined
            }
          | undefined
        fontWeights?:
          | {
              regular?: string | number | boolean | undefined
              medium?: string | number | boolean | undefined
              bold?: string | number | boolean | undefined
            }
          | undefined
        lineHeights?:
          | {
              shorter?: string | number | boolean | undefined
              short?: string | number | boolean | undefined
              base?: string | number | boolean | undefined
              tall?: string | number | boolean | undefined
            }
          | undefined
        radii?:
          | {
              px?: string | number | boolean | undefined
              xs?: string | number | boolean | undefined
              sm?: string | number | boolean | undefined
              md?: string | number | boolean | undefined
              lg?: string | number | boolean | undefined
              full?: string | number | boolean | undefined
            }
          | undefined
        space?:
          | {
              1?: string | number | boolean | undefined
              2?: string | number | boolean | undefined
              3?: string | number | boolean | undefined
              4?: string | number | boolean | undefined
              5?: string | number | boolean | undefined
              6?: string | number | boolean | undefined
              8?: string | number | boolean | undefined
              10?: string | number | boolean | undefined
              12?: string | number | boolean | undefined
              16?: string | number | boolean | undefined
              20?: string | number | boolean | undefined
              24?: string | number | boolean | undefined
              32?: string | number | boolean | undefined
              40?: string | number | boolean | undefined
              48?: string | number | boolean | undefined
              56?: string | number | boolean | undefined
              64?: string | number | boolean | undefined
            }
          | undefined
      } & {
        [x: string]: {
          [x: string]: string | number | boolean
          [x: number]: string | number | boolean
        }
      }),
>(
  nameOrScalesArg0: Argument0,
  nameOrScalesArg1?: Argument1 | undefined,
) => string & {
  className: string
  selector: string
} & (Argument0 extends string
    ? _stitches_react_types_stitches.ThemeTokens<Argument1, ''>
    : _stitches_react_types_stitches.ThemeTokens<Argument0, ''>)

export {
  Avatar,
  type AvatarProps,
  Box,
  type BoxProps,
  BoxTest,
  type BoxTestProps,
  type ButtonPrefixProps,
  type ButtonRootProps,
  type ButtonSuffixProps,
  Checkbox,
  Heading,
  type HeadingProps,
  MultiStep,
  type MultiStepProps,
  Prefix,
  Root,
  Suffix,
  Text,
  TextArea,
  type TextAreaProps,
  TextInput,
  type TextInputProps,
  type TextProps,
  config,
  createTheme,
  css,
  globalCss,
  keyframes,
  styled,
  theme,
}

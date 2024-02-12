import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ComponentProps } from 'react';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';
import * as lucide_react from 'lucide-react';
import { Check } from 'lucide-react';
import * as Checkbox$1 from '@radix-ui/react-checkbox';
import * as RadioGroup$1 from '@radix-ui/react-radio-group';
import * as Tabs$1 from '@radix-ui/react-tabs';

interface BoxProps extends ComponentProps<'div'> {
}
declare const Box: ({ ...rest }: BoxProps) => react_jsx_runtime.JSX.Element;

declare const text: tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
}, undefined, string[], tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
}>, {
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
}, undefined, string[], tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
}>, unknown, unknown, undefined>>;
type TextProps = ComponentProps<'p'> & VariantProps<typeof text>;
declare const Text: ({ className, size, ...props }: TextProps) => react_jsx_runtime.JSX.Element;

declare const heading: tailwind_variants.TVReturnType<{
    size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
}, undefined, string[], tailwind_variants_dist_config.TVConfig<{
    size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
}, {
    size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
}>, {
    size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
}, undefined, string[], tailwind_variants_dist_config.TVConfig<{
    size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
}, {
    size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
}>, unknown, unknown, undefined>>;
type HeadingProps = ComponentProps<'h1'> & VariantProps<typeof heading>;
declare const Heading: ({ className, size, ...props }: HeadingProps) => react_jsx_runtime.JSX.Element;

declare const button: tailwind_variants.TVReturnType<{
    variant: {
        primary: string[];
        secondary: string[];
        success: string[];
        warning: string[];
        error: string[];
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, string[], {
    twMerge: false;
}, {
    variant: {
        primary: string[];
        secondary: string[];
        success: string[];
        warning: string[];
        error: string[];
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        primary: string[];
        secondary: string[];
        success: string[];
        warning: string[];
        error: string[];
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, string[], {
    twMerge: false;
}, unknown, unknown, undefined>>;
type ButtonRootProps = ComponentProps<'button'> & VariantProps<typeof button>;

type ButtonPrefixProps = ComponentProps<'div'>;

type ButtonSuffixProps = ComponentProps<'div'>;

declare const Button: {
    Root: ({ variant, className, size, ...props }: ButtonRootProps) => react_jsx_runtime.JSX.Element;
    Prefix: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;
    Suffix: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;
};

declare const input: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, string[], {
    twMerge: true;
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, string[], {
    twMerge: true;
}, unknown, unknown, undefined>>;
type TextInputRootProps = ComponentProps<'div'> & VariantProps<typeof input> & {
    disabled?: boolean;
};

type TextInputControlProps = ComponentProps<'input'>;

type TextInputPrefixProps = ComponentProps<'div'>;

type TextInputSuffixProps = ComponentProps<'div'>;

declare const TextInput: {
    Root: ({ size, disabled, className, ...props }: TextInputRootProps) => react_jsx_runtime.JSX.Element;
    Control: ({ ...props }: react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => react_jsx_runtime.JSX.Element;
    Prefix: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;
    Suffix: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;
};

type CheckProps = ComponentProps<typeof Check>;

declare const checkbox: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, string[], {
    twMerge: false;
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, string[], {
    twMerge: false;
}, unknown, unknown, undefined>>;
type CheckboxRootProps = ComponentProps<typeof Checkbox$1.Root> & VariantProps<typeof checkbox>;

type CheckboxIndicatorProps = ComponentProps<typeof Checkbox$1.CheckboxIndicator>;

declare const Checkbox: {
    Root: ({ className, size, ...props }: CheckboxRootProps) => react_jsx_runtime.JSX.Element;
    Indicator: (props: Checkbox$1.CheckboxIndicatorProps & react.RefAttributes<HTMLSpanElement>) => react_jsx_runtime.JSX.Element;
    Check: (props: lucide_react.LucideProps) => react_jsx_runtime.JSX.Element;
};

declare const radio$1: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "flex flex-col gap-2.5", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "flex flex-col gap-2.5", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type RadioGroupRootProps = ComponentProps<typeof RadioGroup$1.Root> & VariantProps<typeof radio$1>;

declare const radio: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, string[], {
    twMerge: false;
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, string[], {
    twMerge: false;
}, unknown, unknown, undefined>>;
type RadioGroupItemProps = ComponentProps<typeof RadioGroup$1.Item> & VariantProps<typeof radio>;

declare const RadioGroup: {
    Root: ({ className, ...props }: RadioGroupRootProps) => react_jsx_runtime.JSX.Element;
    Item: ({ className, size, ...props }: RadioGroupItemProps) => react_jsx_runtime.JSX.Element;
};

type TabsRootProps = Tabs$1.TabsProps;

type TabsListProps = Tabs$1.TabsListProps;

declare const tab: tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        underline: string;
    };
    size: {
        base: string;
        lg: string;
    };
}, undefined, string[], {
    twMerge: false;
}, {
    variant: {
        solid: string;
        underline: string;
    };
    size: {
        base: string;
        lg: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        underline: string;
    };
    size: {
        base: string;
        lg: string;
    };
}, undefined, string[], {
    twMerge: false;
}, unknown, unknown, undefined>>;
type TabsTriggerProps = Tabs$1.TabsTriggerProps & VariantProps<typeof tab>;

type TabsContentProps = Tabs$1.TabsContentProps;

declare const Tabs: {
    Root: (props: Tabs$1.TabsProps) => react_jsx_runtime.JSX.Element;
    List: (props: Tabs$1.TabsListProps) => react_jsx_runtime.JSX.Element;
    Trigger: ({ size, variant, className, ...props }: TabsTriggerProps) => react_jsx_runtime.JSX.Element;
    Content: (props: Tabs$1.TabsContentProps) => react_jsx_runtime.JSX.Element;
};

export { Box, type BoxProps, Button, type ButtonPrefixProps, type ButtonRootProps, type ButtonSuffixProps, type CheckProps, Checkbox, type CheckboxIndicatorProps, type CheckboxRootProps, Heading, type HeadingProps, RadioGroup, type RadioGroupItemProps, type RadioGroupRootProps, Tabs, type TabsContentProps, type TabsListProps, type TabsRootProps, type TabsTriggerProps, Text, TextInput, type TextInputControlProps, type TextInputPrefixProps, type TextInputRootProps, type TextInputSuffixProps, type TextProps };

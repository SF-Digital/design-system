import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ComponentProps, PropsWithChildren } from 'react';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';
import * as lucide_react from 'lucide-react';
import { Check } from 'lucide-react';
import * as Checkbox$1 from '@radix-ui/react-checkbox';
import * as RadioGroup$1 from '@radix-ui/react-radio-group';
import * as Tabs$1 from '@radix-ui/react-tabs';
import * as Switch from '@radix-ui/react-switch';
import * as Avatar$1 from '@radix-ui/react-avatar';
import * as Tooltip$1 from '@radix-ui/react-tooltip';
import * as Select$1 from '@radix-ui/react-select';

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
}, undefined, string[], {
    twMerge: false;
}, {
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
}, undefined, string[], {
    twMerge: false;
}, unknown, unknown, undefined>>;
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

declare const toggle$1: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
    };
}, undefined, string[], {
    twMerge: false;
}, {
    size: {
        sm: string;
        md: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
    };
}, undefined, string[], {
    twMerge: false;
}, unknown, unknown, undefined>>;
type ToggleRootProps = Switch.SwitchProps & VariantProps<typeof toggle$1>;

declare const toggle: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
    };
}, undefined, string[], tailwind_variants_dist_config.TVConfig<{
    size: {
        sm: string;
        md: string;
    };
}, {
    size: {
        sm: string;
        md: string;
    };
}>, {
    size: {
        sm: string;
        md: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
    };
}, undefined, string[], tailwind_variants_dist_config.TVConfig<{
    size: {
        sm: string;
        md: string;
    };
}, {
    size: {
        sm: string;
        md: string;
    };
}>, unknown, unknown, undefined>>;
type ToggleControlProps = Switch.SwitchThumbProps & VariantProps<typeof toggle>;

declare const Toggle: {
    Root: ({ className, size, ...props }: ToggleRootProps) => react_jsx_runtime.JSX.Element;
    Control: ({ className, size, ...props }: ToggleControlProps) => react_jsx_runtime.JSX.Element;
};

declare const avatar: tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, undefined, string[], {
    twMerge: false;
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, undefined, string[], {
    twMerge: false;
}, unknown, unknown, undefined>>;
type AvatarRootProps = Avatar$1.AvatarProps & VariantProps<typeof avatar>;

type AvatarImageProps = Avatar$1.AvatarImageProps;

type AvatarFallbackProps = Avatar$1.AvatarFallbackProps;

declare const Avatar: {
    Root: ({ className, size, ...props }: AvatarRootProps) => react_jsx_runtime.JSX.Element;
    Image: (props: Avatar$1.AvatarImageProps) => react_jsx_runtime.JSX.Element;
    Fallback: (props: Avatar$1.AvatarFallbackProps) => react_jsx_runtime.JSX.Element;
};

type TooltipProviderProps = Tooltip$1.TooltipProviderProps;

type TooltipRootProps = Tooltip$1.TooltipProps;

type TooltipTriggerProps = Tooltip$1.TooltipTriggerProps;

type TooltipPortalProps = Tooltip$1.TooltipPortalProps;

declare const content: tailwind_variants.TVReturnType<{
    theme: {
        light: string[];
        dark: string[];
    };
}, undefined, string[], {
    twMerge: false;
}, {
    theme: {
        light: string[];
        dark: string[];
    };
}, undefined, tailwind_variants.TVReturnType<{
    theme: {
        light: string[];
        dark: string[];
    };
}, undefined, string[], {
    twMerge: false;
}, unknown, unknown, undefined>>;
type TooltipContentProps = Tooltip$1.TooltipContentProps & VariantProps<typeof content>;

type TooltipArrowProps = Tooltip$1.TooltipArrowProps;

declare const Tooltip: {
    Provider: (props: Tooltip$1.TooltipProviderProps) => react_jsx_runtime.JSX.Element;
    Root: (props: Tooltip$1.TooltipProps) => react_jsx_runtime.JSX.Element;
    Trigger: (props: Tooltip$1.TooltipTriggerProps) => react_jsx_runtime.JSX.Element;
    Portal: (props: Tooltip$1.TooltipPortalProps) => react_jsx_runtime.JSX.Element;
    Content: ({ theme, className, ...props }: TooltipContentProps) => react_jsx_runtime.JSX.Element;
    Arrow: ({ ...props }: Tooltip$1.TooltipArrowProps) => react_jsx_runtime.JSX.Element;
};

interface SelectRootProps extends PropsWithChildren {
    value?: string;
    defaultValue?: string;
    onValueChange?(value: string): void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    dir?: Select$1.Direction;
    name?: string;
    autoComplete?: string;
    disabled?: boolean;
    required?: boolean;
}

type SelectTriggerProps = ComponentProps<typeof Select$1.Trigger>;

type SelectPortalProps = Select$1.SelectPortalProps;

type SelectIconProps = Select$1.SelectIconProps;

type SelectValueProps = Select$1.SelectValueProps;

type SelectContentProps = Select$1.SelectContentProps;

type SelectItemProps = Select$1.SelectItemProps;

type SelectViewportProps = Select$1.SelectViewportProps;

type SelectItemTextProps = Select$1.SelectItemTextProps;

type SelectItemIndicatorProps = Select$1.SelectItemIndicatorProps;

type SelectSeparatorProps = Select$1.SelectSeparatorProps;

type SelectGroupProps = Select$1.SelectGroupProps;

declare const Select: {
    Root: (props: SelectRootProps) => react_jsx_runtime.JSX.Element;
    Trigger: (props: Select$1.SelectTriggerProps & react.RefAttributes<HTMLButtonElement>) => react_jsx_runtime.JSX.Element;
    Value: (props: Select$1.SelectValueProps) => react_jsx_runtime.JSX.Element;
    Icon: (props: Select$1.SelectIconProps) => react_jsx_runtime.JSX.Element;
    Portal: (props: Select$1.SelectPortalProps) => react_jsx_runtime.JSX.Element;
    Content: (props: Select$1.SelectContentProps) => react_jsx_runtime.JSX.Element;
    Item: (props: Select$1.SelectItemProps) => react_jsx_runtime.JSX.Element;
    Viewport: (props: Select$1.SelectViewportProps) => react_jsx_runtime.JSX.Element;
    ItemText: (props: Select$1.SelectItemTextProps) => react_jsx_runtime.JSX.Element;
    ItemIndicator: (props: Select$1.SelectItemIndicatorProps) => react_jsx_runtime.JSX.Element;
    Separator: (props: Select$1.SelectSeparatorProps) => react_jsx_runtime.JSX.Element;
    Group: (props: Select$1.SelectGroupProps) => react_jsx_runtime.JSX.Element;
};

export { Avatar, type AvatarFallbackProps, type AvatarImageProps, type AvatarRootProps, Box, type BoxProps, Button, type ButtonPrefixProps, type ButtonRootProps, type ButtonSuffixProps, type CheckProps, Checkbox, type CheckboxIndicatorProps, type CheckboxRootProps, Heading, type HeadingProps, RadioGroup, type RadioGroupItemProps, type RadioGroupRootProps, Select, type SelectContentProps, type SelectGroupProps, type SelectIconProps, type SelectItemIndicatorProps, type SelectItemProps, type SelectItemTextProps, type SelectPortalProps, type SelectRootProps, type SelectSeparatorProps, type SelectTriggerProps, type SelectValueProps, type SelectViewportProps, Tabs, type TabsContentProps, type TabsListProps, type TabsRootProps, type TabsTriggerProps, Text, TextInput, type TextInputControlProps, type TextInputPrefixProps, type TextInputRootProps, type TextInputSuffixProps, type TextProps, Toggle, type ToggleControlProps, type ToggleRootProps, Tooltip, type TooltipArrowProps, type TooltipContentProps, type TooltipPortalProps, type TooltipProviderProps, type TooltipRootProps, type TooltipTriggerProps };

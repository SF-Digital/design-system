var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/Box/index.tsx
import { twMerge } from "tailwind-merge";
import { jsx } from "react/jsx-runtime";
var Box = (_a) => {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      className: twMerge(
        className,
        "rounded-md border bg-white p-4 drop-shadow-sm"
      )
    })
  );
};

// src/components/Text/index.tsx
import { tv } from "tailwind-variants";
import { jsx as jsx2 } from "react/jsx-runtime";
var text = tv(
  {
    base: ["font-sf-digital leading-tight"],
    variants: {
      size: {
        xs: "text-sf-xs",
        sm: "text-sf-sm",
        base: "text-sf-md",
        lg: "text-sf-lg"
      }
    },
    defaultVariants: {
      size: "base"
    }
  },
  {
    twMerge: false
  }
);
var Text = (_a) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ jsx2("p", __spreadProps(__spreadValues({}, props), { className: text({ size, className }) }));
};

// src/components/Heading/index.tsx
import { tv as tv2 } from "tailwind-variants";
import { jsx as jsx3 } from "react/jsx-runtime";
var heading = tv2(
  {
    base: ["font-sf-digital leading-tight"],
    variants: {
      size: {
        h1: "text-sf-h1",
        h2: "text-sf-h2",
        h3: "text-sf-h3",
        h4: "text-sf-h4",
        h5: "text-sf-h5",
        h6: "text-sf-h6"
      }
    },
    defaultVariants: {
      size: "h3"
    }
  },
  {
    twMerge: false
  }
);
var Heading = (_a) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ jsx3("h1", __spreadProps(__spreadValues({}, props), { className: heading({ size, className }) }));
};

// src/components/Button/ButtonRoot/index.tsx
import { tv as tv3 } from "tailwind-variants";
import { jsx as jsx4 } from "react/jsx-runtime";
var button = tv3({
  base: [
    "font-heading align-center flex items-center gap-1 rounded-md font-semibold transition duration-150 disabled:cursor-not-allowed"
  ],
  variants: {
    color: {
      "sf-green": [],
      "succession-blue": [],
      neutral: [],
      success: [],
      warning: [],
      error: []
    },
    variant: {
      primary: [],
      secondary: "border bg-white",
      tertiary: [],
      link: []
    },
    size: {
      sm: "text-sf-sm",
      md: "text-sf-md",
      lg: "text-sf-lg"
    },
    iconButton: {
      true: [],
      false: []
    }
  },
  compoundVariants: [
    {
      size: "sm",
      iconButton: false,
      className: "px-6 py-2"
    },
    {
      size: "md",
      iconButton: false,
      className: "px-6 py-2.5"
    },
    {
      size: "lg",
      iconButton: false,
      className: "px-8 py-4"
    },
    {
      size: "sm",
      iconButton: true,
      className: "p-2"
    },
    {
      size: "md",
      iconButton: true,
      className: "p-2.5"
    },
    {
      size: "lg",
      iconButton: true,
      className: "p-3"
    },
    {
      color: "sf-green",
      variant: "primary",
      className: "bg-primary-green-500 text-white hover:bg-primary-green-700 active:bg-primary-green-500 active:ring-4 active:ring-primary-green-50 disabled:border disabled:border-neutral-50 disabled:bg-neutral-20 disabled:text-neutral-80 disabled:hover:bg-neutral-20 disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "succession-blue",
      variant: "primary",
      className: "bg-succession-blue-500 text-white hover:bg-succession-blue-700 active:bg-succession-blue-500 active:ring-4 active:ring-succession-blue-50 disabled:border disabled:border-neutral-50 disabled:bg-neutral-20 disabled:text-neutral-80 disabled:hover:bg-neutral-20 disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "success",
      variant: "primary",
      className: "bg-success-500 text-white hover:bg-success-700 active:bg-success-500 active:ring-4 active:ring-success-100 disabled:bg-neutral-30 disabled:text-neutral-70 disabled:hover:bg-neutral-30 disabled:hover:text-neutral-70 disabled:active:ring-0"
    },
    {
      color: "warning",
      variant: "primary",
      className: "bg-warning-500 text-white hover:bg-warning-700 active:bg-warning-500 active:ring-4 active:ring-warning-100 disabled:bg-neutral-30 disabled:text-neutral-70 disabled:hover:bg-neutral-30 disabled:hover:text-neutral-70 disabled:active:ring-0"
    },
    {
      color: "error",
      variant: "primary",
      className: "bg-error-500 text-white hover:bg-error-700 active:bg-error-500 active:ring-4 active:ring-error-100 disabled:bg-neutral-30 disabled:text-neutral-70 disabled:hover:bg-neutral-30 disabled:hover:text-neutral-70 disabled:active:ring-0"
    },
    {
      color: "neutral",
      variant: "secondary",
      className: "border-neutral-60 text-neutral-500 hover:bg-neutral-20 hover:text-neutral-700 active:border-neutral-80 active:bg-neutral-20 active:bg-transparent active:text-neutral-500 active:ring-4 active:ring-neutral-30 disabled:border-neutral-50 disabled:bg-white disabled:text-neutral-80 disabled:hover:border-neutral-50 disabled:hover:bg-white disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "sf-green",
      variant: "secondary",
      className: "border-primary-green-500 text-primary-green-500 hover:border-primary-green-700 hover:bg-primary-green-50 hover:text-primary-green-700 active:border-primary-green-500 active:bg-transparent active:text-primary-green-500 active:ring-4 active:ring-primary-green-50 disabled:border-neutral-50 disabled:bg-white disabled:text-neutral-80 disabled:hover:border-neutral-50 disabled:hover:bg-white disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "succession-blue",
      variant: "secondary",
      className: "border-succession-blue-500 text-succession-blue-500 hover:border-succession-blue-700 hover:bg-succession-blue-50 hover:text-succession-blue-700 active:border-succession-blue-500 active:bg-transparent active:text-succession-blue-500 active:ring-4 active:ring-succession-blue-50 disabled:border-neutral-50 disabled:bg-white disabled:text-neutral-80 disabled:hover:border-neutral-50 disabled:hover:bg-white disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "success",
      variant: "secondary",
      className: "border-success-100 text-success-600 hover:border-success-100 hover:bg-success-50 hover:text-success-800 active:border-success-100 active:bg-white active:text-success-700 active:ring-4 active:ring-success-50 disabled:border-neutral-30 disabled:bg-neutral-10 disabled:text-neutral-70 disabled:hover:border-neutral-30 disabled:hover:bg-neutral-10 disabled:hover:text-neutral-70 disabled:active:ring-0"
    },
    {
      color: "error",
      variant: "secondary",
      className: "border-error-100 text-error-600 hover:border-error-100 hover:bg-error-50 hover:text-error-800 active:border-error-100 active:bg-white active:text-error-700 active:ring-4 active:ring-error-50 disabled:border-neutral-30 disabled:bg-neutral-10 disabled:text-neutral-70 disabled:hover:border-neutral-30 disabled:hover:bg-neutral-10 disabled:hover:text-neutral-70 disabled:active:ring-0"
    },
    {
      color: "warning",
      variant: "secondary",
      className: "border-warning-100 text-warning-600 hover:border-warning-100 hover:bg-warning-50 hover:text-warning-800 active:border-warning-100 active:bg-white active:text-warning-700 active:ring-4 active:ring-warning-50 disabled:border-neutral-30 disabled:bg-neutral-10 disabled:text-neutral-70 disabled:hover:border-neutral-30 disabled:hover:bg-neutral-10 disabled:hover:text-neutral-70 disabled:active:ring-0"
    },
    {
      color: "sf-green",
      variant: "tertiary",
      className: "text-primary-green-500 hover:bg-primary-green-50 hover:text-primary-green-700 active:bg-transparent active:text-primary-green-500 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "succession-blue",
      variant: "tertiary",
      className: "text-succession-blue-500 hover:bg-succession-blue-50 hover:text-succession-blue-700 active:bg-transparent active:text-succession-blue-500 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "neutral",
      variant: "tertiary",
      className: "text-neutral-700 hover:bg-neutral-20 hover:text-neutral-700 active:bg-transparent active:text-neutral-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "success",
      variant: "tertiary",
      className: "text-success-600 hover:bg-success-50 hover:text-success-800 active:bg-transparent active:text-success-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "warning",
      variant: "tertiary",
      className: "text-warning-600 hover:bg-warning-50 hover:text-warning-800 active:bg-transparent active:text-warning-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "error",
      variant: "tertiary",
      className: "text-error-600 hover:bg-error-50 hover:text-error-800 active:bg-transparent active:text-error-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:bg-transparent disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "neutral",
      variant: "link",
      className: "text-neutral-600 hover:text-neutral-800 active:bg-transparent active:text-neutral-700 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "sf-green",
      variant: "link",
      className: "text-primary-green-500 hover:text-primary-green-700 active:bg-transparent active:text-primary-green-600 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "succession-blue",
      variant: "link",
      className: "text-succession-blue-500 hover:text-succession-blue-700 active:bg-transparent active:text-succession-blue-600 disabled:bg-transparent disabled:text-neutral-80 disabled:hover:text-neutral-80 disabled:active:ring-0"
    },
    {
      color: "success",
      variant: "link",
      className: "text-success-600 hover:text-success-800 active:bg-transparent active:text-success-700 disabled:bg-transparent disabled:text-neutral-70 disabled:hover:text-neutral-70 disabled:active:ring-0"
    },
    {
      color: "warning",
      variant: "link",
      className: "text-warning-600 hover:text-warning-800 active:bg-transparent active:text-warning-700 disabled:bg-transparent disabled:text-neutral-70 disabled:hover:text-neutral-70 disabled:active:ring-0"
    },
    {
      color: "error",
      variant: "link",
      className: "text-error-600 hover:text-error-800 active:bg-transparent active:text-error-700 disabled:bg-transparent disabled:text-neutral-70 disabled:hover:text-neutral-70 disabled:active:ring-0"
    }
  ],
  defaultVariants: {
    variant: "primary",
    color: "sf-green",
    size: "md",
    iconButton: false
  }
});
var Root = (_a) => {
  var _b = _a, {
    variant,
    className,
    size,
    color,
    iconButton
  } = _b, props = __objRest(_b, [
    "variant",
    "className",
    "size",
    "color",
    "iconButton"
  ]);
  return /* @__PURE__ */ jsx4(
    "button",
    __spreadProps(__spreadValues({}, props), {
      className: button({
        variant,
        color,
        size,
        iconButton,
        className
      })
    })
  );
};

// src/components/Button/ButtonPrefix/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var Prefix = (props) => {
  return /* @__PURE__ */ jsx5("div", __spreadValues({}, props));
};

// src/components/Button/ButtonSuffix/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Suffix = (props) => {
  return /* @__PURE__ */ jsx6("div", __spreadValues({}, props));
};

// src/components/Button/index.tsx
var Button = { Root, Prefix, Suffix };

// src/components/TextInput/Root/index.tsx
import { createContext, useContext } from "react";
import { tv as tv4 } from "tailwind-variants";
import { jsx as jsx7 } from "react/jsx-runtime";
var input = tv4(
  {
    base: [
      "flex flex-row items-center justify-between rounded-md border border-neutral-50 bg-white font-sf-digital text-neutral-80",
      "focus-within:border focus-within:ring-4"
    ],
    variants: {
      size: {
        sm: "px-4 py-2 text-sf-sm",
        md: "px-4 py-2 text-sf-md",
        lg: "px-4 py-2 text-sf-lg"
      },
      disabled: {
        true: "border-none bg-neutral-40",
        false: ""
      },
      color: {
        "sf-green": "focus-within:border-primary-green-200 focus-within:ring-primary-green-100",
        "succession-blue": "focus-within:border-succession-blue-200 focus-within:ring-succession-blue-100"
      }
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      color: "sf-green"
    }
  },
  { twMerge: true }
);
var TextInputContext = createContext({});
var Root2 = (_a) => {
  var _b = _a, {
    size = "sm",
    disabled = false,
    className,
    color
  } = _b, props = __objRest(_b, [
    "size",
    "disabled",
    "className",
    "color"
  ]);
  return /* @__PURE__ */ jsx7(TextInputContext.Provider, { value: { size, disabled }, children: /* @__PURE__ */ jsx7(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: input({
        className,
        color,
        disabled,
        size
      })
    })
  ) });
};
var useTextInput = () => useContext(TextInputContext);

// src/components/TextInput/Control/index.tsx
import { twJoin } from "tailwind-merge";
import { jsx as jsx8 } from "react/jsx-runtime";
var Control = (props) => {
  const { disabled } = useTextInput();
  return /* @__PURE__ */ jsx8(
    "input",
    __spreadProps(__spreadValues({}, props), {
      disabled,
      className: twJoin(
        props.className,
        "w-full border-transparent text-black outline-none placeholder:font-sf-digital disabled:bg-neutral-40 disabled:text-neutral-50"
      )
    })
  );
};
Control.displayName = "TextInput.Control";

// src/components/TextInput/Prefix/index.tsx
import { twJoin as twJoin2 } from "tailwind-merge";
import { jsx as jsx9 } from "react/jsx-runtime";
var sizePaddings = {
  sm: "pr-2",
  md: "pr-2.5",
  lg: "pr-3.5"
};
var Prefix2 = (props) => {
  const { size } = useTextInput();
  return /* @__PURE__ */ jsx9("div", __spreadProps(__spreadValues({}, props), { className: twJoin2(props.className, sizePaddings[size]) }));
};

// src/components/TextInput/Suffix/index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var Suffix2 = (props) => {
  return /* @__PURE__ */ jsx10("div", __spreadValues({}, props));
};

// src/components/TextInput/index.tsx
var TextInput = { Root: Root2, Control, Prefix: Prefix2, Suffix: Suffix2 };

// src/components/Checkbox/Check/index.tsx
import { Check as CheckIcon } from "lucide-react";
import { jsx as jsx11 } from "react/jsx-runtime";
var Check = (props) => {
  return /* @__PURE__ */ jsx11(CheckIcon, __spreadProps(__spreadValues({}, props), { color: "white" }));
};

// src/components/Checkbox/CheckboxRoot/index.tsx
import * as Checkbox from "@radix-ui/react-checkbox";
import { tv as tv5 } from "tailwind-variants";
import { jsx as jsx12 } from "react/jsx-runtime";
var checkbox = tv5({
  base: [
    "border-xs flex h-5 w-5 items-center justify-center rounded-xs border border-neutral-50",
    'data-[state="checked"]:border-transparent'
  ],
  variants: {
    color: {
      "sf-green": 'data-[state="checked"]:bg-primary-green-500',
      "succession-blue": 'data-[state="checked"]:bg-succession-blue-500'
    },
    size: {
      sm: "h-5 w-5",
      md: "h-6 w-6",
      lg: "h-8 w-8"
    }
  },
  defaultVariants: { size: "md", color: "sf-green" }
});
var Root4 = (props) => {
  return /* @__PURE__ */ jsx12(
    Checkbox.Root,
    __spreadValues({
      className: checkbox({
        className: props.className,
        size: props.size,
        color: props.color
      })
    }, props)
  );
};
Root4.displayName = "Checkbox.Root";

// src/components/Checkbox/CheckboxIndicator/index.tsx
import * as Checkbox2 from "@radix-ui/react-checkbox";
import { jsx as jsx13 } from "react/jsx-runtime";
var Indicator = (props) => {
  return /* @__PURE__ */ jsx13(Checkbox2.CheckboxIndicator, __spreadValues({ asChild: true }, props));
};

// src/components/Checkbox/index.tsx
var Checkbox3 = { Root: Root4, Indicator, Check };

// src/components/RadioGroup/RadioGroupRoot/index.tsx
import * as RadioGroup from "@radix-ui/react-radio-group";
import { tv as tv6 } from "tailwind-variants";
import { jsx as jsx14 } from "react/jsx-runtime";
var radio = tv6({
  base: "flex flex-col gap-2.5"
});
var RadioGroupRoot = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx14(RadioGroup.Root, __spreadProps(__spreadValues({}, props), { className: radio({ className }) }));
};

// src/components/RadioGroup/RadioGroupItem/index.tsx
import * as RadioGroup2 from "@radix-ui/react-radio-group";
import { tv as tv7 } from "tailwind-variants";
import { jsx as jsx15 } from "react/jsx-runtime";
var radio2 = tv7({
  base: ["rounded-full border border-neutral-50 bg-white"],
  variants: {
    size: {
      sm: 'h-5 w-5 data-[state="checked"]:border-6',
      md: 'h-6 w-6 data-[state="checked"]:border-8',
      lg: 'h-8 w-8 data-[state="checked"]:border-10'
    },
    color: {
      "sf-green": 'data-[state="checked"]:border-primary-green-500',
      "succession-blue": 'data-[state="checked"]:border-succession-blue-500'
    }
  },
  defaultVariants: {
    size: "sm",
    color: "sf-green"
  }
});
var RadioGroupItem = (_a) => {
  var _b = _a, {
    className,
    size,
    color
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "color"
  ]);
  return /* @__PURE__ */ jsx15(RadioGroup2.Item, __spreadProps(__spreadValues({}, props), { className: radio2({ size, className, color }) }));
};

// src/components/RadioGroup/index.tsx
var RadioGroup3 = { Root: RadioGroupRoot, Item: RadioGroupItem };

// src/components/Tabs/Root/index.tsx
import * as Tabs from "@radix-ui/react-tabs";
import { jsx as jsx16 } from "react/jsx-runtime";
var Root7 = (props) => {
  return /* @__PURE__ */ jsx16(Tabs.Root, __spreadValues({}, props));
};

// src/components/Tabs/List/index.tsx
import * as Tabs2 from "@radix-ui/react-tabs";
import { jsx as jsx17 } from "react/jsx-runtime";
var List2 = (props) => {
  return /* @__PURE__ */ jsx17(Tabs2.List, __spreadValues({}, props));
};

// src/components/Tabs/Trigger/index.tsx
import * as Tabs3 from "@radix-ui/react-tabs";
import { tv as tv8 } from "tailwind-variants";
import { jsx as jsx18 } from "react/jsx-runtime";
var tab = tv8(
  {
    base: ["font-sf-digital font-bold text-neutral-80"],
    variants: {
      variant: {
        solid: 'rounded-md bg-neutral-20 text-sf-lg hover:bg-neutral-40 hover:text-neutral-90 data-[state="active"]:bg-primary-green-50 data-[state="active"]:text-primary-green-500',
        underline: 'text-sf-lg transition-all duration-200 hover:text-neutral-90 data-[state="active"]:border-b-2 data-[state="active"]:border-b-primary-green-500 data-[state="active"]:text-primary-green-500'
      },
      color: {
        "sf-green": [],
        "succession-blue": []
      },
      size: {
        base: "px-4 py-2.5",
        lg: "px-10 py-2.5"
      }
    },
    compoundVariants: [
      {
        color: "sf-green",
        variant: "solid",
        className: 'rounded-md bg-neutral-20 text-sf-lg hover:bg-neutral-40 hover:text-neutral-90 data-[state="active"]:bg-primary-green-50 data-[state="active"]:text-primary-green-500'
      },
      {
        color: "sf-green",
        variant: "underline",
        className: 'text-sf-lg transition-all duration-200 hover:text-neutral-90 data-[state="active"]:border-b-2 data-[state="active"]:border-b-primary-green-500 data-[state="active"]:text-primary-green-500'
      },
      {
        color: "succession-blue",
        variant: "solid",
        className: 'rounded-md bg-neutral-20 text-sf-lg hover:bg-neutral-40 hover:text-neutral-90 data-[state="active"]:bg-succession-blue-100 data-[state="active"]:text-succession-blue-500'
      },
      {
        color: "succession-blue",
        variant: "underline",
        className: 'text-sf-lg transition-all duration-200 hover:text-neutral-90 data-[state="active"]:border-b-2 data-[state="active"]:border-b-succession-blue-500 data-[state="active"]:text-succession-blue-500'
      }
    ],
    defaultVariants: { variant: "solid", size: "base", color: "sf-green" }
  },
  {
    twMerge: false
  }
);
var Trigger2 = (_a) => {
  var _b = _a, {
    size,
    variant,
    color,
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "color",
    "className"
  ]);
  return /* @__PURE__ */ jsx18(
    Tabs3.Trigger,
    __spreadProps(__spreadValues({}, props), {
      className: tab({
        className,
        variant,
        size,
        color
      })
    })
  );
};

// src/components/Tabs/Content/index.tsx
import * as Tabs4 from "@radix-ui/react-tabs";
import { jsx as jsx19 } from "react/jsx-runtime";
var Content2 = (props) => {
  return /* @__PURE__ */ jsx19(Tabs4.Content, __spreadValues({}, props));
};

// src/components/Tabs/index.tsx
var Tabs5 = { Root: Root7, List: List2, Trigger: Trigger2, Content: Content2 };

// src/components/Toggle/Root/index.tsx
import * as Switch from "@radix-ui/react-switch";
import { tv as tv9 } from "tailwind-variants";
import { jsx as jsx20 } from "react/jsx-runtime";
var toggle = tv9({
  base: [
    'flex flex-row items-center rounded-lg p-0.5 data-[state="checked"]:justify-end data-[disabled]:bg-neutral-40 data-[state="unchecked"]:bg-neutral-40'
  ],
  variants: {
    size: {
      sm: "h-5 w-9",
      md: "h-6 w-11"
    },
    color: {
      "sf-green": 'data-[state="checked"]:bg-primary-green-500',
      "succession-blue": 'data-[state="checked"]:bg-succession-blue-500'
    }
  },
  defaultVariants: { size: "md", color: "sf-green" }
});
var Root9 = (_a) => {
  var _b = _a, { className, color, size } = _b, props = __objRest(_b, ["className", "color", "size"]);
  return /* @__PURE__ */ jsx20(Switch.Root, __spreadProps(__spreadValues({}, props), { className: toggle({ className, size, color }) }));
};

// src/components/Toggle/Control/index.tsx
import { tv as tv10 } from "tailwind-variants";
import * as Switch2 from "@radix-ui/react-switch";
import { jsx as jsx21 } from "react/jsx-runtime";
var toggle2 = tv10({
  base: ["rounded-lg bg-white drop-shadow-sm data-[disabled]:bg-neutral-20"],
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5"
    }
  }
});
var Control2 = (_a) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ jsx21(Switch2.Thumb, __spreadProps(__spreadValues({}, props), { className: toggle2({ className, size }) }));
};

// src/components/Toggle/index.tsx
var Toggle = { Root: Root9, Control: Control2 };

// src/components/Avatar/Root/index.tsx
import * as Avatar from "@radix-ui/react-avatar";
import { tv as tv11 } from "tailwind-variants";
import { jsx as jsx22 } from "react/jsx-runtime";
var avatar = tv11(
  {
    base: [
      "inline-flex select-none items-center justify-center overflow-hidden rounded-full bg-black align-middle"
    ],
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-14 w-14",
        "2xl": "h-16 w-16"
      }
    },
    defaultVariants: { size: "md" }
  },
  { twMerge: false }
);
var Root11 = (_a) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ jsx22(Avatar.Root, __spreadProps(__spreadValues({}, props), { className: avatar({ size, className }) }));
};

// src/components/Avatar/Image/index.tsx
import * as Avatar2 from "@radix-ui/react-avatar";
import { jsx as jsx23 } from "react/jsx-runtime";
var Image2 = (props) => {
  return /* @__PURE__ */ jsx23(
    Avatar2.Image,
    __spreadProps(__spreadValues({}, props), {
      className: 'className="h-full object-cover" w-full rounded-[inherit]'
    })
  );
};

// src/components/Avatar/Fallback/index.tsx
import * as Avatar3 from "@radix-ui/react-avatar";
import { jsx as jsx24 } from "react/jsx-runtime";
var Fallback2 = (props) => {
  return /* @__PURE__ */ jsx24(Avatar3.Fallback, __spreadValues({}, props));
};

// src/components/Avatar/index.tsx
var Avatar4 = { Root: Root11, Image: Image2, Fallback: Fallback2 };

// src/components/Tooltip/Provider/index.tsx
import * as Tooltip from "@radix-ui/react-tooltip";
import { jsx as jsx25 } from "react/jsx-runtime";
var Provider2 = (props) => {
  return /* @__PURE__ */ jsx25(Tooltip.Provider, __spreadValues({}, props));
};

// src/components/Tooltip/Root/index.tsx
import * as Tooltip2 from "@radix-ui/react-tooltip";
import { jsx as jsx26 } from "react/jsx-runtime";
var Root13 = (props) => {
  return /* @__PURE__ */ jsx26(Tooltip2.Root, __spreadValues({}, props));
};

// src/components/Tooltip/Trigger/index.tsx
import * as Tooltip3 from "@radix-ui/react-tooltip";
import { jsx as jsx27 } from "react/jsx-runtime";
var Trigger4 = (props) => {
  return /* @__PURE__ */ jsx27(Tooltip3.Trigger, __spreadValues({}, props));
};

// src/components/Tooltip/Portal/index.tsx
import * as Tooltip4 from "@radix-ui/react-tooltip";
import { jsx as jsx28 } from "react/jsx-runtime";
var Portal2 = (props) => {
  return /* @__PURE__ */ jsx28(Tooltip4.Portal, __spreadValues({}, props));
};

// src/components/Tooltip/Content/index.tsx
import * as Tooltip5 from "@radix-ui/react-tooltip";
import { tv as tv12 } from "tailwind-variants";

// src/components/Tooltip/Context/index.tsx
import { createContext as createContext2, useContext as useContext2 } from "react";
var TooltipThemeContext = createContext2("light");
var useTooltipTheme = () => useContext2(TooltipThemeContext);

// src/components/Tooltip/Content/index.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
var content = tv12(
  {
    base: [
      "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade max-w-80 select-none rounded-md px-3 py-2 text-sf-xs leading-none"
    ],
    variants: {
      theme: {
        light: ["bg-white text-primary-grey-200"],
        dark: ["bg-black text-white"]
      }
    },
    defaultVariants: {
      theme: "light"
    }
  },
  { twMerge: false }
);
var Content4 = (_a) => {
  var _b = _a, {
    theme,
    className
  } = _b, props = __objRest(_b, [
    "theme",
    "className"
  ]);
  return /* @__PURE__ */ jsx29(TooltipThemeContext.Provider, { value: theme || "light", children: /* @__PURE__ */ jsx29(
    Tooltip5.Content,
    __spreadProps(__spreadValues({
      sideOffset: 4
    }, props), {
      className: content({ theme, className })
    })
  ) });
};

// src/components/Tooltip/Arrow/index.tsx
import * as Tooltip6 from "@radix-ui/react-tooltip";
import { jsx as jsx30 } from "react/jsx-runtime";
var Arrow2 = (_a) => {
  var props = __objRest(_a, []);
  const theme = useTooltipTheme();
  return /* @__PURE__ */ jsx30(
    Tooltip6.Arrow,
    __spreadProps(__spreadValues({}, props), {
      style: { fill: theme === "light" ? "white" : "black" }
    })
  );
};

// src/components/Tooltip/index.tsx
var Tooltip7 = { Provider: Provider2, Root: Root13, Trigger: Trigger4, Portal: Portal2, Content: Content4, Arrow: Arrow2 };

// src/components/Select/Root/index.tsx
import * as Select from "@radix-ui/react-select";
import { jsx as jsx31 } from "react/jsx-runtime";
var Root15 = (props) => /* @__PURE__ */ jsx31(Select.Root, __spreadValues({}, props));

// src/components/Select/Trigger/index.tsx
import * as Select2 from "@radix-ui/react-select";
import { twJoin as twJoin3 } from "tailwind-merge";
import { tv as tv13 } from "tailwind-variants";
import { jsx as jsx32 } from "react/jsx-runtime";
var trigger = tv13({
  base: [
    "flex flex-row items-center justify-between gap-2 rounded-md border border-neutral-50 bg-white px-3.5 py-2.5 text-sf-md leading-none text-neutral-900 focus:outline-none data-[placeholder]:font-sf-digital data-[placeholder]:font-thin data-[placeholder]:text-neutral-500"
  ],
  variants: {
    color: {
      "sf-green": 'data-[state="open"]:border-primary-green-500',
      "succession-blue": 'data-[state="open"]:border-succession-blue-500'
    }
  },
  defaultVariants: {
    color: "sf-green"
  }
});
var Trigger6 = (_a) => {
  var _b = _a, { color } = _b, props = __objRest(_b, ["color"]);
  return /* @__PURE__ */ jsx32(
    Select2.Trigger,
    __spreadProps(__spreadValues({}, props), {
      className: twJoin3(trigger({ color }), props == null ? void 0 : props.className)
    })
  );
};

// src/components/Select/Portal/index.tsx
import * as Select3 from "@radix-ui/react-select";
import { jsx as jsx33 } from "react/jsx-runtime";
var Portal4 = (props) => /* @__PURE__ */ jsx33(Select3.Portal, __spreadValues({}, props));

// src/components/Select/Icon/index.tsx
import * as Select4 from "@radix-ui/react-select";
import { jsx as jsx34 } from "react/jsx-runtime";
var Icon2 = (props) => /* @__PURE__ */ jsx34(Select4.Icon, __spreadProps(__spreadValues({}, props), { className: "text-neutral-500" }));

// src/components/Select/Value/index.tsx
import * as Select5 from "@radix-ui/react-select";
import { jsx as jsx35 } from "react/jsx-runtime";
var Value2 = (props) => /* @__PURE__ */ jsx35(Select5.Value, __spreadValues({}, props));

// src/components/Select/Content/index.tsx
import * as Select6 from "@radix-ui/react-select";
import { ChevronDown, ChevronUp } from "lucide-react";
import { twJoin as twJoin4 } from "tailwind-merge";
import { jsx as jsx36, jsxs } from "react/jsx-runtime";
var Content6 = (props) => /* @__PURE__ */ jsxs(
  Select6.Content,
  __spreadProps(__spreadValues({}, props), {
    className: twJoin4(
      "flex max-h-[var(--radix-select-content-available-height)] w-[--radix-select-trigger-width] flex-row rounded-md border border-neutral-40 bg-white drop-shadow-lg",
      props == null ? void 0 : props.className
    ),
    sideOffset: 8,
    align: "center",
    children: [
      /* @__PURE__ */ jsx36(Select6.ScrollUpButton, { className: "flex h-[25px] cursor-default items-center justify-center border-b border-neutral-30 text-neutral-900", children: /* @__PURE__ */ jsx36(ChevronUp, { size: "18" }) }),
      props.children,
      /* @__PURE__ */ jsx36(Select6.ScrollDownButton, { className: "flex h-[25px] cursor-default items-center justify-center border-t border-neutral-30 text-neutral-900", children: /* @__PURE__ */ jsx36(ChevronDown, { size: "18" }) })
    ]
  })
);

// src/components/Select/Item/index.tsx
import * as Select7 from "@radix-ui/react-select";
import { Check as Check2 } from "lucide-react";
import { twJoin as twJoin5 } from "tailwind-merge";
import { jsx as jsx37, jsxs as jsxs2 } from "react/jsx-runtime";
var Item3 = (props) => /* @__PURE__ */ jsxs2(
  Select7.Item,
  __spreadProps(__spreadValues({}, props), {
    className: twJoin5(
      'flex flex-row justify-between px-3.5 py-2.5 text-neutral-900 hover:cursor-pointer hover:bg-neutral-10 hover:outline-none focus:outline-none data-[state="checked"]:bg-neutral-20 data-[state="checked"]:outline-none',
      props.className
    ),
    children: [
      props.children,
      /* @__PURE__ */ jsx37(Select7.ItemIndicator, { children: /* @__PURE__ */ jsx37(Check2, { size: 20 }) })
    ]
  })
);

// src/components/Select/Viewport/index.tsx
import * as Select8 from "@radix-ui/react-select";
import { jsx as jsx38 } from "react/jsx-runtime";
var Viewport2 = (props) => /* @__PURE__ */ jsx38(Select8.Viewport, __spreadValues({}, props));

// src/components/Select/ItemText/index.tsx
import * as Select9 from "@radix-ui/react-select";
import { jsx as jsx39 } from "react/jsx-runtime";
var ItemText2 = (props) => /* @__PURE__ */ jsx39(Select9.ItemText, __spreadValues({}, props));

// src/components/Select/ItemIndicator/index.tsx
import * as Select10 from "@radix-ui/react-select";
import { jsx as jsx40 } from "react/jsx-runtime";
var ItemIndicator3 = (props) => /* @__PURE__ */ jsx40(Select10.ItemIndicator, __spreadValues({}, props));

// src/components/Select/Separator/index.tsx
import * as Select11 from "@radix-ui/react-select";
import { jsx as jsx41 } from "react/jsx-runtime";
var Separator2 = (props) => /* @__PURE__ */ jsx41(Select11.Separator, __spreadValues({}, props));

// src/components/Select/Group/index.tsx
import * as Select12 from "@radix-ui/react-select";
import { jsx as jsx42 } from "react/jsx-runtime";
var Group2 = (props) => /* @__PURE__ */ jsx42(Select12.Group, __spreadValues({}, props));

// src/components/Select/index.tsx
var Select13 = {
  Root: Root15,
  Trigger: Trigger6,
  Value: Value2,
  Icon: Icon2,
  Portal: Portal4,
  Content: Content6,
  Item: Item3,
  Viewport: Viewport2,
  ItemText: ItemText2,
  ItemIndicator: ItemIndicator3,
  Separator: Separator2,
  Group: Group2
};

// src/components/Modal/Root/index.tsx
import * as Dialog from "@radix-ui/react-dialog";
var Root17 = Dialog.Root;
Root17.displayName = "Modal.Root";

// src/components/Modal/Trigger/index.tsx
import * as Dialog2 from "@radix-ui/react-dialog";
var Trigger8 = Dialog2.Trigger;
Trigger8.displayName = "Modal.Trigger";

// src/components/Modal/Portal/index.tsx
import * as Dialog3 from "@radix-ui/react-dialog";
var Portal6 = Dialog3.Portal;

// src/components/Modal/Overlay/index.tsx
import * as Dialog4 from "@radix-ui/react-dialog";
var Overlay2 = Dialog4.Overlay;

// src/components/Modal/Content/index.tsx
import * as Dialog5 from "@radix-ui/react-dialog";
var Content8 = Dialog5.Content;
Content8.displayName = "Modal.Content";

// src/components/Modal/Title/index.tsx
import * as Dialog6 from "@radix-ui/react-dialog";
var Title2 = Dialog6.Title;

// src/components/Modal/Description/index.tsx
import * as Dialog7 from "@radix-ui/react-dialog";
var Description2 = Dialog7.Description;

// src/components/Modal/Close/index.tsx
import * as Dialog8 from "@radix-ui/react-dialog";
var Close2 = Dialog8.Close;

// src/components/Modal/index.tsx
var Modal = {
  Root: Root17,
  Trigger: Trigger8,
  Portal: Portal6,
  Overlay: Overlay2,
  Content: Content8,
  Title: Title2,
  Description: Description2,
  Close: Close2
};

// src/components/DropdownMenu/Root/index.tsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { jsx as jsx43 } from "react/jsx-runtime";
var Root19 = (props) => {
  return /* @__PURE__ */ jsx43(DropdownMenu.Root, __spreadValues({}, props));
};

// src/components/DropdownMenu/Trigger/index.tsx
import * as DropdownMenu2 from "@radix-ui/react-dropdown-menu";
import { twMerge as twMerge2 } from "tailwind-merge";
import { jsx as jsx44 } from "react/jsx-runtime";
var Trigger10 = (props) => {
  return /* @__PURE__ */ jsx44(
    DropdownMenu2.Trigger,
    __spreadProps(__spreadValues({}, props), {
      className: twMerge2(
        "text-neutral-500 hover:cursor-pointer hover:text-neutral-700",
        props.className
      )
    })
  );
};

// src/components/DropdownMenu/Portal/index.tsx
import * as DropdownMenu3 from "@radix-ui/react-dropdown-menu";
import { jsx as jsx45 } from "react/jsx-runtime";
var Portal8 = (props) => {
  return /* @__PURE__ */ jsx45(DropdownMenu3.Portal, __spreadValues({}, props));
};

// src/components/DropdownMenu/Item/index.tsx
import * as DropdownMenu4 from "@radix-ui/react-dropdown-menu";
import { twMerge as twMerge3 } from "tailwind-merge";
import { jsx as jsx46 } from "react/jsx-runtime";
var Item5 = (props) => {
  return /* @__PURE__ */ jsx46(
    DropdownMenu4.Item,
    __spreadProps(__spreadValues({}, props), {
      className: twMerge3(
        props.className,
        "flex flex-row items-center gap-3 py-2 pl-4 pr-12 outline-none hover:cursor-pointer hover:bg-neutral-20"
      )
    })
  );
};

// src/components/DropdownMenu/Content/index.tsx
import * as DropdownMenu5 from "@radix-ui/react-dropdown-menu";
import { twMerge as twMerge4 } from "tailwind-merge";
import { jsx as jsx47 } from "react/jsx-runtime";
var Content10 = (props) => {
  return /* @__PURE__ */ jsx47(
    DropdownMenu5.Content,
    __spreadProps(__spreadValues({}, props), {
      className: twMerge4(
        "overflow-hidden rounded-md border border-neutral-40 bg-white",
        props.className
      )
    })
  );
};

// src/components/DropdownMenu/Divider/index.tsx
import { twMerge as twMerge5 } from "tailwind-merge";
import { jsx as jsx48 } from "react/jsx-runtime";
var Divider = (props) => {
  return /* @__PURE__ */ jsx48(
    "div",
    {
      className: twMerge5(
        props.className,
        "flex h-[1px] flex-row bg-neutral-40"
      )
    }
  );
};

// src/components/DropdownMenu/index.tsx
var DropdownMenu6 = { Root: Root19, Trigger: Trigger10, Portal: Portal8, Content: Content10, Item: Item5, Divider };

// src/components/Popover/Root/index.tsx
import * as Popover from "@radix-ui/react-popover";
import { jsx as jsx49 } from "react/jsx-runtime";
var Root21 = (props) => {
  return /* @__PURE__ */ jsx49(Popover.Root, __spreadValues({}, props));
};

// src/components/Popover/Trigger/index.tsx
import * as Popover2 from "@radix-ui/react-popover";
import { jsx as jsx50 } from "react/jsx-runtime";
var Trigger12 = (props) => {
  return /* @__PURE__ */ jsx50(Popover2.Trigger, __spreadValues({}, props));
};

// src/components/Popover/Portal/index.tsx
import * as Popover3 from "@radix-ui/react-popover";
import { jsx as jsx51 } from "react/jsx-runtime";
var Portal10 = (props) => {
  return /* @__PURE__ */ jsx51(Popover3.Portal, __spreadValues({}, props));
};

// src/components/Popover/Content/index.tsx
import * as Popover4 from "@radix-ui/react-popover";
import { jsx as jsx52 } from "react/jsx-runtime";
var Content12 = (props) => {
  return /* @__PURE__ */ jsx52(Popover4.Content, __spreadValues({}, props));
};

// src/components/Popover/Anchor/index.tsx
import * as Popover5 from "@radix-ui/react-popover";
import { jsx as jsx53 } from "react/jsx-runtime";
var Anchor2 = (props) => {
  return /* @__PURE__ */ jsx53(Popover5.Anchor, __spreadValues({}, props));
};

// src/components/Popover/Close/index.tsx
import * as Popover6 from "@radix-ui/react-popover";
import { jsx as jsx54 } from "react/jsx-runtime";
var Close4 = (props) => {
  return /* @__PURE__ */ jsx54(Popover6.Close, __spreadValues({}, props));
};

// src/components/Popover/Arrow/index.tsx
import * as Popover7 from "@radix-ui/react-popover";
import { jsx as jsx55 } from "react/jsx-runtime";
var Arrow4 = (props) => {
  return /* @__PURE__ */ jsx55(Popover7.Arrow, __spreadValues({}, props));
};

// src/components/Popover/index.tsx
var Popover8 = { Root: Root21, Trigger: Trigger12, Portal: Portal10, Content: Content12, Anchor: Anchor2, Close: Close4, Arrow: Arrow4 };

// src/components/TextArea/Root/index.tsx
import { createContext as createContext3, useContext as useContext3 } from "react";
import { tv as tv14 } from "tailwind-variants";
import { jsx as jsx56 } from "react/jsx-runtime";
var input2 = tv14(
  {
    base: [
      "w-128 font-sf-heading flex h-32 flex-row items-center justify-between rounded-md border border-neutral-50 bg-white text-neutral-80",
      "border"
    ],
    variants: {
      size: {
        sm: "px-4 py-2.5 text-sf-sm",
        md: "px-4 py-2.5 text-sf-md",
        lg: "px-4 py-2.5 text-sf-lg"
      },
      color: {
        "sf-green": "border-primary-green-200 focus-within:ring-4 focus-within:ring-primary-green-100",
        "succession-blue": "border-succession-blue-200 focus-within:ring-4 focus-within:ring-succession-blue-100",
        error: "border-error-200 focus-within:ring-4 focus-within:ring-error-100"
      },
      disabled: {
        true: "border border-neutral-40 bg-neutral-10 text-neutral-300",
        false: ""
      }
    },
    defaultVariants: {
      size: "sm",
      disabled: false,
      color: "sf-green"
    }
  },
  { twMerge: true }
);
var TextAreaContext = createContext3({});
var Root22 = (_a) => {
  var _b = _a, {
    size = "sm",
    disabled = false,
    color = "sf-green",
    className
  } = _b, props = __objRest(_b, [
    "size",
    "disabled",
    "color",
    "className"
  ]);
  return /* @__PURE__ */ jsx56(TextAreaContext.Provider, { value: { size, color, disabled }, children: /* @__PURE__ */ jsx56(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: input2({
        className,
        disabled,
        size,
        color
      })
    })
  ) });
};
var useTextArea = () => useContext3(TextAreaContext);

// src/components/TextArea/Control/index.tsx
import { twJoin as twJoin6 } from "tailwind-merge";
import { jsx as jsx57 } from "react/jsx-runtime";
var Control3 = (_a) => {
  var props = __objRest(_a, []);
  const { disabled, size } = useTextArea();
  const sizeClasses = {
    sm: "px-4 py-2.5 text-sf-sm",
    md: "px-4 py-2.5 text-sf-md",
    lg: "px-4 py-2.5 text-sf-lg"
  };
  return /* @__PURE__ */ jsx57(
    "textarea",
    __spreadProps(__spreadValues({}, props), {
      disabled,
      className: twJoin6(
        props.className,
        "placeholder:font-sf-heading h-full w-full resize-none border-transparent text-black outline-none disabled:bg-neutral-10 disabled:text-neutral-300",
        sizeClasses[size]
      )
    })
  );
};

// src/components/TextArea/index.tsx
var TextArea = { Root: Root22, Control: Control3 };
export {
  Avatar4 as Avatar,
  Box,
  Button,
  Checkbox3 as Checkbox,
  DropdownMenu6 as DropdownMenu,
  Heading,
  Modal,
  Popover8 as Popover,
  RadioGroup3 as RadioGroup,
  Select13 as Select,
  Tabs5 as Tabs,
  Text,
  TextArea,
  TextInput,
  Toggle,
  Tooltip7 as Tooltip
};

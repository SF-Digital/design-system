"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar4,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox3,
  DropdownMenu: () => DropdownMenu6,
  Heading: () => Heading,
  Modal: () => Modal,
  Popover: () => Popover8,
  RadioGroup: () => RadioGroup3,
  Select: () => Select13,
  Tabs: () => Tabs5,
  Text: () => Text,
  TextArea: () => TextArea,
  TextInput: () => TextInput,
  Toggle: () => Toggle,
  Tooltip: () => Tooltip7
});
module.exports = __toCommonJS(src_exports);

// src/components/Box/index.tsx
var import_tailwind_merge = require("tailwind-merge");
var import_jsx_runtime = require("react/jsx-runtime");
var Box = (_a) => {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      className: (0, import_tailwind_merge.twMerge)(
        className,
        "rounded-md border bg-white p-4 drop-shadow-sm"
      )
    })
  );
};

// src/components/Text/index.tsx
var import_tailwind_variants = require("tailwind-variants");
var import_jsx_runtime2 = require("react/jsx-runtime");
var text = (0, import_tailwind_variants.tv)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", __spreadProps(__spreadValues({}, props), { className: text({ size, className }) }));
};

// src/components/Heading/index.tsx
var import_tailwind_variants2 = require("tailwind-variants");
var import_jsx_runtime3 = require("react/jsx-runtime");
var heading = (0, import_tailwind_variants2.tv)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", __spreadProps(__spreadValues({}, props), { className: heading({ size, className }) }));
};

// src/components/Button/ButtonRoot/index.tsx
var import_tailwind_variants3 = require("tailwind-variants");
var import_jsx_runtime4 = require("react/jsx-runtime");
var button = (0, import_tailwind_variants3.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
var Prefix = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", __spreadValues({}, props));
};

// src/components/Button/ButtonSuffix/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Suffix = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", __spreadValues({}, props));
};

// src/components/Button/index.tsx
var Button = { Root, Prefix, Suffix };

// src/components/TextInput/Root/index.tsx
var import_react = require("react");
var import_tailwind_variants4 = require("tailwind-variants");
var import_jsx_runtime7 = require("react/jsx-runtime");
var input = (0, import_tailwind_variants4.tv)(
  {
    base: [
      "flex flex-row items-center justify-between rounded-md border border-neutral-50 bg-white font-sf-digital text-neutral-80",
      "focus-within:border focus-within:border-primary-green-200 focus-within:ring-4 focus-within:ring-primary-green-100"
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
      }
    },
    defaultVariants: {
      size: "md",
      disabled: false
    }
  },
  { twMerge: true }
);
var TextInputContext = (0, import_react.createContext)({});
var Root2 = (_a) => {
  var _b = _a, {
    size = "sm",
    disabled = false,
    className
  } = _b, props = __objRest(_b, [
    "size",
    "disabled",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TextInputContext.Provider, { value: { size, disabled }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: input({
        className,
        disabled,
        size
      })
    })
  ) });
};
var useTextInput = () => (0, import_react.useContext)(TextInputContext);

// src/components/TextInput/Control/index.tsx
var import_react2 = require("react");
var import_tailwind_merge2 = require("tailwind-merge");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Control = (0, import_react2.forwardRef)(
  (props, ref) => {
    const { disabled } = useTextInput();
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "input",
      __spreadProps(__spreadValues({}, props), {
        ref,
        disabled,
        className: (0, import_tailwind_merge2.twJoin)(
          props.className,
          "w-full border-transparent text-black outline-none placeholder:font-sf-digital disabled:bg-neutral-40 disabled:text-neutral-50"
        )
      })
    );
  }
);
Control.displayName = "TextInput.Control";

// src/components/TextInput/Prefix/index.tsx
var import_tailwind_merge3 = require("tailwind-merge");
var import_jsx_runtime9 = require("react/jsx-runtime");
var sizePaddings = {
  sm: "pr-2",
  md: "pr-2.5",
  lg: "pr-3.5"
};
var Prefix2 = (props) => {
  const { size } = useTextInput();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", __spreadProps(__spreadValues({}, props), { className: (0, import_tailwind_merge3.twJoin)(props.className, sizePaddings[size]) }));
};

// src/components/TextInput/Suffix/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var Suffix2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", __spreadValues({}, props));
};

// src/components/TextInput/index.tsx
var TextInput = { Root: Root2, Control, Prefix: Prefix2, Suffix: Suffix2 };

// src/components/Checkbox/Check/index.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Check = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react.Check, __spreadProps(__spreadValues({}, props), { color: "white" }));
};

// src/components/Checkbox/CheckboxRoot/index.tsx
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var import_react3 = require("react");
var import_tailwind_variants5 = require("tailwind-variants");
var import_jsx_runtime12 = require("react/jsx-runtime");
var checkbox = (0, import_tailwind_variants5.tv)({
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
var Root4 = (0, import_react3.forwardRef)(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Checkbox.Root,
      __spreadValues({
        className: checkbox({
          className: props.className,
          size: props.size,
          color: props.color
        }),
        ref
      }, props)
    );
  }
);
Root4.displayName = "Checkbox.Root";

// src/components/Checkbox/CheckboxIndicator/index.tsx
var Checkbox2 = __toESM(require("@radix-ui/react-checkbox"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var Indicator = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Checkbox2.CheckboxIndicator, __spreadValues({ asChild: true }, props));
};

// src/components/Checkbox/index.tsx
var Checkbox3 = { Root: Root4, Indicator, Check };

// src/components/RadioGroup/RadioGroupRoot/index.tsx
var RadioGroup = __toESM(require("@radix-ui/react-radio-group"));
var import_tailwind_variants6 = require("tailwind-variants");
var import_jsx_runtime14 = require("react/jsx-runtime");
var radio = (0, import_tailwind_variants6.tv)({
  base: "flex flex-col gap-2.5"
});
var RadioGroupRoot = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(RadioGroup.Root, __spreadProps(__spreadValues({}, props), { className: radio({ className }) }));
};

// src/components/RadioGroup/RadioGroupItem/index.tsx
var RadioGroup2 = __toESM(require("@radix-ui/react-radio-group"));
var import_tailwind_variants7 = require("tailwind-variants");
var import_jsx_runtime15 = require("react/jsx-runtime");
var radio2 = (0, import_tailwind_variants7.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(RadioGroup2.Item, __spreadProps(__spreadValues({}, props), { className: radio2({ size, className, color }) }));
};

// src/components/RadioGroup/index.tsx
var RadioGroup3 = { Root: RadioGroupRoot, Item: RadioGroupItem };

// src/components/Tabs/Root/index.tsx
var Tabs = __toESM(require("@radix-ui/react-tabs"));
var import_jsx_runtime16 = require("react/jsx-runtime");
var Root7 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Tabs.Root, __spreadValues({}, props));
};

// src/components/Tabs/List/index.tsx
var Tabs2 = __toESM(require("@radix-ui/react-tabs"));
var import_jsx_runtime17 = require("react/jsx-runtime");
var List2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tabs2.List, __spreadValues({}, props));
};

// src/components/Tabs/Trigger/index.tsx
var Tabs3 = __toESM(require("@radix-ui/react-tabs"));
var import_tailwind_variants8 = require("tailwind-variants");
var import_jsx_runtime18 = require("react/jsx-runtime");
var tab = (0, import_tailwind_variants8.tv)(
  {
    base: ["font-sf-digital font-bold text-neutral-80"],
    variants: {
      variant: {
        solid: 'rounded-md bg-neutral-20 text-sf-lg hover:bg-neutral-40 hover:text-neutral-90 data-[state="active"]:bg-primary-green-50 data-[state="active"]:text-primary-green-500',
        underline: 'text-sf-lg transition-all duration-200 hover:text-neutral-90 data-[state="active"]:border-b-2 data-[state="active"]:border-b-primary-green-500 data-[state="active"]:text-primary-green-500'
      },
      size: {
        base: "px-4 py-2.5",
        lg: "px-10 py-2.5"
      }
    },
    defaultVariants: { variant: "solid", size: "base" }
  },
  {
    twMerge: false
  }
);
var Trigger2 = (_a) => {
  var _b = _a, {
    size,
    variant,
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    Tabs3.Trigger,
    __spreadProps(__spreadValues({}, props), {
      className: tab({
        className,
        variant,
        size
      })
    })
  );
};

// src/components/Tabs/Content/index.tsx
var Tabs4 = __toESM(require("@radix-ui/react-tabs"));
var import_jsx_runtime19 = require("react/jsx-runtime");
var Content2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tabs4.Content, __spreadValues({}, props));
};

// src/components/Tabs/index.tsx
var Tabs5 = { Root: Root7, List: List2, Trigger: Trigger2, Content: Content2 };

// src/components/Toggle/Root/index.tsx
var Switch = __toESM(require("@radix-ui/react-switch"));
var import_tailwind_variants9 = require("tailwind-variants");
var import_jsx_runtime20 = require("react/jsx-runtime");
var toggle = (0, import_tailwind_variants9.tv)(
  {
    base: [
      'flex flex-row items-center rounded-lg p-0.5 data-[state="checked"]:justify-end data-[disabled]:bg-neutral-40 data-[state="checked"]:bg-primary-green-500 data-[state="unchecked"]:bg-neutral-40'
    ],
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11"
      }
    },
    defaultVariants: { size: "md" }
  },
  { twMerge: false }
);
var Root9 = (_a) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Switch.Root, __spreadProps(__spreadValues({}, props), { className: toggle({ className, size }) }));
};

// src/components/Toggle/Control/index.tsx
var import_tailwind_variants10 = require("tailwind-variants");
var Switch2 = __toESM(require("@radix-ui/react-switch"));
var import_jsx_runtime21 = require("react/jsx-runtime");
var toggle2 = (0, import_tailwind_variants10.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Switch2.Thumb, __spreadProps(__spreadValues({}, props), { className: toggle2({ className, size }) }));
};

// src/components/Toggle/index.tsx
var Toggle = { Root: Root9, Control: Control2 };

// src/components/Avatar/Root/index.tsx
var Avatar = __toESM(require("@radix-ui/react-avatar"));
var import_tailwind_variants11 = require("tailwind-variants");
var import_jsx_runtime22 = require("react/jsx-runtime");
var avatar = (0, import_tailwind_variants11.tv)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Avatar.Root, __spreadProps(__spreadValues({}, props), { className: avatar({ size, className }) }));
};

// src/components/Avatar/Image/index.tsx
var Avatar2 = __toESM(require("@radix-ui/react-avatar"));
var import_jsx_runtime23 = require("react/jsx-runtime");
var Image2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    Avatar2.Image,
    __spreadProps(__spreadValues({}, props), {
      className: 'className="h-full object-cover" w-full rounded-[inherit]'
    })
  );
};

// src/components/Avatar/Fallback/index.tsx
var Avatar3 = __toESM(require("@radix-ui/react-avatar"));
var import_jsx_runtime24 = require("react/jsx-runtime");
var Fallback2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Avatar3.Fallback, __spreadValues({}, props));
};

// src/components/Avatar/index.tsx
var Avatar4 = { Root: Root11, Image: Image2, Fallback: Fallback2 };

// src/components/Tooltip/Provider/index.tsx
var Tooltip = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime25 = require("react/jsx-runtime");
var Provider2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Tooltip.Provider, __spreadValues({}, props));
};

// src/components/Tooltip/Root/index.tsx
var Tooltip2 = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime26 = require("react/jsx-runtime");
var Root13 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Tooltip2.Root, __spreadValues({}, props));
};

// src/components/Tooltip/Trigger/index.tsx
var Tooltip3 = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime27 = require("react/jsx-runtime");
var Trigger4 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Tooltip3.Trigger, __spreadValues({}, props));
};

// src/components/Tooltip/Portal/index.tsx
var Tooltip4 = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime28 = require("react/jsx-runtime");
var Portal2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Tooltip4.Portal, __spreadValues({}, props));
};

// src/components/Tooltip/Content/index.tsx
var Tooltip5 = __toESM(require("@radix-ui/react-tooltip"));
var import_tailwind_variants12 = require("tailwind-variants");

// src/components/Tooltip/Context/index.tsx
var import_react4 = require("react");
var TooltipThemeContext = (0, import_react4.createContext)("light");
var useTooltipTheme = () => (0, import_react4.useContext)(TooltipThemeContext);

// src/components/Tooltip/Content/index.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var content = (0, import_tailwind_variants12.tv)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(TooltipThemeContext.Provider, { value: theme || "light", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    Tooltip5.Content,
    __spreadProps(__spreadValues({
      sideOffset: 4
    }, props), {
      className: content({ theme, className })
    })
  ) });
};

// src/components/Tooltip/Arrow/index.tsx
var Tooltip6 = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime30 = require("react/jsx-runtime");
var Arrow2 = (_a) => {
  var props = __objRest(_a, []);
  const theme = useTooltipTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    Tooltip6.Arrow,
    __spreadProps(__spreadValues({}, props), {
      style: { fill: theme === "light" ? "white" : "black" }
    })
  );
};

// src/components/Tooltip/index.tsx
var Tooltip7 = { Provider: Provider2, Root: Root13, Trigger: Trigger4, Portal: Portal2, Content: Content4, Arrow: Arrow2 };

// src/components/Select/Root/index.tsx
var Select = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime31 = require("react/jsx-runtime");
var Root15 = (props) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Select.Root, __spreadValues({}, props));

// src/components/Select/Trigger/index.tsx
var Select2 = __toESM(require("@radix-ui/react-select"));
var import_tailwind_merge4 = require("tailwind-merge");
var import_jsx_runtime32 = require("react/jsx-runtime");
var Trigger6 = (props) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
  Select2.Trigger,
  __spreadProps(__spreadValues({}, props), {
    className: (0, import_tailwind_merge4.twJoin)(
      'flex flex-row items-center justify-between gap-2 rounded-md border border-neutral-50 bg-white px-3.5 py-2.5 text-sf-md leading-none text-neutral-900 focus:outline-none data-[state="open"]:border-primary-green-500 data-[placeholder]:font-sf-digital data-[placeholder]:font-thin data-[placeholder]:text-neutral-500',
      props == null ? void 0 : props.className
    )
  })
);

// src/components/Select/Portal/index.tsx
var Select3 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime33 = require("react/jsx-runtime");
var Portal4 = (props) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Select3.Portal, __spreadValues({}, props));

// src/components/Select/Icon/index.tsx
var Select4 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime34 = require("react/jsx-runtime");
var Icon2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Select4.Icon, __spreadProps(__spreadValues({}, props), { className: "text-neutral-500" }));

// src/components/Select/Value/index.tsx
var Select5 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime35 = require("react/jsx-runtime");
var Value2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Select5.Value, __spreadValues({}, props));

// src/components/Select/Content/index.tsx
var Select6 = __toESM(require("@radix-ui/react-select"));
var import_lucide_react2 = require("lucide-react");
var import_tailwind_merge5 = require("tailwind-merge");
var import_jsx_runtime36 = require("react/jsx-runtime");
var Content6 = (props) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
  Select6.Content,
  __spreadProps(__spreadValues({}, props), {
    className: (0, import_tailwind_merge5.twJoin)(
      "flex max-h-[var(--radix-select-content-available-height)] w-[--radix-select-trigger-width] flex-row rounded-md border border-neutral-40 bg-white drop-shadow-lg",
      props == null ? void 0 : props.className
    ),
    sideOffset: 8,
    align: "center",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Select6.ScrollUpButton, { className: "flex h-[25px] cursor-default items-center justify-center border-b border-neutral-30 text-neutral-900", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_lucide_react2.ChevronUp, { size: "18" }) }),
      props.children,
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Select6.ScrollDownButton, { className: "flex h-[25px] cursor-default items-center justify-center border-t border-neutral-30 text-neutral-900", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_lucide_react2.ChevronDown, { size: "18" }) })
    ]
  })
);

// src/components/Select/Item/index.tsx
var Select7 = __toESM(require("@radix-ui/react-select"));
var import_lucide_react3 = require("lucide-react");
var import_tailwind_merge6 = require("tailwind-merge");
var import_jsx_runtime37 = require("react/jsx-runtime");
var Item3 = (props) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
  Select7.Item,
  __spreadProps(__spreadValues({}, props), {
    className: (0, import_tailwind_merge6.twJoin)(
      'flex flex-row justify-between px-3.5 py-2.5 text-neutral-900 hover:cursor-pointer hover:bg-neutral-10 hover:outline-none focus:outline-none data-[state="checked"]:bg-neutral-20 data-[state="checked"]:outline-none',
      props.className
    ),
    children: [
      props.children,
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Select7.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_react3.Check, { size: 20 }) })
    ]
  })
);

// src/components/Select/Viewport/index.tsx
var Select8 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime38 = require("react/jsx-runtime");
var Viewport2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Select8.Viewport, __spreadValues({}, props));

// src/components/Select/ItemText/index.tsx
var Select9 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime39 = require("react/jsx-runtime");
var ItemText2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Select9.ItemText, __spreadValues({}, props));

// src/components/Select/ItemIndicator/index.tsx
var Select10 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime40 = require("react/jsx-runtime");
var ItemIndicator3 = (props) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Select10.ItemIndicator, __spreadValues({}, props));

// src/components/Select/Separator/index.tsx
var Select11 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime41 = require("react/jsx-runtime");
var Separator2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Select11.Separator, __spreadValues({}, props));

// src/components/Select/Group/index.tsx
var Select12 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime42 = require("react/jsx-runtime");
var Group2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Select12.Group, __spreadValues({}, props));

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
var Dialog = __toESM(require("@radix-ui/react-dialog"));
var Root17 = Dialog.Root;
Root17.displayName = "Modal.Root";

// src/components/Modal/Trigger/index.tsx
var Dialog2 = __toESM(require("@radix-ui/react-dialog"));
var Trigger8 = Dialog2.Trigger;
Trigger8.displayName = "Modal.Trigger";

// src/components/Modal/Portal/index.tsx
var Dialog3 = __toESM(require("@radix-ui/react-dialog"));
var Portal6 = Dialog3.Portal;

// src/components/Modal/Overlay/index.tsx
var Dialog4 = __toESM(require("@radix-ui/react-dialog"));
var Overlay2 = Dialog4.Overlay;

// src/components/Modal/Content/index.tsx
var Dialog5 = __toESM(require("@radix-ui/react-dialog"));
var Content8 = Dialog5.Content;
Content8.displayName = "Modal.Content";

// src/components/Modal/Title/index.tsx
var Dialog6 = __toESM(require("@radix-ui/react-dialog"));
var Title2 = Dialog6.Title;

// src/components/Modal/Description/index.tsx
var Dialog7 = __toESM(require("@radix-ui/react-dialog"));
var Description2 = Dialog7.Description;

// src/components/Modal/Close/index.tsx
var Dialog8 = __toESM(require("@radix-ui/react-dialog"));
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
var DropdownMenu = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_jsx_runtime43 = require("react/jsx-runtime");
var Root19 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DropdownMenu.Root, __spreadValues({}, props));
};

// src/components/DropdownMenu/Trigger/index.tsx
var DropdownMenu2 = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_tailwind_merge7 = require("tailwind-merge");
var import_jsx_runtime44 = require("react/jsx-runtime");
var Trigger10 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    DropdownMenu2.Trigger,
    __spreadProps(__spreadValues({}, props), {
      className: (0, import_tailwind_merge7.twMerge)(
        "text-neutral-500 hover:cursor-pointer hover:text-neutral-700",
        props.className
      )
    })
  );
};

// src/components/DropdownMenu/Portal/index.tsx
var DropdownMenu3 = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_jsx_runtime45 = require("react/jsx-runtime");
var Portal8 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(DropdownMenu3.Portal, __spreadValues({}, props));
};

// src/components/DropdownMenu/Item/index.tsx
var DropdownMenu4 = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_tailwind_merge8 = require("tailwind-merge");
var import_jsx_runtime46 = require("react/jsx-runtime");
var Item5 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    DropdownMenu4.Item,
    __spreadProps(__spreadValues({}, props), {
      className: (0, import_tailwind_merge8.twMerge)(
        props.className,
        "flex flex-row items-center gap-3 py-2 pl-4 pr-12 outline-none hover:cursor-pointer hover:bg-neutral-20"
      )
    })
  );
};

// src/components/DropdownMenu/Content/index.tsx
var DropdownMenu5 = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_tailwind_merge9 = require("tailwind-merge");
var import_jsx_runtime47 = require("react/jsx-runtime");
var Content10 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    DropdownMenu5.Content,
    __spreadProps(__spreadValues({}, props), {
      className: (0, import_tailwind_merge9.twMerge)(
        "overflow-hidden rounded-md border border-neutral-40 bg-white",
        props.className
      )
    })
  );
};

// src/components/DropdownMenu/Divider/index.tsx
var import_tailwind_merge10 = require("tailwind-merge");
var import_jsx_runtime48 = require("react/jsx-runtime");
var Divider = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    "div",
    {
      className: (0, import_tailwind_merge10.twMerge)(
        props.className,
        "flex h-[1px] flex-row bg-neutral-40"
      )
    }
  );
};

// src/components/DropdownMenu/index.tsx
var DropdownMenu6 = { Root: Root19, Trigger: Trigger10, Portal: Portal8, Content: Content10, Item: Item5, Divider };

// src/components/Popover/Root/index.tsx
var Popover = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime49 = require("react/jsx-runtime");
var Root21 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Popover.Root, __spreadValues({}, props));
};

// src/components/Popover/Trigger/index.tsx
var Popover2 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime50 = require("react/jsx-runtime");
var Trigger12 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Popover2.Trigger, __spreadValues({}, props));
};

// src/components/Popover/Portal/index.tsx
var Popover3 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime51 = require("react/jsx-runtime");
var Portal10 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Popover3.Portal, __spreadValues({}, props));
};

// src/components/Popover/Content/index.tsx
var Popover4 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime52 = require("react/jsx-runtime");
var Content12 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Popover4.Content, __spreadValues({}, props));
};

// src/components/Popover/Anchor/index.tsx
var Popover5 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime53 = require("react/jsx-runtime");
var Anchor2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Popover5.Anchor, __spreadValues({}, props));
};

// src/components/Popover/Close/index.tsx
var Popover6 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime54 = require("react/jsx-runtime");
var Close4 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Popover6.Close, __spreadValues({}, props));
};

// src/components/Popover/Arrow/index.tsx
var Popover7 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime55 = require("react/jsx-runtime");
var Arrow4 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Popover7.Arrow, __spreadValues({}, props));
};

// src/components/Popover/index.tsx
var Popover8 = { Root: Root21, Trigger: Trigger12, Portal: Portal10, Content: Content12, Anchor: Anchor2, Close: Close4, Arrow: Arrow4 };

// src/components/TextArea/Root/index.tsx
var import_react5 = require("react");
var import_tailwind_variants13 = require("tailwind-variants");
var import_jsx_runtime56 = require("react/jsx-runtime");
var input2 = (0, import_tailwind_variants13.tv)(
  {
    base: [
      "flex w-128 h-32 flex-row items-center justify-between rounded-md border border-neutral-50 bg-white font-sf-heading text-neutral-80",
      "border "
    ],
    variants: {
      size: {
        sm: "px-4 py-2.5 text-sf-sm",
        md: "px-4 py-2.5 text-sf-md",
        lg: "px-4 py-2.5 text-sf-lg"
      },
      disabled: {
        true: "border border-neutral-40 bg-neutral-10 text-neutral-300",
        false: ""
      },
      error: {
        true: "border border-error-200 focus-within:ring-error-100 focus-within:ring-2",
        false: "border focus-within:border-primary-green-200 focus-within:ring-green-100 focus-within:ring-2"
      }
    }
  },
  { twMerge: true }
);
var TextAreaContext = (0, import_react5.createContext)({});
var Root22 = (_a) => {
  var _b = _a, {
    size = "sm",
    disabled = false,
    error = false,
    className
  } = _b, props = __objRest(_b, [
    "size",
    "disabled",
    "error",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(TextAreaContext.Provider, { value: { size, disabled }, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: input2({
        className,
        disabled,
        size,
        error
      })
    })
  ) });
};
var useTextArea = () => (0, import_react5.useContext)(TextAreaContext);

// src/components/TextArea/Control/index.tsx
var import_tailwind_merge11 = require("tailwind-merge");
var import_jsx_runtime57 = require("react/jsx-runtime");
var Control3 = (_a) => {
  var props = __objRest(_a, []);
  const { disabled, size } = useTextArea();
  const sizeClasses = {
    sm: "px-4 py-2.5 text-sf-sm",
    md: "px-4 py-2.5 text-sf-md",
    lg: "px-4 py-2.5 text-sf-lg"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    "textarea",
    __spreadProps(__spreadValues({}, props), {
      disabled,
      className: (0, import_tailwind_merge11.twJoin)(
        props.className,
        "placeholder:font-sf-heading h-full w-full resize-none border-transparent text-black outline-none disabled:bg-neutral-10 disabled:text-neutral-300",
        sizeClasses[size]
      )
    })
  );
};

// src/components/TextArea/index.tsx
var TextArea = { Root: Root22, Control: Control3 };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Box,
  Button,
  Checkbox,
  DropdownMenu,
  Heading,
  Modal,
  Popover,
  RadioGroup,
  Select,
  Tabs,
  Text,
  TextArea,
  TextInput,
  Toggle,
  Tooltip
});

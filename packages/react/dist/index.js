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
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox3,
  Heading: () => Heading,
  RadioGroup: () => RadioGroup3,
  Tabs: () => Tabs5,
  Text: () => Text,
  TextInput: () => TextInput
});
module.exports = __toCommonJS(src_exports);

// src/components/Box/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Box = (_a) => {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      className: "border-gray600 bg-gray800 rounded-md border p-4"
    })
  );
};

// src/components/Text/index.tsx
var import_tailwind_variants = require("tailwind-variants");
var import_jsx_runtime2 = require("react/jsx-runtime");
var text = (0, import_tailwind_variants.tv)(
  {
    base: ["font-sf-body leading-tight"],
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
var heading = (0, import_tailwind_variants2.tv)({
  base: ["font-sf-heading leading-tight"],
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
});
var Heading = (_a) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", __spreadProps(__spreadValues({}, props), { className: heading({ size, className }) }));
};

// src/components/Button/ButtonRoot/index.tsx
var import_tailwind_variants3 = require("tailwind-variants");
var import_jsx_runtime4 = require("react/jsx-runtime");
var button = (0, import_tailwind_variants3.tv)(
  {
    base: [
      "font-heading align-center flex  items-center gap-1 rounded-md font-semibold transition duration-150",
      "disabled:bg-neutral-40 disabled:text-neutral-50"
    ],
    variants: {
      variant: {
        primary: [
          "bg-primary-green-500 text-white",
          "hover:bg-primary-green-700",
          "active:bg-primary-green-800"
        ],
        secondary: [
          "border-xs border border-primary-green-500 bg-white text-primary-green-500",
          "hover:border-primary-green-700 hover:bg-primary-green-50 hover:text-primary-green-700",
          "active:border-primary-green-800 active:text-primary-green-800"
        ],
        success: [
          "bg-success-500 text-white",
          "hover:bg-success-700",
          "active:bg-success-800"
        ],
        warning: [
          "bg-warning-500 text-white",
          "hover:bg-warning-700",
          "active:bg-warning-800"
        ],
        error: [
          "bg-error-500 text-white",
          "hover:bg-error-700",
          "active:bg-error-800"
        ]
      },
      size: {
        sm: "px-6 py-2 text-sf-sm",
        md: "px-6 py-2.5 text-sf-md",
        lg: "px-8 py-4 text-sf-lg"
      }
    }
  },
  {
    twMerge: false
  }
);
var Root = (_a) => {
  var _b = _a, {
    variant,
    className,
    size
  } = _b, props = __objRest(_b, [
    "variant",
    "className",
    "size"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "button",
    __spreadProps(__spreadValues({}, props), {
      className: button({
        variant,
        size,
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
      "flex w-60 flex-row items-center justify-between rounded-md border border-neutral-50 bg-white font-sf-heading text-neutral-80",
      "focus-within:border focus-within:border-primary-green-500"
    ],
    variants: {
      size: {
        sm: "px-4 py-2.5 text-sf-sm",
        md: "px-4 py-2.5 text-sf-md",
        lg: "px-5 py-3.5 text-sf-lg"
      },
      disabled: {
        true: "border-none bg-neutral-40",
        false: ""
      }
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
var import_tailwind_merge = require("tailwind-merge");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Control = (_a) => {
  var props = __objRest(_a, []);
  const { disabled } = useTextInput();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "input",
    __spreadProps(__spreadValues({}, props), {
      disabled,
      className: (0, import_tailwind_merge.twJoin)(
        props.className,
        "w-full border-transparent text-black outline-none placeholder:font-sf-heading disabled:bg-neutral-40 disabled:text-neutral-50"
      )
    })
  );
};

// src/components/TextInput/Prefix/index.tsx
var import_tailwind_merge2 = require("tailwind-merge");
var import_jsx_runtime9 = require("react/jsx-runtime");
var sizePaddings = {
  sm: "pr-2",
  md: "pr-2.5",
  lg: "pr-3.5"
};
var Prefix2 = (props) => {
  const { size } = useTextInput();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", __spreadProps(__spreadValues({}, props), { className: (0, import_tailwind_merge2.twJoin)(props.className, sizePaddings[size]) }));
};

// src/components/TextInput/Suffix/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var Suffix2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", __spreadValues({}, props));
};

// src/components/TextInput/index.tsx
var TextInput = { Root: Root2, Control, Prefix: Prefix2, Suffix: Suffix2 };

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = require("react");

// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react2.forwardRef)(
    (_a, ref) => {
      var _b = _a, { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children } = _b, rest = __objRest(_b, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children"]);
      return (0, import_react2.createElement)(
        "svg",
        __spreadValues(__spreadProps(__spreadValues({
          ref
        }, defaultAttributes), {
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" ")
        }), rest),
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react2.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// ../../node_modules/lucide-react/dist/esm/icons/check.js
var Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

// src/components/Checkbox/Check/index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var Check2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Check, __spreadProps(__spreadValues({}, props), { color: "white" }));
};

// src/components/Checkbox/CheckboxRoot/index.tsx
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var import_tailwind_variants5 = require("tailwind-variants");
var import_jsx_runtime12 = require("react/jsx-runtime");
var checkbox = (0, import_tailwind_variants5.tv)(
  {
    base: [
      "border-xs flex h-5 w-5 items-center justify-center rounded-xs border border-neutral-50",
      'data-[state="checked"]:border-transparent data-[state="checked"]:bg-primary-green-500'
    ],
    variants: {
      size: {
        sm: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-8 w-8"
      }
    }
  },
  { twMerge: false }
);
var Root4 = (_a) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Checkbox.Root, __spreadValues({ className: checkbox({ className, size }) }, props));
};

// src/components/Checkbox/CheckboxIndicator/index.tsx
var Checkbox2 = __toESM(require("@radix-ui/react-checkbox"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var Indicator = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Checkbox2.CheckboxIndicator, __spreadValues({ asChild: true }, props));
};

// src/components/Checkbox/index.tsx
var Checkbox3 = { Root: Root4, Indicator, Check: Check2 };

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
var radio2 = (0, import_tailwind_variants7.tv)(
  {
    base: [
      "rounded-full border border-neutral-50 bg-white",
      ' data-[state="checked"]:border-primary-green-500'
    ],
    variants: {
      size: {
        sm: 'data-[state="checked"]:border-6 h-5 w-5',
        md: 'h-6 w-6 data-[state="checked"]:border-8',
        lg: 'data-[state="checked"]:border-10 h-8 w-8'
      }
    }
  },
  { twMerge: false }
);
var RadioGroupItem = (_a) => {
  var _b = _a, {
    className,
    size = "sm"
  } = _b, props = __objRest(_b, [
    "className",
    "size"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(RadioGroup2.Item, __spreadProps(__spreadValues({}, props), { className: radio2({ size, className }) }));
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
    base: [" font-sf-neutral font-bold text-neutral-80"],
    variants: {
      variant: {
        solid: ' rounded-md bg-neutral-20 text-sf-lg hover:bg-neutral-40 hover:text-neutral-90 data-[state="active"]:bg-primary-green-50 data-[state="active"]:text-primary-green-500',
        underline: ' border-b border-b-neutral-30 text-sf-lg hover:border-b-neutral-90 hover:text-neutral-90 data-[state="active"]:border-b-primary-green-500 data-[state="active"]:text-primary-green-500'
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Box,
  Button,
  Checkbox,
  Heading,
  RadioGroup,
  Tabs,
  Text,
  TextInput
});
/*! Bundled license information:

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.320.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.320.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.320.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.320.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

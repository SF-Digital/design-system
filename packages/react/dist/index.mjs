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
import { jsx } from "react/jsx-runtime";
var Box = (_a) => {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      className: "border-gray600 bg-gray800 rounded-md border p-4"
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
var heading = tv2({
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
});
var Heading = (_a) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ jsx3("h1", __spreadProps(__spreadValues({}, props), { className: heading({ size, className }) }));
};

// src/components/Button/ButtonRoot/index.tsx
import { tv as tv3 } from "tailwind-variants";
import { jsx as jsx4 } from "react/jsx-runtime";
var button = tv3(
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
  return /* @__PURE__ */ jsx4(
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
      "flex w-60 flex-row items-center justify-between rounded-md border border-neutral-50 bg-white font-sf-digital text-neutral-80",
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
var TextInputContext = createContext({});
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
  return /* @__PURE__ */ jsx7(TextInputContext.Provider, { value: { size, disabled }, children: /* @__PURE__ */ jsx7(
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
var useTextInput = () => useContext(TextInputContext);

// src/components/TextInput/Control/index.tsx
import { twJoin } from "tailwind-merge";
import { jsx as jsx8 } from "react/jsx-runtime";
var Control = (_a) => {
  var props = __objRest(_a, []);
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

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
import { forwardRef, createElement } from "react";

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
  const Component = forwardRef(
    (_a, ref) => {
      var _b = _a, {
        color = "currentColor",
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        className = "",
        children
      } = _b, rest = __objRest(_b, [
        "color",
        "size",
        "strokeWidth",
        "absoluteStrokeWidth",
        "className",
        "children"
      ]);
      return createElement(
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
          ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
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
import { jsx as jsx11 } from "react/jsx-runtime";
var Check2 = (props) => {
  return /* @__PURE__ */ jsx11(Check, __spreadProps(__spreadValues({}, props), { color: "white" }));
};

// src/components/Checkbox/CheckboxRoot/index.tsx
import * as Checkbox from "@radix-ui/react-checkbox";
import { tv as tv5 } from "tailwind-variants";
import { jsx as jsx12 } from "react/jsx-runtime";
var checkbox = tv5(
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
  return /* @__PURE__ */ jsx12(Checkbox.Root, __spreadValues({ className: checkbox({ className, size }) }, props));
};

// src/components/Checkbox/CheckboxIndicator/index.tsx
import * as Checkbox2 from "@radix-ui/react-checkbox";
import { jsx as jsx13 } from "react/jsx-runtime";
var Indicator = (props) => {
  return /* @__PURE__ */ jsx13(Checkbox2.CheckboxIndicator, __spreadValues({ asChild: true }, props));
};

// src/components/Checkbox/index.tsx
var Checkbox3 = { Root: Root4, Indicator, Check: Check2 };

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
var radio2 = tv7(
  {
    base: [
      "rounded-full border border-neutral-50 bg-white",
      ' data-[state="checked"]:border-primary-green-500'
    ],
    variants: {
      size: {
        sm: 'h-5 w-5 data-[state="checked"]:border-6',
        md: 'h-6 w-6 data-[state="checked"]:border-8',
        lg: 'h-8 w-8 data-[state="checked"]:border-10'
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
  return /* @__PURE__ */ jsx15(RadioGroup2.Item, __spreadProps(__spreadValues({}, props), { className: radio2({ size, className }) }));
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
    base: [" font-sf-digital font-bold text-neutral-80"],
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
  return /* @__PURE__ */ jsx18(
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
import * as Tabs4 from "@radix-ui/react-tabs";
import { jsx as jsx19 } from "react/jsx-runtime";
var Content2 = (props) => {
  return /* @__PURE__ */ jsx19(Tabs4.Content, __spreadValues({}, props));
};

// src/components/Tabs/index.tsx
var Tabs5 = { Root: Root7, List: List2, Trigger: Trigger2, Content: Content2 };

// src/components/Toggle/Root/index.tsx
import * as Toggle from "@radix-ui/react-toggle";
import { tv as tv9 } from "tailwind-variants";
import { jsx as jsx20 } from "react/jsx-runtime";
var toggle = tv9(
  {
    base: [
      'group flex flex-row items-center rounded-lg p-0.5 data-[state="on"]:justify-end data-[disabled]:bg-neutral-40 data-[state="off"]:bg-neutral-40 data-[state="on"]:bg-primary-green-500'
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
  return /* @__PURE__ */ jsx20(Toggle.Root, __spreadProps(__spreadValues({}, props), { className: toggle({ className, size }) }));
};

// src/components/Toggle/Control/index.tsx
import { tv as tv10 } from "tailwind-variants";
import { jsx as jsx21 } from "react/jsx-runtime";
var toggle2 = tv10({
  base: [
    "rounded-lg bg-white drop-shadow-sm  group-data-[disabled]:bg-neutral-20"
  ],
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5"
    }
  }
});
var Control2 = (_a) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ jsx21("div", __spreadProps(__spreadValues({}, props), { className: toggle2({ className, size }) }));
};

// src/components/Toggle/index.tsx
var Toggle2 = { Root: Root9, Control: Control2 };

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
    defaultVariants: { size: "lg" }
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
      className: '  className="h-full object-cover" w-full rounded-[inherit]'
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
import { jsx as jsx29 } from "react/jsx-runtime";
var content = tv12(
  {
    base: [
      "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade max-w-80 select-none  rounded-md px-3 py-2 text-sf-xs leading-none"
    ],
    variants: {
      theme: {
        // TODO: confirm colors
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
  return /* @__PURE__ */ jsx29(Tooltip5.Content, __spreadProps(__spreadValues({}, props), { className: content({ theme, className }) }));
};

// src/components/Tooltip/Arrow/index.tsx
import * as Tooltip6 from "@radix-ui/react-tooltip";
import { jsx as jsx30 } from "react/jsx-runtime";
var Arrow2 = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx30(Tooltip6.Arrow, __spreadValues({}, props));
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
import { jsx as jsx32 } from "react/jsx-runtime";
var Trigger6 = (props) => /* @__PURE__ */ jsx32(
  Select2.Trigger,
  __spreadProps(__spreadValues({}, props), {
    className: twJoin3(
      'flex flex-row items-center justify-between gap-2 rounded-md border border-neutral-50 bg-white px-3.5 py-2.5 text-sf-md leading-none text-neutral-900 focus:outline-none data-[state="open"]:border-primary-green-500 data-[placeholder]:font-sf-digital data-[placeholder]:font-thin data-[placeholder]:text-neutral-500',
      props == null ? void 0 : props.className
    )
  })
);

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
import { twJoin as twJoin4 } from "tailwind-merge";
import { jsx as jsx36 } from "react/jsx-runtime";
var Content6 = (props) => /* @__PURE__ */ jsx36(
  Select6.Content,
  __spreadProps(__spreadValues({}, props), {
    className: twJoin4(
      "flex flex-row rounded-md border border-neutral-40 bg-white drop-shadow-lg",
      props == null ? void 0 : props.className
    ),
    align: "center"
  })
);

// src/components/Select/Item/index.tsx
import * as Select7 from "@radix-ui/react-select";
import { twJoin as twJoin5 } from "tailwind-merge";
import { jsx as jsx37 } from "react/jsx-runtime";
var Item3 = (props) => /* @__PURE__ */ jsx37(
  Select7.Item,
  __spreadProps(__spreadValues({}, props), {
    className: twJoin5(
      'flex flex-row justify-between px-3.5 py-2.5 text-neutral-900 hover:outline-none focus:outline-none data-[state="checked"]:bg-neutral-20 data-[state="checked"]:outline-none',
      props.className
    )
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
var ItemIndicator2 = (props) => /* @__PURE__ */ jsx40(Select10.ItemIndicator, __spreadValues({}, props));

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
  ItemIndicator: ItemIndicator2,
  Separator: Separator2,
  Group: Group2
};
export {
  Avatar4 as Avatar,
  Box,
  Button,
  Checkbox3 as Checkbox,
  Heading,
  RadioGroup3 as RadioGroup,
  Select13 as Select,
  Tabs5 as Tabs,
  Text,
  TextInput,
  Toggle2 as Toggle,
  Tooltip7 as Tooltip
};
/*! Bundled license information:

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.341.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.341.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.341.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.341.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
